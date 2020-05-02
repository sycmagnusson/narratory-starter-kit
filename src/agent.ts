import { narrative } from "./narrative"
import { userInitiatives } from "./userInitiatives"
import { Agent, Language } from "narratory"
import { botInitiatives } from "./botInitiatives"
import { UIBasicQuestions } from "./UserInitiatives/basicQuestions"
import { UIAboutEP } from "./UserInitiatives/aboutEP"
import { UIAboutAlbums } from "./UserInitiatives/aboutAlbums"
import { UIAllStories } from "./UserInitiatives/allStories"


const agent: Agent = {
  agentName: "the Ben Howard Chatbot",
  language: Language.English,
  narrative, // See the file narrative.ts
  userInitiatives: userInitiatives.concat(...UIBasicQuestions, ...UIAboutEP, ...UIAllStories, ...UIAboutAlbums),  // See the file userInitiatives.ts
  botInitiatives,
  bridges: [],
  defaultFallbacks: ['"Oh hey, I wasn\'t listening". Say that again please?', '"I hear you\'re there". Come again please?'], 
  narratoryKey: require("../narratory_credentials.json").narratoryKey, // Populate this file with your Narratory key. Sign up att narratory.io if you don't have one!
  googleCredentials: require("../google_credentials.json") // Populate this file, or change the link to your existing credentials file. Check the README.md for how to create it.
}

export default agent
