import { Intent } from "narratory"
import { entEK, entIFWWW, entND, entAlbum, entGamesInTheDark, entTheseWaters, entOldPine, entBHWRDLIVE, entTheBurghIsland, entRelease, entFirst, entSecond, entThird, entInfo, entWhen, entName, entLatest, entFourth, entFifth } from "../allEntities"

export const inAboutAlbum: Intent = {
  entities: {
    RELEASE: entRelease,
    FIRST: entFirst,
    SECOND: entSecond,
    THIRD: entThird,
    ALBUM: entAlbum,
    INFO: entInfo,
    WHEN: entWhen,
    NAME: entName,
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

export const inAboutEveryKingdom: Intent = {
  entities: { EK: entEK },
  examples: ["tell me about _EK", "i want to hear about _EK", "info about _EK", "can you tell me about _EK", "_EK"],
}

export const inReleaseDateEveryKingdom: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, EK: entEK },
  examples: ["WHEN was _EK _RELEASE", "_WHEN did you _RELEASE _EK", "_WHEN did _EK _RELEASE"],
}

export const inAboutIFWWW: Intent = {
  entities: { IFWWW: entIFWWW },
  examples: [
    "tell me about _IFWWW",
    "i want to hear about _IFWWW",
    "info about _IFWWW",
    "can you tell me about _IFWWW",
    "_IFWWW"
  ],
}

export const inReleaseDateIFWWW: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, IFWWW: entIFWWW },
  examples: ["WHEN was _IFWWW _RELEASE", "_WHEN did you _RELEASE _IFWWW", "_WHEN did _IFWWW _RELEASE"],
}

export const inAboutNoondayDream: Intent = {
  entities: { ND: entND },
  examples: ["tell me about _ND", "i want to hear about _ND", "info about _ND", "can you tell me about _ND", "_ND"],
}

export const inReleaseDateNoondayDream: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, ND: entND },
  examples: ["WHEN was _ND _RELEASE", "_WHEN did you _RELEASE _ND", "_WHEN did _ND _RELEASE"],
}

export const inNameOfLatestAlbum: Intent = {
  entities: { LATEST: entLatest, NAME: entName, ALBUM: entAlbum },
  examples: ["_NAME of _LATEST _ALBUM", "What's the _NAME of your _LATEST _ALBUM"],
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

export const inAboutEP: Intent = {
  entities: {
    RELEASE: entRelease,
    FIRST: entFirst,
    SECOND: entSecond,
    THIRD: entThird,
    FOURTH: entFourth,
    FIFTH: entFifth,
    INFO: entInfo,
    WHEN: entWhen,
    NAME: entName,
  },
  examples: [
    "_NAME of EP",
    "What's the _NAME of your EP",
    "_WHEN was your EP _RELEASE",
    "_WHEN did you _RELEASE your EP",
    "_WHEN did your EP _RELEASE",
    "_WHEN were your EP _RELEASE",
    "_RELEASE EP",
    "have you got any EP _RELEASE",
    "do you have any EP?",
    "tell me about your _FIRST EP",
    "i want to hear about your _FIRST EP",
    "info about _FIRST EP",
    "tell me about your _SECOND EP",
    "i want to hear about your _SECOND EP",
    "info about _SECOND EP",
    "tell me about your _THIRD EP",
    "i want to hear about your _THIRD EP",
    "info about _THIRD EP",
    "tell me about your _FOURTH EP",
    "i want to hear about your _FOURTH EP",
    "info about _FOURTH EP",
    "tell me about your _FIFTH EP",
    "i want to hear about your _FIFTH EP",
    "info about _FIFTH EP",
    "_NAME of _FIRST EP",
    "What's the _NAME of your _FIRST EP",
    "_NAME of _SECOND EP",
    "What's the _NAME of your _SECOND EP",
    "_NAME of _THIRD EP",
    "What's the _NAME of your _THIRD EP",
    "_NAME of _FOURTH EP",
    "What's the _NAME of your _FOURTH EP",
    "_NAME of _FIFTH EP",
    "What's the _NAME of your _FIFTH EP",
    "have you _RELEASE a EP",
    "did you _RELEASE a EP?",
    "_WHEN was your _FIRST EP _RELEASE",
    "_WHEN did you _RELEASE your _FIRST EP",
    "_WHEN did your _FIRST EP _RELEASE",
    "_RELEASE _FIRST EP",
    "_WHEN was your _SECOND EP _RELEASE",
    "_WHEN did you _RELEASE your _SECOND EP",
    "_WHEN did your _SECOND EP _RELEASE",
    "_RELEASE _SECOND EP",
    "_WHEN was your _THIRD EP _RELEASE",
    "_WHEN did you _RELEASE your _THIRD EP",
    "_WHEN did your _THIRD EP _RELEASE",
    "_RELEASE _THIRD EP",
    "_WHEN was your _FOURTH EP _RELEASE",
    "_WHEN did you _RELEASE your _FOURTH EP",
    "_WHEN did your _FOURTH EP _RELEASE",
    "_RELEASE _FOURTH EP",
    "_WHEN was your _FIFTH EP _RELEASE",
    "_WHEN did you _RELEASE your _FIFTH EP",
    "_WHEN did your _FIFTH EP _RELEASE",
    "_RELEASE _FIFTH EP",
  ],
}

export const inAboutGamesInTheDark: Intent = {
  entities: { GAMESINTHEDARK: entGamesInTheDark },
  examples: [
    "tell me about _GAMESINTHEDARK", 
    "i want to hear about _GAMESINTHEDARK", 
    "info about _GAMESINTHEDARK", 
    "can you tell me about _GAMESINTHEDARK",
    "_GAMESINTHEDARK"
  ]
}

export const inReleaseDateGamesInTheDark: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, GAMESINTHEDARK: entGamesInTheDark },
    examples: [
      "WHEN was _GAMESINTHEDARK _RELEASE", "_WHEN did you _RELEASE _GAMESINTHEDARK", "_WHEN did _GAMESINTHEDARK _RELEASE"
    ],
  }

