import { Intent } from "narratory"
import { entName, entFirst, entMiddle, entLast, entFull, entHello, entWhere, entBorn, entPlace, entMean, entInfo, entUnderstand, entAnother, entQuestion, entCan, entAsk, entSomething, entGoodbye, entIDK } from "../Entities/general"

/* | Name | First Name | Middle Name | Last Name | Full Name |
   | Hello | How Are You | How Is Day | What's Up | Nice Meeting You |
   | Age | WhenBorn | What Year Born | Birthday | Birthplace |
   | Grow Up | About Devon | 
   | About Ben | Real Ben? | Live Shows |
   | Yes | No | */

export const inName: Intent = {
  entities: { NAME: entName },
  examples: [
    "_NAME",
    "what is your _NAME",
    "tell me your _NAME",
    "your _NAME please",
    "only your _NAME",
    "just your _NAME",
    "what's your _NAME",
  ],
}

export const inFirstName: Intent = {
  entities: { FIRST: entFirst, 
    NAME: entName},
  examples: [
    "_FIRST _NAME",
    "what is your _FIRST _NAME",
    "tell me your _FIRST _NAME",
    "your _FIRST _NAME please",
    "only your _FIRST _NAME",
    "just your _FIRST _NAME",
    "what's your _FIRST _NAME",
  ],
}

export const inMiddleName: Intent = {
  entities: { MIDDLE: entMiddle,
    NAME: entName },
  examples: [
    "_MIDDLE _NAME",
    "what is your _MIDDLE _NAME",
    "tell me your _MIDDLE _NAME",
    "your _MIDDLE _NAME please",
    "only your _MIDDLE _NAME",
    "just your _MIDDLE_NAME",
    "what's your _MIDDLE _NAME",
  ],
}

export const inLastName: Intent = {
  entities: { LAST: entLast, 
    NAME: entName},
  examples: [
    "_LAST _NAME",
    "what is your _LAST _NAME",
    "tell me your _LAST _NAME",
    "your _LAST _NAME please",
    "only your _LAST _NAME",
    "just your _LAST _NAME",
    "what's your _LAST _NAME",
  ],
}

export const inFullName: Intent = {
  entities: { FULL: entFull,
    NAME: entName},
  examples: [
    "_FULL _NAME",
    "what is your _FULL _NAME",
    "tell me your _FULL _NAME",
    "your _FULL _NAME please",
    "only your _FULL _NAME",
    "just your _FULL _NAME",
    "what's your _FULL _NAME",
  ],
}

export const inHello: Intent = {
  entities: { HELLO: entHello},
  examples: ["hi",
  "_HELLO"]
}

export const inHowAreYou: Intent = {
  examples: [
    "how are you?",
    "how do you do",
    "how's it going",
    "how are you doing",
    "how's everything",
    "how goes it",
    "how are things going",
    "how are things with you",
    "how's it hanging",
    "how are you going",
    "how are things",
    "how are you keeping",
    "how's life",
    "ca va",
    "wie geht es dir",
    "como esta",
    "¿Cómo está",
    "como estas",
    "¿Cómo estás?",
    "howdy-do",
    "howzit",
    "how ya doin",
    "how ya goin",
    "you alright?",
    "how are you holding up",
    "how is life treating you",
  ],
}

export const inHowIsDay: Intent = {
  examples: [
    "how is day",
    "how is your day",
    "how's your day",
    "how's your day been",
    "how has your day been",
    "how are you doing today",
    "how was your morning",
    "how is today?",
    "you had a good day",
    "how was the day",
    "you had a good day",
    "you have a nice day",
    "how is week",
    "how is your week",
    "how's your week",
    "how's your week been",
    "how has your week been",
    "how are you doing this week",
    "how was your morning",
    "how is week?",
    "you had a good week",
    "how was the week",
    "you had a good week",
    "you have a nice week",
    "how have you been",
    "how've you been",
    "how has this week been",
    "how has this year been",
    "how was last week",
    "how has everything been",
    "how have things been",
    "how has life been",
    "how has life treated you",
    "how have you been these past weeks",
    "how have you been these past months",
    "how have you been this past year",
    "how have you done over the years",
  ],
}

export const inWhatsUp: Intent = {
  examples: [
    "what's up doc",
    "what's up dawg",
    "what's the haps",
    "wazup",
    "what it do",
    "what's going down",
    "what's the rumpus",
    "what's crackin",
    "que tal",
    "que pasa",
    "¿Qué tal?",
    "¿Qué pasa?",
    "alles klar",
    "was ist los",
    "quoi de neuf",
    "what's shakin",
    "what's poppin",
    "what's the dizzle",
    "what's the story",
    "what's cooking",
    "what's happening",
    "what's new",
    "what's happenin",
    "what's going on",
    "sup",
    "wassup",
    "what is going on",
    "what are you up to",
  ],
}

