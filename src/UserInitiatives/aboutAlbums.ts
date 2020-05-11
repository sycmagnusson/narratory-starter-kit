import {
  inAboutEveryKingdom,
  inAboutNoondayDream,
  inNameOfLatestAlbum,
  inReleaseDateLatestAlbum,
  inHowManyAlbum,
  inReleaseDateEveryKingdom,
  inAboutIFWWW,
  inReleaseDateIFWWW,
  inReleaseDateNoondayDream,
  inAboutAlbum,
} from "../Intents/aboutAlbums"
import { UserTurn, ANYTHING } from "narratory"
import { varContinueAlbum, varAskNegative, varPositiveFillers, varNegativeFillers } from "../variables"
import { yes, no, inMean, inGoodbye } from "../Intents/basicQuestions"
import { answerFallback } from "../answerFallback"

export const aboutAlbums: UserTurn[] = [
  {
    intent: inAboutEveryKingdom,
    bot: {
      say: ["Oh, ”Every Kingdom”.", "Right. ”Every Kingdom”."],
      bot: {
        label: "ABOUT_EVERYKINGDOM",
        say: "I will add more info about this Every Kingdom soon.",
        bot: {
          say: varPositiveFillers,
        },
      },
    },
  },
  /* {
    intent: inNameOfFirstAlbum,
    bot: {
      say: ["”Every Kingdom”."],
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_EVERYKINGDOM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              bot: {
                label: "WDYM_EK",
                say: 'Type "yes" if you want me to tell you more about Every Kingdom.',
                bot: {
                  say: 'Type "no" if you want us to move on to another topic.',
                  bot: {
                    say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                    repair: true,
                    user: [
                      {
                        /* intent: yes,
                        bot: {
                          say: "",
                          goto: "ABOUT_EVERYKINGDOM",
                        },
                      },
                      {
                        intent: no,
                        bot: {
                          say: varNegativeFillers,
                        },
                      },
                      {
                        intent: inGoodbye,
                        bot: {
                          say: ["Uh-huh...", "Hm hm..."],
                          goto: "GOODBYE",
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    },
  },*/
  /*{
    intent: inHaveFirstAlbum,
    bot: {
      say: "Yeah. ”Every Kingdom”.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_EVERYKINGDOM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_EK",
            },
          },
        ],
      },
    },
  },*/
  /* {
    intent: inReleaseDateFirstAlbum,
    bot: {
      say: "2011. That's when ”Every Kingdom” came out.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_EVERYKINGDOM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_EK",
            },
          },
        ],
      },
    },
  },*/
  {
    intent: inReleaseDateEveryKingdom,
    bot: {
      say: "”Every Kingdom” came out in 2011.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_EVERYKINGDOM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inGoodbye,
            bot: {
              say: "",
              goto: "GOODBYE",
            }
          },
          {
            intent: inMean,
            bot: {
              say: 'Type "yes" if you want me to tell you more about Every Kingdom.',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  repair: true,
                }
              }
            },
          },
        ],
      },
    },
  },
  {
    intent: inAboutIFWWW,
    bot: {
      say: ["Oh, ”I Forget Where We Were”.", "Right. ”I Forget Where We Were”."],
      bot: {
        say: "",
        label: "ABOUT_IFWWW",
        bot: {
          say: "I will add more info about this I Forget Where We Were soon.",
          bot: {
            say: varPositiveFillers,
          },
        },
      },
    },
  },
  /* {
    intent: inNameOfSecondAlbum,
    bot: {
      say: "”I Forget Where We Were”.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_IFWWW",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              bot: {
                label: "WDYM_IFWWW",
                say: 'Type "yes" if you want me to tell you more about I Forget Where We Were.',
                bot: {
                  say: 'Type "no" if you want us to move on to another topic.',
                  bot: {
                    say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                    repair: true,
                    user: [
                      {
                        intent: inGoodbye,
                        bot: {
                          say: ["Uh-huh...", "Hm hm..."],
                          goto: "GOODBYE",
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    },
  },*/
  /* {
    intent: inHaveSecondAlbum,
    bot: {
      say: "Yeah. ”I Forget Where We Were”.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_IFWWW",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_IFWWW",
            },
          },
        ],
      },
    },
  },*/
  /* {
    intent: inReleaseDateSecondAlbum,
    bot: {
      say: "2014. That's when ”I Forget Where We Were” came out.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_IFWWW",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_IFWWW",
            },
          },
        ],
      },
    },
  },*/
  {
    intent: inReleaseDateIFWWW,
    bot: {
      say: "”I Forget Where We Were” came out in 2014.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_IFWWW",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inGoodbye,
            bot: {
              say: "",
              goto: "GOODBYE",
            }
          },
          {
            intent: inMean,
            bot: {
              say: 'Type "yes" if you want me to tell you more about I Forget Where We Were.',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  repair: true,
                }
              }
            },
          },
        ],
      },
    },
  },
  {
    intent: inAboutNoondayDream,
    bot: {
      say: ["Oh, ”Noonday Dream”.", "Right. ”Noonday Dream”."],
      bot: {
        label: "ABOUT_NOONDAYDREAM",
        say: "I will add more info about this Noonday Dream soon.",
        bot: {
          say: varPositiveFillers,
        },
      },
    },
  },
  /* {
    intent: inNameOfThirdAlbum,
    bot: {
      say: "”Noonday Dream”.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
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
        ],
      },
    },
  },*/
  /*{
    intent: inHaveThirdAlbum,
    bot: {
      say: "Yeah. ”Noonday Dream”.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
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
        ],
      },
    },
  },*/
  /* {
    intent: inReleaseDateThirdAlbum,
    bot: {
      say: "2018. That's when ”Noonday Dream” came out.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
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
        ],
      },
    },
  },*/
  {
    intent: inReleaseDateNoondayDream,
    bot: {
      say: "”Noonday Dream” came out in 2018.",
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inGoodbye,
            bot: {
              say: "",
              goto: "GOODBYE",
            }
          },
          {
            intent: inMean,
            bot: {
              say: "",
            bot: {
              label: "WDYM_ND",
              say: 'Type "yes" if you want me to tell you more about Noonday Dream.',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  repair: true,
                }
              }
              }
            },
          },
        ],
      },
    },
  },
  {
    intent: inNameOfLatestAlbum,
    bot: {
      say: 'That\'s "Noonday Dream".',
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: inGoodbye,
            bot: 
            {
              say: "",
              goto: "GOODBYE",
            }
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_ND"    
          },
    },
  ]
}
    }
  },
  {
    intent: inReleaseDateLatestAlbum,
    bot: {
      say: ['Hmm. Must be ”Noonday Dream". That one came out in 2018.', 'That\'s back in 2018. "Noonday Dream".'],
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_ND",
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
        ],
      },
    },
  },
  {
    intent: inAboutAlbum,
    bot: {
      say: "",
      bot: {
        label: "ABOUT_ALBUM",
        say: 'My first album "Every Kingdom" was released in 2011.',
        bot: {
          say: 'Then in 2014, I recorded "I Forget Where We Were".',
          bot: {
            say: '"Noonday Dream" is my third, and latest album. It came out in June 2018.',
            bot: {
              say: [
                "Do you want to hear more about any of the albums?",
                "Should I go into detail about any of them?",
                "Should I tell you more about any of the albums?",
                "Do you want me to tell you more about any of the albums?",
              ],
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
                /*{
                  intent: inTellAboutAllAlbum,
                  bot: {
                    say: "",
                    goto: "TELL_ALL_ABOUT_ALBUM",
                  },
                },*/
                {
                  intent: no,
                  bot: {
                      say: varNegativeFillers,
                    },
                  },
                {
                  intent: ANYTHING,
                  bot: answerFallback,
                },
                {
                  intent: yes,
                  bot: {
                    say: "",
                    goto: "WDYM_ABOUTALBUM",
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
                    say: "",
                    bot: {
                      label: "WDYM_ABOUTALBUM",
                      say: "If you want to hear some more information about an album, type the name of that album.",
                      bot: {
                        say: 'Type "no" if you want us to move on to another topic.',
                        bot: {
                          say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                          repair: true,
                          user: [
                            {
                              intent: no,
                              bot: varNegativeFillers,
                            },
                          ],
                        },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  {
    intent: inHowManyAlbum,
    bot: {
      say: ["Three so far.", "So far, three."],
      bot: {
        say: "Want to know more about them?",
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_ALBUM",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
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
              say: '"Type "yes" if you want to know about the albums I have released so far.',
              bot: {
                say: 'Type "no" if you want to move on to another topic.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  repair: true,
                },
              },
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallback,
          },
        ],
      },
    },
  },
]

export const UIAboutAlbums = [aboutAlbums]
