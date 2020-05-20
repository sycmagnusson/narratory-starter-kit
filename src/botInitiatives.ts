import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye, inAnotherQuestion, inWhatToAsk, inMean } from "./Intents/smallTalk"
import { anythingMakeSure, generalAnswerFallback } from "./answerFallback"
import {
  varSorryAgain,
  varNegativeFillers,
  varWhatToAsk,
  varAskSmallTalk,
  varPositiveFillers,
} from "./variables"

export const anotherQuestion: BotTurn = {
  label: "ANOTHER_QUESTION",
  //EXAMPLE-QUERIES
  say: ["Sure, you can ask me about my first musical memory.", 
  "For sure. My mum uses Spotify in an interesting way. Do you want me to tell you about it?",
  "I can tell you what I think about my friend's music taste, if you ask me.",
  "Alright. Ask me about Mazzy Star.",
  "Do you want to hear about the guitar teacher I used to jam with?"],
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
        goto: "WDYM_WHATTOASK",
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
        goto: "WDYM_WHATTOASK",
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
        say: "Alright",
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

export const whatToAsk: BridgeTurn = {
  label: "WHAT_TO_ASK",
  bot:
  {
    say: [
      "Hmm-hmm...", "Hmm..."],
    bot: {
      //EXAMPLE-QUERIES
  say: ["How about you ask me wherebouts I grew up?", "Try and ask me what I think about university."],
  user: [
    {
      intent: inMean,
        bot: {
          say: "", 
        bot: {
          label: "WDYM_WHATTOASK",
        say: 'Just type "tell me about" followed by what you want me to tell you.',
        goto: "WHAT_TO_ASK_YES",
        repair: true,
      },
    }
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
        say: "Go ahead then.",
        bot: {
          say: 'Type "tell me about" followed by what you want me to tell you.'
          }
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
  }
}
    
export const howBuilt: BridgeTurn = {
  bot: {
    say: "hi",
    bot: {
      label: "HOW_BUILT",
    say:
      "I'm a scripted bot, which means that I pick up pre-written keywords in conversations with people I talk to.",
    bot: {
      say: "These keywords helps me to decide what to answer.",
      bot: {
        //EXAMPLE-QUERIES
        say: ['For example, if you ask me "when did you release your first album?", or "how many EPs have you released so far?"...',
        'For example, if you ask me "what\'s the name of your first EP", or "when did you release your latest album"...'],
        bot: {
          say: "... well, you'll find out what I'd answer if you ask me about it.",
          bot: {
            say: 'Try and type a question for me.',
            bot: {
              say: 'You do this by typing "tell me about" followed by what you want me to tell you.',
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
                  goto: "WDYM_WHATTOASK",
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
                  goto: "WDYM_WHATTOASK",
                },
              }
              },
              {
                intent: ANYTHING,
                bot: generalAnswerFallback,
              },
            ],
          }          
        },
      },
    },
  },
}
}
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

export const queryTonyInspirationyDifficulties: BridgeTurn = {
  label: "TONY_INSPIRATION_DIFFICULTIES_QUERY",
  bot: {
    say: '"I watched the host drink all the wind and now she rambles through the who\'ve and who have nots...',
  bot: {
    say: '... sorry, could you please remind me of what I was going to tell you?',
    user: [
      {
        intent: yes,
        bot: 
        {
          say: "",
          goto: "WDYM_TID",
        },
      },
      {
        intent: no,
        bot: 
        {
          say: varNegativeFillers,
        },
      },
      {
        intent: ANYTHING,
        bot: generalAnswerFallback,
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
            bot: {
              label: "WDYM_TID",
              say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
            bot: {
              say: 'I was supposed to tell you a story, but "I forget where we were."',
              bot: {
                say: "Could you please remind me about what I was going to talk about?",
                bot: {
                say: 'I think it was something about our inspiration for setting up a studio in the barn, the difficiulties we faced whilst recording "Every Kingdom"...',
                bot: {
                  say: '... or was it Tony, the mouse?',
                bot: {
                  say: 'If you ask me about it, then I\'m sure it will come back to me.',
                  bot: {
                    say: 'Go ahead and type "tell me about" followed by what you want me to tell you.',
                  repair: true,
              },
            },
            },
          },
        },
      }
    },
  },
},
    ]
  }
  }
}

export const queryOpenMicDroppingOut: BridgeTurn = {
  label: "OPENMIC_DROPPINGOUT",
  bot: {
    say: '"I may be floating through memories, with maybe the broken wings on a butterfly..."',
  bot: {
    say: '... sorry, could you please remind me of what I was going to tell you?',
    user: [
      {
        intent: yes,
        bot: 
        {
          say: "",
          goto: "WDYM_OD",
        },
      },
      {
        intent: no,
        bot: 
        {
          say: varNegativeFillers,
        },
      },
      {
        intent: ANYTHING,
        bot: generalAnswerFallback,
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
            bot: {
              label: "WDYM_OD",
              say: ["Er...", "Erm...", "So...", "Erm, so...", "So, erm..."],
            bot: {
              say: 'I was supposed to tell you a story, but "I forget where we were."',
              bot: {
                say: "Could you please remind me about what I was going to talk about?",
                bot: {
                  say: "I think it was something about the open mics at uni, or why I decided to drop out before I finished my degree.",
              bot: {
                say: 'If you ask me about it, I\'m sure it will come back to me.', 
                bot: {
                  say: 'Go ahead and type "tell me about" followed by what you want me to tell you.',
                repair: true,
              },
            },
            },
          },
        },
      },
      }
    },
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
  queryTonyInspirationyDifficulties,
  queryOpenMicDroppingOut,
  howBuilt
]