export const inAboutTheseWaters: Intent = {
  entities: { THESEWATERS: entTheseWaters },
  examples: [
    "tell me about _THESEWATERS", 
    "i want to hear about _THESEWATERS", 
    "info about _THESEWATERS", 
    "can you tell me about _THESEWATERS",
    "_THESEWATERS"
  ],
}

export const inReleaseDateTheseWaters: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, THESEWATERS: entTheseWaters },
  examples: [
    "WHEN was _THESEWATERS _RELEASE", "_WHEN did you _RELEASE _THESEWATERS", "_WHEN did _THESEWATERS _RELEASE"
    ],
  }

export const inAboutOldPine: Intent = {
  entities: { OLDPINE: entOldPine },
  examples: [
    "tell me about _OLDPINE", 
    "i want to hear about _OLDPINE", 
    "info about _OLDPINE", 
    "can you tell me about _OLDPINE",
    "_OLDPINE"
  ],
}

export const inReleaseDateOldPine: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, OLDPINE: entOldPine },
  examples: [
    "WHEN was _OLDPINE _RELEASE", "_WHEN did you _RELEASE _OLDPINE", "_WHEN did _OLDPINE _RELEASE"
    ],
  }

export const inAboutBHWRDLIVE: Intent = {
  entities: { BHWRDLIVE: entBHWRDLIVE },
  examples: [
    "tell me about _BHWRDLIVE", 
    "i want to hear about _BHWRDLIVE", 
    "info about _BHWRDLIVE", 
    "can you tell me about _BHWRDLIVE",
    "_BHWRDLIVE"
  ],
}

export const inReleaseDateBHWRDLIVE: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, THEBURGHISLAND: entTheBurghIsland },
  examples: [
    "WHEN was _THEBURGHISLAND _RELEASE", "_WHEN did you _RELEASE _THEBURGHISLAND", "_WHEN did _THEBURGHISLAND _RELEASE"
    ],
  }

export const inAboutTheBurghIsland: Intent = {
  entities: { THEBURGHISLAND: entTheBurghIsland},
  examples: [
    "tell me about _THEBURGHISLAND", 
    "i want to hear about _THEBURGHISLAND", 
    "info about _THEBURGHISLAND", 
    "can you tell me about _THEBURGHISLAND",
    "_THEBURGHISLAND"
  ],
}

export const inReleaseDateTheBurghIsland: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, THEBURGHISLAND: entTheBurghIsland },
  examples: [
    "WHEN was _THEBURGHISLAND _RELEASE", "_WHEN did you _RELEASE _THEBURGHISLAND", "_WHEN did _THEBURGHISLAND _RELEASE"
    ],
  }

export const inNameOfLatestEP: Intent = {
  entities: { LATEST: entLatest, NAME: entName},
  examples: [
    "_NAME of _LATEST EP",
    "What's the _NAME of your _LATEST EP",
  ],
}

export const inReleaseDateLatestEP: Intent = {
  entities: { RELEASE: entRelease, WHEN: entWhen, LATEST: entLatest },
  examples: [
    "_WHEN was your _LATEST EP _RELEASE",
    "_WHEN did you _RELEASE your _LATEST EP",
    "_WHEN did your _LATEST EP _RELEASE",
    "_RELEASE _LATEST EP",
  ],
}

export const inHowManyEP: Intent = {
  entities: { RELEASE: entRelease},
  examples: [
    "how many EP do you have?",
    "How many EP are there",
    "How many EP have you _RELEASE",
    "How many EP are _RELEASE",
    "How many EP",
    "_EP how many",
  ],
}

export const intents = [
  inAboutEveryKingdom,
  inReleaseDateEveryKingdom,
  inAboutIFWWW,
  inReleaseDateIFWWW,
  inAboutNoondayDream,
  inReleaseDateNoondayDream,
  inNameOfLatestAlbum,
  inReleaseDateLatestAlbum,
  inHowManyAlbum,
  inAboutGamesInTheDark,
  inAboutTheseWaters,
  inAboutOldPine,
  inAboutBHWRDLIVE,
  inAboutTheBurghIsland,
  inNameOfLatestEP,
  inReleaseDateLatestEP,
  inHowManyEP,
  inReleaseDateGamesInTheDark,
  inReleaseDateTheseWaters,
  inReleaseDateOldPine,
  inReleaseDateBHWRDLIVE,
  inReleaseDateTheBurghIsland]
