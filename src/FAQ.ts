import { UserTurn } from "narratory"

export const FAQ : UserTurn[] = [
  {
    "intent": {
      "examples": [
        "What's your name?",
        "your name please",
        "just your name"
      ]
    },
    "bot": "Ben."
  },
  {
    "intent": {
      "examples": [
        "What's your first name?",
        "your first name please",
        "just your first name"
      ]
    },
    "bot": "Benjamin."
  },
  {
    "intent": {
      "examples": [
        "What's your middle name?",
        "your middle name please",
        "just your middle name"
      ]
    },
    "bot": "John."
  },
  {
    "intent": {
      "examples": [
        "What's your last name?",
        "your last name please",
        "just your last name"
      ]
    },
    "bot": "Howard."
  },
  {
    "intent": {
      "examples": [
        "What's your full name?",
        "your full name please",
        "just your full name"
      ]
    },
    "bot": "Benjamin John Howard"
  }
]