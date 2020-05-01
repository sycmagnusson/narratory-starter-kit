import { inAboutEveryKingdom, inNameOfFirstAlbum, inHaveFirstAlbum, inReleaseDateFirstAlbum, inNameOfSecondAlbum, inHaveSecondAlbum, inReleaseDateSecondAlbum, inAboutNoondayDream, inNameOfThirdAlbum, inHaveThirdAlbum, inReleaseDateThirdAlbum, inNameOfLatestAlbum, inReleaseDateLatestAlbum, inAboutAlbum, chooseEveryKingdom, chooseIFWWW, inHowManyAlbum, chooseNoondayDream, inReleaseDateEveryKingdom, inAboutIFWWW, inReleaseDateIFWWW, inTellAboutAllAlbum, inReleaseDateNoondayDream } from "../Intents/aboutAlbums";
import { UserTurn } from "narratory";
import { varContinueAlbum } from "../variables";
import { yes, no } from "../Intents/basicQuestions";

export const aboutAlbums: UserTurn[] = [
    {
      intent: inAboutEveryKingdom,
      bot: {
        say: ["Oh, ”Every Kingdom”.", "Right. ”Every Kingdom”."],
        bot: {
          label: "ABOUT_EVERYKINGDOM",
          say: "I will add more info about this Every Kingdom soon.",
        },
      },
    },
    {
      intent: inNameOfFirstAlbum,
      bot: {
        say: ["”Every Kingdom”."],
        bot: {
          say: varContinueAlbum,
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
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inHaveFirstAlbum,
      bot: {
        say: "Yeah. ”Every Kingdom”.",
        bot: {
          say: varContinueAlbum,
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
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inReleaseDateFirstAlbum,
      bot: {
        say: "2011. That's when ”Every Kingdom” came out.",
        bot: {
          say: varContinueAlbum,
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
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inReleaseDateEveryKingdom,
      bot: {
        say: "”Every Kingdom” came out in 2011.",
        bot: {
          say: varContinueAlbum,
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
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inAboutIFWWW,
      bot: {
        say: ["Oh, ”I Forget Where We Were”.", "Right. ”I Forget Where We Were”."],
        bot: {
          label: "ABOUT_IFWWW",
          say: "I will add more info about this I Forget Where We Were soon.",
        },
      },
    },
    {
      intent: inNameOfSecondAlbum,
      bot: {
        say: "”I Forget Where We Were”.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_IFWWW",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inHaveSecondAlbum,
      bot: {
        say: "Yeah. ”I Forget Where We Were”.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_IFWWW",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inReleaseDateSecondAlbum,
      bot: {
        say: "2014. That's when ”I Forget Where We Were” came out.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_IFWWW",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inReleaseDateIFWWW,
      bot: {
        say: "”I Forget Where We Were” came out in 2014.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_IFWWW",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inAboutNoondayDream,
      bot: {
        say: ["Oh, ”Noonday Dream”.", "Right. ”Noonday Dream”."],
        bot: {
          label: "ABOUT_NOONDAYDREAM",
          say: "I will add more info about this Noonday Dream soon.",
        },
      },
    },
    {
      intent: inNameOfThirdAlbum,
      bot: {
        say: "”Noonday Dream”.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_NOONDAYDREAM",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inHaveThirdAlbum,
      bot: {
        say: "Yeah. ”Noonday Dream”.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_NOONDAYDREAM",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inReleaseDateThirdAlbum,
      bot: {
        say: "2018. That's when ”Noonday Dream” came out.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_NOONDAYDREAM",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
      intent: inReleaseDateNoondayDream,
      bot: {
        say: "”Noonday Dream” came out in 2018.",
        bot: {
          say: varContinueAlbum,
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "ABOUT_NOONDAYDREAM",
              },
            },
            {
              intent: no,
              bot: {
                say: "",
              },
            },
          ],
        },
      },
    },
    {
        intent: inNameOfLatestAlbum,
    bot: {
      say: 'That\'s "Noonday Dream".',
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
            },
          },
          {
            intent: no,
            bot: {
              say: "",
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateLatestAlbum,
    bot: {
      say: [
        'Hmm. Must be the ”Noonday Dream". That one came out in 2018.',
        'That\'s back in 2018. "Noonday Dream".',
      ],
      bot: {
        say: varContinueAlbum,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_NOONDAYDREAM",
            },
          },
          {
            intent: no,
            bot: {
              say: "",
            },
          },
        ],
      },
    },
  },
  {
    intent: inAboutAlbum,
    bot: {
      say: "",
      bot: {
        label: "ABOUT_ALBUM",
        say: '"Every Kingdom" was released in 2011.',
        bot: {
          say: 'I recorded "I Forget Where We Were" in 2014.',
            bot: {
              say: 'Then, "Noonday Dream" is my latest album. It came out in June 2018.',
              bot: {
                label: "CHOOSE_ALBUM",
                say: [
                  "Which one should I tell you more do about?",
                  "Which EP do you want to hear more about?",
                  "Do you want to hear more about any of the EPs?",
                  "Should I go into detail about any of them?",
                ],
                user: [
                  {
                    intent: chooseEveryKingdom,
                    bot: {
                      say: "",
                      goto: "ABOUT_EVERYKINGDOM",
                    },
                  },
                  {
                    intent: chooseIFWWW,
                    bot: {
                      say: "",
                      goto: "ABOUT_IFWWW",
                    },
                  },
                  {
                    intent: chooseNoondayDream,
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
                      say: "",
                    },
                  },
                  {
                    intent: yes,
                    bot: {
                      say: ["Cool.", "Alright."],
                      goto: "CHOOSE_ALBUM",
                    },
                  },
                ],
              },
            },
          },
        },
      },
  },
  {
    intent: inHowManyAlbum,
    bot: {
      say: ["Three so far.", "So far, three."],
      bot: {
        say: "Want to know more about them?",
        user: [
          {
            intent: yes,
            bot: {
                say: "",
                goto: "ABOUT_ALBUM",
            }
          },
          {
            intent: no,
            bot: {
              say: "",
            },
          },
        ],
      },
    },
  },
]

export const UIAboutAlbums = [aboutAlbums]