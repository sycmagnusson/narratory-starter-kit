import { Intent } from "narratory";
import { entTonyTheMouse, entEK, entAnimalsInBarn, entSheeps, entPromise, entInfo, entBarn, entMeaning, entDifficult, entPerforming, entLike, entBonIver, entWDYT, entInspire, entDamienRice } from "../allEntities";

export const inTonyTheMouse: Intent = {
    entities: {TONYTHEMOUSE: entTonyTheMouse, ANIMALS: entAnimalsInBarn, INFO: entInfo},
    examples: [
      "can you _INFO about _TONYTHEMOUSE?",
      "_TONYTHEMOUSE",
      "_ANIMALS in barn",
      "tony the mouse"
    ],
  }

  export const inSheepsEK: Intent = {
    entities: {SHEEPS: entSheeps, INFO: entInfo},
    examples: [
      "can you _INFO about the _SHEEPS?",
      "_SHEEPS",
      "sheeps"
    ],
  }

  export const inPromiseEK: Intent = {
    entities: {SHEEPS: entSheeps, PROMISE: entPromise, INFO: entInfo},
    examples: [
      "can you _INFO about _PROMISE",
      "_PROMISE",
      "promise"
    ],
  }

  export const inInspirationBarn: Intent = {
    entities: {BARN: entBarn, INFO: entInfo, BONIVER: entBonIver, WDYT: entWDYT, INSPIRE: entInspire},
    examples: [
      "can you _INFO what _INSPIRE you to record in a _BARN?",
      "why did you record in a _BARN",
      "what _INSPIRE you to record in a _BARN",
      "recording in a _BARN",
      "_BONIVER",
      "do you _LIKE _BONIVER?",
      "for emma forever ago",
      "_WDYT for emma forever ago",
      "_WDYT _BONIVER",
      "did _BONIVER _INSPIRE you",
      "are you a fan of __BONIVER",
      "do you listen to _BONIVER",
      "did you get _INSPIRE from _BONIVER"]
  }

  export const inMeaningEK: Intent = {
    entities: {EK: entEK, INFO: entInfo, MEANING: entMeaning, INSPIRE: entInspire}, 
    examples: [
      "can you _INFO what the _MEANING of _EK is?",
      "what is the _MEANING of the title _EK?",
      "what is the _MEANING of _EK",
      "what does _EK _MEANING",
      "what is the _INSPIRE for _EK"
    ],
  }

  export const inDifficultiesEK: Intent = {
    entities: {EK: entEK, INFO: entInfo, DIFFICULT: entDifficult}, 
    examples: [
      "can you _INFO what was _DIFFICULT when recording _EK",
      "what was _DIFFICULT when you recorded _EK",
      "was it _DIFFICULT to record _EK",
      "who produced _EK",
      "how was it to record _EK",
    ],
  }

  export const inPlayingLive: Intent = {
    entities: {INFO: entInfo, PERFORMING: entPerforming, LIKE: entLike, WDYT: entWDYT}, 
    examples: [
      "can you _INFO what you _LIKE about _PERFORMING?",
      "what is the best about _PERFORMING?",
      "what do you _LIKE about _PERFORMING?",
      "rocking out",
      "thrashing out",
      "do you _LIKE _PERFORMING",
      "_WDYT _PERFORMING"
    ],
  }

  export const inDamienRice: Intent = {
    entities: {INFO: entInfo, PERFORMING: entPerforming, LIKE: entLike, WDYT: entWDYT, DAMIENRICE: entDamienRice}, 
    examples: [
      "can you _INFO about _DAMIENRICE",
      "_DAMIENRICE",
      "do you _LIKE _DAMIENRICE?",
      "did _DAMIENRICE _INSPIRE you",
      "_DAMIENRICE _INSPIRE",
      "_WDYT __DAMIENRICE",
      "are you a fan of __DAMIENRICE",
      "do you listen to _DAMIENRICE",
      "did you get _INSPIRE from _DAMIENRICE"
    ],
  }



  export const intents = [inTonyTheMouse, inInspirationBarn, inDifficultiesEK, inPlayingLive]