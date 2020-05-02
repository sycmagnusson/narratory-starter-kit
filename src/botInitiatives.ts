import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { yes, no } from "./Intents/basicQuestions"
import { answerFallback } from "./answerFallback"

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
        say: ["Alright.", "I see."],
        goto: "MAKE_SURE",
      }
    },
        {
            intent: ANYTHING,
            bot: answerFallback,
        },
  ]
}


const makeSure: BotTurn = {
  label: "MAKE_SURE",
  say: "So. Is this it?",
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
              }
            }
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

/*
const makeSure: BridgeTurn = {
  label: "MAKE_SURE",
  bot: {
    say: ["Alright.", "I see."],
    bot: {
      say: "Then...",
      bot: {
        say: "... is this it?",
        user: [
          {
            intent: yes,
            bot: {
              say: "...",
              goto: "GOODBYE",
            },
          },
          {
            intent: ANYTHING,
            bot: [
              {
                cond: { retryCount: 0 },
                say: ["Uh-huh...", "Hmm hmm..."],
                bot: {
                  say: "Go on then. Ask me something.",
                  repair: true,
                },
              },
              {
                cond: { retryCount: 1 },
                say: "You have to ask me a question.",
                repair: true,
              },
              {
                    say: '"... is this it?"',
                    repair: true,
                    user: [
                      {
                        intent: yes,
                        bot: {
                          say: "...",
                          goto: "GOODBYE",
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
                ],
              },
            ],
          },
      },
    },
  } */

const tellAllAbout: BridgeTurn = {
  label: "TELL_ALL_ABOUT",
  bot: {
    say: ["\"I'll take the long way 'round.\"", '"Where to, where to begin?"', '"Make your mind up, child"'],
    bot: {
      say: ["Let’s start with one of them.", "Let’s go one at a time."],
      goto: "CHOOSE_EP",
    },
  },
}

export const botInitiatives = [askNegative, makeSure, tellAllAbout]
