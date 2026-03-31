import TelegramBot from "node-telegram-bot-api";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TELEGRAM_TOKEN, {
  polling: true,
});

const KNOWLEDGE = [
  {
    id: "overview_now",
    triggers: ["what is $now", "what is now", "now token", "$now", "network of work"],
    replies: [
      "$NOW is the core token of Bounty Temple. It powers the ecosystem and connects staking, utilities, and access to $TYT.",
      "$NOW is basically the core token behind the Bounty Temple ecosystem. It’s central to staking, rewards, and broader utility.",
      "$NOW is the main token in the ecosystem. It plays a key role in staking, rewards flow, and access to other parts like $TYT."
    ]
  },
  {
    id: "all_in_x",
    triggers: ["allinx", "what is allinx"],
    replies: [
      "All In X is the DeCeFi platform powering the ecosystem, including staking, OTC activity, and network growth.",
      "All In X is the platform layer behind a lot of the ecosystem mechanics like staking and OTC expansion.",
      "You can think of All In X as the DeCeFi engine supporting the ecosystem’s staking and growth structure."
    ]
  },
  {
    id: "tyt",
    triggers: ["how to get tyt", "how do i get tyt", "get $tyt", "$tyt", "tyt presale"],
    replies: [
      "There’s no direct $TYT presale. The main path described is through $NOW participation and then burning released $NOW for $TYT.",
      "$TYT isn’t sold through a direct presale based on the whitepaper. It’s accessed through the $NOW path.",
      "From the whitepaper, $TYT is mainly accessed by participating with $NOW first, then using the burn mechanism."
    ]
  },
  {
    id: "burn_now_get_tyt",
    triggers: ["burn now get tyt", "burn $now", "burn now"],
    replies: [
      "The mechanism is Burn $NOW, Get $TYT. Released $NOW can be burned to access $TYT at an early rate.",
      "Yep, the model shown is Burn $NOW, Get $TYT. That’s one of the key ecosystem mechanics.",
      "The whitepaper describes a Burn $NOW, Get $TYT mechanism to support $NOW deflation and deeper participation."
    ]
  },
  {
    id: "supply",
    triggers: ["total supply", "supply", "how many now", "1 billion"],
    replies: [
      "Total supply of $NOW is 1 billion, and it’s on BEP-20.",
      "$NOW has a total supply of 1 billion on the BEP-20 network.",
      "The whitepaper shows a 1 billion total supply for $NOW on BEP-20."
    ]
  },
  {
    id: "tokenomics",
    triggers: ["tokenomics", "allocation", "distribution", "vesting"],
    replies: [
      "$NOW has a 1B supply. The allocation includes staking rewards, GIA security pool, TYT liquidity, marketing, and management.",
      "Tokenomics wise, the 1B supply is split across staking rewards, the GIA security pool, TYT liquidity, marketing, and management.",
      "The main tokenomics split shown is 40% staking rewards, 30% GIA security pool, 10% TYT liquidity, 10% marketing, and 10% management."
    ]
  },
  {
    id: "presale",
    triggers: ["presale", "pre sale", "pre-sale", "tge", "price"],
    replies: [
      "The key prices shown are $0.10 for pre-sale and $1.00 for TGE, with OTC stages after that.",
      "From the whitepaper, pre-sale is listed at $0.10 and TGE at $1.00, followed by staged OTC pricing.",
      "The pricing shown starts at $0.10 for pre-sale, then $1.00 at TGE, then later OTC stages."
    ]
  },
  {
    id: "staking",
    triggers: ["staking", "stake", "$now + $ant", "$ant staking"],
    replies: [
      "Users can stake $NOW + $ANT to earn APY and unlock additional ecosystem benefits.",
      "The staking model is based on dual-token staking with $NOW + $ANT.",
      "Staking in the whitepaper centers around $NOW + $ANT, with APY and extra allocation benefits tied to it."
    ]
  },
  {
    id: "staking_duration",
    triggers: ["180 days", "360 days", "540 days", "multiplier", "staking duration"],
    replies: [
      "The durations shown are 180, 360, and 540 days, with allocation multipliers of 1:1, 1:2, and 1:5 respectively.",
      "Based on the whitepaper, 180 days gives 1:1, 360 days gives 1:2, and 540 days gives 1:5.",
      "The longer the staking duration, the higher the multiplier. It goes from 1:1 to 1:5 across the listed durations."
    ]
  },
  {
    id: "apy",
    triggers: ["apy", "yield", "returns", "monthly return"],
    replies: [
      "The whitepaper describes expected monthly returns of around 10% to 15%, with compounding supported by rebase.",
      "APY is described at around 10% to 15% monthly in the materials shown.",
      "From the whitepaper, the expected monthly return range is around 10% to 15%."
    ]
  },
  {
    id: "rebase",
    triggers: ["rebase", "12 hours", "twice daily"],
    replies: [
      "Rebase is described as happening twice daily, every 12 hours.",
      "The system rebase cycle is shown as every 12 hours.",
      "From what’s shown, rebase happens two times a day."
    ]
  },
  {
    id: "referral",
    triggers: ["referral", "invite", "active account", "ref reward"],
    replies: [
      "The referral system rewards users for bringing in Active Accounts, which are defined as accounts with at least 100 USDT equivalent staking.",
      "Referral rewards are tied to Active Accounts and scale as more qualified referrals are added.",
      "Based on the whitepaper, referral rewards expand as you bring in more Active Accounts."
    ]
  },
  {
    id: "dao",
    triggers: ["dao", "governance", "dao reward"],
    replies: [
      "The DAO side is tied to community contribution and development, with reward distributions described as happening twice daily.",
      "DAO rewards are connected to community performance and contribution metrics in the whitepaper.",
      "The governance model includes DAO-linked reward sharing based on community development and participation."
    ]
  },
  {
    id: "partner",
    triggers: ["partner", "nexus partner", "p0", "p1", "p2", "p3", "p4", "p5", "p6", "p7"],
    replies: [
      "The Nexus Partner mechanism starts from a new 540-day $NOW + $ANT stake worth at least 5,000 USDT.",
      "Partner qualification is based on a long-term $NOW + $ANT stake, starting from 5,000 USDT over 540 days.",
      "From the whitepaper, partner status begins with a qualified 540-day dual-token staking position."
    ]
  },
  {
    id: "safety",
    triggers: ["private key", "seed phrase", "password", "wallet recovery"],
    replies: [
      "Just a quick safety reminder — never share your private key, seed phrase, or password with anyone.",
      "Please stay careful with security. Never give anyone your seed phrase or private key.",
      "For safety, never share private keys, seed phrases, or passwords."
    ]
  }
];

