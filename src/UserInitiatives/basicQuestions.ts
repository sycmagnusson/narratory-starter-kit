import { UserTurn, ANYTHING, BotTurn } from "narratory"
import {
  inHowAreYou,
  inHello,
  inHowIsDay,
  inWhatsUp,
  inNiceMeetingYou,
  inAge,
  inWhenBorn,
  inWhatYearBorn,
  inBirthplace,
  inBirthday,
  inGrowUp,
  yes,
  no,
  inAboutBen,
  inRealBenQuestion,
  inLiveShows,
  inName,
  inFirstName,
  inMiddleName,
  inLastName,
  inFullName,
} from "../Intents/basicQuestions"
import { varThatsThat, varContinue, varAskNegative, varAskPositive } from "../variables"

/* | Name | First Name | Middle Name | Last Name | Full Name |
   | Hello | How Are You | How Is Day | What's Up | Nice Meeting You |
   | Age | WhenBorn | What Year Born | Birthday | Birthplace |
   | Grow Up | About Devon | 
   | About Ben | Real Ben? | Live Shows | */

export const basicQuestions: UserTurn[] = [
  {
    intent: inName,
    bot: {
      say: "Ben.",
      bot: {
        say: ["Ehm, yeah. Just Ben.", "Eh, yeah. Just Ben."],
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inFirstName, 
    bot: {
      say: "Benjamin.",
      bot: {
        say: ["But just Ben is fine too.", "You can just call me Ben though."],
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inMiddleName,
    bot: {
      say: "John.",
      bot: {
        say: varThatsThat,
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inLastName,
    bot: {
      say: "Howard.",
      bot: {
        say: [
          'If you ever wondered, that means means "high guardian".',
          'Which means "brave heart". Go ahead and add that to your unnecessary knowledge.'],
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inFullName,
    bot: {
      say: "Benjamin John Howard.",
      bot: {
        say: ["However, just Ben's fine too.", "But really, you can just call me Ben."],
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inHello,
    bot: {
      say: ["Hello, hi!", "Hi, hello!", "Hello mate!", "Hello!", "Hi!", "Hi, hello!"],
      goto: "QUERY_QUESTION",
    },
  },
  {
    intent: inHowAreYou,
    bot: {
      say: [
        "Yeah, good thanks!",
        "Doing alright, yeah!",
        "Yeah, good thank you!",
        "Yeah, alright. Good!",
        "Yeah, good, good!",
        "Yeah, very good!",
        "Yeah, good! Nice!",
        "Yeah, good! Alright!",
      ],
      goto: "QUERY_QUESTION",
    },
  },
  {
    intent: inHowIsDay,
    bot: {
      say: ["Lovely, thanks.", "Great, thank you.", '"I\'ve seen happiness". Yeah.', "Good mate, yeah."],
      goto: "QUERY_QUESTION",
    },
  },
  {
    intent: inWhatsUp,
    bot: {
      say: [
        'Err. "I\'ll have plenty of time to think about it."',
        '"I wish I had all my friends somewhere drinking." Heh.',
        '"Hmm. I could lay here for a while. ',
        '"My time is a little unclear." Yeah.',
        'Err. "My time is a little unclear."',
      ],
      goto: "QUERY_QUESTION",
    },
  },
  {
    intent: inNiceMeetingYou,
    bot: {
      say: [
        "Nice meeting you too! Yeah.",
        "Yeah, nice meeting you too!",
        "Nice meeting you too, yeah.",
        "Nice to meet you too.",
        "Yeah, nice to meet you too!",
        "Nice to meet you too, yeah.",
      ],
      goto: "QUERY_QUESTION",
    },
  },
  {
    intent: inAge,
    bot: {
      say: "I'm 33.",
      bot: {
        say: ['"Time, you know. You can\'t get it back."', '"It\'s been a while, been a while now."'],
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inWhenBorn,
    bot: {
      say: "24th of April, 1987.",
      bot: {
        say: "Do you want to hear the story about where I grew up?",
      user: [
        {
          intent: yes,
          bot: {
            say: "I grew up in the doldrums of Middlesex.",
            goto: "GROW_UP",
          }
        },
        {
        intent: no,
        bot: {
          say: ["Ehm...", "Uh-huh...", "Hm hm..."],
          bot: {
            say: varAskNegative,
            goto: "QUERY_QUESTION"
          }
        }
        },
      ]
    }
  }
},
  {
    intent: inWhatYearBorn,
    bot: {
      say: ["1987."],
      bot: {
        say: ['"Every day\'s a dice roll."', '"And somehow I did feel like yesterday was ours."'],
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inBirthday,
    bot: {
      say: ["24th of April.", "April 24th."],
      bot: {
        say: varThatsThat,
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inBirthplace,
    bot: {
      say: ["Richmond. South-west London.", "South-west London. Richmond."],
      bot: {
        say: varThatsThat,
        goto: "QUERY_QUESTION",
      },
    },
  },
  {
    intent: inGrowUp, //ADD DEVON
    bot: {
      say: ["I grew up in the doldrums of Middlesex."],
      bot: {
        say: varContinue,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              bot: {
                label: "GROW_UP",
                say: "Me and my family lived right under the Heathrow path.",
                bot: {
                  say: "I remember standing at the end of the garden.",
                  bot: {
                    say: "It was me, my mum, and my older sister Krysia.",
                    bot: {
                      say: "Oh, and a jeweller.",
                      bot: {
                        say: "We waved at my dad when he got back from one of his business trips.",
                        bot: {
                          say: varContinue,
                          user: [
                            {
                              intent: yes,
                              bot: {
                                label: "ABOUT_DEVON",
                                say: "I will add more info about Devon here",
                                goto: "QUERY_QUESTION",
                              },
                            },
                            {
                              intent: no,
                              bot: {
                                say: ["Uh-huh...", "Hm hm..."],
                                bot: {
                                  say: varAskNegative,
                                goto: "QUERY_QUESTION"
                                }
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
            intent: no,
            bot: {
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varAskNegative,
              goto: "QUERY_QUESTION"
              }
            }
          },
        ],
      },
    },
  },
  {
    intent: inAboutBen, //NEEDS TO BE UPDATED
    bot: {
      say: "Ben Howard.",
      bot: {
        say: varContinue,
        label: "ABOUT_BEN",
        user: [
          {
            intent: yes,
            bot: {
              say: "I'm the best artist in the world.",
              bot: {
                say: "And the best musician",
                bot: {
                  say: "And I write the best lyrics.",
                  bot: {
                    say: "I'm just exquisite.",
                    bot: {
                      bot: {
                        say: varAskPositive,
                        goto: "QUERY_QUESTION",
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
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varAskNegative,
              goto: "QUERY_QUESTION"
              }
          },
        }
        ],
      },
    },
  },
  {
    intent: inRealBenQuestion, //NEEDS TO BE EDITED
    bot: {
      say: [
        "Err, not really.",
        "Unfortunately, no.",
        "No, sorry.",
        "Err, no. Sorry.",
      ],
      bot: {
        say: ["I'm a chatbot.", "I'm a bot.", "I'm just a bot.", "I'm just a chatbot."],
        bot: {
          say: ["I was created to mimic Ben Howard."],
          bot: {
            say: [
              "Do you still want to talk to me?",
              "Do you still feel like talking to me?",
            ],
            user: [
              {
                intent: yes,
                bot: {
                  say: varAskPositive,
                  goto: "QUERY_QUESTION",
                },
              },
              {
                intent: no,
                bot: {
                  say: "I see...",
                  bot: {
                    say: "",
                  goto: "MAKE_SURE"
                  }
                },
              },
            ],
          },
        },
      },
    },
  },
  {
  intent: inLiveShows, //NEEDS TO BE UPDATED
  bot: {
    label: "LIVE_SHOWS",
    say: "",
    bot: {
      say: ['"Come find me when the years get older."',
      '"You can tell \'em I\'ll be back in the minute. For now is not the time".'],
      goto: "QUERY_QUESTION",
    }
  }
},
]

export const UIBasicQuestions = [basicQuestions]
