import TelegramBot from "node-telegram-bot-api";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;

const bot = new TelegramBot(TELEGRAM_TOKEN, {
  polling: true,
});

// =========================
// PERSONA
// =========================
const PERSONA = {
  name: "Miracle",
  typoChance: 0.05,
  correctionChance: 0.9,
  lowercaseStartChance: 0.25,
};

// =========================
// SETTINGS
// =========================
const GROUP_GREETING_REPLY_CHANCE = 0.45;
const GROUP_KNOWLEDGE_REPLY_CHANCE = 0.85;
const DM_ALWAYS_REPLY = true;
const NAME_MENTION_CHANCE = 0.3;

// Working hours: 8 AM to 11 PM
function isWithinWorkingHours() {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 8 && hour < 23;
}

// =========================
// KNOWLEDGE BASE
// =========================
const KNOWLEDGE = [
  {
    id: "overview_now",
    triggers: [
      "what is $now",
      "what is now",
      "whats now",
      "what's now",
      "now token",
      "$now token",
      "network of work",
      "tell me about now",
      "explain now"
    ],
    replies: {
      warm: [
        "$NOW is the core token of Bounty Temple. It powers the ecosystem and connects staking, utilities, and access to $TYT",
        "$NOW is basically the main token in the Bounty Temple ecosystem. It sits at the center of staking, rewards, and utility",
        "$NOW is the core ecosystem token. It ties together staking, rewards flow, and access to other parts like $TYT"
      ],
      casual: [
        "$NOW is the main token behind Bounty Temple. It powers staking, rewards, and access to ecosystem features",
        "$NOW is basically the backbone token of the ecosystem",
        "$NOW is the core token connecting the main utility layers in Bounty Temple"
      ],
      alpha: [
        "$NOW is the core engine token of Bounty Temple. It anchors staking, utility, and ecosystem access",
        "$NOW is the centerpiece token. It drives participation, staking, and strategic ecosystem value flow",
        "$NOW is the primary value anchor across the ecosystem"
      ],
      calm: [
        "$NOW is the core token of the Bounty Temple ecosystem, used across staking, utilities, and access mechanics",
        "$NOW serves as the main token powering key ecosystem functions",
        "$NOW is the central token connecting staking and broader ecosystem utility"
      ]
    }
  },
  {
    id: "all_in_x",
    triggers: [
      "all in x",
      "what is allinx",
      "tell me about allinx",
      "what allinx"
    ],
    replies: {
      warm: [
        "All In X is the DeCeFi platform powering the ecosystem, including staking, OTC activity, and network growth",
        "All In X is the platform layer behind a lot of the ecosystem mechanics like staking and OTC expansion",
        "You can think of All In X as the DeCeFi engine supporting the ecosystem’s growth structure"
      ],
      casual: [
        "All In X is basically the DeCeFi platform behind the ecosystem",
        "It’s the platform handling a lot of the staking and OTC side",
        "All In X is the platform engine behind the project’s growth and staking model"
      ],
      alpha: [
        "All In X is the DeCeFi infrastructure layer powering staking, OTC access, and expansion mechanics",
        "It acts as the platform engine behind liquidity, staking, and network growth",
        "All In X is the operational backbone for the ecosystem’s DeCeFi mechanics"
      ],
      calm: [
        "All In X is the DeCeFi platform supporting staking, OTC mechanisms, and ecosystem growth",
        "It functions as the platform infrastructure behind several core mechanics",
        "All In X provides the platform layer for staking and expansion features"
      ]
    }
  },
  {
    id: "tyt",
    triggers: [
      "what is tyt",
      "whats tyt",
      "what's tyt",
      "tyt",
      "$tyt",
    ],
    replies: {
      warm: [
        "$TYT is part of the three-token ecosystem with $NOW and $GIA. Based on the whitepaper, access to $TYT mainly comes through the $NOW route rather than a direct presale",
        "$TYT is one of the core ecosystem tokens. The whitepaper describes getting it through participation with $NOW, not a separate direct presale",
        "$TYT sits in the ecosystem alongside $NOW and $GIA, and the main access path shown is through $NOW participation"
      ],
      casual: [
        "$TYT is one of the ecosystem tokens, and the route to it is mainly through $NOW",
        "TYT is part of the three-token setup, and there’s no direct presale shown for it",
        "$TYT is accessed through the $NOW mechanism based on the whitepaper"
      ],
      alpha: [
        "$TYT is positioned as the growth-side token within the three-token ecosystem, with access routed through $NOW participation",
        "$TYT is not framed as a direct presale asset. It is accessed strategically through the $NOW pathway",
        "$TYT functions as part of the ecosystem’s value loop and is linked to the $NOW gateway mechanism"
      ],
      calm: [
        "$TYT is one of the three main ecosystem tokens. The whitepaper shows access to it through the $NOW route",
        "$TYT is described as being acquired through participation with $NOW rather than through a direct presale",
        "$TYT is part of the ecosystem structure alongside $NOW and $GIA"
      ]
    }
  },
  {
    id: "burn_now_get_tyt",
    triggers: [
      "burn now get tyt",
      "burn $now",
      "burn now",
      "burn mechanism",
      "how burn now works"
    ],
    replies: {
      warm: [
        "The mechanism is Burn $NOW, Get $TYT. Released $NOW can be burned to access $TYT at an early rate",
        "Yep, the model shown is Burn $NOW, Get $TYT. That’s one of the key ecosystem mechanics",
        "The whitepaper describes burning released $NOW in exchange for early access to $TYT"
      ],
      casual: [
        "It’s basically Burn $NOW, Get $TYT",
        "The burn route uses released $NOW to access $TYT",
        "That mechanism is one of the big core loops in the ecosystem"
      ],
      alpha: [
        "The system uses a Burn $NOW, Get $TYT pathway to support deflation and deeper ecosystem alignment",
        "Released $NOW can be converted through the burn mechanism into $TYT access",
        "The burn pathway is designed as a strategic link between $NOW and $TYT"
      ],
      calm: [
        "The mechanism described is Burn $NOW, Get $TYT, using released $NOW as the conversion route",
        "Released $NOW may be burned to obtain $TYT at an early rate",
        "This pathway is described as a core link between the two tokens"
      ]
    }
  },
  {
    id: "supply",
    triggers: [
      "total supply",
      "supply",
      "how many now",
      "1 billion",
      "how much supply",
      "now supply"
    ],
    replies: {
      warm: [
        "Total supply of $NOW is 1 billion, and it’s on BEP-20",
        "$NOW has a total supply of 1 billion on the BEP-20 network",
        "The whitepaper shows a 1 billion total supply for $NOW"
      ],
      casual: [
        "$NOW supply is 1 billion",
        "Total supply is 1B on BEP-20",
        "It’s 1 billion total supply"
      ],
      alpha: [
        "$NOW has a fixed 1 billion total supply on BEP-20",
        "The token is structured with a 1B supply cap",
        "Supply is set at 1 billion"
      ],
      calm: [
        "The total supply of $NOW is 1 billion on BEP-20",
        "$NOW is shown with a 1 billion total supply",
        "The whitepaper lists a 1 billion supply"
      ]
    }
  },
  {
    id: "tokenomics",
    triggers: [
      "tokenomics",
      "allocation",
      "distribution",
      "vesting",
      "token allocation",
      "how distributed"
    ],
    replies: {
      warm: [
        "$NOW has a 1B supply. The allocation includes staking rewards, GIA security pool, TYT liquidity, marketing, and management",
        "The tokenomics split covers staking rewards, the GIA security pool, TYT liquidity, marketing, and management",
        "Main allocation shown is 40% staking rewards, 30% GIA security pool, 10% TYT liquidity, 10% marketing, and 10% management"
      ],
      casual: [
        "Main split is 40% staking rewards, 30% GIA security pool, 10% TYT liquidity, 10% marketing, 10% management",
        "That’s the basic tokenomics breakdown shown",
        "The whitepaper splits supply across rewards, security, liquidity, marketing, and management"
      ],
      alpha: [
        "Tokenomics allocate 1B supply across rewards, stability, liquidity, growth, and management functions",
        "The supply structure is weighted toward staking rewards and long-term security support",
        "The tokenomics are built around ecosystem rewards, security, liquidity provisioning, and controlled operational release"
      ],
      calm: [
        "The tokenomics allocate the 1B supply across rewards, security, liquidity, marketing, and management",
        "The main categories shown are staking rewards, GIA security pool, TYT liquidity, marketing, and management",
        "The distribution is split across utility and long-term support functions"
      ]
    }
  },
  {
    id: "presale",
    triggers: [
      "presale",
      "pre sale",
      "pre-sale",
      "tge",
      "price",
      "launch price",
      "otc stage"
    ],
    replies: {
      warm: [
        "The key prices shown are $0.10 for pre-sale and $1.00 for TGE, with OTC stages after that",
        "From the whitepaper, pre-sale is listed at $0.10 and TGE at $1.00, followed by staged OTC pricing",
        "Pricing starts at $0.10 for pre-sale, then $1.00 at TGE, then later OTC stages"
      ],
      casual: [
        "Pre-sale is $0.10 and TGE is $1.00 based on the whitepaper",
        "That’s the pricing shown, with OTC stages after",
        "Main pricing markers are $0.10 pre-sale and $1.00 TGE"
      ],
      alpha: [
        "The pricing ladder starts at $0.10 pre-sale, then $1.00 at TGE, followed by staged OTC expansion",
        "The model uses stepped pricing from pre-sale into TGE and later OTC levels",
        "The whitepaper outlines a phased price acceleration structure"
      ],
      calm: [
        "The whitepaper lists $0.10 for pre-sale and $1.00 for TGE, followed by OTC stages",
        "The price path begins with pre-sale and then TGE before later OTC progression",
        "Those are the main price points shown in the material"
      ]
    }
  },
  {
    id: "staking",
    triggers: [
      "staking",
      "stake",
      "how staking works",
    ],
    replies: {
      warm: [
        "The whitepaper shows a dual-token staking model using $NOW + $ANT. That’s the core staking route described right now",
        "Staking is built around $NOW + $ANT in the whitepaper, with APY and allocation benefits tied to it",
        "Users can stake $NOW + $ANT to earn APY and unlock additional ecosystem benefits based on the staking structure shown"
      ],
      casual: [
        "Staking is based on $NOW + $ANT",
        "The whitepaper uses a dual-token staking setup with $NOW + $ANT",
        "That’s the main staking model shown right now"
      ],
      alpha: [
        "The staking structure is a dual-token $NOW + $ANT model designed for APY and strategic allocation access",
        "Participation in staking revolves around the $NOW + $ANT pairing",
        "The ecosystem’s staking engine is built on dual-token alignment"
      ],
      calm: [
        "Staking is described as a dual-token model using $NOW + $ANT",
        "The whitepaper shows staking through a $NOW + $ANT structure",
        "This staking model combines both tokens for participation and rewards"
      ]
    }
  },
  {
    id: "staking_duration",
    triggers: [
      "180 days",
      "360 days",
      "540 days",
      "multiplier",
      "staking duration",
      "allocation multiplier"
    ],
    replies: {
      warm: [
        "The durations shown are 180, 360, and 540 days, with allocation multipliers of 1:1, 1:2, and 1:5 respectively",
        "Based on the whitepaper, 180 days gives 1:1, 360 days gives 1:2, and 540 days gives 1:5",
        "The longer the staking duration, the higher the multiplier. It goes from 1:1 to 1:5"
      ],
      casual: [
        "180 days = 1:1, 360 = 1:2, 540 = 1:5",
        "Those are the main multiplier tiers shown",
        "Longer duration means higher multiplier"
      ],
      alpha: [
        "Allocation multipliers scale with commitment length: 1:1 at 180 days, 1:2 at 360 days, and 1:5 at 540 days",
        "The structure rewards longer-duration staking with stronger allocation leverage",
        "Multiplier strength increases as staking commitment length rises"
      ],
      calm: [
        "The listed multipliers are 1:1 for 180 days, 1:2 for 360 days, and 1:5 for 540 days",
        "Those are the staking duration and multiplier pairs shown in the whitepaper",
        "Longer duration corresponds to a higher multiplier"
      ]
    }
  },
  {
    id: "apy",
    triggers: [
      "apy",
      "yield",
      "returns",
      "monthly return",
      "how much apy"
    ],
    replies: {
      warm: [
        "The whitepaper describes expected monthly returns of around 10% to 15%, with compounding supported by rebase",
        "APY is described at around 10% to 15% monthly in the materials shown",
        "From the whitepaper, the expected monthly return range is around 10% to 15%"
      ],
      casual: [
        "Shown APY range is around 10% to 15% monthly",
        "That’s the expected return range in the material",
        "The docs point to around 10% to 15% monthly"
      ],
      alpha: [
        "The ecosystem positions expected returns in the 10% to 15% monthly range, supported by rebase compounding",
        "Yield expectations are framed around a high-frequency compounding model",
        "Return design in the whitepaper centers around rebase-supported yield"
      ],
      calm: [
        "The expected monthly return shown is around 10% to 15%",
        "The whitepaper places returns in that approximate range",
        "That is the monthly APY range described in the material"
      ]
    }
  },
  {
    id: "rebase",
    triggers: [
      "rebase",
      "12 hours",
      "twice daily",
      "how often rebase"
    ],
    replies: {
      warm: [
        "Rebase is described as happening twice daily, every 12 hours",
        "The system rebase cycle is shown as every 12 hours",
        "From what’s shown, rebase happens two times a day"
      ],
      casual: [
        "Rebase is every 12 hours",
        "Twice daily based on the whitepaper",
        "That cycle is shown as 2 times a day"
      ],
      alpha: [
        "The rebase mechanism runs on a 12-hour cycle to support high-frequency compounding",
        "The design uses twice-daily rebase timing",
        "Rebase cadence is set at every 12 hours"
      ],
      calm: [
        "The whitepaper shows rebase happening every 12 hours",
        "It is described as a twice-daily process",
        "That is the frequency listed in the material"
      ]
    }
  },
  {
    id: "referral",
    triggers: [
      "referral",
      "invite",
      "active account",
      "ref reward",
      "how referral works"
    ],
    replies: {
      warm: [
        "The referral system rewards users for bringing in Active Accounts, which are defined as accounts with at least 100 USDT equivalent staking",
        "Referral rewards are tied to Active Accounts and scale as more qualified referrals are added",
        "Based on the whitepaper, referral rewards expand as you bring in more Active Accounts"
      ],
      casual: [
        "Referral rewards scale with more Active Accounts",
        "An Active Account is one with at least 100 USDT equivalent staking",
        "That’s the base referral requirement shown"
      ],
      alpha: [
        "The referral system is structured around qualified Active Accounts and scaling tier access",
        "Reward depth increases as more active staking participants are referred",
        "The model uses active referral expansion to unlock stronger reward tiers"
      ],
      calm: [
        "The system defines Active Accounts as those with at least 100 USDT equivalent staking",
        "Referral rewards are linked to the number of qualified Active Accounts referred",
        "That is how the referral structure is described in the whitepaper"
      ]
    }
  },
  {
    id: "dao",
    triggers: [
      "dao",
      "governance",
      "dao reward",
      "community contribution"
    ],
    replies: {
      warm: [
        "The DAO side is tied to community contribution and development, with reward distributions described as happening twice daily",
        "DAO rewards are connected to community performance and contribution metrics in the whitepaper",
        "The governance model includes DAO-linked reward sharing based on community development and participation"
      ],
      casual: [
        "DAO rewards are tied to contribution and community development",
        "That part is linked to participation and community performance",
        "The whitepaper connects DAO rewards to ecosystem contribution"
      ],
      alpha: [
        "The DAO model aligns reward flow with community growth and measurable contribution",
        "Governance-linked incentives are structured around ecosystem development performance",
        "The DAO layer is positioned as a contribution-weighted reward engine"
      ],
      calm: [
        "The DAO reward model is tied to contribution and community development metrics",
        "It is described as a governance-linked reward structure",
        "That section connects participation with reward distribution"
      ]
    }
  },
  {
    id: "partner",
    triggers: [
      "partner",
      "nexus partner",
      "p0",
      "p1",
      "p2",
      "p3",
      "p4",
      "p5",
      "p6",
      "p7"
    ],
    replies: {
      warm: [
        "The Nexus Partner mechanism starts from a new 540-day $NOW + $ANT stake worth at least 5,000 USDT",
        "Partner qualification is based on a long-term $NOW + $ANT stake, starting from 5,000 USDT over 540 days",
        "From the whitepaper, partner status begins with a qualified 540-day dual-token staking position"
      ],
      casual: [
        "Partner entry starts from a 5,000 USDT 540-day $NOW + $ANT stake",
        "That’s the main entry requirement shown",
        "The partner route begins from that long-duration dual-token stake"
      ],
      alpha: [
        "The Nexus Partner pathway begins with a qualified 540-day dual-token stake at 5,000 USDT or more",
        "Partner access is structured around deeper long-term commitment",
        "This mechanism is designed to align partner status with sustained ecosystem participation"
      ],
      calm: [
        "The whitepaper shows partner qualification starting at a 5,000 USDT 540-day $NOW + $ANT stake",
        "That is the base requirement listed for partner entry",
        "Partner status is tied to long-term dual-token staking"
      ]
    }
  },
  {
    id: "safety",
    triggers: [
      "private key",
      "seed phrase",
      "password",
      "wallet recovery"
    ],
    replies: {
      warm: [
        "Just a quick safety reminder — never share your private key, seed phrase, or password with anyone",
        "Please stay careful with security. Never give anyone your seed phrase or private key",
        "For safety, never share private keys, seed phrases, or passwords"
      ],
      casual: [
        "Never share your seed phrase or private key",
        "Keep your wallet details private always",
        "Don’t send private keys or passwords to anyone"
      ],
      alpha: [
        "Security first — private keys, seed phrases, and passwords should never be shared",
        "Protect wallet credentials at all times",
        "Operational security matters. Never expose sensitive wallet data"
      ],
      calm: [
        "Never share your private key, seed phrase, or password",
        "Sensitive wallet information should always remain private",
        "Please keep those credentials secure"
      ]
    }
  }
];

