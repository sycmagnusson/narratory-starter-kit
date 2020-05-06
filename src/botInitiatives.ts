import { BotTurn, BridgeTurn, ANYTHING } from "narratory"
import { yes, no, inGoodbye } from "./Intents/basicQuestions"
import { answerFallback } from "./answerFallback"
import { inAboutEveryKingdom, inAboutIFWWW, inAboutNoondayDream, inTellAboutAllAlbum } from "./Intents/aboutAlbums"
import { varAskNegative, varAskPositive } from "./variables"
import { entGoodbye } from "./Entities/general"

const askNegative: BotTurn = {
  label: "ASK_NEGATIVE",
  say: [
    "Then, do you want to ask me something else?",
    "Then, how about you ask me something else?",
    "Then, how about you ask me another question?",
    "Then, do you want to ask me another question?",
    "Then, do you feel like asking another question?",
  ],
  user: [
    {
      intent: yes,
      bot: {
        say: ["Cool! Go ahead and ask me a question."],
        goto: "QUERY_QUESTION",
      },
    },
    {
      intent: no,
      bot: {
        say: ["Alright.", "I see."],
        goto: "MAKE_SURE",
      },
    },
    {
      intent: ANYTHING,
      bot: answerFallback,
    },
  ],
}

const makeSure: BotTurn = {
  label: "MAKE_SURE",
  say: "So. Is this it?",
  user: [
    {
      intent: yes,
      bot: {
        say: "Every kingdom must one day come to an end.",
        goto: "GOODBYE",
      },
    },
    {
      intent: ANYTHING,
      bot: [
        {
          cond: { retryCount: 0 },
          bot: {
            say: ["Uh-huh...", "Hmm hmm..."],
            bot: {
              say: "Go on then. Ask me something.",
              repair: true,
            },
          },
        },
        {
          cond: { retryCount: 1 },
          bot: {
            say: ["Ehm...", "Uhm..."],
            bot: {
              say: "Sorry, I didn't get it. You have to ask me a question.",
              repair: true,
            },
          },
        },
        {
          say: 'Then. "This is it?"',
          user: [
            {
              intent: yes,
              bot: {
                say: "Every kingdom must one day come to an end.",
                goto: "GOODBYE",
              },
            },
            {
              intent: ANYTHING,
              bot: [
                {
                  say: '"Well this is desert."',
                  goto: "GOODBYE",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const tellAllAboutAlbum: BridgeTurn = {
  label: "TELL_ALL_ABOUT_ALBUM",
  bot: {
    say: ["\"I'll take the long way 'round.\"", '"Where to, where to begin?"', '"Make your mind up, child"'],
    bot: {
      say: ["Let’s start with one of them.", "Let’s go one at a time."],
      goto: "CHOOSE_ALBUM",
    },
  },
}

const chooseAlbum: BridgeTurn = {
  label: "CHOOSE_ALBUM",
  bot: {
    say: ["Which one should I tell you more about?", "Which album do you want to hear more about?"],
    user: [
      {
        intent: inAboutEveryKingdom,
        bot: {
          say: "",
          goto: "ABOUT_EVERYKINGDOM",
        },
      },
      {
        intent: inAboutIFWWW,
        bot: {
          say: "",
          goto: "ABOUT_IFWWW",
        },
      },
      {
        intent: inAboutNoondayDream,
        bot: {
          say: "",
          goto: "ABOUT_NOONDAYDREAM",
        },
      },
      {
        intent: inTellAboutAllAlbum,
        bot: {
          say: "",
          goto: "TELL_ALL_ABOUT",
        },
      },
      {
        intent: no,
        bot: {
          say: ["Uh-huh...", "Hm hm..."],
          bot: {
            say: varAskNegative,
            goto: "QUERY_QUESTION",
          },
        },
      },
      {
        intent: ANYTHING,
        bot: [
          {
            cond: { retryCount: 0 },
            bot: {
              say: ["Uh-huh...", "Hmm hmm..."],
              bot: {
                say: "Sorry, I didn't get it. You have to tell me which album you want to know more about.",
                repair: true,
              },
            },
          },
          {
            cond: { retryCount: 1 },
            bot: {
              say: ["Ehm...", "Uhm..."],
              bot: {
                say: "What was that? You have to tell me which album you want me to tell you more about.",
                repair: true,
              },
            },
          },
          {
            say: "Would you like to ask me another question?",
            user: [
              {
                intent: no,
                bot: {
                  say: "I see...",
                  goto: "GOODBYE",
                },
              },
              {
                intent: yes,
                bot: [
                  {
                    say: varAskPositive,
                    goto: "QUERY_QUESTION",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
}

const whatDoYouMean: BridgeTurn = {
  label: "WDYM",
  bot: {
    say: 'Type "no" or "goodbye" if you feel like you\'re done talking to me.',
    bot: {
      say: "Or ask me something else.",
      user: [
        {
          intent: yes,
          bot: {
            say: "",
            goto: "ABOUT_EVERYKINGDOM",
          },
        },
        {
          intent: no,
          bot: {
            say: ["Uh-huh...", "Hm hm..."],
            goto: "GOODBYE",
          },
        },
        {
          intent: inGoodbye,
          bot: {
            say: ["Uh-huh...", "Hm hm..."],
            goto: "GOODBYE",
          },
        },
        {
          intent: ANYTHING,
          bot: [
            {
              cond: { retryCount: 0 },
              bot: {
                say: "Sorry, I didn't get that.",
                bot: {
                  say: 'You have to either type "yes", "no", "goodbye" or ask me a question.',
                  repair: true,
                },
              },
            },
            {
              cond: { retryCount: 1 },
              bot: {
                say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
                bot: {
                  say: 'Either type "yes", "no", "goodbye" or ask me something.',
                  repair: true,
                },
              },
            },
            {
              bot: {
                say: "Are we done talking for today?",
                user: [
                  {
                    intent: yes,
                    bot: {
                      say: "",
                      goto: "GOODBYE",
                    },
                  },
                  {
                    intent: no,
                    bot: {
                      say: "Alright, then.",
                      bot: {
                        say: 'Type "yes" if you are interested in hearing more.',
                        goto: "WDYM",
                      },
                    },
                  },
                  {
                    intent: ANYTHING,
                    bot: [
                      {
                        cond: { retryCount: 0 },
                        say: "Sorry, mate. I can't read you.",
                        repair: true,
                      },
                      {
                        cond: { retryCount: 1 },
                        say: [
                          "Sorry. Didn't get you this time either.",
                          "Sorry, what was that?",
                          "Sorry, hey. What did you say?",
                          "Hey, mate. I'm sorry. I didn't understand what you said.",
                        ],
                        repair: true,
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
    },
  },
}

export const botInitiatives = [askNegative, makeSure, tellAllAboutAlbum, chooseAlbum, whatDoYouMean]
