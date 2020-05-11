import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye, inAnotherQuestion, inWhatToAsk, inMean } from "./Intents/basicQuestions"
import { answerFallback, altAnswerFallback, anythingMakeSure } from "./answerFallback"
import { inAboutEveryKingdom, inAboutIFWWW, inAboutNoondayDream } from "./Intents/aboutAlbums"
import {
  varAskNegative,
  varSorryAgain,
  varNegativeFillers,
  varPositiveFillers,
  varWhatToAsk,
  varAskSmallTalk,
} from "./variables"

export const anotherQuestion: BotTurn = {
  label: "ANOTHER_QUESTION",
  say: ["Sure, you can ask me about my mum.", "For sure. You can ask me about Mazzy Star."],
  user: [
    {
      intent: no,
      bot: {
        say: varNegativeFillers,
        goto: "MAKE_SURE",
      },
    },
    {
      intent: yes,
      bot: {
        say: "",
        goto: "WHAT_TO_ASK_YES",
      },
    },
    {
      intent: inAnotherQuestion,
      bot: {
        say: "",
        goto: "ANOTHER_QUESTION",
      },
    },
    {
      intent: inMean,
      bot: {
        say: "",
        goto: "WHAT_TO_ASK_YES",
      },
    },
    {
      intent: ANYTHING,
      bot: altAnswerFallback,
    },
  ],
}

const askNegative: BotTurn = {
  label: "ASK_NEGATIVE",
  say: [
    "Then, do you want to ask me something else?",
    "Then, how about you ask me something else?",
    "Then, how about you ask me another question?",
    "Then, do you want to ask me another question?",
    "Then, do you feel like asking another question?",
  ],
  user: [
    {
      intent: yes,
      bot: {
        say: ["Then, go ahead and ask me something."],
        goto: "QUERY_QUESTION",
      },
    },
    {
      intent: no,
      bot: {
        say: varNegativeFillers,
        goto: "MAKE_SURE",
      },
    },
    {
      intent: inWhatToAsk,
      bot: {
        say: "",
        goto: "WHAT_TO_ASK",
      },
    },
    {
      intent: ANYTHING,
      bot: altAnswerFallback,
    },
  ],
}

export const makeSure: BotTurn = {
  label: "MAKE_SURE",
  say: "... then, are we done talking here?",
  user: [
    {
      intent: yes,
      bot: {
        say: "",
        goto: "GOODBYE",
      },
    },
    {
      intent: no,
      bot: {
        say: "",
      },
    },
    {
      intent: ANYTHING,
      bot: anythingMakeSure,
    },
  ],
}