// =========================
// HUMANIZATION
// =========================
const GREETINGS = {
  warm: {
    morning: [
      "gmgm",
      "how you doing!"
      "gm 😊 hope your day starts strong",
      "good morning ☀️ hope you’re doing well today",
      "gm gm ✨ wishing you a smooth day ahead"
    ],
    general: [
      "hey 👋 ",
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
  },
  casual: {
    morning: [
      "gm 👋",
      "morninggg",
      "gm hope the day's treating you well"
    ],
    general: [
      "heyy 👋",
      "yoyo",
      "hey there"
    ],
    night: [
      "gn 🌙",
      "good nighttt",
      "rest well"
    ],
    thanks: [
      "np 👌",
      "all good",
      "happy to help"
    ]
  },
  alpha: {
    morning: [
      "gm ⚡ let’s build",
      "gm strong start today",
      "gm ready for the grind"
    ],
    general: [
      "welcome in ⚡",
      "hey, good to have you here",
      "yo, glad you made it in"
    ],
    night: [
      "good night 🌙 recharge well",
      "gn, reset and come back stronger",
      "rest up"
    ],
    thanks: [
      "always",
      "got you",
      "happy to help"
    ]
  },
  calm: {
    morning: [
      "good morning 😊",
      "morning, hope your day goes well",
      "gm, wishing you a peaceful day"
    ],
    general: [
      "hello 😊",
      "hey, welcome",
      "good to see you here"
    ],
    night: [
      "good night 🌙",
      "rest well tonight",
      "gn, take care"
    ],
    thanks: [
      "you’re welcome",
      "glad to help",
      "happy to help"
    ]
  }
};

// =========================
// HELPERS
// =========================
function normalize(text) {
  return text.toLowerCase().trim();
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function isGroup(chat) {
  return chat.type === "group" || chat.type === "supergroup";
}

function getDisplayName(msg) {
  const isGrp = isGroup(msg.chat);
  const first = msg.from?.first_name?.trim();
  const username = msg.from?.username?.trim();

  if (isGrp) {
    if (username) return `@${username}`;
    return "";
  }

  if (first) return first;

  return "";
}

function maybeAddName(reply, name) {
  if (!name) return reply;
  if (Math.random() > NAME_MENTION_CHANCE) return reply;

  const patterns = [
    `${name}, ${reply.charAt(0).toLowerCase()}${reply.slice(1)}`,
    `${reply} ${name}`,
    `${name} — ${reply.charAt(0).toLowerCase()}${reply.slice(1)}`
  ];

  return pickRandom(patterns);
}

function detectTone(message, replyType) {
  const msg = normalize(message);

  if (replyType === "greeting") {
    if (msg.includes("gm") || msg.includes("morning")) return "warm";
    if (msg.includes("gn") || msg.includes("good night")) return "calm";
    if (msg.includes("thanks") || msg.includes("thank you")) return "casual";
    return "warm";
  }

  if (
    msg.includes("what") ||
    msg.includes("how") ||
    msg.includes("why") ||
    msg.includes("explain") ||
    msg.includes("tell me")
  ) {
    return "calm";
  }

  if (
    msg.includes("tge") ||
    msg.includes("price") ||
    msg.includes("tokenomics") ||
    msg.includes("referral") ||
    msg.includes("dao") ||
    msg.includes("partner")
  ) {
    return Math.random() < 0.5 ? "alpha" : "calm";
  }

  if (
    msg.includes("hello") ||
    msg.includes("hi") ||
    msg.includes("hey")
  ) {
    return "warm";
  }

  return pickRandom(["warm", "casual", "calm"]);
}

function randomDelay(replyType) {
  if (replyType === "greeting") {
    return Math.floor(Math.random() * 8000) + 3000;
  }

  if (replyType === "knowledge") {
    return Math.floor(Math.random() * 25000) + 8000;
  }

  return Math.floor(Math.random() * 12000) + 4000;
}

function maybeLowercaseStart(reply) {
  if (Math.random() > PERSONA.lowercaseStartChance) return reply;
  return reply.charAt(0).toLowerCase() + reply.slice(1);
}

function maybeAddTypo(reply) {
  if (Math.random() > PERSONA.typoChance) {
    return { first: reply, second: null };
  }

  const typoMap = [
    ["thanks", "thnaks"],
    ["probably", "probaly"],
    ["about", "abotu"],
    ["right", "rihgt"],
    ["token", "tokne"],
    ["good", "goood"]
  ];

  for (const [correct, typo] of typoMap) {
    const regex = new RegExp(correct, "i");
    if (regex.test(reply)) {
      const first = reply.replace(regex, typo);
      const second = Math.random() < PERSONA.correctionChance ? `*${correct}` : null;
      return { first, second };
    }
  }

  return { first: reply, second: null };
}

function applyPersona(reply, tone) {
  const prefixes = {
    warm: ["", "", "hey, ", "hmm, ", "okay, "],
    casual: ["", "", "yo, ", "ah, ", "okay okay, ", "okay can, "],
    alpha: ["", "", "alright, ", "look, ", "okay, "],
    calm: ["", "", "alright, ", "okay, "]
  };

  let finalReply = pickRandom(prefixes[tone]) + reply;
  finalReply = maybeLowercaseStart(finalReply);
  return finalReply;
}

function softenReply(reply, tone) {
  const endingsByStyle = {
    warm: ["", "", "", "."],
    casual: ["", "", "", " 👍"],
    alpha: ["", "", "", "."],
    calm: ["", "", "", "."]
  };

  return reply + pickRandom(endingsByStyle[tone] || [""]);
}

function getGreetingReply(msg, tone) {
  const stylePack = GREETINGS[tone];

  if (
    msg.includes("good morning") ||
    msg === "gm" ||
    msg.startsWith("gm ") ||
    msg.includes(" morning")
  ) {
    return pickRandom(stylePack.morning);
  }

  if (
    msg.includes("good night") ||
    msg === "gn" ||
    msg.startsWith("gn") ||
    msg.includes(" gn")
  ) {
    return pickRandom(stylePack.night);
  }

  if (
    msg === "hi" ||
    msg === "hello" ||
    msg === "hey" ||
    msg.includes("hello") ||
    msg.includes("hey there")
  ) {
    return pickRandom(stylePack.general);
  }

  if (
    msg.includes("thank you") ||
    msg === "thanks" ||
    msg.includes("thx")
  ) {
    return pickRandom(stylePack.thanks);
  }

  return null;
}

function scoreMatch(message, triggers) {
  let score = 0;

  for (const trigger of triggers) {
    const t = normalize(trigger);

    if (message === t) score += 10;
    else if (message.startsWith(t)) score += 7;
    else if (message.includes(t)) score += 4;

    const words = t.split(" ").filter(Boolean);
    if (words.length >= 2) {
      const hitCount = words.filter((w) => message.includes(w)).length;
      if (hitCount === words.length) score += 3;
      else if (hitCount >= Math.ceil(words.length / 2)) score += 1;
    }
  }

  if (
    (message.includes("how") && message.includes("stake")) ||
    (message.includes("join") && message.includes("staking"))
  ) {
    if (triggers.some((t) => t.includes("stake") || t.includes("staking"))) {
      score += 5;
    }
  }

  if (
    (message.includes("what") && message.includes("tyt")) ||
    message === "tyt"
  ) {
    if (triggers.some((t) => t.includes("tyt"))) {
      score += 5;
    }
  }

  return score;
}

function getLimitedScopeReply(tone) {
  const replies = {
    warm: [
      "not fully sure on that one yet, better check with the team",
      "i don’t want to give you the wrong info on that, please wait for annoucement",
      "not 100% sure from what i have right now, lets wait for announcement fam"
    ],
    casual: [
      "not fully sure on that tbh, better wait for the team haha",
      "don’t want to mislead you on that one, lets wait for annoumcement!",
      "not 100% on that rn, probably worth checking the docs or wait for announcement!"
    ],
    alpha: [
      "can’t confirm that cleanly from what i know",
      "not enough certainty on that one, got to ask the team",
      "i wouldn’t want to overstate that, best get direct confirmation or official announcement!"
    ],
    calm: [
      "i’m not fully sure on that from the information i have right now",
      "that would be better confirmed with the team or the latest docs",
      "lets wait for the team to clarify more about it!"
    ]
  };

  return pickRandom(replies[tone]);
}

function getKnowledgeReply(text, tone) {
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
    return softenReply(pickRandom(best.replies[tone]), tone);
  }

  if (msg.includes("?")) {
    return getLimitedScopeReply(tone);
  }

  return null;
}

function shouldRespond(text) {
  const msg = normalize(text);

  const broadTriggers = [
    "gm",
    "gn",
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
    "stake",
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
    "allinx",
    "?"
  ];

  return broadTriggers.some((word) => msg.includes(word));
}

function shouldActuallyReply(msg, replyType) {
  if (!isGroup(msg.chat)) return DM_ALWAYS_REPLY;

  if (replyType === "greeting") {
    return Math.random() < GROUP_GREETING_REPLY_CHANCE;
  }

  if (replyType === "knowledge") {
    return Math.random() < GROUP_KNOWLEDGE_REPLY_CHANCE;
  }

  return false;
}

// =========================
// BOT HANDLERS
// =========================
bot.on("polling_error", (error) => {
  console.log("Polling error:", error.message);
});

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (!text) return;
  if (!isWithinWorkingHours()) return;
  if (!shouldRespond(text)) return;

  const normalized = normalize(text);
  const name = getDisplayName(msg);

  let replyType = "greeting";
  let tone = detectTone(normalized, replyType);
  let reply = getGreetingReply(normalized, tone);

  if (!reply) {
    replyType = "knowledge";
    tone = detectTone(normalized, replyType);
    reply = getKnowledgeReply(normalized, tone);
  }

  if (!reply) return;
  if (!shouldActuallyReply(msg, replyType)) return;

  reply = applyPersona(reply, tone);
  reply = maybeAddName(reply, name);

  const typoVersion = maybeAddTypo(reply);
  const firstReply = typoVersion.first;
  const correctionReply = typoVersion.second;

  setTimeout(() => {
    bot.sendMessage(chatId, firstReply, {
      reply_to_message_id: msg.message_id,
    });

    if (correctionReply) {
      setTimeout(() => {
        bot.sendMessage(chatId, correctionReply, {
          reply_to_message_id: msg.message_id,
        });
      }, Math.floor(Math.random() * 5000) + 2000);
    }
  }, randomDelay(replyType));
});
