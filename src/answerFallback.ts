import { BridgeTurn, BotTurn, ANYTHING } from "narratory"
import { varSorryAgain, varNegativeFillers } from "./variables"

//USE FOR QUESTIONS
export const answerFallbackQuestion: BridgeTurn = {
  label: "ANYTHING",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: ["Do you think you could repeat that?",
          "Could you please try and re-phrase what you just said?",],
          repair: true,
        },
      },
    },
    {
      cond: { retryCount: 1 },
      bot: {
        say: ['"All down the mines, all down the mines. There\'s nothing here."', 
        '"All down the mines, all down the mines. There\'s nothing left to find."',],
        bot: {
          say: ["Could you please come again?",
          "Could you please say that one more time?"],
          repair: true,
        },
      },
    },
    {
      cond: { retryCount: 2 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: ["Do you think you could recite that?",
          "Could you please say that again?"],
          repair: true,
        },
      },
    },
   /* {
      cond: { retryCount: 3 },
      bot: {
        say: '"All down the mines, all down the mines. There\'s nothing left to find."',
        bot: {
          say: 'Either type "yes", "no" or "goodbye".',
          repair: true,
        },
      },
    },*/
    {
      bot: {
        say: varSorryAgain,
        repair: true,
      },
    },
  ],
}

// ANSWER FALLBACK FOR ALL ALBUMS-QUESTION
export const answerFallbackAlbums: BridgeTurn = {
  label: "ANYTHING",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: "Please type the name of the album you want to know more about.",
          bot: {
            say: 'Type "no" if you want to move on to another topic.',
            bot: {
              say: 'Or type "goodbye" if you feel like we are done talking to each other.',
              repair: true,
            },
          },
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

// ANSWER FALLBACK FOR ALL EP-QUESTION
export const answerFallbackEP: BridgeTurn = {
  label: "ANYTHING",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: "Please type the name of the EP you want to know more about.",
          bot: {
            say: 'Type "no" if you want to move on to another topic.',
            bot: {
              say: 'Or type "goodbye" if you feel like we are done talking to each other',
              repair: true,
            },
          },
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
export const generalAnswerFallback: BridgeTurn = {
  bot: {
    say: '"Oh hey, I wasn\'t listening."',
    bot: {
      say: [
        /*"Did you just ask me something? If so, could you try and re-phrase that?",
      "Did you just ask me a question? If so, could you please ask me again?",
      "Hey, what was that? Could you please repeat what you said?",
      "Hey, I missed that! Could you please ask me again?",
      "Did you just ask me a question? If so, could you try and re-phrase that?",
      "Did you just ask me something? If so, could you please ask me again?",
      "Hey, I missed that! Could you come again please?"*/
        "Do you think you could try and re-phrase that?",
        "Could you please repeat what you said?",
      ],
      repair: true,
      bot: {
        say: '"I hear you\'re there."',
        bot: {
          say: [
        "But sorry, I missed that. Could you please come again?",
        "But hey, what was that? Could you please ask say one more time?",
          ],
          bot: {
            say: '"I was floating away."',
            bot: {
              say: [
                "Do you think you could say that again?",
            "Could you please recite that?",
              ],
              
              bot: {
                say: varSorryAgain,
                repair: true,
              },
            },
          },
        },
      },
    },
  },
}

//SPECIAL FOR NARRATIVE
export const anythingNarrative: BridgeTurn = {
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: [
            "Do you think you could re-phrase that?",
            "Do you think you could say that again?",
            "Do you think you could repeat that?",
          ],
          repair: true,
        },
      },
    },
    {
      cond: { retryCount: 1 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: [
            "One more time, please?",
            "Please, come again?",
            "Could you please repeat that?",
            "Please, say that again?",
            "Could you please say that again?",
          ],
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
  ],
}
