import { Intent } from "narratory";
import { entInfo } from "../allEntities";

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
      "tell me about your mornings",
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

 /* export const inAboutCollege: Intent = {
    entities: {INFO: entInfo},
    examples: [
    "_INFO about college",
    "what about college",
    "how was college",
    ]
  }

  export const inAboutUni: Intent = {
    entities: {INFO: entInfo},
    examples: [
    "_INFO about university",
    "what about university",
    "how was university",
    ]
  }*/

  export const inAboutSchool: Intent = {
    entities: {INFO: entInfo},
    examples: [
    "_INFO about school",
    "what about school",
    "how was school",
    ]
  }
  
  export const intents = [inMazzyStar, 
    inFirstMusicalMemory,
    inMumUseSpotify,
    inDoInTheMorning,
    inFriendsMusicTaste, 
    /*inAboutUni,
    inAboutCollege,*/
    inAboutSchool]