import { Intent } from "narratory"
import { entEK, entIFWWW, entND, entAlbum } from "../Entities/aboutAlbums"
import {
  entName,
  entFirst,
  entWhen,
  entRelease,
  entInfo,
  entSecond,
  entThird,
  entLatest,
} from "../Entities/general"

export const inAboutAlbum: Intent = {
  entities: {
    RELEASE: entRelease,
    FIRST: entFirst,
    SECOND: entSecond,
    THIRD: entThird,
    ALBUM: entAlbum,
    EK: entEK,
    INFO: entInfo,
    WHEN: entWhen,
  },
  examples: [
    "_NAME of _ALBUM",
    "What's the _NAME of your _ALBUM",
    "_WHEN was your _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _ALBUM",
    "_WHEN did your _ALBUM _RELEASE",
    "_WHEN were your _ALBUM _RELEASE",
    "_RELEASE _ALBUM",
    "have you got any _ALBUM _RELEASE",
    "do you have any _ALBUM?",
    "tell me about your _FIRST _ALBUM",
    "i want to hear about your _FIRST _ALBUM",
    "info about _FIRST _ALBUM",
    "tell me about your _SECOND _ALBUM",
    "i want to hear about your _SECOND _ALBUM",
    "info about _SECOND _ALBUM",
    "tell me about your _THIRD _ALBUM",
    "i want to hear about your _THIRD _ALBUM",
    "info about _THIRD _ALBUM",
    "_NAME of _FIRST _ALBUM",
    "What's the _NAME of your _FIRST _ALBUM",
    "_NAME of _SECOND _ALBUM",
    "What's the _NAME of your _SECOND _ALBUM",
    "_NAME of _THIRD _ALBUM",
    "What's the _NAME of your _THIRD _ALBUM",
    "have you _RELEASE a _ALBUM",
    "did you _RELEASE a _ALBUM?",
    "_WHEN was your _FIRST _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _FIRST _ALBUM",
    "_WHEN did your _FIRST _ALBUM _RELEASE",
    "_RELEASE _FIRST _ALBUM",
    "_WHEN was your _SECOND _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _SECOND _ALBUM",
    "_WHEN did your _SECOND _ALBUM _RELEASE",
    "_RELEASE _SECOND _ALBUM",
    "_WHEN was your _THIRD _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _THIRD _ALBUM",
    "_WHEN did your _THIRD _ALBUM _RELEASE",
    "_RELEASE _THIRD _ALBUM",
  ],
}

/*
export const inAboutEveryKingdom: Intent = {
  entities: {  FIRST: entFirst, /*ALBUM: entAlbum, EK: entEK, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo  EK: entEK},
  examples: [
    "tell me about your _FIRST album",
    "i want to hear about your _FIRST album",
    "info about _FIRST album",
    "tell me about your _FIRST record",
    "i want to hear about your _FIRST record",
    "info about _FIRST record",
    "tell me about _EK",
    "i want to hear about _EK",
     "_INFO about _EK",
    "_FIRST _ALBUM",
    "_INFO _SOMETHING about _EK",
    "_INFO _SOMETHING about _FIRST _ALBUM",
    "i want to _KNOW about _EK",
    "i want to _KNOW about your _FIRST _ALBUM",
    "what's your _FIRST _ALBUM",
    "_EK" 
  ],
}*/

export const inAboutEveryKingdom: Intent = {
  entities: { EK: entEK },
  examples: ["tell me about _EK", "i want to hear about _EK", "info about _EK"],
}

/*
export const inNameOfFirstAlbum: Intent = {
  entities: { FIRST: entFirst, NAME: entName },
  examples: ["_NAME of _FIRST album", /*"What's your _FIRST _ALBUM _NAME", "_NAME of _FIRST record", "What's the _NAME of your _FIRST album", "What's the _NAME of your _FIRST record",],
}*/

/*
export const inHaveFirstAlbum: Intent = {
  entities: { FIRSTALBUM: entFirstAlbum, RELEASE: entRelease},
  examples: [
    "have you _RELEASE a _FIRSTALBUM",
    "did you _RELEASE a _FIRSTALBUM?",
    "Do you have a _FIRSTALBUM out",
    "have you got a _FIRSTALBUM out",
  ],
}*/

