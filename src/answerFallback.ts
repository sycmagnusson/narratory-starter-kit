import { BridgeTurn, BotTurn, ANYTHING } from "narratory";
import { varSorryAgain, varNegativeFillers } from "./variables";


//USE FOR QUESTIONS
export const answerFallback: BridgeTurn = {
  label: "ANYTHING",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: 'Please type "yes", "no" or "goodbye".',
          repair: true,
        },
    },
  },
    {
      cond: { retryCount: 1 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: 'Either type "yes", "no" or "goodbye".',
          repair: true,
        },
      },
    },
    {
      bot: {
        say: varSorryAgain,
        repair: true,
      },
    },
  ],
}

//USE FOR GENERAL FALLBACK
export const altAnswerFallback: BotTurn = {
  say: [
    "Did you just ask me something? If so, could you try and re-phrase that?",
    "Did you just ask me a question? If so, could you please ask me again?",
    "Hey, what was that? Could you please repeat what you said?",
    "Hey, I missed that! Could you please ask me again?",
    "Did you just ask me a question? If so, could you try and re-phrase that?",
    "Did you just ask me something? If so, could you please ask me again?",
    "Hey, I missed that! Could you come again please?"
  ],
  repair: true,
}

//SPECIAL FOR NARRATIVE
export const anythingNarrative: BridgeTurn = {
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: ["Do you think you could re-phrase that?", "Do you think you could say that again?", "Do you think you could repeat that?"],
          repair: true,
        },
      },
    },
    {
      cond: { retryCount: 1 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: ["One more time, please.", "Please, come again.", "Could you please repeat that?", "Please, say that again.", "Could you please say that again?"],
          repair: true,
        },
      },
    },
    {
      bot: {
        say: varSorryAgain,
        repair: true,
      }
    },
  ],
}


export const anythingMakeSure: BridgeTurn = {
bot: [
  {
    cond: { retryCount: 0 },
    bot: {
      say: ["Uh-huh...", "Hmm hmm..."],
      bot: {
        say: "Sorry, I missed that. Could you please recite?.",
        repair: true,
      },
    },
  },
  {
    cond: { retryCount: 1 },
    bot: {
      say: ["Erm...", "Er..."],
      bot: {
        say: "Sorry, I couldn't catch what you said. Please try and re-phrase what you just said.",
        repair: true,
      },
    },
  },
  {
    bot: {
      say: varSorryAgain,
      repair: true,
    },
  },
]
}

