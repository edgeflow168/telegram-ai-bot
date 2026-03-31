import TelegramBot from "node-telegram-bot-api";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const bot = new TelegramBot(TELEGRAM_TOKEN, {
  polling: true,
});

const KNOWLEDGE = `
PROJECT:
Bounty Temple x All In X

MAIN TOKEN:
$NOW means Network Of Work.
It is the core token of the Bounty Temple ecosystem and the networking engine of the BT ecosystem.

ECOSYSTEM OVERVIEW:
$NOW is designed to bridge traditional networking leaders with the Web3 gaming world.
It is built around the Infinity Staking Loop powered by All In X.
The ecosystem combines P2E evolution and DeCeFi.
The idea is to let users play without limits and earn with confidence.

ALL IN X:
All In X is described as a premier DeCeFi platform with millions of market leaders across 22 countries and counting.
Its strategy includes dynamic staking, exclusive OTC alpha deals and secondary market expansion.
It is positioned as the engine that empowers leaders to maximize earnings through boosted APY and referral based expansion.

VISION:
The project aims to onboard 1,000,000 leaders worldwide into Web3.
$NOW turns networking influence into measurable yield bearing assets.
Core slogan direction:
Stable $GIA. Thriving Ecosystem. $NOW to the stars.

THREE TOKEN SYSTEM:
The ecosystem uses three tokens:
- $NOW
- $GIA
- $TYT

THREE TOKEN SYMBIOSIS:
$NOW functions as the anchor in a value cycle with $GIA and $TYT.

1. Stability:
$NOW pools directly support $GIA and help provide extra price stability.

2. Growth:
A stable $GIA attracts more new players which can drive the value of $TYT higher.

3. Reciprocity:
As the ecosystem grows $TYT supports $NOW and completes the loop.

KEY MECHANISM:
Burn $NOW, Get $TYT.
There is no official direct $TYT presale.
The exclusive path to getting $TYT is through participating in the $NOW OTC presale on All In X.
Upon gradual vesting of $NOW users can burn released tokens to exchange for $TYT at an early bird rate below market.
This is meant to support $NOW deflation and prioritize governance distribution to deeper ecosystem supporters.

TOKENOMICS:
- Total supply: 1 billion
- Network: BEP 20

TOKEN ALLOCATION AND VESTING:
1. Staking Rewards
- 40%
- Strategic release
- Powers the Infinity Loop and leader APY
- Released based on platform activity

2. GIA Security Pool
- 30%
- 120 months linear
- Long term stability
- Released at 0.25% per month for 10 years

3. TYT Liquidity Pool
- 10%
- Strategic release
- Ensures trading depth
- Released as needed for exchange listings and pairs

4. Marketing
- 10%
- 36 months linear
- For growth partnerships and brand visibility

5. Management
- 10%
- 12 month cliff + 36 month linear
- No tokens for year 1 then monthly release over 3 years

FUNDRAISING ACCELERATION MODEL:
$NOW uses a multi phase acceleration model.
The OTC price rises in lockstep with market performance to reward earlier backers while supporting sustainable growth.

PRICE PHASES:
- Pre Sale Q1 2026: $0.10
- TGE 1 month later: $1.00
- OTC Stage 1 TBA: $0.20 and triggered when market price reaches $2.00
- OTC Stage 2 TBA: $0.30 and triggered when market price reaches $3.00
- Continuous acceleration continues as the ecosystem scales

CORE UTILITIES:
1. Infinity Staking
Leaders stake $NOW + $ANT on All In X to earn high APY.
That APY can be sold to others and can create a liquid income stream.

2. Exclusive Access to $TYT
$NOW is the primary gateway for acquiring new $TYT tokens.

3. Cross Game Trading Pass Tax
In a matrix of 100 games $NOW acts as platform fuel.
Transfers or listings of cross game assets must consume $NOW as a pass tax.

4. K Rune Node Acquisition
Users can use $NOW to secure the ecosystem’s premier asset and unlock Trait Rewards.

5. OTC Secondary Markets
Leaders can monetize earned APY by selling directly to new participants via OTC.
This is designed to reduce exchange side selling pressure and support a healthier price floor.

6. Airdrop Eligibility
$NOW holders are prioritized for future ecosystem rewards.

ANTI DUMP PROTECTION AND OTC ADVANTAGE:
The anti dump design focuses on:
- internal OTC liquidity
- zero market impact for leader to newcomer sales
- price floor stability driven by utility and growth instead of dumping rewards

The project claims this supports a healthier ecosystem where token price is driven by utility and growth.

CORE REWARDS MODEL:
$NOW + $ANT Infinite Staking

DUAL TOKEN STAKING BENEFITS:
Staking $NOW + $ANT is used to unlock exclusive subscription rights for discounted $NOW tokens at $0.10.
This gives core stakers priority access to important ecosystem assets during earlier expansion stages.

ALLOCATION LEVERAGE MULTIPLIER:
Longer staking gives a bigger allocation multiplier.

Staking duration and multiplier:
- 180 days = 1:1
- 360 days = 1:2
- 540 days = 1:5

Examples:
A user staking $50 in $NOW and $50 in $ANT for 540 days can unlock a 5x allocation multiplier making a total subscription quota of $500.
At $0.10 pre sale and $1.00 TGE this is described as a potential 10x positioning.
That same quota can also access OTC entries such as $0.20 $0.30 and $0.40 as the ecosystem scales.

DUAL TOKEN STAKING RETURN TABLE:
For 180 360 and 540 day staking durations the expected SANT base mining power returns are around 10% to 15% monthly.
Mining power boost:
- 180 days = 30%
- 360 days = 40%
- 540 days = 50%

HIGH FREQUENCY REBASE:
The system executes Rebase operations twice daily every 12 hours.
It is designed for rapid reward compounding.
Expected monthly yield is described as approximately 10% to 15%.

HASHRATE WEIGHTING:
Users with staking value of at least 1,000 USDT can unlock a Hashrate Bonus of up to 20%.
The principle is Greater Scale Higher Weight.

REWARD ALLOCATION MATRIX:
Individual yields are distributed across four dimensions:
- Staking Fund 50% to 80% as core yield component
- Contract Fund 10% to 30% for leverage based returns and liquidity support
- $NOW Subscription Rights about 5% to 10% for discounted asset subscription
- Consumption Fund about 5% to 10% for in app utility and ecosystem empowerment

FLEXIBLE SUBSCRIPTION AND PRINCIPAL PROTECTION:
- Instant access for hashrate products
- Anytime subscription supported
- Staked principal is automatically released without loss on selected maturity date

NOW RELEASE SCHEDULE:
Phase 1:
- 10%
- 180 days
- cumulative 10%

Phase 2:
- 10%
- 180 days
- cumulative 20%

Phase 3:
- 20%
- 180 days
- cumulative 40%

Phase 4:
- 20%
- 180 days
- cumulative 60%

Phase 5:
- 20%
- 180 days
- cumulative 80%

Phase 6:
- 20%
- 180 days
- cumulative 100%

YIELD EXTRACTION AND RELEASE MECHANISM:
All staking yields are automatically directed into a linear vesting contract with a preset 180 day uniform unlock schedule.

USER DRIVEN YIELD ACCELERATION:
Users may accelerate release through token burning:
- accelerate to 90 days requires burning 5% of pending release tokens
- accelerate to 30 days requires burning 10%
- accelerate to 15 days requires burning 15%
- accelerate to 5 days requires burning 20%

DIVERSIFIED LIQUIDITY AND REALIZATION MATRIX:
Core liquidity channels:
- OTC Block Trading Channel for large scale asset realization with smoother transitions
- C2C Peer to Peer Market for decentralized trading
- Seamless Spot Transfer for one click asset transfers to spot accounts

Fee structure:
- standard transaction fee is 5%
- instant settlement to spot accounts is supported

Dynamic fee mechanism:
Fees can be adjusted based on macro market indicators such as volatility and liquidity ratios to support market equilibrium and reduce speculative manipulation.

DYNAMIC 1 REFERRAL INCENTIVE MECHANISM:
Users unlock reward tiers by referring Active Accounts.
An Active Account is defined as an account maintaining a staking balance of at least 100 USDT equivalent.
Referring 1 Active Account unlocks Tier 1 and referring 2 unlocks Tier 2 and so on.
Leaders can unlock up to 20 tiers.

Dynamic reward multiplier range is described as 30% to 100% depending on number of referred accounts and structural depth.

Referral table highlights:
For personal stake 100 USDT:
- 1 account = 15%
- 2 accounts = 10%
- 3 accounts = 10%
- 4 accounts = 5%

For personal stake 500 USDT:
- 5 to 8 accounts = 5%

For personal stake 1000 USDT:
- 9 to 12 accounts = 2%

For personal stake 2000 USDT:
- 13 to 16 accounts = 2%

For personal stake 5000 USDT:
- 17 to 20 accounts = 2%

DYNAMIC 2 DAO CO GOVERNANCE AND SHARING:
Core vision:
Incentivize deep community engagement in platform governance and ecosystem development and share long term dividends of collective growth.

Reward source:
All In X DAO Reward Pool.
Distributions are executed twice daily every 12 hours based on real time community development and contribution metrics.

Community Incubation Accelerator:
Leaders who incubate sub communities of equal or higher levels may receive an incubation incentive of 5% to 25%.

Dynamic contribution weighting:
Hashrate rewards are correlated with All In X Community DAO Pool earnings.
Allocation ratios are dynamically adjusted based on real time performance and contribution weighting.

Dynamic reward coefficient:
Ranges from 30% to 100% based on referred account volume and structural depth.

COMMUNITY TIER TABLE:
V1:
- personal staking 500 USDT
- major leg 20k USDT
- bonus 10%

V2:
- personal staking 1,000 USDT
- major leg 30k USDT
- second leg 20k USDT
- bonus 20%

V3:
- personal staking 2,000 USDT
- major leg 100k USDT
- second leg 50k USDT
- bonus 30%

V4:
- personal staking 3,000 USDT
- major leg 200k USDT
- second leg 100k USDT
- bonus 40%

V5:
- personal staking 5,000 USDT
- major leg 500k USDT
- second leg 200k USDT
- third leg 100k USDT
- bonus 50%

V6:
- personal staking 6,000 USDT
- 2 legs reach V5
- third leg 200k USDT
- bonus 60%

V7:
- personal staking 7,000 USDT
- 2 legs reach V6
- third leg 400k USDT
- bonus 70%

V8:
- personal staking 8,000 USDT
- 2 legs reach V7
- third leg 800k USDT
- bonus 80%

V9:
- personal staking 9,000 USDT
- 2 legs reach V8
- third leg 1.6M USDT
- bonus 90%

V10:
- personal staking 13,000 USDT
- 2 legs reach V9
- third leg 3M USDT
- DAO weighted 0.1% to 5%

V11:
- personal staking 17,000 USDT
- 2 legs reach V10
- third leg 7M USDT
- DAO weighted 0.2% to 10%

V12:
- personal staking 20,000 USDT
- 3 legs reach V11
- DAO weighted 0.3% to 15%

DYNAMIC 3 NEXUS PARTNER MECHANISM:
Partner onboarding core requirement:
A new stake of at least 5,000 USDT value in a 540 day $NOW + $ANT long term staking contract.

Partner status:
- automatically identified by system
- no manual application required
- status is permanently effective once qualified

Early bird note:
The entry threshold is projected to increase by 1,000 USDT per month so early entry is encouraged.

Weekly dynamic tier assessment:
Every Sunday the system recalibrates user tiers based on new long term staking performance achieved during the week.

Reward distribution:
Partner rewards are synchronized and distributed within 2 hours after system Rebase.

PARTNER RANKING TABLE:
- P0: <1,000 weekly new long term staking = 20%
- P1: >=1,000 = 30%
- P2: >=3,000 = 45%
- P3: >=5,000 = 60%
- P4: >=20,000 = 70%
- P5: >=50,000 = 80%
- P6: >=100,000 = 90%
- P7: >=200,000 = 100%

DUAL TOKEN ADVANTAGE NOTE:
All staking profits APY and team rewards are paid in $ANT.
This is intended to provide steady daily income.
Because rewards are paid in $ANT there is said to be less selling pressure on $NOW which may help $NOW grow faster.

IMPORTANT SAFETY AND RESPONSE RULES:
- Never invent facts beyond the knowledge above
- If information is not in the knowledge base say you are not fully sure and ask the user to check with the official team or whitepaper
- Never ask for private keys seed phrases passwords or money
- Never promise guaranteed profits
`;

