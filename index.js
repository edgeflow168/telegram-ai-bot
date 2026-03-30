import TelegramBot from "node-telegram-bot-api";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const bot = new TelegramBot(TELEGRAM_TOKEN, {
  polling: true,
});

bot.on("polling_error", (error) => {
  console.error("Polling error:", error.message);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userText = msg.text?.trim();

  if (!userText) return;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful Telegram assistant. Reply briefly and clearly.\n\nUser: ${userText}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini response:", JSON.stringify(data));

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I could not generate a reply.";

    await bot.sendMessage(chatId, reply);
  } catch (error) {
    console.error("Message handler error:", error);
    await bot.sendMessage(chatId, "Something went wrong. Please try again.");
  }
});
