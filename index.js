import TelegramBot from "node-telegram-bot-api";
import OpenAI from "openai";

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userText = msg.text;

  if (!userText) return;

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: `You are a helpful Telegram assistant.\nUser: ${userText}`,
  });

  bot.sendMessage(chatId, response.output_text);
});
