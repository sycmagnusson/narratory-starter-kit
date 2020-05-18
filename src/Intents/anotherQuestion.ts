import { Intent } from "narratory";
import { entQuit, entRegret, entWhy, entWDYT, entEnroll, entLearn, entUni, entInfo } from "../allEntities";

export const inWhyQuitUni: Intent = {
    entities: {QUIT: entQuit, UNI: entUni, REGRET: entRegret, INFO: entInfo},
    examples: [
      "did you _QUIT _UNI",
      "how did you _QUIT _UNI",
      "do you _REGRET _QUIT _UNI",
      "what caused you to _QUIT _UNI",
      "what was the motive to _QUIT _UNI",
      "_INFO about why you _QUIT _UNI"
    ]
  }

export const inRegretUni: Intent = {
    entities: {QUIT: entQuit, UNI: entUni, REGRET: entRegret, INFO: entInfo},
    examples: [
        "do you _REGRET _QUIT _UNI",
        "_INFO about you _REGRET _QUIT _UNI"
    ]
  }

  export const inWhyUni: Intent = {
    entities: {QUIT: entQuit, UNI: entUni, WHY: entWhy, WDYT: entWDYT, ENROLL: entEnroll, LEARN: entLearn, INFO: entInfo},
    examples: [
      "_WDYT about _UNI",
      "what's the point of _UNI",
      "what did you _LEARN in _UNI",
      "_WHY did you _ENROLL to _UNI",
      "_WHY did you _ENROLL in _UNI",
      "should I _ENROLL in _UNI",
      "should I _ENROLL to _UNI",
      "_INFO about what you think of _UNI",
      "how was _UNI",
      "what about _UNI",
      "_INFO about _UNI"
    ]
  }

  export const intents = [inRegretUni, inWhyQuitUni, inWhyUni]