import {
  inTonyTheMouse,
  inInspirationBarn,
  inDifficultiesEK,
  inPlayingLive,
  inSheepsEK,
  inPromiseEK,
  inMeaningEK,
  inDamienRice,
} from "../Intents/storiesHowBuilt"
import { UserTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye, inMean } from "../Intents/smallTalk"
import { varNegativeFillers, varPositiveFillers } from "../variables"
import { answerFallbackQuestion } from "../answerFallback"

export const howBuiltStories: UserTurn[] = [
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
                        say: "",
                        bot: {
                          label: "SHEEPS_EK",
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
                                        say: "",
                                        bot: {
                                          label: "PROMISE",
                                          say: [
                                            '"And meet me there, bundles of flowers, we wait through the hours of cold..."',
                                            '"Winter, shall howl at the walls, tearing down doors of time..."',
                                            '"Shelter, as we go..."',
                                            '"And promise me this. You\'ll wait for me only, scared of the lonely arms..."',
                                            '"Surface, far below these burn..."',
                                            '"And maybe, just maybe I\'ll come home...""',
                                          ],
                                          bot: {
                                            say:
                                              "If you listen really closely, there is a bit in “Promise” where it’s raining really heavily at the beginning.",
                                            bot: {
                                              say:
                                                "And then by the end of the song, the rain stops and you can just hear the birds singing again.",
                                              bot: {
                                                say: varPositiveFillers,
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
  {
    intent: inSheepsEK,
    bot: {
      say: "The sheeps, right.",
      bot: {
        say: "That was back when we recorded Every Kingdom in the barn.",
        goto: "SHEEPS_EK",
      },
    },
  },
  {
    intent: inPromiseEK,
    bot: {
      say: "",
      goto: "PROMISE",
    },
  },
  {
    intent: inInspirationBarn,
    bot: {
      say: "",
      bot: {
        label: "INSPIRATION_BARN",
        say: 'One of my favorite records of all-time is Bon Iver, "For Emma, Forever Ago".',
        bot: {
          say:
            'I remember listening to that, thinking "wow, if you could make something that great way out in the woods somewhere...',
          bot: {
            say:
              '... then there’s no reason we can’t make something cool with the music that we’ve got with our own little studio."',
            bot: {
              say: 'That definitely had some way in the thought process when we decided to record "Every Kingdom" in a barn.',
              bot: {
                say: 'Would you perhaps want me to tell you what the meaning behind the title "Every Kingdom" is?',
                user: [
                  {
                    intent: yes,
                    bot: {
                      say: "",
                      bot: {
                        label: "EVERYKINGDOM_TITLE",
                        say:
                          'The idea behind "Every Kingdom" is that you build kingdoms and you take them apart as well.',
                        bot: {
                          say: "Every relationship you have is something that you’ve built and created.",
                          bot: {
                            say: "Then, it’ll finish and you’ll go on again to a new relationship, whether it’s a friendship or a girlfriend or a family thing.",
                              bot: {
                                say: varPositiveFillers,
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
                      say: 'Type "yes" if you want to know what the title behind "Every Kingdom" means.',
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
      },
    },
  },
  {
    intent: inMeaningEK,
    bot: {
      say: "",
      goto: "EVERYKINGDOM_TITLE",
    },
  },
  {
    intent: inDifficultiesEK,
    bot: {
      say: "",
      bot: {
        label: "DIFFICULTIES_EK",
        say: 'Recording "Every Kingdom" was difficult.',
        bot: {
          say: "Chris, who plays drums, he produced the record and so, he was learning how to record stuff.",
          bot: {
            say: "And I was kind of learning how to play guitar in a studio.",
            bot: {
              say: "You know, I was used to like, thrashing it out and playing live.",
              bot: {
                say:
                  "I get a real kick out of playing in front of people and getting to share music. Do you want to hear more about it?",
                user: [
                  {
                    intent: yes,
                    bot: {
                      say: "",
                      goto: "PLAYING_LIVE",
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
                      say: 'Type "yes" if you want me to tell you why I love to play live.',
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
  {
    intent: inPlayingLive,
    bot: {
      say: "",
      bot: {
        label: "PLAYING_LIVE",
          bot: {
            say: "I love playing with some, erm, like, I don’t know what is but...",
            bot: {
              say:
                "... something so fragile and delicate, you play with a little song, and then you can just go and rock a song out...",
              bot: {
                say: "... and then you can come right back to that.",
                bot: {
                  say: "Speaking of this made me think of Damien Rice. Do you want me to tell you why?",
                  user: [
                    {
                      intent: yes,
                      bot: {
                        say: "",
                        bot: {
                          label: "DAMIEN_RICE",
                          say: "Damien Rice was a big one for me when I was growing up.",
                          bot: {
                            say:
                              "I was always amazed of how he’d start with such a beautiful sounding acoustic guitar...",
                            bot: {
                              say:
                                "... and by the end of the song, it would just be this absolute massive distortion and overdrive.",
                              bot: {
                                say: "Yeah, I always thought that was cool.",
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
                          'Type "yes" if you want to hear why I came to think of Damien Rice while speaking about live performances.',
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
        },
      },
  },
  {
    intent: inDifficultiesEK,
    bot: {
      say: "",
      goto: "DIFFICULTIES_EK",
    }
  },
  {
    intent: inPlayingLive,
    bot: {
      say: "",
      goto: "PLAYING_LIVE",
    },
  },
    {
      intent: inDamienRice,
      bot: {
        say: "",
        goto: "DAMIEN_RICE",
    }
  },
]

export const UIHowBuiltStories = [howBuiltStories]
