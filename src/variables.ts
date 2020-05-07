import { Entity, Intent, UserTurn, BotTurn } from "narratory"

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

export const varPositiveFillers = ["So, yeah.", "Alright.", "Cool, cool.", "Yeah, so.", "Cool.", "Okay, so."]

export const varNegativeFillers = ["Ehm...", "Uh-huh...", "Hm hm...", "I see...", "Oh, so..."]

export const varGreetings = [
  //"Hello, hi!", "Hi, hello!", "Hello mate!", "Hello!", "Hi!", "Hi, hello!",
  "... oh, hello, hi!",
  "... oh, hello mate!",
  "... oh, hello!",
  "... oh, hi!",
  "... oh, hi, hello!",
]

export const varlyricGreetings = [
  '"Found her letter under a stone. Told of giants, kings, palaces and gold..."',
  '"When the world comes to gather me in, oh, if you\'re there, I will be blessed..."',
  '"Come in from the darkness, on the edge of this three tree town..."',
  '"I was there already I think, as a child. But I really can\'t remember why..."',
  '"And the moonlight covered the moors, and I swear there was music behind every door..."',
  '"I want blue sky, picking rose petals. Spring come too early most years now..."',
  "\"Ain't nothing in this world that ain't me and you and ours and theirs and his and hers and yours and mine...\"",
]

export const varFirstQuestion = [
  "How about you ask me something.",
  "Go on, ask me a question. Like, what I think about my friends' music taste.",
  "What would you like to talk about? Hm. I could tell you about my mornings if you ask me.",
  "What should we talk about? If you ask me whether I'm a morning person or not, I will tell you.",
  "Ask me something. Ehm. I can talk about my mornings if you ask me about it.",
  "If you ask me about my friends' taste in music, I will tell you.",
  "I have a really good story about my mornings. All you have to do is ask about it.",
  "Something quite funny happened with my friends' back in Totnes. I can tell you, if you ask me.",
]

export const varThatsThat = [
  "Ehm, that's that.",
  "Ehm, that's it.",
  "\"That's it, that's it all.\"",
  "That's that, ehm.",
  "That's it, ehm.",
]

export const varContinue = [
  "Do you want me to continue talking about this?",
  "Do you want me to keep talking about this?",
  "Do you want me to tell you more about this?",
]

export const varContinueFurther = ["Do you want to hear the rest of this?"]

export const varContinueEP = [
  "Do you want me to tell you more about this EP?",
  "Do you want to hear more about this EP?",
  "Do you want me to continue talking about this EP?",
]

export const varContinueAlbum = [
  "Do you want me to tell you more about this album?",
  "Do you want to hear more about this album?",
  "Do you want me to continue talking about this album?",
]

export const varAskNegative = [
  "Then, do you want to ask me something else?",
  "Then, how about you ask me something else?",
  "Then, how about you ask me another question?",
  "Then, do you want to ask me another question?",
  "Then, do you feel like asking another question?",
  "Then, do you feel like asking something else?",
]

export const varAskPositive = [
  "How about you ask me something else?",
  "Is there any other question you would like to ask me?",
  "Do you want to ask me anything else?",
  "Do you have any other question for me?",
  "How about you ask me another question?",
  "Is there anything else you would like to ask me?",
]
export const varSorryAgain = [
  "I'm sorry, what was that?",
  "Sorry, hey. What did you say?",
  "Hey, mate. I'm sorry. I didn't understand that. Could you please say that again?",
  "Sorry mate. Could you please try and re-phrase that?",
  "Hey, sorry. Do you think you could say that one more time?",
  "Sorry, I didn't get that. Come again please?"
]

export const variables = [
  varFillers,
  varGreetings,
  varlyricGreetings,
  varFirstQuestion,
  varThatsThat,
  varContinue,
  varContinueFurther,
  varContinueAlbum,
  varAskNegative,
  varAskPositive,
  varSorryAgain,
]

export const inOnlyLove: Intent = {
  examples: ["i love you", "i love your music"],
}

export const intents = [inOnlyLove]