/*
export const inReleaseDateFirstAlbum: Intent = {
  entities: { FIRSTALBUM: entFirstAlbum, RELEASE: entRelease, WHEN: entWhen},
  examples: [
    "_WHEN was your _FIRSTALBUM _RELEASE",
    "_WHEN did you _RELEASE your _FIRSTALBUM",
    "_WHEN did your _FIRSTALBUM _RELEASE",
    "_RELEASE _FIRSTALBUM",
  ],
}*/

export const inReleaseDateEveryKingdom: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, EK: entEK },
  examples: ["WHEN was _EK _RELEASE", "_WHEN did you _RELEASE _EK", "_WHEN did _EK _RELEASE"],
}

/*
export const inAboutIFWWW: Intent = {
  entities: { SECOND: entSecond, ALBUM: entAlbum, IFWWW: entIFWWW, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo,  IFWWW: entIFWWW},
  examples: [
    "tell me about your _SECOND album",
    "i want to hear about your _SECOND album",
    "info about _SECOND album",
    "tell me about your _SECOND record",
    "i want to hear about your _SECOND record",
    "info about _SECOND record",
    "tell me about _IFWWW",
    "i want to hear about _IFWWW",
    "_INFO about _IFWWW",
    "_SECOND _ALBUM",
    "_INFO _SOMETHING about _IFWWW",
    "_INFO _SOMETHING about _SECOND _ALBUM",
    "i want to _KNOW about _IFWWW",
    "i want to _KNOW about your _SECOND _ALBUM",
    /*"what's your _SECOND _ALBUM",
    "_IFWWW" 
  ],
} */

export const inAboutIFWWW: Intent = {
  entities: { IFWWW: entIFWWW },
  examples: ["tell me about _IFWWW", "i want to hear about _IFWWW", "info about _IFWWW"],
}

/*
export const inNameOfSecondAlbum: Intent = {
  entities: {SECOND: entSecond, NAME: entName},
  examples: ["_NAME of _SECOND album", "_NAME of _SECOND record", /*"What's your _SECOND _ALBUM _NAME", "What's the _NAME of your _SECOND album", "What's the _NAME of your _SECOND record"],
} */

/*
export const inHaveSecondAlbum: Intent = {
  entities: {SECONDALBUM: entSecondAlbum, RELEASE: entRelease},
  examples: [
    "have you _RELEASE a _SECONDALBUM",
    "did you _RELEASE a _SECONDALBUM?",
    "Do you have a _SECONDALBUM out",
    "have you got a _SECONDALBUM out",
  ],
} */

/*
export const inReleaseDateSecondAlbum: Intent = {
  entities: { FIRSTALBUM: entFirstAlbum, RELEASE: entRelease, WHEN: entWhen},
  examples: [
    "_WHEN was your _FIRSTALBUM _RELEASE",
    "_WHEN did you _RELEASE your _FIRSTALBUM",
    "_WHEN did your _FIRSTALBUM _RELEASE",
    "_RELEASE _FIRSTALBUM",
  ],
} */

export const inReleaseDateIFWWW: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, IFWWW: entIFWWW },
  examples: ["WHEN was _IFWWW _RELEASE", "_WHEN did you _RELEASE _IFWWW", "_WHEN did _IFWWW _RELEASE"],
}

export const inAboutNoondayDream: Intent = {
  entities: { ND: entND },
  examples: ["tell me about _ND", "i want to hear about _ND", "info about _ND"],
}

