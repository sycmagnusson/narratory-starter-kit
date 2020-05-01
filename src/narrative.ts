import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import {
  varGreetings,
  varlyricGreetings,
} from "./variables"
import { yes, no } from "./Intents/basicQuestions"
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
        },
      },
    },
  },
}

const queryQuestions: BotTurn = {
    label: "QUERY_QUESTION",
    say: [
      {
        cond: {
          turnCount: 0,
          hotStarted: false
        },
        text: ["What question do you have for me?", "What would you like to ask me?", "How about you ask me a question?"
        ],
      },
      {
        text: [
          ""
        ]
      }
    ],
    user: [
      {
        intent: yes,
        bot: {
          say: "Go on, ask me a question then.",  
          repair: true
        }
      },
      {
        intent: no,
        bot: {
          say: "",
          goto: "GOODBYE",
        }
      },
      {
        intent: ANYTHING,
        bot: answerFallback,
      }
    ]
  }
  

const goodbye: BotTurn = {
  label: "GOODBYE",
  say: "Goodbye, goodbye that's all",
}

export const narrative = [greeting, queryQuestions, goodbye]