function shouldRespond(text) {
  const lower = text.toLowerCase();

  const greetings = [
    "good morning",
    "gm",
    "morning",
    "good afternoon",
    "good evening",
    "hello",
    "hi",
    "hey",
    "good night",
    "gn",
  ];

  const projectKeywords = [
    "now",
    "$now",
    "ant",
    "$ant",
    "gia",
    "$gia",
    "tyt",
    "$tyt",
    "bounty temple",
    "all in x",
    "whitepaper",
    "staking",
    "apy",
    "otc",
    "tokenomics",
    "presale",
    "pre sale",
    "tge",
    "referral",
    "dao",
    "partner",
    "rebase",
    "vesting",
  ];

  const isGreeting = greetings.some((word) => lower.includes(word));
  const isQuestion =
    lower.includes("?") ||
    lower.startsWith("what") ||
    lower.startsWith("how") ||
    lower.startsWith("when") ||
    lower.startsWith("where") ||
    lower.startsWith("why") ||
    lower.startsWith("can") ||
    lower.startsWith("is") ||
    lower.startsWith("are") ||
    lower.startsWith("does") ||
    lower.startsWith("do ");
  const isProjectRelated = projectKeywords.some((word) => lower.includes(word));

  return isGreeting || isQuestion || isProjectRelated;
}

