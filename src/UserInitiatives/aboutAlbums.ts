import {
  inAboutEveryKingdom,
  inNameOfFirstAlbum,
  inHaveFirstAlbum,
  inReleaseDateFirstAlbum,
  inNameOfSecondAlbum,
  inHaveSecondAlbum,
  inReleaseDateSecondAlbum,
  inAboutNoondayDream,
  inNameOfThirdAlbum,
  inHaveThirdAlbum,
  inReleaseDateThirdAlbum,
  inNameOfLatestAlbum,
  inReleaseDateLatestAlbum,
  inAboutAlbum,
  inHowManyAlbum,
  inReleaseDateEveryKingdom,
  inAboutIFWWW,
  inReleaseDateIFWWW,
  inTellAboutAllAlbum,
  inReleaseDateNoondayDream,
} from "../Intents/aboutAlbums"
import { UserTurn, ANYTHING } from "narratory"
import { varContinueAlbum, varAskPositive, varAskNegative, varPositiveFillers, varSorryAgain } from "../variables"
import { yes, no, inMean, inGoodbye, inWhatToAsk } from "../Intents/basicQuestions"

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
          bot: {
            say: varAskPositive,
            goto: "QUERY_QUESTION",
          },
        },
      },
    },
  },
  {
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
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varAskNegative,
                goto: "QUERY_QUESTION",
              },
            },
          },
          {
            intent: inMean,
            bot: {
              say: "",
              bot: {
                label: "WDYM_EK",
                say: 'Type "yes" if you want me to tell you more about Every Kingdom.',
                bot: {
                  say: 'Type "no" or "goodbye" if you feel like you\'re done talking to me.',
                  bot: {
                    say: "Or ask me a different question.",
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
                          say: ["Uh-huh...", "Hm hm..."],
                          goto: "GOODBYE",
                        },
                      },
                      {
                        intent: inGoodbye,
                        bot: {
                          say: ["Uh-huh...", "Hm hm..."],
                          goto: "GOODBYE",
                        },
                      },
                      {
                        intent: inWhatToAsk,
                        bot: {
                          say: "",
                          goto: "WHAT_TO_ASK"
                        }
                      },
                      {
                        intent: ANYTHING,
                        bot: [
                          {
                            cond: { retryCount: 0 },
                            bot: {
                              say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
                              bot: {
                                say: 'Please type "yes", "no" or "goodbye".',
                                bot: {
                                  say: "Or ask me another question.",
                                repair: true,
                              },
                            },
                          },
                        },
                          {
                            cond: { retryCount: 1 },
                            bot: {
                              say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
                              bot: {
                                say: 'Either type "yes", "no" or "goodbye" or ask me something else.',
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
  {
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
  },
  {
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
  },
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
  },
  {
    intent: inAboutIFWWW,
    bot: {
      say: ["Oh, ”I Forget Where We Were”.", "Right. ”I Forget Where We Were”."],
      bot: {
        label: "ABOUT_IFWWW",
        say: "I will add more info about this I Forget Where We Were soon.",
        bot: {
          bot: {
            say: ["So.", "Alright.", "Cool, cool"],
            bot: {
              say: varAskPositive,
              goto: "QUERY_QUESTION",
            },
          },
        },
      },
    },
  },
  {
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
  },
  {
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
  },
  {
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
  },
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
  },
  {
    intent: inAboutNoondayDream,
    bot: {
      say: ["Oh, ”Noonday Dream”.", "Right. ”Noonday Dream”."],
      bot: {
        label: "ABOUT_NOONDAYDREAM",
        say: "I will add more info about this Noonday Dream soon.",
        bot: {
          say: ["So.", "Alright.", "Cool, cool"],
          bot: {
            say: varAskPositive,
            goto: "QUERY_QUESTION",
          },
        },
      },
    },
  },
  {
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
  },
  {
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
  },
  {
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
  },
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
  },
  {
    intent: inReleaseDateLatestAlbum,
    bot: {
      say: ['Hmm. Must be the ”Noonday Dream". That one came out in 2018.', 'That\'s back in 2018. "Noonday Dream".'],
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
  },
  {
    intent: inAboutAlbum,
    bot: {
      say: "",
      bot: {
        label: "ABOUT_ALBUM",
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
  },
]

export const UIAboutAlbums = [aboutAlbums]
