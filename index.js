import TelegramBot from "node-telegram-bot-api";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TELEGRAM_TOKEN, {
  polling: true,
});

// 🧠 simple brain (rule-based)
function getReply(text) {
  const msg = text.toLowerCase();

  // ===== GREETINGS =====
  if (msg.includes("gm") || msg.includes("good morning")) {
    return "gm 😊 hope you have a great day ahead";
  }

  if (msg.includes("gn") || msg.includes("good night")) {
    return "good night 🌙 rest well!";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey")) {
    return "hey 👋 welcome to the community!";
  }

  // ===== PROJECT BASIC =====
  if (msg.includes("what is $now") || msg.includes("now token")) {
    return "$NOW is the core token of Bounty Temple. it powers staking, rewards, and access to $TYT.";
  }

  if (msg.includes("supply")) {
    return "total supply of $NOW is 1 billion on BEP-20.";
  }

  if (msg.includes("all in x")) {
    return "All In X is the DeCeFi platform powering the ecosystem with staking, OTC deals and network growth.";
  }

  // ===== TOKENS =====
  if (msg.includes("tyt")) {
    return "there’s no direct presale for $TYT. you can get it by participating with $NOW and burning it.";
  }

  if (msg.includes("gia")) {
    return "$GIA helps stabilize the ecosystem and works together with $NOW and $TYT in the value loop.";
  }

  if (msg.includes("ant")) {
    return "$ANT is used together with $NOW in staking to earn APY and unlock allocation benefits.";
  }

  // ===== STAKING =====
  if (msg.includes("staking")) {
    return "you can stake $NOW + $ANT to earn APY and unlock higher allocation depending on duration (180, 360, 540 days).";
  }

  if (msg.includes("apy")) {
    return "expected returns are around 10%–15% monthly with compounding via rebase.";
  }

  if (msg.includes("rebase")) {
    return "rebase happens twice daily (every 12 hours) to compound rewards faster.";
  }

  // ===== TOKENOMICS =====
  if (msg.includes("tokenomics")) {
    return "$NOW has 1B supply with allocations for staking rewards, security pool, liquidity, marketing and team.";
  }

  if (msg.includes("presale") || msg.includes("pre sale")) {
    return "pre-sale price is $0.10 and TGE is $1.00 with staged OTC growth after.";
  }

  // ===== DAO / REFERRAL =====
  if (msg.includes("referral")) {
    return "you can earn rewards by referring active users. more referrals unlock higher reward tiers.";
  }

  if (msg.includes("dao")) {
    return "DAO rewards are distributed twice daily based on community contribution and network performance.";
  }

  // ===== FALLBACK =====
  return null;
}

// 🎯 decide when to reply
function shouldRespond(text) {
  const msg = text.toLowerCase();

  const keywords = [
    "gm",
    "hello",
    "hi",
    "hey",
    "now",
    "$now",
    "tyt",
    "gia",
    "ant",
    "staking",
    "apy",
    "tokenomics",
    "presale",
    "dao",
    "referral",
  ];

  return keywords.some((k) => msg.includes(k));
}

// ⏱ human delay
function randomDelay() {
  return Math.floor(Math.random() * 30000) + 10000; // 10–40 sec
}

// 🚨 error handler
bot.on("polling_error", (error) => {
  console.log(error);
});

// 💬 main handler
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text) return;
  if (!shouldRespond(text)) return;

  const reply = getReply(text);
  if (!reply) return;

  setTimeout(() => {
    bot.sendMessage(chatId, reply, {
      reply_to_message_id: msg.message_id,
    });
  }, randomDelay());
});
