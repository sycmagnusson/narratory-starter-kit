import { Intent } from "narratory"
import { entAlbum, entEK, entIFWWW, entND } from "../Entities/aboutAlbums"
import { entName, entFirst, entHave, entWhen, entRelease, entKnow, entSomething, entInfo, entSecond, entThird, entLast, entLatest, entMany } from "../Entities/general"

export const inAboutEveryKingdom: Intent = {
  entities: { FIRST: entFirst, ALBUM: entAlbum, EK: entEK, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo},
  examples: [
    "_INFO about your _FIRST _ALBUM",
    "_INFO about _EK",
    "_FIRST _ALBUM",
    "_INFO _SOMETHING about _EK",
    "_INFO _SOMETHING about _FIRST _ALBUM",
    "i want to _KNOW about _EK",
    "i want to _KNOW about your _FIRST _ALBUM",
    "what's your _FIRST _ALBUM",
    "_EK"
  ],
}

export const inNameOfFirstAlbum: Intent = {
  entities: { FIRST: entFirst, ALBUM: entAlbum, NAME: entName },
  examples: ["_NAME of _FIRST _ALBUM", "What's your _FIRST _ALBUM _NAME", "What's the _NAME of your _FIRST _ALBUM"],
}

export const inHaveFirstAlbum: Intent = {
  entities: { FIRST: entFirst, ALBUM: entAlbum, RELEASE: entRelease, HAVE: entHave},
  examples: [
    "_HAVE you _RELEASE a _FIRST _ALBUM",
    "Do you _HAVE a _FIRST _ALBUM",
    "_HAVE a _FIRST _ALBUM",
    "_HAVE you got a _FIRST _ALBUM",
  ],
}

export const inReleaseDateFirstAlbum: Intent = {
  entities: { FIRST: entFirst, ALBUM: entAlbum, RELEASE: entRelease, WHEN: entWhen},
  examples: [
    "_WHEN was your _FIRST _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _FIRST _ALBUM",
    "_WHEN did your _FIRST _ALBUM _RELEASE",
    "_RELEASE _FIRST _ALBUM",
  ],
}

export const inReleaseDateEveryKingdom: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, EK: entEK},
  examples: [
    "WHEN was _EK _RELEASE",
    "_WHEN did you _RELEASE _EK",
    "_WHEN did _EK _RELEASE",
  ],
}

export const inAboutIFWWW: Intent = {
  entities: { SECOND: entSecond, ALBUM: entAlbum, IFWWW: entIFWWW, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo},
  examples: [
    "_INFO about your _SECOND _ALBUM",
    "_INFO about _IFWWW",
    "_SECOND _ALBUM",
    "_INFO _SOMETHING about _IFWWW",
    "_INFO _SOMETHING about _SECOND _ALBUM",
    "i want to _KNOW about _IFWWW",
    "i want to _KNOW about your _SECOND _ALBUM",
    "what's your _SECOND _ALBUM",
    "_IFWWW"
  ],
}

export const inNameOfSecondAlbum: Intent = {
  entities: {SECOND: entSecond, NAME: entName, ALBUM: entAlbum},
  examples: ["_NAME of _SECOND _ALBUM", "What's your _SECOND _ALBUM _NAME", "What's the _NAME of your _SECOND _ALBUM"],
}

export const inHaveSecondAlbum: Intent = {
  entities: { SECOND: entSecond, ALBUM: entAlbum, RELEASE: entRelease, HAVE: entHave},
  examples: [
    "_HAVE you _RELEASE a _SECOND _ALBUM",
    "Do you _HAVE a _SECOND _ALBUM",
    "_HAVE a _SECOND _ALBUM",
    "_HAVE you got a _SECOND _ALBUM",
  ],
}

export const inReleaseDateSecondAlbum: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, SECOND: entSecond},
  examples: [
    "_WHEN was your _SECOND _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _SECOND _ALBUM",
    "_WHEN did your _SECOND _ALBUM _RELEASE",
    "_RELEASE _SECOND _ALBUM",
  ],
}

export const inReleaseDateIFWWW: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, IFWWW: entIFWWW},
  examples: [
    "WHEN was _IFWWW _RELEASE",
    "_WHEN did you _RELEASE _IFWWW",
    "_WHEN did _IFWWW _RELEASE",
  ],
}

