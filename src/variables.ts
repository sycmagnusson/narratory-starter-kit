import { Entity, Intent, UserTurn, BotTurn } from "narratory"

//"who is Ben Howard","tell me about Ben Howard", "tell me your story", "what's your story", "tell me about your life","about Ben"

export const inFirstMusicalMemory: Intent = {
  examples: [
    "what's your earliest musical childhood memory",
    "earliest musical childhood memory",
    "what's the first thing you remember about music",
    "what do you remember listening to as a kid",
    "musical childhood memory",
    "earliest music memory",
    "your first memory related to music",
    "what's your first musical memory",
    "tell me your first musical memory",
    "what was music for you as a kid",
    "tell me about james taylor",
    "did you listen to james taylor",
    "what's the story about james taylor",
  ],
}

export const inMumUseSpotify: Intent = {
  examples: [
    "tell me about how your mum uses Spotify",
    "how does your mum use Spotify",
    "in what way does your mum use Spotify",
    "what is your mum's way to use Spotify?",
    "mum spotify",
    "your mum and spotify",
    "mom spotify",
    "does your mum use spotify?",
    "is your mum on spotify?",
  ],
}

export const inDoInTheMorning: Intent = {
  examples: [
    "what do you like to do in the morning",
    "what do you do in the morning",
    "are you a morning person",
    "do you wake up early",
    "what does your mornings look like",
  ],
}

export const inFriendsMusicTaste: Intent = {
  examples: [
    "does your friends listen to music",
    "does your friends listen to albums",
    "are your friends listening to music",
    "tell me about your friends and their music taste",
    "friends and music taste",
    "does your friends have a good music taste",
    "how is your friends music taste",
  ],
}

export const inMazzyStar: Intent = {
  examples: [
    "do you like Mazzy Star",
    "do you listen to Mazzy Star",
    "how do you feel about Mazzy Star",
    "are you a fan of Mazzy Star",
    "do you listen to Mazzy Star",
    "what do you think about Mazzy Star",
    "Mazzy Star",
  ],
}

export const inOnlyLove: Intent = { 
  examples: ["i love you",
"i love your music"] }

export const intents = [inOnlyLove, inFirstMusicalMemory, inMumUseSpotify, inDoInTheMorning, inFriendsMusicTaste, inMazzyStar]

//DON'T FORGET TO EXPORT INTENTS

//VARIABLES

export const varFillers = [
  "Ehm.",
  "So, yeah.",
  "Heh, yeah.",
  "Hm, yeah.",
  "Mmm... hehe.",
  "Hm hm.",
  "Yeah.",
  "Mhmm.",
  "So.",
  "Eh.",
]

export const varGreetings = [
  //"Hello, hi!", "Hi, hello!", "Hello mate!", "Hello!", "Hi!", "Hi, hello!",
  "... oh, hello, hi!",
  "... oh, hello mate!",
  "... oh, hello!",
  "... oh, hi!",
  "... oh, hi, hello!",
]

export const varlyricGreetings = [
  "Found her letter under a stone. Told of giants, kings, palaces and gold...",
  "When the world comes to gather me in, oh, if you're there, I will be blessed...",
  "Come in from the darkness, on the edge of this three tree town...",
  "I was there already I think, as a child. But I really can't remember why...",
  "And the moonlight covered the moors, and I swear there was music behind every door...",
  "I want blue sky, picking rose petals. Spring come too early most years now...",
]

export const varFirstQuestion = [
  "How about you ask me something. For example, you can ask about my friends' taste in music.",
  "Go on, ask me a question. Like, what I think about my friends' music taste.",
  "What would you like to talk about? Hm. I could tell you about my mornings if you ask me.",
  "What should we talk about? If you ask me whether I'm a morning person or not, I will tell you.",
  "Ask me something. Ehm. I can talk about my mornings if you ask me about it.",
  "If you ask me about my friends' taste in music, I will tell you.",
  "I have a really good story about my mornings. All you have to do is ask about it.",
  "Something quite funny happened with my friends' back in Totnes. I can tell you, if you ask me.",
]

export const varThatsThat = ["Ehm, that's that.", "Ehm, that's it.", '"That\'s it, that\'s it all."', "That's that, ehm.", "That's it, ehm."]

export const varContinue = [
  "Do you want me to continue talking about this?",
  "Do you want me to keep talking about this?",
  "Do you want me to tell you more about this?",
]

export const varContinueFurther = [
  "Do you want to hear the rest of this?"
]

export const varContinueEP = ["Do you want me to tell you more about this EP?", 
"Do you want to hear more about this EP?",
"Do you want me to continue talking about this EP?"]

export const varContinueAlbum = ["Do you want me to tell you more about this album?", 
"Do you want to hear more about this album?",
"Do you want me to continue talking about this album?"]

export const variables = [varFillers, varGreetings, varlyricGreetings, varFirstQuestion, varThatsThat, varContinue, varContinueFurther, varContinueAlbum]

//"Ask me about something.",
//"How about you ask me something.",
//"Go on, ask me a question.",
//"Ask me something.",
//"How about you ask me a question.",
//"Go on, ask me something.",
//"Ask me a question."
//"What would you like to talk about?"
//"What should we talk about?"
