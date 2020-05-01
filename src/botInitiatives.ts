import { BotTurn, BridgeTurn } from "narratory"
import { yes, no } from "./Intents/basicQuestions"

const askNegative: BotTurn = {
    label: "ASK_NEGATIVE",
    say: [
"Then, do you want to ask me something else?",
"Then, is there anything else you want to know?",
"Then, do you want to try and ask me another question?",
"Then, how about you try and ask me something else?",
"Then, do you want to try and ask me something else?",
"Then, how about you try and ask me another question?",
"Do you want to try and ask me another question?",
"Do you want to ask me something else?",
"Then, how about another question?",
"Then, how about you ask me something else?",
"Then, do you want to ask me another question?",
"Do you want to ask another question?",
"Do you want to ask me another question?",
"Do you want to try another question?"
],
user: [
    {intent: yes,
        bot: { 
            say: "",
            goto: "QUERY_QUESTION",
        }
        },
        { intent: no,
        bot: {
            say: "",
            goto: "MAKE_SURE"}

        },
    ]
} 

const makeSure: BridgeTurn = {
    label: "MAKE_SURE",
    bot: {
        say: ["That's alright with me.",
        "I do believe we're only passing through.",
        "I can't do this alone."],
        bot: {
           say: ["How about we go back to where we were?",
            "How about we go back to where we came from?",
            "How about we return to where we were?",
            "How about we pick up from where we left?",
            "How about picking up from where we left?",
            "How about we go back to where we were?"],
           user: [
                { intent: yes, 
                    bot: {
                        say: "",
                    }
                    },
                    { intent: no, 
                        bot: { 
                            say:"",
                        goto: "GOODBYE",
                    },
                }
            ]
        }    
    }
}

const tellAllAbout: BridgeTurn = {
    label: "TELL_ALL_ABOUT",
bot: {
  say: ["My time is a little unclear.",
  "I'll take the long way 'round.",
  "Where to, where to begin?"],
  bot: {
    say: ["Let’s start with one of them.",
    "Let’s go one at a time."],
    goto: "CHOOSE_EP",
  }
}
}
                 
export const botInitiatives = [askNegative, makeSure, tellAllAbout]