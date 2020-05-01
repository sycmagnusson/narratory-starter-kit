import { Intent } from "narratory"

/* | Name | First Name | Middle Name | Last Name | Full Name |
   | Hello | How Are You | How Is Day | What's Up | Nice Meeting You |
   | Age | WhenBorn | What Year Born | Birthday | Birthplace |
   | Grow Up | About Devon | 
   | About Ben | Real Ben? | Live Shows |
   | Yes | No | */

export const inNameQuestion: Intent = {
  examples: ["what's your name", "what is your name", "your name", "tell me your name"],
}

export const inFirstNameQuestion: Intent = {
  examples: [
    "what's your first name",
    "what is your first name",
    "tell me your first name",
    "please tell me your first name",
    "first name",
    "your first name please",
    "only your first name",
  ],
}

export const inMiddleNameQuestion: Intent = {
  examples: [
    "what's your middle name",
    "what is your middle name",
    "your middle name",
    "tell me your middle name",
    "please tell me your middle name",
    "middle name",
    "your middle name please",
    "only our middle name",
  ],
}

export const inLastNameQuestion: Intent = {
  examples: [
    "what's your last name",
    "what is your last name",
    "your last name",
    "tell me your last name",
    "please tell me your last name",
    "last name",
    "your last name please",
    "only our last name",
  ],
}

export const inFullNameQuestion: Intent = {
  examples: [
    "what's your full name",
    "what is your full name",
    "your full name",
    "tell me your full name",
    "please tell me your full name",
    "full name",
    "your full name please",
    "only our full name",
  ],
}

export const inHello: Intent = {
  examples: [
    "hi",
    "hello",
    "howdy",
    "hey",
    "greetings",
    "yo",
    "hiya",
    "g'day",
    "good morning",
    "aloha",
    "bonjour",
    "salut",
    "salutation",
    "nihao",
    "good afternoon",
    "good evening",
    "hi mate",
    "hello mate",
    "hallo",
    "hallå",
    "hej",
    "hola",
    "greeting",
    "hello there",
    "morning",
    "shalom",
    "konnichiwa",
    "annyeong",
    "guten tag",
    "hi there",
    "yello",
    "hi ya",
    "hey ya",
    "good morrow",
    "cuckoo",
    "coo coo",
    "cou cou",
    "bonsoir",
    "allo",
    "grüß dich",
    "moin",
    "tja",
    "tjena",
    "tjo",
    "hejsan",
    "hello, hi",
    "hi, hello",
    "buenos dias",
    "buenas tardes",
    "¿Aló",
    "a-yo",
    "salaam",
    "heyo",
    "ahoy",
    "gidday",
    "ello ello",
    "heilo",
    "well hello",
    "hey man",
    "gday",
    "morning",
    "evening",
    "why hello there",
    "hey ben",
    "yo ben",
    "look who it is",
  ],
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
    "echante",
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
  examples: ["when were you born", 
  "tell me when you were born",
    "when are you born"],
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
  examples: [
    "where were you born",
    "in what city were you born",
    "what was the city were you were born",
    "which city are you born in",
    "tell me where you were born",
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
    "who are you?",
    "tell me who you are",
    "who is this",
    "who is this guy",
    "who am i talking to",
    "who is this person",
    "who is it",
    "introduce yourself",
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
  "ben howard performing live"]
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

export const intents = [
  inNameQuestion,
  inFirstNameQuestion,
  inMiddleNameQuestion,
  inLastNameQuestion,
  inFullNameQuestion,
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
