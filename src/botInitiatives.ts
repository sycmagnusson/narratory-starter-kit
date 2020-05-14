import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye, inAnotherQuestion, inWhatToAsk, inMean } from "./Intents/basicQuestions"
import { anythingMakeSure, generalAnswerFallback } from "./answerFallback"
import {
  varSorryAgain,
  varNegativeFillers,
  varWhatToAsk,
  varAskSmallTalk,
  varPositiveFillers,
} from "./variables"
import { inTonyTheMouse, inInspirationEK, inDifficultiesEK } from "./Intents/storiesMusic"

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
        say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
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
        say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
      bot: {
        say: "",
        goto: "WHAT_TO_ASK_YES",
      },
    }
    },
    {
      intent: ANYTHING,
      bot: generalAnswerFallback,
    },
  ],
}

export const movingOn: BridgeTurn = {
  label: "MOVING_ON",
  bot: {
    say: [
      "Then, what should we talk about instead?",
      "Then, what do you want to talk about instead?",
      "Then, what would you like to talk about instead?",
    ],
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
          bot: {
            say: varSorryAgain,
            repair: true,
          }
        },
        {
          intent: yes,
          bot: {
            say: ["Then, go ahead and ask me something."],
            repair: true,
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
          intent: inGoodbye,
          bot: {
            say: "",
            goto: "GOODBYE",
          },
        },
        {
          intent: inMean,
          bot: {
            say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
          bot: {
            say: 'Type "help" if you want me to suggest a few topics we can talk about.',
            bot: {
              say: 'Or type "no" if you feel like we are done talking here.',
              repair: true,
            },
          },
          },
        },
      ],
    },
  },
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
        repair: true,
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
      intent: ANYTHING,
      bot: generalAnswerFallback,
    },
    {
      intent: inMean,
      bot: {
        say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
      bot: {
        say: 'If you\'re not sure what you want to talk about, type "help" and I will suggest a few topics.',
        bot: {
          say: 'Or type "goodbye" if you feel like we are done talking here.',
          repair: true,
        },
      },
      },
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
        say: varPositiveFillers,
      },
    },
    {
      intent: ANYTHING,
      bot: anythingMakeSure,
    },
    {
      intent: inMean,
      bot: {
        say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
      bot: {
        say: 'Type "no" if you want to keep talking to me',
        bot: {
          say: 'Or type "goodbye" if you feel like we are done talking for now.',
          repair: true,
      }
    },
    },
}
  ]
}

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
      },
    },
    {
      intent: yes,
      bot: {
        say: "",
        bot: {
          label: "WHAT_TO_ASK_YES",
          say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
        bot: {
          say: "If you want to know the full story, I can tell you.",
          bot: {
            say: "All you have to do is ask.",
            bot: {
              say: 'You do this by typing "tell me about..." followed by what you want me to tell you about.',
              repair: true,
            },
          }
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
      bot: generalAnswerFallback,
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
          intent: inGoodbye,
          bot: {
            say: "",
            goto: "GOODBYE",
        }
      },
        {
          intent: ANYTHING,
          bot: {
            say: varSorryAgain,
            repair: true,
        },
      }
      ],
    },
  },
}

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
      bot: {
        say: varSorryAgain,
        repair: true,
      }
    },
    {
      intent: no,
      bot: {
        say: varNegativeFillers,
        goto: "MAKE_SURE",
      },
    },
    {
      intent: inMean,
      bot: {
        say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
      bot: {
        say: 'If you\'re not sure what you want to talk about, type "help" and I will suggest a few topics.',
        bot: {
          say: 'Or type "goodbye" if you feel like we are done talking here.',
          repair: true,
        }
        }
      }
    }
  ],
}

export const queryInspirationTonyDifficulties: BridgeTurn = {
  label: "TONY_INSPIRATION_DIFFICULTIES_QUERY",
  bot: {
    say: '"I watched the host drink all the wind and now she rambles through the who\'ve and who have nots...',
  bot: {
    say: '... sorry, could you please remind me of what I was going to tell you?',
    user: [
      {
        intent: inTonyTheMouse,
        bot: {
          say: "",
          goto: "TONY_THE_MOUSE",
        }
      },
      {
        intent: inInspirationEK,
        bot: {
          say: "",
          goto: "INSPIRATION_EK"
        }
      },
      {
        intent: inDifficultiesEK,
        bot: {
          say: "",
          goto: "DIFFICULTIES_EK",
        }
      }
    ]
  }
  }
}


export const botInitiatives = [
  askNegative,
  makeSure,
  whatToAsk,
  anotherQuestion,
  whatToAskQuery,
  smallTalk,
  movingOn,
  queryInspirationTonyDifficulties
]