/*
export const inAboutNoondayDream: Intent = {
  entities: { THIRD: entThird,  ALBUM: entAlbum, ND: entND, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo, ND: entND},
  examples: [
    "tell me about your _THIRD album",
    "i want to hear about your _THIRD album",
    "info about _THIRD album",
    "tell me about your _THIRD record",
    "i want to hear about your _THIRD record",
    "info about _THIRD record",
    "tell me about _ND",
    "i want to hear about _ND",
    "_INFO about _ND",
    "_THIRD _ALBUM",
    "_INFO _SOMETHING about _ND",
    "_INFO _SOMETHING about _THIRD _ALBUM",
    "i want to _KNOW about _ND",
    "i want to _KNOW about your _THIRD _ALBUM",
    /*"what's your _THIRD _ALBUM",
    "_ND" 
  ],
}*/

/*
export const inNameOfThirdAlbum: Intent = {
  entities: {THIRD: entThird, NAME: entName},
  examples: ["_NAME of _THIRD album", "What's your _THIRD _ALBUM _NAME", "_NAME of _THIRD record", "What's the _NAME of your _THIRD album", "_NAME of _THIRD record"],
}*/

/*
export const inHaveThirdAlbum: Intent = {
  entities: {THIRDALBUM: entThirdAlbum, RELEASE: entRelease},
  examples: [
    "have you _RELEASE a _THIRDALBUM",
    "did you _RELEASE a _THIRDALBUM?",
    "Do you have a _THIRDALBUM out",
    "have you got a _THIRDALBUM out",
  ],
} */

/* 
export const inReleaseDateThirdAlbum: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, THIRD: entThird},
  examples: [
    "_WHEN was your _THIRD _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _THIRD _ALBUM",
    "_WHEN did your _THIRD _ALBUM _RELEASE",
    "_RELEASE _THIRD _ALBUM",
  ],
} */

export const inReleaseDateNoondayDream: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, ND: entND },
  examples: ["WHEN was _ND _RELEASE", "_WHEN did you _RELEASE _ND", "_WHEN did _ND _RELEASE"],
}

export const inNameOfLatestAlbum: Intent = {
  entities: { LATEST: entLatest, NAME: entName, ALBUM: entAlbum },
  examples: [
    "_NAME of _LATEST _ALBUM",
    /*"What's your _LATEST _ALBUM _NAME",*/ "What's the _NAME of your _LATEST _ALBUM",
  ],
}

export const inReleaseDateLatestAlbum: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, LATEST: entLatest, ALBUM: entAlbum },
  examples: [
    "_WHEN was your _LATEST _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _LATEST _ALBUM",
    "_WHEN did your _LATEST _ALBUM _RELEASE",
    "_RELEASE _LATEST _ALBUM",
  ],
}

export const inHowManyAlbum: Intent = {
  entities: { RELEASE: entRelease, ALBUM: entAlbum },
  examples: [
    "how many _ALBUM do you have?",
    "How many _ALBUM are there",
    "How many _ALBUM have you _RELEASE",
    "How many _ALBUM are _RELEASE",
    "How many _ALBUM",
    "_ALBUM how _MANY",
  ],
}

/*
export const inTellAboutAllAlbum: Intent = {
  entities: {INFO: entInfo, HAVE: entHave, RELEASE: entRelease},
  examples: [
   "_INFO about _ALL the _ALBUM",
    "i wanna _KNOW about _ALL the _ALBUM",
    "can i _KNOW about _ALL _ALBUM",
    "can you _INFO about _ALL _ALBUM",
  ],
}*/

export const intents = [
  inAboutEveryKingdom,
  /*inNameOfFirstAlbum,
  inHaveFirstAlbum,
  inReleaseDateFirstAlbum,*/
  inReleaseDateEveryKingdom,
  inAboutIFWWW,
  /*inNameOfSecondAlbum,
  inHaveSecondAlbum,
  inReleaseDateSecondAlbum,*/
  inReleaseDateIFWWW,
  inAboutNoondayDream,
  /*inNameOfThirdAlbum,
  inHaveThirdAlbum,
  inReleaseDateThirdAlbum,*/
  inReleaseDateNoondayDream,
  inNameOfLatestAlbum,
  inReleaseDateLatestAlbum,
  inHowManyAlbum,
  /*chooseEveryKingdom,
  chooseIFWWW,
  chooseNoondayDream,
  inTellAboutAllAlbum,
  /*inAboutAlbum,*/
]
