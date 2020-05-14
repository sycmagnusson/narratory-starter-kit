import { BotTurn } from "narratory"
import { varNegativeFillers, varAskNegative, varAsk } from "./variables"
import { no } from "./Intents/basicQuestions"

export const bridge: BotTurn = {
  say: [
    {
      cond: {
        user_text: [
          "no",
          "nah",
          "no thank you",
          "nay",
          "nix",
          "no way",
          "nope",
          "not",
          "definitely not",
          "not ever",
          "not in a million years",
          "god no",
          "please don't",
          "don't",
          "do not",
          "screw that",
          "fuck that",
        ],
      },
      text: varAskNegative,
    },
    {
      text: varAsk,
    },
  ],
  goto: "QUERY_QUESTION",
}
