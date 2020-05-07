import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye, inAnotherQuestion } from "./Intents/basicQuestions"
import { answerFallback } from "./answerFallback"
import { inAboutEveryKingdom, inAboutIFWWW, inAboutNoondayDream, inTellAboutAllAlbum } from "./Intents/aboutAlbums"
import { varAskNegative, varAskPositive, varSorryAgain, intents, varNegativeFillers } from "./variables"
import { entGoodbye } from "./Entities/general"
import { inDoInTheMorning } from "./Intents/allStories"

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
        say: ["Cool! Go ahead and ask me a question."],
        goto: "QUERY_QUESTION",
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
      bot: answerFallback,
    },
  ],
}

const makeSure: BotTurn = {
  label: "MAKE_SURE",
  say: "Are we done talking here?",
  user: [
    {
      intent: yes,
      bot: {
        say: "Every kingdom must one day come to an end.",
        goto: "GOODBYE",
      },
    },
    {
      intent: ANYTHING,
      bot: [
        {
          cond: { retryCount: 0 },
          bot: {
            say: ["Uh-huh...", "Hmm hmm..."],
            bot: {
              say: "Go on then. Ask me something.",
              repair: true,
            },
          },
        },
        {
          cond: { retryCount: 1 },
          bot: {
            say: ["Ehm...", "Uhm..."],
            bot: {
              say: "Sorry, I didn't get it. You have to ask me a question.",
              repair: true,
            },
          },
        },
        {
          say: 'Then. "This is it?"',
          user: [
            {
              intent: yes,
              bot: {
                say: "Every kingdom must one day come to an end.",
                goto: "GOODBYE",
              },
            },
            {
              intent: ANYTHING,
              bot: [
                {
                  say: '"Well this is desert."',
                  goto: "GOODBYE",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const tellAllAboutAlbum: BridgeTurn = {
  label: "TELL_ALL_ABOUT_ALBUM",
  bot: {
    say: ["\"I'll take the long way 'round.\"", '"Where to, where to begin?"', '"Make your mind up, child"'],
    bot: {
      say: ["Let’s start with one of them.", "Let’s go one at a time."],
      goto: "CHOOSE_ALBUM",
    },
  },
}

const chooseAlbum: BridgeTurn = {
  label: "CHOOSE_ALBUM",
  bot: {
    say: ["Which one should I tell you more about?", "Which album do you want to hear more about?"],
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
          goto: "TELL_ALL_ABOUT",
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
        intent: ANYTHING,
        bot: [
          {
            cond: { retryCount: 0 },
            bot: {
              say: ["Uh-huh...", "Hmm hmm..."],
              bot: {
                say: "Sorry, I didn't get it. You have to tell me which album you want to know more about.",
                repair: true,
              },
            },
          },
          {
            cond: { retryCount: 1 },
            bot: {
              say: ["Ehm...", "Uhm..."],
              bot: {
                say: "What was that? You have to tell me which album you want me to tell you more about.",
                repair: true,
              },
            },
          },
          {
            say: "Would you like to ask me another question?",
            user: [
              {
                intent: no,
                bot: {
                  say: "I see...",
                  goto: "GOODBYE",
                },
              },
              {
                intent: yes,
                bot: [
                  {
                    say: varAskPositive,
                    goto: "QUERY_QUESTION",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

const whatToAsk: BotTurn = {
  label: "WHAT_TO_ASK",
  say: [
    "Hm. I could tell you about my mornings if you ask me.",
    "If you ask me about my friends' taste in music, I will tell you.",
  ],
  user: [
    {
      intent: inDoInTheMorning,
      bot: {
        say: "",
        goto: "DO_IN_THE_MORNING",
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
        say: "",
        bot: {
          label: "WHAT_TO_ASK_YES",
          say: "If you want to know the full story, I can tell you.",
          bot: {
            say: "All you have to do is ask.",
            bot: {
              say: 'You do this by typing "tell me about..." followed by what you want me to tell you about.',
              user: [
                {
                  intent: no,
                  bot: {
                    say: ["Uh-huh...", "Hm hm..."],
                    bot: {
                      say: varNegativeFillers,
                      goto: "MAKE_SURE",
                    },
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
                    goto: "WHAT_TO_ASK_YES",
                  },
                },
              ],
            },
          },
        },
      },
    },
    {
      intent: inAnotherQuestion,
      bot: {
        say: ["Sure, you can ask me about my mum.", "For sure. You can ask me about Mazzy Star."],
        repair: true,
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
        goto: "WHAT_TO_ASK_YES",
      },
    },
    {
      intent: no,
      bot: {
        say: ["Uh-huh...", "Hm hm..."],
        bot: {
          say: varNegativeFillers,
          goto: "MAKE_SURE",
        },
      },
    },
  ],
}

export const botInitiatives = [askNegative, makeSure, tellAllAboutAlbum, chooseAlbum, whatToAsk]
