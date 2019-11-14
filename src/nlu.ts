import { Entity, Intent } from "narratory"

export const favNumber : Intent = {
    examples: [
        "what is your favorite number",
        "what number do you like best",
        "what number gets you going"
    ]
}

export const virtualAssistant: Entity = {
    name: "virtualFriend",
    enums: [
        { alts: ["Alexa", "Amazon Alexa", "The amazon one"] },
        { alts: ["Google home", "Google assistant", "assistant from google"] },
        { alts: ["Siri"] },
        { alts: ["Cortana"]}
    ]
}

export const favAssistant: Intent = {
    entities: [
        virtualAssistant
    ],
    examples: [
        "I love siri",
        "I talk to Alexa at home",
        "I have a Google home",
        "my computer has cortana",
        "google assistant on my phone"
    ]
}