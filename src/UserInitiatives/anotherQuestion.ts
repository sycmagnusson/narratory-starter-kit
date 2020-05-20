import { UserTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye, inMean } from "../Intents/smallTalk"
import { inFirstMusicalMemory, inMumUseSpotify, inDoInTheMorning, inFriendsMusicTaste, inMazzyStar, inAboutSchool } from "../Intents/whatToAsk"
import { varPositiveFillers, varNegativeFillers } from "../variables"
import { answerFallbackQuestion } from "../answerFallback"

export const anotherQuestionQueries: UserTurn [] = [
  {
  intent: inFirstMusicalMemory,
  bot: {
    say: "I mostly remember records and stuff that used to be on.",
    /*bot: {
      say: varContinue,
      user: [
        {
          intent: yes,*/
          bot: {
            say: "My folks used to put music on when I went to bed.",
            bot: {
              say: "So I got...",
              bot: {
                say: "... James Taylor.",
                bot: {
                  say: "Sweet baby James records, those were my bedtime tunes.",
                  bot: {
                    say: varPositiveFillers,
                  },
                },
              },
            },
          /*},
        },
        {
          intent: no,
          bot: {
            say: varNegativeFillers,
          }
        },
      ],*/
    },
  }
},
{
  intent: inMumUseSpotify,
  bot: {
    say: "Yeah, I’ve got my mum onto Spotify.",
    bot: {
      say: "She hasn’t quite grasped how to use it though.",
      /*bot: {
        say: varContinue,
        user: [
          {
            intent: yes,*/
            bot: {
              say: "She sort of treats it like a record store.",
              bot: {
                say: "Anything new she’s heard of, she will just put the whole album on another.",
                bot: {
                  say: "Like iTunes.",
                  bot: {
                    say: "Every now and then though, she keeps popping up on the odd gem from, I don’t know.",
                    bot: {
                      say: "An odd Donovan song or something.",
                      bot: {
                        say: varPositiveFillers,
                      },
                    },
                  },
                },
              },
            },
         /*},
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
        ],
      },*/
    },
  }
},
/*{
  intent: inDoInTheMorning,
  bot: {
    say: "",
    bot: {
      label: "DO_IN_THE_MORNING",
      say: "I think I sort of pick and choose which mornings I’m good on.",
    /*bot: {
      say: varContinue,
      user: [
        {
          intent: yes,
          bot: {
            say: "I’m mostly bad in the mornings.",
            bot: {
              say: "You know.",
              bot: {
                say: "That Winston Churchill-philosophy of just, reserving your energies.",
                bot: {
                  say: "Once or twice, I’ll be alright though.",
                  bot: {
                    say: varPositiveFillers,
                  },
                },
              },
            },
          },
        /*},
        {
          intent: no,
          bot: {
            say: varNegativeFillers,
          },
        },
      ],
    },
  },
  }
},*/
{
  intent: inFriendsMusicTaste,
  bot: {
    say: "Most of my friends listen to albums.",
    bot: {
      say: "Sort of.",
      /*bot: {
        say: varContinue,
        user: [
          {
            intent: yes,*/
            bot: {
              say: "There's kind of an eclectic bunch down Totnes.",
              bot: {
                say: "Some of them have great music taste.",
                bot: {
                  say: "Some of them have a refit music taste.",
                  bot: {
                    say: "Yeah.",
                    bot: {
                      say: "That’s any sort of friendship group.",
                      bot: {
                        say: varPositiveFillers,
                      },
                    },
                  },
                },
              },
            },
          /*},
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
        ],
      },*/
    },
  },
},
{
  intent: inMazzyStar,
  bot: {
    say: "Mazzy Star was kind of quite big when I was a kid, yeah.",
    bot: {
      say: "My parents used to play “Fade Into You“.",
      bot: {
        say: "I actually re-discovered her a while back.",
        bot: {
          say: "Great voice.",
          bot: {
            say: varPositiveFillers,
          },
        },
      },
    },
  }, 
},
/*{
  intent: inAboutCollege,
  bot: {
    say: "Oh, college.",
    bot: {
      say: "I've got a lot of stories from those days.",
  bot: {
    say: ["Do you want to hear about the open mics I did back then?", "I actually dropped out early from there. Do you want to know why?"],
    user: [
      {
        intent: yes,
        bot: {
          say: "",
          goto: "OPENMIC_DROPPINGOUT",        
        }
      },
      {
        intent: no,
        bot: {
          say: varNegativeFillers,
        },
      },
      {
        intent: ANYTHING,
        bot: answerFallbackQuestion,
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
          say:
            'Type "yes" if you want me to recite some old memories.',
          bot: {
            say: 'Type "no" if you want us to talk about something else.',
            bot: {
              say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
              repair: true,
            },
          },
        },
      },
    ],
  },
},
},
},
/*{
  intent: inAboutUni,
  bot: {
    say: "So, uni.",
    bot: {
      say: "I've got a lot of stories from there.",
      bot: {
        say: ["Do you want to hear about the open mics I did back then?", "I actually dropped out of uni. Do you want to know why?"],
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "OPENMIC_DROPPINGOUT",        
            }
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallbackQuestion,
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
              say:
                'Type "yes" if you want me to recite some old memories.',
              bot: {
                say: 'Type "no" if you want us to talk about something else.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  repair: true,
                },
              },
            },
          },
        ],
      }
  }
  }
},*/
{
  intent: inAboutSchool,
  bot: {
    say: "",
  bot: {
    label: "ABOUT_SCHOOL",
    say: "School, right.",
    bot: {
      say: "I've got a lot of stories from there.",
      bot: {
        say: ["Do you want to hear about the guitar teacher I used to jam with as a kid?"],
        user: [
          {
            intent: yes,
            bot: {
              say: "",       
            }
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallbackQuestion,
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
              say:
                'Type "yes" if you want to hear about the guitar teacher I had as a kid.',
              bot: {
                say: 'Type "no" if you want us to talk about something else.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  repair: true,
                },
              },
            },
          },
        ],
      }
  }
}
  }
}
]

export const UIAnotherQuestionQueries = [anotherQuestionQueries]