import { narrative } from "./narrative"
import { userInitiatives } from "./userInitiatives"
import { Agent, Language } from "narratory"
import { botInitiatives } from "./botInitiatives"
import { UIBasicQuestions } from "./UserInitiatives/basicQuestions"
import { UIAboutMusic } from "./UserInitiatives/aboutMusic"
import { UIAllStories } from "./UserInitiatives/randomStories"
import {UIStoriesMusic} from "./UserInitiatives/storiesMusic"
import { bridge } from "./bridges"


const agent: Agent = {
  agentName: "the Ben Howard Chatbot",
  language: Language.English,
  narrative, // See the file narrative.ts
  userInitiatives: userInitiatives.concat(...UIBasicQuestions, ...UIAllStories, ...UIAboutMusic, ...UIStoriesMusic),  // See the file userInitiatives.ts
  botInitiatives,
  bridges: [bridge],
  defaultFallbacks: ['"Oh hey, I wasn\'t listening". Say that again please?', '"I hear you\'re there". Come again please?'], 
  narratoryKey: require("../narratory_credentials.json").narratoryKey, // Populate this file with your Narratory key. Sign up att narratory.io if you don't have one!
  googleCredentials: require("../google_credentials.json") // Populate this file, or change the link to your existing credentials file. Check the README.md for how to create it.
}

export default agent