export const inNiceMeetingYou: Intent = {
  examples: [
    "nice to meet you",
    "Enchanté",
    "enchantee",
    "enchante",
    "so glad to meet you",
    "pleasure to meet you",
    "nice meeting you",
    "glad meeting you",
    "honoured meeting you",
    "feel honoured meeting you",
    "it's a pleasure to meet you",
    "pleased to meet you",
    "nice to make friends with you",
    "glad to talk to you",
    "nice to make your acquaintance",
    "wow, nice to meet you",
    "can't believe i am talking to you",
  ],
}

export const inAge: Intent = {
  examples: [
    "how old are you",
    "tell me how old you are",
    "what age are you",
    "how many years are you",
    "how many years have you lived",
    "for how long have you lived",
  ],
}

export const inWhenBorn: Intent = {
  examples: ["when were you born", "tell me when you were born", "when are you born"],
}

export const inWhatYearBorn: Intent = {
  examples: [
    "what year were you born.",
    "tell me what year you were born",
    "which year were you born",
    "in what year were you born",
    "where you born in the 80s",
  ],
}

export const inBirthday: Intent = {
  examples: [
    "when is your birthday",
    "when's your birthday",
    "what is your birth of date",
    "when is your birth date",
    "what date are you born",
    "what date is your birthday",
  ],
}

export const inBirthplace: Intent = {
  entities: {WHERE: entWhere, BORN: entBorn, PLACE: entPlace},
  examples: [
    "_WHERE were you _BORN",
    "what was the _PLACE were you were _BORN",
    "which _PLACE are you _BORN in",
    "_INFO about _WHERE you were _BORN",
    "_WHERE was your _BORN"
  ],
}

export const inGrowUp: Intent = {
  examples: [
    "where did you grow up",
    "tell me about where you grew up",
    "tell me about your hometown",
    "where is your hometown",
    "in what place did you grow up",
    "in what city did you grew up",
    "what kind of place did you grow up in",
    "where in england did you grow up",
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
  examples: [
    "is this the real Ben Howard",
    "is this Ben",
    "is this the real Ben",
    "am i talking to Ben",
    "are you the real Ben Howard",
    "is this really Ben",
    "are you really Ben",
    "is this you Ben",
    "Ben, is this you",
    "tell me if this is the real ben howard",
    "tell me if this is the real ben",
    "please tell me is this the real ben howard",
  ],
}

export const inLiveShows: Intent = {
  examples: [
    "ben howard live shows",
    "are you doing any live shows",
    "any upcoming concerts",
    "any new concerts",
    "are you going on tour",
    "info ben howard live",
    "info ben howard live show",
    "ben howard live performance",
    "ben howard performing live",
  ],
}

export const yes: Intent = {
  examples: [
    "yes",
    "yeah",
    "sure",
    "alright",
    "absolutely",
    "by all means",
    "certainly",
    "indeed",
    "mhm",
    "aye",
    "yep",
    "uh-huh",
    "okay",
    "OK",
    "okey dokey",
    "yea",
    "surely",
    "hell yes",
    "for sure",
    "fine",
    "sure thing",
    "gladly",
    "please",
    "yes, please",
    "ye",
  ],
}

export const no: Intent = {
  examples: [
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
  ],
}

export const inMean: Intent = {
  entities: {MEAN: entMean, INFO: entInfo, UNDERSTAND: entUnderstand, IDK: entIDK}, 
  examples: ["what do you _MEAN",
  "_INFO what you _MEAN",
  "I don't _UNDERSTAND",
  "can you _INFO what you _MEAN",
  "what is _THIS",
  "can you _INFO?",
  "_IDK"],
}

export const inAnotherQuestion: Intent = {
  entities: {ANOTHER: entAnother, QUESTION: entQuestion, CAN: entCan, ASK: entAsk, SOMETHING: entSomething}, 
  examples: ["another question",
    "_ANOTHER _QUESTION",
  "_CAN I _ASK _ANOTHER _QUESTION",
  "_CAN I _ASK _SOMETHING ELSE",
  "_SOMETHING ELSE",
  "i want to _ASK _ SOMETHING ELSE",
  "i want to _ASK _ANOTHER _QUESTION"]
}

export const inGoodbye: Intent = {
  entities: {GOODBYE: entGoodbye}, 
  examples: ["goodbye",
"_GOODBYE"]
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
  inWhenBorn,
  inWhatYearBorn,
  inBirthday,
  inBirthplace,
  inGrowUp,
  inAboutBen,
  inRealBenQuestion,
  inLiveShows,
  yes,
  no,
]
