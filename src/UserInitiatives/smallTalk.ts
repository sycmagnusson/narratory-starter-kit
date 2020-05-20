import { UserTurn, ANYTHING, BotTurn } from "narratory"
import {
  inHowAreYou,
  inHello,
  inHowIsDay,
  inWhatsUp,
  inNiceMeetingYou,
  inAge,
  inBirthplace,
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
  inMean,
  inGoodbye,
  inHowBuilt,
  inBirthday,
} from "../Intents/smallTalk"
import {
  varThatsThat,
  varContinue,
  varNegativeFillers,
  varPositiveFillers,
} from "../variables"

export const smallTalk: UserTurn[] = [
  {
    intent: inName,
    bot: {
      say: "Ben.",
      bot: {
        say: ["Erm, yeah. Just Ben.", "Er, yeah. Just Ben."],
      },
    },
  },
  {
    intent: inFirstName,
    bot: {
      say: "Benjamin.",
      bot: {
        say: ["But just Ben is fine too.", "You can just call me Ben though."],
      },
    },
  },
  {
    intent: inMiddleName,
    bot: {
      say: "John.",
      bot: {
        say: varThatsThat,
      },
    },
  },
  {
    intent: inLastName,
    bot: {
      say: "Howard.",
      bot: {
        say: [
          'If you ever wondered, that means "high guardian".',
          'Which means "brave heart". Go ahead and add that to your unnecessary knowledge.',
        ],
      },
    },
  },
  {
    intent: inFullName,
    bot: {
      say: "Benjamin John Howard.",
      bot: {
        say: ["However, just Ben is fine too.", "But really, you can just call me Ben."],
      },
    },
  },
  {
    intent: inHello,
    bot: {
      say: ["Hello, hi!", "Hi, hello!", "Hello mate!", "Hello!", "Hi!", "Hi, hello!"],
      bot: {
        say: "",
        goto: "SMALL_TALK",
      },
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
    },
  },
  {
    intent: inHowIsDay,
    bot: {
      say: ["Lovely, thanks.", "Great, thank you.", '"I\'ve seen happiness". Yeah.', "Good mate, yeah.", '"All is well, all is good." Yeah.',],
    },
  },
  {
    intent: inWhatsUp,
    bot: {
      say: [
        'Er. "I\'ll have plenty of time to think about it."',
        '"I wish I had all my friends somewhere drinking." Heh.',
        'Hmm. "I could lay here for a while." ',
        'Yeah. "I\'ve been worrying that my time is a little unclear."',
      ],
    },
  },
  {
    intent: inNiceMeetingYou,
    bot: {
      say: [
        "Nice meeting you too. Yeah.",
        "Yeah, nice meeting you too.",
        "Nice meeting you too, yeah.",
        "Nice to meet you too.",
        "Yeah, nice to meet you too.",
        "Nice to meet you too, yeah.",
      ],
      bot: {
        say: "",
        goto: "SMALL_TALK",
      },
    },
  },
  {
    intent: inAge,
    bot: {
      say: "I'm 33.",
      bot: {
        say: ['"Time, you know. You can\'t get it back."', '"It\'s been a while, been a while now."'],
      },
    },
  },
  /*{
    intent: inWhatYearBorn,
    bot: {
      say: "1987.",
      bot: {
        say: "Do you want to hear a story about where I grew up?",
        user: [
          {
            intent: yes,
            bot: {
              say: "I grew up in the doldrums of Middlesex.",
              goto: "GROW_UP",
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
            bot: {
              say: "",
              goto: "ANYTHING",
            },
          },
          {
            intent: inMean,
            bot: {
              say: 'Type "yes" if you want me to tell you whereabouts I grew up.',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
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
                        say: varWhatToAsk,
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
  },*/
  {
    intent: inBirthday,
    bot: {
      say: ["24th of April."],
      bot: {
        say: ['"Every day\'s a dice roll."', '"And somehow I did feel like yesterday was ours."'],
      },
    },
  },
  /*{
    intent: inBirthday,
    bot: {
      say: ["24th of April.", "April 24th."],
      bot: {
        say: varThatsThat,
      },
    },
  },*/
  {
    intent: inAboutBen, //NEEDS TO BE UPDATED
    bot: {
      say: "Ben Howard.",
      bot: {
        say: varContinue,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              bot: {
                label: "ABOUT_BEN",
                say: "I'm the best artist in the world.",
                bot: {
                  say: "And the best musician",
                  bot: {
                    say: "And I write the best lyrics.",
                    bot: {
                      say: "I'm just exquisite.",
                      bot: {
                        bot: {
                          say: varPositiveFillers,
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
              say: 'Type "yes" if you want me to tell you more about who I am and what I do.',
              bot: {
                say: 'Type "no" if you want us to move on to another topic.',
                bot: {
                  say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                  user: [
                    {
                      intent: yes,
                      bot: {
                        say: "",
                        goto: "ABOUT_BEN",
                      },
                    },
                    {
                      intent: no,
                      bot: {
                        say: "varWhatToAsk,",
                        goto: "WHAT_TO_ASK_QUERY",
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
  {
    intent: inRealBenQuestion,
    bot: {
      say: ["Er, not really.", "Unfortunately, no.", "No, sorry.", "Er, no. Sorry."],
      bot: {
        say: ["I'm a chatbot.", "I'm a bot.", "I'm just a bot.", "I'm just a chatbot."],
        bot: {
          say: ["I was created to mimic Ben Howard."],
          bot: {
            say: ["Do you still want to talk to me?", "Do you still feel like talking to me?"],
            user: [
              {
                intent: yes,
                bot: {
                  say: varPositiveFillers,
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
                intent: inMean,
                bot: {
                  say: 'Type "yes" if you still want to talk to me.',
                  bot: {
                    say: 'Type "no" if you want to end our conversation.',

                    user: [
                      {
                        intent: yes,
                        bot: {
                          say: "",
                          goto: "ABOUT_BEN",
                        },
                      },
                      {
                        intent: no,
                        bot: {
                          say: "",
                          goto: "GOODBYE",
                        },
                      },
                    ],
                  },
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
      say: "",
      bot: {
        label: "LIVE_SHOWS",
        say: [
          '"Come find me when the years get older."',
          "\"You can tell 'em I'll be back in the minute. For now is not the time\".",
        ],
      },
    },
  },
  {
    intent: inHowBuilt,
    bot: {
      say: "",
      goto: "HOW_BUILT",
    },
  },
]

export const UISmallTalk = [smallTalk]