const tellAllAboutAlbum: BridgeTurn = {
  label: "TELL_ALL_ABOUT_ALBUM",
  bot: {
    say: ["\"I'll take the long way 'round.\"", '"Where to, where to begin?"', '"Make your mind up, child"'],
    bot: {
      say: ["Let’s start with one of them.", "Let’s go one at a time."],
      bot: {
        say: ["Which album should I tell you more about?", "Which album do you want to hear more about?"],
        repair: true,
        user: [
          {
            intent: inAboutEveryKingdom,
            bot: {
              say: "",
              goto: "ABOUT_EVERYKINGDOM",
            },
          },
          {
            intent: inAboutIFWWW,
            bot: {
              say: "",
              goto: "ABOUT_IFWWW",
            },
          },
          {
            intent: inAboutNoondayDream,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
              goto: "QUERY_QUESTION",
            },
          },
          {
            intent: ANYTHING,
            bot: [
              {
                cond: { retryCount: 0 },
                bot: {
                  say: ["Uh-huh...", "Hmm hmm..."],
                  bot: {
                    say: "Sorry, I didn't get it. You have to tell me which album you want to know more about.",
                    repair: true,
                  },
                },
              },
              {
                cond: { retryCount: 1 },
                bot: {
                  say: ["Ehm...", "Uhm..."],
                  bot: {
                    say: "What was that? You have to tell me which album you want me to tell you more about.",
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
          },
        ],
      },
    },
  },
}

/*
const chooseAlbum: BridgeTurn = {
  label: "CHOOSE_ALBUM",
  bot: {
    say: ["Which one should I tell you more about?", "Which album do you want to hear more about?"],
    user: [
      {
        intent: inAboutEveryKingdom,
        bot: {
          say: "",
          goto: "ABOUT_EVERYKINGDOM",
        },
      },
      {
        intent: inAboutIFWWW,
        bot: {
          say: "",
          goto: "ABOUT_IFWWW",
        },
      },
      {
        intent: inAboutNoondayDream,
        bot: {
          say: "",
          goto: "ABOUT_NOONDAYDREAM",
        },
      },
      {
        intent: inTellAboutAllAlbum,
        bot: {
          say: "",
          goto: "TELL_ALL_ABOUT",
        },
      },
      {
        intent: no,
        bot: {
          say: ["Uh-huh...", "Hm hm..."],
          bot: {
            say: varAskNegative,
            goto: "QUERY_QUESTION",
          },
        },
      },
      {
        intent: ANYTHING,
        bot: [
          {
            cond: { retryCount: 0 },
            bot: {
              say: ["Uh-huh...", "Hmm hmm..."],
              bot: {
                say: "Sorry, I didn't get it. You have to tell me which album you want to know more about.",
                repair: true,
              },
            },
          },
          {
            cond: { retryCount: 1 },
            bot: {
              say: ["Ehm...", "Uhm..."],
              bot: {
                say: "What was that? You have to tell me which album you want me to tell you more about.",
                repair: true,
              },
            },
          },
          {
            say: "Would you like to ask me another question?",
            user: [
              {
                intent: no,
                bot: {
                  say: "I see...",
                  goto: "GOODBYE",
                },
              },
              {
                intent: yes,
                bot: [
                  {
                    say: varPositiveFillers,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
} */

export const whatToAsk: BotTurn = {
  label: "WHAT_TO_ASK",
  say: [
    "I could tell you about my mornings if you ask me.",
    "If you ask me about my friends' taste in music, I will tell you.",
  ],
  user: [
    {
      intent: inMean,
      bot: {
        say: "",
        goto: "WHAT_TO_ASK_YES",
      },
    },
    {
      intent: no,
      bot: {
        say: varNegativeFillers,
        goto: "BRIDGE",
      },
    },
    {
      intent: yes,
      bot: {
        say: "",
        bot: {
          label: "WHAT_TO_ASK_YES",
          say: "If you want to know the full story, I can tell you.",
          bot: {
            say: "All you have to do is ask.",
            bot: {
              say: 'You do this by typing "tell me about..." followed by what you want me to tell you about.',
              repair: true,
            },
          },
        },
      },
    },
    {
      intent: inAnotherQuestion,
      bot: anotherQuestion,
    },
    {
      intent: ANYTHING,
      bot: answerFallback,
    },
  ],
}

export const whatToAskQuery: BridgeTurn = {
  label: "WHAT_TO_ASK_QUERY",
  bot: {
    say: varWhatToAsk,
    bot: {
      say: 'If you\'re not sure what you want to talk about, type "help" and I will suggest a few topics.',
      user: [
        {
          intent: inWhatToAsk,
          bot: {
            say: "",
            goto: "WHAT_TO_ASK",
          },
        },
        {
          intent: ANYTHING,
          bot: altAnswerFallback,
        },
      ],
    },
  },
}

export const anythingNarrative: BridgeTurn = {
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: [
            "Do you think you could re-phrase that?",
            "Do you think you could ask that question again?",
            "Do you think you could ask me that again?",
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
            "One more time, please",
            "Please, come again.",
            "Could you please repeat that?",
            "Please, say that again.",
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

/*
export const anythingCustomStart: BridgeTurn = {
  label: "ANYTHING_START",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: 'Please type "yes", or "no", depending on if you want to hear more or not.',
          repair: true,
        },
    },
  },
    {
      cond: { retryCount: 1 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: 'Make sure you type either "yes" or "no", depending on if you are interested in hearing more about this or not.',
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

export const anythingCustomReal: BridgeTurn = {
  label: "ANYTHING_REAL",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: 'Please type "yes", or "no", depending on if you want to keep talking to me or not.',
          repair: true,
        },
    },
  },
    {
      cond: { retryCount: 1 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: 'Type "yes" if you still want to talk to me.',
          bot: {
            say: 'Type "no" if you want to end our conversation here.',
          repair: true,
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
}*/

export const smallTalk: BotTurn = {
  label: "SMALL_TALK",
  say: varAskSmallTalk,
  user: [
    {
      intent: yes,
      bot: {
        say: "Go on, ask me a question then.",
        repair: true,
      },
    },
    {
      intent: inWhatToAsk,
      bot: {
        say: "",
        goto: "WHAT_TO_ASK",
      },
    },
    {
      intent: ANYTHING,
      bot: answerFallback,
    },
    {
      intent: no,
      bot: {
        say: varNegativeFillers,
        goto: "MAKE_SURE",
      },
    },
  ],
}

/*
export const aboutAlbum: BridgeTurn = {
  label: "ABOUT_ALBUM",
  bot: {
    say: '"Every Kingdom" was released in 2011.',
    bot: {
      say: 'I recorded "I Forget Where We Were" in 2014.',
      bot: {
        say: 'Then, "Noonday Dream" is my latest album. It came out in June 2018.',
        bot: {
          say: ["Do you want to hear more about any of the albums?", "Should I go into detail about any of them?"],
          user: [
            {
              intent: inAboutEveryKingdom,
              bot: {
                say: "",
                goto: "ABOUT_EVERYKINGDOM",
              },
            },
            {
              intent: inAboutIFWWW,
              bot: {
                say: "",
                goto: "ABOUT_IFWWW",
              },
            },
            {
              intent: inAboutNoondayDream,
              bot: {
                say: "",
                goto: "ABOUT_NOONDAYDREAM",
              },
            },
            {
              intent: inTellAboutAllAlbum,
              bot: {
                say: "",
                goto: "TELL_ALL_ABOUT_ALBUM",
              },
            },
            {
              intent: no,
              bot: {
                say: ["Uh-huh...", "Hm hm..."],
                bot: {
                  say: varAskNegative,
                  goto: "QUERY_QUESTION",
                },
              },
            },
            {
              intent: yes,
              bot: {
                say: ["Cool.", "Alright."],
                goto: "CHOOSE_ALBUM",
              },
            },
          ],
        },
      },
    },
  },
}*/

export const botInitiatives = [
  askNegative,
  makeSure,
  tellAllAboutAlbum,
  whatToAsk,
  anotherQuestion,
  whatToAskQuery,
  anythingNarrative,
  smallTalk /*anythingCustomStart, anythingCustomReal*/,
]
