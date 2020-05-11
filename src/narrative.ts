import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { varGreetings, varlyricGreetings, varNegativeFillers } from "./variables"
import { yes, no, inWhatToAsk, inMean } from "./Intents/basicQuestions"
import { anythingNarrative } from "./answerFallback"
import { whatToAsk} from "./botInitiatives"

const greeting: BridgeTurn = {
  bot: {
    say: varlyricGreetings,
    bot: {
      say: varGreetings,
      bot: {
        say: "I'm a bot created to mimic Ben Howard.",
        bot: {
          say: ["Erm, so.", "So, hm."],
          bot: {
            say: [
              "What question do you have for me?",
              "What would you like to ask me?",
              "How about you ask me a question?",
            ],
          }
        }
      }
    }
  }
}
            
const queryQuestions: BotTurn = {
  label: "QUERY_QUESTION",
  say: "",
  user: [
    {
      intent: yes,
      bot: {
        say: "",
        goto: "HOW_BUILT"
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
        say: "",
        goto: "HOW_BUILT",
      }
    },
    {
      intent: ANYTHING,
      bot: anythingNarrative,
    },
    {
      intent: inWhatToAsk,
      bot: whatToAsk,
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
