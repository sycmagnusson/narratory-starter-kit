import { inTonyTheMouse } from "../Intents/storiesMusic"
import { UserTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye, inMean } from "../Intents/basicQuestions"
import { varNegativeFillers, varPositiveFillers } from "../variables"
import { answerFallbackQuestion } from "../answerFallback"

export const storiesMusic: UserTurn[] = [
  {
    intent: inTonyTheMouse,
    bot: {
      say: "",
      bot: {
        label: "TONY_THE_MOUSE",
        say: "While recording Every Kingdom, we had all sorts of animals around us.",
        bot: {
          say: "Mice and birds, they would make cool little noises.",
          bot: {
            say: "And so, we had a mouse named Tony and you know, we thought it was just Tony.",
            bot: {
              say: "But, erm, turns it out he had a whole family...",
              bot: {
                say: "... and it was a big family.",
                bot: {
                  say: "There were sheeps around the barn too. Do you want me to tell you about them?",
                  user: [
                    {
                      intent: yes,
                      bot: {
                        say:
                          "Every now and then, the farmer who owned the barn would put the sheep in the field next to us.",
                        bot: {
                          say: "I think the sheep were the worst.",
                          bot: {
                            say:
                              'There’s actually a few moments in "Every Kingdom" where you’d be listening really intense...',
                            bot: {
                              say: "... and there will just be a sheep in the background.",
                              bot: {
                                say:
                                  "You can hear the birds that were in the barn in one of the songs on the record. Do you want me to tell you which?",
                                user: [
                                  {
                                    intent: yes,
                                    bot: {
                                      say:
                                        "If you listen really closely, there is a bit in “Promise” at the end of the album where it’s raining really heavily in the beginning.",
                                      bot: {
                                        say:
                                          "By the end of the song though, the rain stops and you can just hear the birds singing.",
                                        bot: {
                                          say: varPositiveFillers,
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
                                        'Type "yes" if you want me to tell you in which song you can hear the birds that were in the barn where we recorded.',
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
                          'Type "yes" if you want me to tell you of how you can actually hear sheeps in the background of "Every Kingdom".',
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
]

export const UIStoriesMusic = [storiesMusic]