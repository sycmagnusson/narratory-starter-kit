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
  inReleaseDateGamesInTheDark,
  inReleaseDateTheseWaters,
  inReleaseDateOldPine,
  inAboutBHWRDLIVE,
  inReleaseDateBHWRDLIVE,
  inReleaseDateTheBurghIsland,
  inNameOfLatestEP,
  inReleaseDateLatestEP,
  inAboutEP,
  inAboutGamesInTheDark,
  inAboutTheBurghIsland,
  inHowManyEP,
  inAboutTheseWaters,
  inAboutOldPine,
} from "../Intents/aboutMusic"
import { UserTurn, ANYTHING } from "narratory"
import { varContinueAlbum, varAskNegative, varPositiveFillers, varNegativeFillers, varContinueEP } from "../variables"
import { yes, no, inMean, inGoodbye } from "../Intents/basicQuestions"
import { answerFallbackQuestion, answerFallbackAlbums, answerFallbackEP } from "../answerFallback"

export const aboutMusic: UserTurn[] = [
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
              say: 'Type "yes" if you want me to tell you more about Every Kingdom.',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
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
  {
    intent: inAboutEveryKingdom,
    bot: {
      say: ["Oh, ”Every Kingdom”.", "Right. ”Every Kingdom”."],
      bot: {
        label: "ABOUT_EVERYKINGDOM",
        say: "It took like a year and a half for us to record.",
        bot: {
          say: "We saw every season, and then we started seeing all the seasons again.",
          bot: {
            say: "We were in and out of the studio playing a lot of live stuff, and we kept coming back from touring, being like...",
              bot: {
                say: '... "we’ll do one more song".',
                bot: {
                  say: "It turned into a huge melting pot. ",
                  bot: {
                    say: "We had around 22 songs, then it got all whittled down and we ended up with a record.",
                    bot: {
                      say: ['"Every Kingdom" was recorded in a barn. Do you want to hear more about it?',],
                    user: [
                      {
                        intent: yes,
                        bot: {
                          say: "",
                        bot: {
                          label: "RECORDING_BARN",
                          say: "Actually, it was just a concious effort to record near home.",
                          bot: {
                            say: "Because for me, the big thing was just being near home.",
                            bot: {
                              say: "It wasn’t like running away from anywhere...",
                              bot: {
                              say: "... or I guess it was probably running away from London.",
                              bot: {
                                say: "I don’t wanna be in London for more than five days, heh.",
                                bot: {
                                  say: "There's more to this story. Do you want me to go on?",
                              user: [
                                {
                                  intent: yes,
                                  bot: {
                                    say: "So, in the winter, we had an alarm clock at 4 o’clock in the morning.",
                                    bot: {
                                      say: "Just to make sure that someone would get up and put a log on the fire.",
                                      bot: {
                                        say: "Otherwise, it would be really cold when we got up...",
                                        bot: {
                                          say: "... and everything would freeze.",
                                          bot: {
                                            say: ["Hey, came to think of it. I've got this story about Tony, the mouse. Do you want to hear about him?",
                                            "Apart from running away from London, do you want to hear of what inspired us to record in a barn?",
                                            'Recording in a studio was new to all of us. Do you want me to tell you about the some of the difficulties we faced when recording "Every Kingdom"?'],
                                            user: [
                                              {
                                                intent: yes,
                                                bot: {
                                                  say: "",
                                                  goto: "TONY_INSPIRATION_DIFFICULTIES_QUERY",
                                                }
                                              },
                                              {
                                                intent: no, 
                                                bot: {
                                                  say: varNegativeFillers
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
                                                say: 'Type "yes" if you want me to keep reciting old memories.',
                                                bot: {
                                                  say: 'Type "no" if you want us to talk about something else.',
                                                  bot: {
                                                    say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                                                    repair: true,
                                                  },
                                                },
                                              },
                                            },
                                            ]
                                            }
                                          }
                                        }
                                      }
                                    },
                                },
                                {
                                  intent: no,
                                  bot: {
                                    say: varNegativeFillers
                                  }
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
                                    say: 'Type "yes" if you want me to tell you more about the recording process of "Every Kingdom".',
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
                        },
                      },
                    },
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
                          say: 'Type "yes" if you want me to tell you about why we recorded "Every Kingdom" in a barn.',
                          bot: {
                            say: 'Type "no" if you want us to move on to another topic.',
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
          },
        },
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
              say: 'Type "yes" if you want me to tell you more about I Forget Where We Were.',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
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
              say: "",
              bot: {
                label: "WDYM_ND",
                say: 'Type "yes" if you want me to tell you more about Noonday Dream.',
                bot: {
                  say: 'Type "no" if you want us to move on to another topic.',
                  bot: {
                    say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                    repair: true,
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
            bot: {
              say: "",
              goto: "GOODBYE",
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallbackQuestion,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_ND",
            },
          },
        ],
      },
    },
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
            bot: answerFallbackQuestion,
          },
          {
            intent: inGoodbye,
            bot: {
              say: "",
              goto: "GOODBYE",
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
        say: 'My first album "Every Kingdom" was released in 2011.',
        bot: {
          say: 'Then in 2014, I recorded "I Forget Where We Were".',
          bot: {
            say: '"Noonday Dream" is my third, and latest album. It came out in June 2018.',
            bot: {
              say: [
                "Do you want to hear more about any of the albums?",
                "Should I go into detail about any of the albums?",
                "Should I tell you more about any of the albums?",
                "Do you want me to tell you more about any of the albums?",
              ],
              user: [
                {
                  intent: inAboutEveryKingdom,
                  bot: {
                    say: "Oh, Every Kingdom.",
                    goto: "ABOUT_EVERYKINGDOM",
                  },
                },
                {
                  intent: inAboutIFWWW,
                  bot: {
                    say: "Oh, I Forget Where We Were.",
                    goto: "ABOUT_IFWWW",
                  },
                },
                {
                  intent: inAboutNoondayDream,
                  bot: {
                    say: "Oh, Noonday Dream.",
                    goto: "ABOUT_NOONDAYDREAM",
                  },
                },
                {
                  intent: no,
                  bot: {
                    say: varNegativeFillers,
                    goto: "WHAT_TO_ASK_QUERY",
                  },
                },
                {
                  intent: ANYTHING,
                  bot: answerFallbackAlbums,
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
              say: '"Type "yes" if you want to know more about the albums I have released so far.',
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
            bot: answerFallbackQuestion,
          },
        ],
      },
    },
  },

  {
    intent: inReleaseDateGamesInTheDark,
    bot: {
      say: "”Games In The Dark” came out in 2008.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_GAMESINTHEDARK",
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
              say: 'Type "yes" if you want me to tell you more about "Games In The Dark"',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
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
  {
    intent: inAboutGamesInTheDark,
    bot: {
      say: ["Oh, ”Games In The Dark”.", "Right. ”Games In The Dark”."],
      bot: {
        label: "ABOUT_GAMESINTHEDARK",
        say: "I will add more info about this Games In The Dark soon.",
        bot: {
          say: varPositiveFillers,
        },
      },
    },
  },
  {
    intent: inReleaseDateTheseWaters,
    bot: {
      say: "”These Waters” came out in 2009.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THESEWATERS",
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
              say: 'Type "yes" if you want me to tell you more about "These Waters".',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
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
  {
    intent: inAboutTheseWaters,
    bot: {
      say: ["Oh, ”These Waters”.", "Right. ”These Waters”."],
      bot: {
        label: "ABOUT_THESEWATERS",
        say: "I will add more info about this These Waters soon.",
        bot: {
          say: varPositiveFillers,
        },
      },
    },
  },
  {
    intent: inReleaseDateOldPine,
    bot: {
      say: "”Old Pine” came out in 2010.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_OLDPINE",
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
              say: 'Type "yes" if you want me to tell you more about "Old Pine"',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
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
  {
    intent: inAboutOldPine,
    bot: {
      say: ["Oh, ”Old Pine”.", "Right. ”Old Pine”."],
      bot: {
        label: "ABOUT_OLDPINE",
        say: "I will add more info about this Old Pine soon.",
        bot: {
          say: varPositiveFillers,
        },
      },
    },
  },
  {
    intent: inReleaseDateBHWRDLIVE,
    bot: {
      say: "”Ben Howard Live” came out in 2011.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_BHWRDLIVE",
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
              say: 'Type "yes" if you want me to tell you more about "Ben Howard Live".',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
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
  {
    intent: inAboutBHWRDLIVE,
    bot: {
      say: ["Oh, ”Ben Howard Live”.", "Right. ”Ben Howard Live”."],
      bot: {
        label: "ABOUT_BHWRDLIVE",
        say: "I will add more info about this Ben Howard Live soon.",
        bot: {
          say: "Are you interested in knowing if I have any upcoming concerts?",
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "LIVE_SHOWS",
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
                say: 'Type "yes" if you are interested in hearing if I am doing any live-shows any soon',
                bot: {
                  say: 'Type "no" if you want to move on to another topic.',
                  bot: {
                    say: 'Or type "goodbye" if you feel like you\'re done talking to me',
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
  {
    intent: inReleaseDateTheBurghIsland,
    bot: {
      say: "”The Burgh Island” came out in 2011.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
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
              say: "",
              bot: {
                label: "WDYM_THEBURGHISLAND",
                say: 'Type "yes" if you want me to tell you more about "The Burgh Island".',
                bot: {
                  say: 'Type "no" if you want us to move on to another topic.',
                  bot: {
                    say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                    repair: true,
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
    intent: inAboutTheBurghIsland,
    bot: {
      say: ["Oh, ”The Burgh Island”.", "Right. ”The Burgh Island”."],
      bot: {
        label: "ABOUT_THEBURGHISLAND",
        say: "I will add more info about The Burgh Island soon.",
        bot: {
          say: varPositiveFillers,
        },
      },
    },
  },
  {
    intent: inNameOfLatestEP,
    bot: {
      say: "That's ”The Burgh Island”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
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
            intent: ANYTHING,
            bot: answerFallbackQuestion,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_THEBURGHISLAND",
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateLatestEP,
    bot: {
      say: [
        "Hmm. Must be the ”The Burgh Island”. That one came out in 2011.",
        "That's back in 2011. ”The Burgh Island”.",
      ],
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
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
            bot: answerFallbackQuestion,
          },
          {
            intent: inGoodbye,
            bot: {
              say: "",
              goto: "GOODYBYE",
            },
          },
        ],
      },
    },
  },
  {
    intent: inAboutEP,
    bot: {
      label: "ABOUT_EP",
      say: "",
      bot: {
        say: "I released my first EP back in 2008. It’s called “Games in The Dark.”",
        bot: {
          say: "In 2009, I recorded my second EP “These Waters”.",
          bot: {
            say: "“Old Pine” was my third EP. It came out in 2010.",
            bot: {
              say: "Then, “Ben Howard Live” and “Burgh Island” were both released in 2011.",
              bot: {
                label: "CHOOSE_EP",
                say: [
                  "Do you want to hear more about any of the EPs?",
                  "Should I go into detail about any of the EPs?",
                  "Should I tell you more about any of the EPs?",
                  "Do you want me to tell you more about any of the EPs?",
                ],
                user: [
                  {
                    intent: inAboutGamesInTheDark,
                    bot: {
                      say: "",
                      goto: "ABOUT_GAMESINTHEDARK",
                    },
                  },
                  {
                    intent: inAboutIFWWW,
                    bot: {
                      say: "",
                      goto: "ABOUT_THESEWATERS",
                    },
                  },
                  {
                    intent: inAboutNoondayDream,
                    bot: {
                      say: "",
                      goto: "ABOUT_OLDPINE",
                    },
                  },
                  {
                    intent: inAboutBHWRDLIVE,
                    bot: {
                      say: "",
                      goto: "ABOUT_BHWRDLIVE",
                    },
                  },
                  {
                    intent: inAboutTheBurghIsland,
                    bot: {
                      say: "",
                      goto: "ABOUT_THEBURGHISLAND",
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
                    bot: answerFallbackEP,
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
                        say: "If you want to hear some more information about an EP, type the name of that EP.",
                        bot: {
                          say: 'Type "no" if you want us to move on to another topic.',
                          bot: {
                            say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                            repair: true,
                            user: [
                              {
                                intent: no,
                                bot: {
                                  say: "",
                                  goto: "MOVING_ON",
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
          },
        },
      },
    },
  },
  {
    intent: inHowManyEP,
    bot: {
      say: ["Five so far.", "So far, five."],
      bot: {
        say: "Want to know more about them?",
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_EP",
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
              say: '"Type "yes" if you want to know more about the EPs I have released so far.',
              bot: {
                say: 'Type "no" if you want to move on to another topic.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  user: [
                    {
                      intent: no,
                      bot: {
                        say: "",
                        goto: "MOVING_ON",
                      },
                    },
                  ],
                },
              },
            },
          },
          {
            intent: ANYTHING,
            bot: answerFallbackQuestion,
          },
        ],
      },
    },
  },
]

export const UIAboutMusic = [aboutMusic]
