import { Intent } from "narratory"
import { entHello, entHowAreYou, entHowIsDay, entWhatsUp, entNiceMeetingYou, entOld, entBirthday, entBorn, entWhereGrowUp, entHomeTown, entUK, entReal, entReally, entLiveShows, entPerforming, entUpcoming, entGoodbye, entName, entFirst, entMiddle, entLast, entFull, entWhen, entWhere, entPlace, entYes, entNo, entMean, entInfo, entIDK, entHow, entWork, entBuild, entCan, entAnswer, entAble, entAnother, entQuestion, entAsk, entSomething, entHelp, entBot } from "../allEntities"

/* | Name | First Name | Middle Name | Last Name | Full Name |
   | Hello | How Are You | How Is Day | What's Up | Nice Meeting You |
   | Age | WhenBorn | What Year Born | Birthday | Birthplace |
   | Grow Up | About Devon | 
   | About Ben | Real Ben? | Live Shows |
   | Yes | No | */

export const inName: Intent = {
  entities: { NAME: entName },
  examples: [
    /*"_NAME",*/
    "what is your _NAME",
    "tell me your _NAME",
    "your _NAME please",
    "only your _NAME",
    "just your _NAME",
    "what's your _NAME",
  ],
}

export const inFirstName: Intent = {
  entities: { FIRST: entFirst, NAME: entName },
  examples: [
    /*"_FIRST _NAME",*/
    "what is your _FIRST _NAME",
    "tell me your _FIRST _NAME",
    "your _FIRST _NAME please",
    "only your _FIRST _NAME",
    "just your _FIRST _NAME",
    "what's your _FIRST _NAME",
  ],
}

export const inMiddleName: Intent = {
  entities: { MIDDLE: entMiddle, NAME: entName },
  examples: [
    /*"_MIDDLE _NAME",*/
    "what is your _MIDDLE _NAME",
    "tell me your _MIDDLE _NAME",
    "your _MIDDLE _NAME please",
    "only your _MIDDLE _NAME",
    "just your _MIDDLE_NAME",
    "what's your _MIDDLE _NAME",
  ],
}

export const inLastName: Intent = {
  entities: { LAST: entLast, NAME: entName },
  examples: [
    /*"_LAST _NAME",*/
    "what is your _LAST _NAME",
    "tell me your _LAST _NAME",
    "your _LAST _NAME please",
    "only your _LAST _NAME",
    "just your _LAST _NAME",
    "what's your _LAST _NAME",
  ],
}

export const inFullName: Intent = {
  entities: { FULL: entFull, NAME: entName },
  examples: [
    /*"_FULL _NAME",*/
    "what is your _FULL _NAME",
    "tell me your _FULL _NAME",
    "your _FULL _NAME please",
    "only your _FULL _NAME",
    "just your _FULL _NAME",
    "what's your _FULL _NAME",
  ],
}

export const inHello: Intent = {
  entities: { HELLO: entHello },
  examples: ["hi", "_HELLO"],
}

export const inHowAreYou: Intent = {
  entities: { HOWAREYOU: entHowAreYou },
  examples: ["how are you?", "_HOWAREYOU"],
}

export const inHowIsDay: Intent = {
  entities: { HOWISDAY: entHowIsDay },
  examples: ["how is day", "_HOWISDAY"],
}

export const inWhatsUp: Intent = {
  entities: { WHATSUP: entWhatsUp },
  examples: ["what's up", /*_WHAT*/ "whatSUP"],
}

export const inNiceMeetingYou: Intent = {
  entities: { NICEMEETINGYOU: entNiceMeetingYou },
  examples: ["nice to meet you", "_NICEMEETINGYOU"],
}

export const inAge: Intent = {
  entities: { OLD: entOld },
  examples: ["how _OLD are you", "tell me how _OLD you are", "what _OLD are you"],
}

export const inBirthday: Intent = {
  entities: { WHEN: entWhen, BIRTHDAY: entBirthday },
  examples: ["tell me _WHEN your _BIRTHDAY is", "_WHEN is your _BIRTHDAY"],
} 

/* export const inWhatYearBorn: Intent = {
  entities: {/*WHAT: entWhat BORN: entBorn, YEAR: entYear},
  examples: [
    /*_WHAT
    "tell me _WHEN you were _BORN", 
    "_WHEN are you _BORN", 
    "_WHEN was you _BORN",
    "what _YEAR were you _BORN.",
    "tell me what _YEAR you were _BORN",
    "tell me which _YEAR you were _BORN",
    "in what _YEAR were you BORN",
    "were you _BORN in the 80s",
  ],
} */

/*
export const inBirthday: Intent = {
  entities: {BIRTHDAY: entBirthday, WHEN: entWhen, DAY: entDay, /*WHAT: entWhat},
  examples: [
    "tell me _WHEN your _BIRTHDAY is",
    "_WHEN is your _BIRTHDAY",
    /*_WHAT "which is your _BIRTHDAY",
    /*_WHAT "what _DAY are you _BORN",
    /*_WHAT "what _DAY is your _BIRTHDAY",
    "which _DAY is your _BIRTHDAY",
  ],
}*/

export const inBirthplace: Intent = {
  entities: { WHERE: entWhere, BORN: entBorn, PLACE: entPlace },
  examples: [
    "_WHERE were you _BORN",
    /*_WHAT*/ "what was the _PLACE were you were _BORN",
    "which _PLACE are you _BORN in",
    "_INFO about _WHERE you were _BORN",
    "_WHERE was your _BORN",
    "tell me _WHERE you were _BORN",
    "tell me _WHEN you were _BORN",
    "_WHEN are you _BORN",
    "_WHEN was you _BORN",
    "what _YEAR were you _BORN.",
    "tell me what _YEAR you were _BORN",
    "tell me which _YEAR you were _BORN",
    "in what _YEAR were you BORN",
    "were you _BORN in the 80s",
  ],
}

