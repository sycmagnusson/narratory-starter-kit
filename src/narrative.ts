import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { varGreetings, varlyricGreetings } from "./variables"
import { yes, no, inWhatToAsk } from "./Intents/basicQuestions"
import { answerFallback } from "./answerFallback"

const greeting: BridgeTurn = {
  cond: {
    user_hotStarted: false,
  },
  bot: {
    say: varlyricGreetings,
    bot: {
      say: varGreetings,
      bot: {
        say: "I'm a bot created to mimic Ben Howard.",
        bot: {
          say: ["Ehm.", "So, yeah.", "So, eh.", "So, ehm.", "Ehm, so.", "So, hmm.", "So.", "Eh."],
          bot: {
            say: [
              "What question do you have for me?",
              "What would you like to ask me?",
              "How about you ask me a question?",
            ],
            user: [
              {
                intent: yes,
                bot: {
                  say: "Go on, ask me a question then.",
                  repair: true,
                },
              },
              {
                intent: inWhatToAsk,
                bot: {
                  say: "",
                  goto: "WHAT_TO_ASK",
                }
              },
              {
                intent: ANYTHING,
                bot: answerFallback,
              },
              {
                intent: no,
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
                    bot: {
                      say: "This is it?",
                      user: [
                        {
                          intent: yes,
                          bot: {
                            say: "I see...",
                            goto: "GOODBYE",
                          },
                        },
                        {
                          intent: ANYTHING,
                          bot: {
                            say: "",
                            goto: "GOODBYE",
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
      },
    },
  },
}

const queryQuestions: BotTurn = {
  label: "QUERY_QUESTION",
  say: "",
  user: [
    {
      intent: yes,
      bot: {
        say: ["Go on, ask me a question then.", "How about you ask me something?"],
        repair: true,
      },
    },
    {
      intent: no,
      bot: {
        say: "",
        goto: "MAKE_SURE",
      },
    },
    {
      intent: ANYTHING,
      bot: answerFallback,
    },
      {
        intent: inWhatToAsk,
        bot: {
          say: "",
          goto: "WHAT_TO_ASK",
        }
    },
  ],
}

const goodbye: BotTurn = {
  label: "GOODBYE",
  say: '... "i\'ll be seeing you then. Or something of that kind."',

  /*["Goodbye, goodbye that's all",
    "Every king knows it to be true. That every kingdom must one day come to an end.",
    "When the morning comes. We'll go, we'll go our separate ways.",
    "Oh go, leave me with this bird and this song. Out here in the cold"]*/
}

export const narrative = [greeting, queryQuestions, goodbye]