export const inAboutNoondayDream: Intent = {
  entities: { THIRD: entThird, ALBUM: entAlbum, ND: entND, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo},
  examples: [
    "_INFO about your _THIRD _ALBUM",
    "_INFO about _ND",
    "_THIRD _ALBUM",
    "_INFO _SOMETHING about _ND",
    "_INFO _SOMETHING about _THIRD _ALBUM",
    "i want to _KNOW about _ND",
    "i want to _KNOW about your _THIRD _ALBUM",
    "what's your _THIRD _ALBUM",
    "_ND"
  ],
}

export const inNameOfThirdAlbum: Intent = {
  entities: {THIRD: entThird, NAME: entName, ALBUM: entAlbum},
  examples: ["_NAME of _THIRD _ALBUM", "What's your _THIRD _ALBUM _NAME", "What's the _NAME of your _THIRD _ALBUM"],
}

export const inHaveThirdAlbum: Intent = {
  entities: { THIRD: entThird, ALBUM: entAlbum, RELEASE: entRelease, HAVE: entHave},
  examples: [
    "_HAVE you _RELEASE a _THIRD _ALBUM",
    "Do you _HAVE a _THIRD _ALBUM",
    "_HAVE a _THIRD _ALBUM",
    "_HAVE you got a _THIRD _ALBUM",
  ],
}

export const inReleaseDateThirdAlbum: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, THIRD: entThird},
  examples: [
    "_WHEN was your _THIRD _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _THIRD _ALBUM",
    "_WHEN did your _THIRD _ALBUM _RELEASE",
    "_RELEASE _THIRD _ALBUM",
  ],
}

export const inReleaseDateNoondayDream: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, ND: entND},
  examples: [
    "WHEN was _ND _RELEASE",
    "_WHEN did you _RELEASE _ND",
    "_WHEN did _ND _RELEASE",
  ],
}

export const inNameOfLatestAlbum: Intent = {
  entities: {LATEST: entLatest, NAME: entName, ALBUM: entAlbum},
  examples: ["_NAME of _LATEST _ALBUM", "What's your _LATEST _ALBUM _NAME", "What's the _NAME of your _LATEST _ALBUM"],
}

export const inReleaseDateLatestAlbum: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, LATEST: entLast},
  examples: [
    "_WHEN was your _LATEST _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _LATEST _ALBUM",
    "_WHEN did your _LATEST _ALBUM _RELEASE",
    "_RELEASE _LATEST _ALBUM",
  ],
}

export const inHowManyAlbum: Intent = {
  entities: {MANY: entMany, ALBUM: entAlbum, HAVE: entHave, RELEASE: entRelease},
  examples: [
    "how _MANY _ALBUM do you _HAVE?",
    "How _MANY _ALBUM are there",
    "How _MANY _ALBUM _HAVE you _RELEASE",
    "How _MANY _ALBUM are _RELEASE",
    "How _MANY _ALBUM",
    "_ALBUM how _MANY",
  ],
}

export const inTellAboutAllAlbum: Intent = {
  entities: {INFO: entInfo, ALBUM: entAlbum, HAVE: entHave, RELEASE: entRelease},
  examples: [
   "_INFO about _ALL the _ALBUM",
    "i wanna _KNOW about _ALL the _ALBUM",
    "can i _KNOW about _ALL _ALBUM",
    "can you _INFO about _ALL _ALBUM",
  ],
}

export const inAboutAlbum: Intent = {
  entities: { ALBUM: entAlbum, EK: entEK, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo},
  examples: [
    "_NAME of _ALBUM", 
    "What's your _ALBUM _NAME", 
    "What's the _NAME of your _ALBUM",
    "_WHEN was your _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _ALBUM",
    "_WHEN did your _ALBUM _RELEASE",
    "_RELEASE _ALBUM",
    "_HAVE you got any _ALBUM _RELEASE",
    "_do you HAVE any _ALBUM?",
    "what's your _ALBUM",
    "what _ALBUM do you _HAVE"
  ],
}

export const intents = [
  inAboutEveryKingdom,
  inNameOfFirstAlbum,
  inHaveFirstAlbum,
  inReleaseDateFirstAlbum,
  inReleaseDateEveryKingdom,
  inAboutIFWWW,
  inNameOfSecondAlbum,
  inHaveSecondAlbum,
  inReleaseDateSecondAlbum,
  inReleaseDateIFWWW,
  inAboutNoondayDream,
  inNameOfThirdAlbum,
  inHaveThirdAlbum,
  inReleaseDateThirdAlbum,
  inReleaseDateNoondayDream,
  inNameOfLatestAlbum,
  inReleaseDateLatestAlbum,
  inHowManyAlbum,
  /*chooseEveryKingdom,
  chooseIFWWW,
  chooseNoondayDream,*/
  inTellAboutAllAlbum,
  inAboutAlbum,
]