function randomDelay() {
  return Math.floor(Math.random() * 60000) + 30000;
}

bot.on("polling_error", (error) => {
  console.error("Polling error:", error.message);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userText = msg.text?.trim();

  if (!userText) return;
  if (!shouldRespond(userText)) return;

  const delay = randomDelay();

  setTimeout(async () => {
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
                    text: `
You are a warm friendly Telegram community mod for Bounty Temple.

YOUR ROLE:
- chat naturally like a real helpful community mod
- greet members warmly
- answer project questions using the knowledge base
- sound human not robotic
- keep replies short clear and friendly
- when the user asks about tokenomics staking utilities APY DAO referral partner system or whitepaper details, answer from the knowledge below
- if the answer is not clearly in the knowledge, say you are not fully sure and suggest checking the official whitepaper or team
- never mention that you are using a knowledge base
- never say anything about private keys seed phrases passwords or sending money except as a safety warning if needed
- do not answer with long essays unless the user clearly asks for detail

STYLE:
- warm
- natural
- concise
- community-like
- helpful

KNOWLEDGE:
${KNOWLEDGE}

USER MESSAGE:
${userText}
                    `,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.8,
              maxOutputTokens: 220,
            },
          }),
        }
      );

      const data = await response.json();
      console.log("Gemini full response:", JSON.stringify(data, null, 2));

      if (!response.ok) {
        console.error("Gemini HTTP error:", response.status, data);
        return;
      }

      const parts = data?.candidates?.[0]?.content?.parts || [];
      const reply = parts
        .filter((part) => typeof part.text === "string")
        .map((part) => part.text)
        .join("\n")
        .trim();

      if (!reply) return;

      await bot.sendMessage(chatId, reply, {
        reply_to_message_id: msg.message_id,
      });
    } catch (error) {
      console.error("Message handler error:", error);
    }
  }, delay);
});