const GREETINGS = {
  morning: [
    "gm 😊 hope your day starts strong",
    "good morning ☀️ hope you’re doing well today",
    "gm gm ✨ wishing you a smooth day ahead"
  ],
  general: [
    "hey 👋 welcome in",
    "hello there 😊 good to see you here",
    "hey hey 👋 hope you’re doing well"
  ],
  night: [
    "good night 🌙 rest well",
    "gn ✨ hope you get a good rest",
    "good night 😊 take it easy"
  ],
  thanks: [
    "you’re welcome 😊",
    "no worries at all 👌",
    "happy to help",
    "anytime ✨"
  ]
};

function normalize(text) {
  return text.toLowerCase().trim();
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getGreetingReply(msg) {
  if (msg.includes("good morning") || msg === "gm" || msg.includes(" gm") || msg.includes("morning")) {
    return pickRandom(GREETINGS.morning);
  }

  if (msg.includes("good night") || msg === "gn" || msg.includes(" gn")) {
    return pickRandom(GREETINGS.night);
  }

  if (
    msg === "hi" ||
    msg === "hello" ||
    msg === "hey" ||
    msg.includes("hello") ||
    msg.includes("hey there")
  ) {
    return pickRandom(GREETINGS.general);
  }

  if (msg.includes("thank you") || msg === "thanks" || msg.includes("thx")) {
    return pickRandom(GREETINGS.thanks);
  }

  return null;
}

function scoreMatch(message, triggers) {
  let score = 0;

  for (const trigger of triggers) {
    const t = normalize(trigger);

    if (message === t) score += 8;
    else if (message.startsWith(t)) score += 5;
    else if (message.includes(t)) score += 3;
  }

  return score;
}

function softenReply(reply) {
  const endings = [
    "",
    "",
    "",
    " Let me know if you want the detailed version.",
    " I can break it down more if you want.",
    " Happy to explain that further too."
  ];

  return reply + pickRandom(endings);
}

function getKnowledgeReply(text) {
  const msg = normalize(text);

  let best = null;
  let bestScore = 0;

  for (const item of KNOWLEDGE) {
    const score = scoreMatch(msg, item.triggers);
    if (score > bestScore) {
      bestScore = score;
      best = item;
    }
  }

  if (best && bestScore > 0) {
    return softenReply(pickRandom(best.replies));
  }

  if (msg.includes("?")) {
    return "I’m not fully sure on that from the whitepaper I have so far. You may want to check the latest docs or confirm with the team.";
  }

  return null;
}

function shouldRespond(text) {
  const msg = normalize(text);

  const broadTriggers = [
    "gm",
    "good morning",
    "good night",
    "hello",
    "hi",
    "hey",
    "thanks",
    "thank you",
    "$now",
    "now",
    "$tyt",
    "tyt",
    "$gia",
    "gia",
    "$ant",
    "ant",
    "staking",
    "apy",
    "tokenomics",
    "presale",
    "pre sale",
    "tge",
    "dao",
    "referral",
    "partner",
    "vesting",
    "otc",
    "whitepaper",
    "all in x",
    "?"
  ];

  return broadTriggers.some((word) => msg.includes(word));
}

function randomDelay() {
  return Math.floor(Math.random() * 15000) + 5000; // 5 to 20 sec
}

bot.on("polling_error", (error) => {
  console.log("Polling error:", error.message);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text) return;
  if (!shouldRespond(text)) return;

  const normalized = normalize(text);

  let reply = getGreetingReply(normalized);

  if (!reply) {
    reply = getKnowledgeReply(normalized);
  }

  if (!reply) return;

  setTimeout(() => {
    bot.sendMessage(chatId, reply, {
      reply_to_message_id: msg.message_id,
    });
  }, randomDelay());
});