export const inGrowUp: Intent = {
  entities: { WHERE: entWhere, GROWUP: entWhereGrowUp, HOMETOWN: entHomeTown, UK: entUK },
  examples: [
    "_WHERE did you _GROWUP",
    "tell me _WHERE you _GROWUP",
    "tell me about your _HOMETOWN",
    "_WHERE is your _HOMETOWN",
    "in what _PLACE did you _GROWUP",
    "what kind of _PLACE did you _GROWUP in",
    "_WHERE in _UK did you _GROWUP",
  ],
}

export const inAboutBen: Intent = {
  examples: [
    /*"who are you?",
    "tell me who you are",
    "who is this",
    "who is this guy",
    "who am i talking to",
    "who is this person",
    "who is it",
    "introduce yourself",
    "who is Ben Howard",
    "tell me about Ben Howard",
    "tell me your story",
    "what's your story",
    "tell me about your life",
    "about Ben",*/
  ],
}

export const inRealBenQuestion: Intent = {
  entities: { REAL: entReal, REALLY: entReally },
  examples: [
    "is this the _REAL Ben Howard",
    "am i talking to the _REAL Ben",
    "are you the _REAL Ben Howard",
    "is this _REALLY Ben",
    "are you _REALLY Ben",
    "is this _REALLY you Ben",
    "Ben, is this _REALLY you",
    "tell me if this is the _REAL ben howard",
  ],
}

export const inLiveShows: Intent = {
  entities: { LIVESHOWS: entLiveShows, PERFORMING: entPerforming, UPCOMING: entUpcoming, WHEN: entWhen },
  examples: [
    "ben howard _LIVESHOWS",
    "are you doing any _LIVESHOWS",
    "any _UPCOMING _LIVESHOWS",
    "are you going _PERFORMING",
    "will you be _PERFORMING soon",
    "_ABOUT ben howard _LIVESHOWS",
    "ben howard _LIVESHOWS",
    "ben howard _PERFORMING live",
    "_WHEN is your _UPCOMING _LIVESHOWS",
  ],
}

export const yes: Intent = {
  entities: { YES: entYes },
  examples: ["yes", "_YES"],
}

export const no: Intent = {
  entities: { NO: entNo },
  examples: ["no", "_NO"],
}

export const inMean: Intent = {
  entities: { MEAN: entMean, INFO: entInfo, IDK: entIDK, HOW: entHow, WORK: entWork, BUILT: entBuild },
  examples: [
    "what do you _MEAN",
    "_INFO what you _MEAN",
    "can you _INFO what you _MEAN",
    "what is _THIS",
    "can you _INFO?",
    "_IDK",
    "_HOW will you _INFO",
    "_HOW _CAN you _INFO",
    "_HOW _CAN I _INFO",
    "_HOW to _INFO",
    "_HOW do I _ASK you",
    "_HOW do you _WORK",
  ],
}

export const inHowBuilt: Intent = {
  entities: { HOW: entHow, WORK: entWork, BUILD: entBuild, CAN: entCan, ANSWER: entAnswer, ABLE: entAble, BOT: entBot},
  examples: [
    "_HOW were you _BUILD",
    "how did someone _BUILD you",
    "_HOW do you _WORK",
    "_HOW _CAN you _ANSWER",
    "_HOW do you _ANSWER",
    "_HOW are you _ABLE to _ANSWER",
    "what _CAN you _ANSWER?",
    "are you a _BOT"
  ],
}

export const inAnotherQuestion: Intent = {
  entities: { ANOTHER: entAnother, QUESTION: entQuestion, CAN: entCan, ASK: entAsk, SOMETHING: entSomething },
  examples: [
    "another question",
    "_ANOTHER _QUESTION",
    "_CAN I _ASK _ANOTHER _QUESTION",
    "_CAN I _ASK _SOMETHING ELSE",
    "_SOMETHING ELSE",
    "i want to _ASK _ SOMETHING ELSE",
    "i want to _ASK _ANOTHER _QUESTION",
  ],
}

export const inGoodbye: Intent = {
  entities: { GOODBYE: entGoodbye },
  examples: ["goodbye", "_GOODBYE"],
}

export const inWhatToAsk: Intent = {
  entities: {
     CAN: entCan,
    ASK: entAsk,
    HELP: entHelp,
    QUESTION: entQuestion,
    IDK: entIDK,
    ANSWER: entAnswer,
    ABLE: entAble,
  },
  examples: [
    "like what",
    "what _CAN I _ASK",
    "what _CAN i _ASK you",
    "INFO_ me what I _CAN _ASK",
    "_HELP me with _QUESTION to _ASK",
    "INFO_ me what to _ASK",
    "_IDK what to _ASK",
    "what _QUESTION _CAN i _ASK",
    "what _QUESTION _CAN you _ANSWER?",
    "what _QUESTION do you _KNOW?",
    "what are you _ABLE to _ANSWER",
    "what _QUESTION are you _ABLE to _ANSWER",
    "what to _ASK?",
    "_HELP",
    "help",
  ],
}

export const intents = [
  inMean,
  inName,
  inFirstName,
  inMiddleName,
  inLastName,
  inFullName,
  inHello,
  inHowAreYou,
  inHowIsDay,
  inWhatsUp,
  inNiceMeetingYou,
  inAge,
  inBirthplace,
  inGrowUp,
  inAboutBen,
  inRealBenQuestion,
  inLiveShows,
  yes,
  no,
]
