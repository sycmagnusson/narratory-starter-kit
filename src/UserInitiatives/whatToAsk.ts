import { UserTurn, ANYTHING } from "narratory"
import { inWhyUni, inWhyQuitUni, inRegretUni } from "../Intents/anotherQuestion"
import { yes, no, inGoodbye, inMean, inBirthplace, inGrowUp } from "../Intents/smallTalk"
import { varNegativeFillers, varWhatToAsk, varContinue } from "../variables"
import { answerFallbackQuestion } from "../answerFallback"
import { queryOpenMicDroppingOut } from "../botInitiatives"

export const whatToAskQueries: UserTurn[] = [
  {
    intent: inWhyUni,
    bot: {
      say: "",
      bot: {
        label: "WHY_UNI",
        say: [
          '"What am I gonna do, who am I gonna be?", that’s what university is for.',
          "It’s just figuring out what you want to do in your life and where you wanna go.",
        ],
        bot: {
          say: [
            "I actually dropped out of university. Do you want to know why?",
            "I played a lot of open mics at university. Do you want me to tell you more about it?",
          ],
          user: [
            {
              intent: yes,
              bot: queryOpenMicDroppingOut,
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
                say: 'Type "yes" if you want to me to recite some old memories.',
                bot: {
                  say: 'Type "no" if you want to talk about something else.',
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
  {
    intent: inWhyQuitUni,
      bot: {
        say: "I figured out I wanted to play music full-time rather than be a journalist.",
        bot: {
          say: "I was never really good at journalism anyway.",
          bot: {
            say: "When I was thinking about dropping out and quitting, I rang a friend of mine.",
            bot: {
              say:
                'She said that "the most beautiful lives are the ones that takes risks".',
              bot: {
                say: "That's when I quit basically.",
                bot: {
                  say: "Even though I dropped out, I don't regret going to university. Do you want to know why?",
                  user: [
                    {
                      intent: yes,
                      bot: {
                        say: "",
                        bot: {
                          label: "REGRET_UNI",
                          say:
                            'After deciciding to drop out, a lot of friends said "you really just wasted two and a half years of your life."',
                          bot: {
                            say:
                              "But basically, someone paid me to go have hell of a lot of fun for two and a half years...",
                            bot: {
                              say: "... obviously, I owe them money now.",
                              bot: {
                                say: "You know, student loans. Heh.",
                                bot: {
                                  say: "But yeah. Those were the best two and a half years of my life. And I don't regret it.",
                                },
                              },
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
                        say:
                          'Type "yes" if you want to know why I don\'t regret going to uni, even though I dropped out.',
                        bot: {
                          say: 'Type "no" if you want to talk about something else.',
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
      say: 'Type "yes" if you want to know why I dropped out of university.',
      bot: {
        say: 'Type "no" if you want to talk about something else.',
        bot: {
          say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
          repair: true,
        },
      },
    },
  },
  {
    intent: inRegretUni,
    bot: {
      say: "",
      goto: "REGRET_UNI",
    },
  },
  {
    intent: inBirthplace,
    bot: {
      say: ["Erm...", "Er..."],
      bot: {
        say: ["I was born on April 27th, 1987."],
        bot: {
          say: ["In South-west London, Richmond.", "In Richmond. South-west London."],
          bot: {
            say: "Do you want to hear more about where I grew up?",
            user: [
              {
                intent: yes,
                bot: {
                  say: "",
                  bot: {
                    label: "GROW_UP",
                    say: "I grew up in the doldrums of Middlesex.",
                    bot: {
                      say: "Me and my family lived right under the Heathrow path.",
                      bot: {
                        say: "I remember standing at the end of the garden.",
                        bot: {
                          say: "It was me, my mum, and my older sister Krysia.",
                          bot: {
                            say: "Oh, and a jeweller.",
                            bot: {
                              say: "We waved at my dad when he got back from one of his business trips.",
                            },
                          },
                        },
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
                intent: inMean,
                bot: {
                  say: 'Type "yes" if you want me to tell you more about where I grew up.',
                  bot: {
                    say: 'Type "no" if you want us to move on to another topic.',
                    bot: {
                      say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                      repair: true,
                      user: [
                        {
                          intent: yes,
                          bot: {
                            say: "",
                            goto: "GROW_UP",
                          },
                        },
                        {
                          intent: no,
                          bot: {
                            say: "varWhatToAsk,",
                            goto: "WHAT_TO_ASK_QUERY",
                          },
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
              },
            ],
          },
        },
      },
    },
  },
]

export const UIWhatToAskQueries = [whatToAskQueries]
