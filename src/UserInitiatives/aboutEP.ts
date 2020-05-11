import {
  inAboutGamesInTheDark,
  inNameOfFirstEP,
  inHaveFirstEP,
  inReleaseDateFirstEP,
  inAboutTheseWaters,
  inNameOfSecondEP,
  inHaveSecondEP,
  inReleaseDateSecondEP,
  inAboutOldPine,
  inNameOfThirdEP,
  inHaveFourthEP,
  inReleaseDateFourthEP,
  inAboutTheBurghIsland,
  inHaveThirdEP,
  inReleaseDateThirdEP,
  inAboutBHWRDLIVE,
  inNameOfFourthEP,
  inNameOfFifthEP,
  inHaveFifthEP,
  inReleaseDateFifthEP,
  inNameOfLatestEP,
  inReleaseDateLatestEP,
  inTellAboutAllEP,
  inHowManyEP,
  chooseGamesInTheDark,
  chooseTheseWaters,
  chooseOldPine,
  chooseBHWRDLIVE,
  chooseTheBurghIsland,
  inReleaseDateGamesInTheDark,
  inReleaseDateTheseWaters,
  inReleaseDateOldPine,
  inReleaseDateTheBurghIsland,
  inAboutEP,
} from "../Intents/aboutEP"
import { UserTurn } from "narratory"
import { no, yes } from "../Intents/basicQuestions"
import { varContinueEP, varPositiveFillers, varNegativeFillers} from "../variables"

/* | About Games In The Dark | Name of first EP | Have first EP | Release Date First EP | Release Date Games In The Dark | 
   | About These Waters | Name of Second EP | Have Second EP | Release Date Second EP | Release Date These Waters | 
   | About Old Pine | Name of Third EP | Have Third EP | Release Date Third EP | Release Date Old Pine | 
   | About Ben Howard Live | Name of Fourth EP | Have Fourth EP | Release Date Fourth EP | Release Date Ben Howard Live | 
   | About The Burgh Island | Name of Fifth EP | Have Fifth EP | Release Date Fifth EP | Release Date The Burgh Island | 
   | EP | How Many EP | */

export const aboutEP: UserTurn[] = [
  {
    intent: inAboutGamesInTheDark,
    bot: {
      say: ["Oh, ”Games In The Dark”.", "Right. ”Games In The Dark”."],
      bot: {
        label: "ABOUT_GAMESINTHEDARK",
        say: "I will add more info about this Games In The Dark soon.",
        bot: {
        say: varPositiveFillers,
        }
      },
    },
  },
  {
    intent: inNameOfFirstEP,
    bot: {
      say: ["”Games In The Dark”."],
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_GAMESINTHEDARK",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inHaveFirstEP,
    bot: {
      say: "Yeah. ”Games In The Dark”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_GAMESINTHEDARK",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateFirstEP,
    bot: {
      say: "2008. That's when ”Games In The Dark” came out.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_GAMESINTHEDARK",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateGamesInTheDark,
    bot: {
      say: "”Games In The Dark” came out in 2008.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_GAMESINTHEDARK",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inAboutTheseWaters,
    bot: {
      say: ["Oh, ”These Waters”.", "Right. ”These Waters”."],
      bot: {
        label: "ABOUT_THESEWATERS",
        say: "I will add more info about this These Waters soon.",
        bot: {
          say: varPositiveFillers,
          }
      },
    },
  },
  {
    intent: inNameOfSecondEP,
    bot: {
      say: "”These Waters”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THESEWATERS",
            },
          },
          {
            intent: no,
            bot: {
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varNegativeFillers,
              }
            },
          },
        ],
      },
    },
  },
  {
    intent: inHaveSecondEP,
    bot: {
      say: "Yeah. ”These Waters”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THESEWATERS",
            },
          },
          {
            intent: no,
            bot: {
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varNegativeFillers,
              }
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateSecondEP,
    bot: {
      say: "2009. That's when ”These Waters” came out.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THESEWATERS",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateTheseWaters,
    bot: {
      say: "”These Waters” came out in 2009.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THESEWATERS",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
          },
        }
        ],
      },
    },
  },
  {
    intent: inAboutOldPine,
    bot: {
      say: ["Oh, ”Old Pine”.", "Right. ”Old Pine”."],
      bot: {
        label: "ABOUT_OLDPINE",
        say: "I will add more info about this Old Pine soon.",
        bot: {
          say: varPositiveFillers,
          }
      },
    },
  },
  {
    intent: inNameOfThirdEP,
    bot: {
      say: "”Old Pine”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_OLDPINE",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inHaveThirdEP,
    bot: {
      say: "Yeah. ”Old Pine”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_OLDPINE",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateThirdEP,
    bot: {
      say: "2010. That's when ”Old Pine” came out.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_OLDPINE",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateOldPine,
    bot: {
      say: "”Old Pine” came out in 2010.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_OLDPINE",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inAboutBHWRDLIVE,
    bot: {
      say: ["Oh, ”Ben Howard Live”.", "Right. ”Ben Howard Live”."],
      bot: {
        label: "ABOUT_BHWRDLIVE",
        say: "I will add more info about this Ben Howard Live soon.",
        bot: {
          say: "Are you interested in knowing if I have any upcoming concerts?",
          user: [
            {
              intent: yes,
              bot: {
                say: "",
                goto: "LIVE_SHOWS",
              },
            },
            {
              intent: no,
                bot: {
                  say: varNegativeFillers,
              },
            },
          ],
        },
      },
    },
  },
  {
    intent: inNameOfFourthEP,
    bot: {
      say: "”Ben Howard Live”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_BHWRDLIVE",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inHaveFourthEP,
    bot: {
      say: "Yeah. ”Ben Howard Live”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_BHWRDLIVE",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateFourthEP,
    bot: {
      say: "2011. That's when ”Ben Howard Live” came out.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_BHWRDLIVE",
            },
          },
          {
            intent: no,
                  bot: {
                    say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateFourthEP,
    bot: {
      say: "”Ben Howard Live” came out in 2011.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_BHWRDLIVE",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            }
          },
        ],
      },
    },
  },
  {
    intent: inAboutTheBurghIsland,
    bot: {
      say: ["Oh, ”The Burgh Island”.", "Right. ”The Burgh Island”."],
      bot: {
        label: "ABOUT_THEBURGHISLAND",
        say: "I will add more info about The Burgh Island soon.",
        bot: {
          say: varPositiveFillers,
          }
      },
    },
  },
  {
    intent: inNameOfFifthEP,
    bot: {
      say: "”The Burgh Island”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
          },
        }
        ],
      },
    },
  },
  {
    intent: inHaveFifthEP,
    bot: {
      say: "Yeah. ”The Burgh Island”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
          },
        }
        ],
      },
    },
  },
  {
    intent: inReleaseDateFifthEP,
    bot: {
      say: "2011. That's when ”The Burgh Island” came out.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
          },
        }
        ],
      },
    },
  },
  {
    intent: inReleaseDateTheBurghIsland,
    bot: {
      say: "”The Burgh Island” came out in 2011.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
            },
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
          },
        }
        ],
      },
    },
  },
  {
    intent: inNameOfLatestEP,
    bot: {
      say: "That's ”The Burgh Island”.",
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
  {
    intent: inReleaseDateLatestEP,
    bot: {
      say: [
        "Hmm. Must be the ”The Burgh Island”. That one came out in 2011.",
        "That's back in 2011. ”The Burgh Island”.",
      ],
      bot: {
        say: varContinueEP,
        user: [
          {
            intent: yes,
            bot: {
              say: "",
              goto: "ABOUT_THEBURGHISLAND",
            },
          },
          {
            intent: no,
            bot: {
              say: varNegativeFillers,
          }
          },
        ],
      },
    },
  },
  {
    intent: inAboutEP,
    bot: {
        label: "ABOUT_EP",  
      say: "",
      bot: {
        say: "I released my first EP back in 2008. It’s called “Games in The Dark.”",
        bot: {
          say: "In 2009, I recorded my second EP “These Waters”.",
          bot: {
            say: "“Old Pine” was my third EP. It came out in 2010.",
            bot: {
              say: "Then, “Ben Howard Live” and “Burgh Island” were both released in 2011.",
              bot: {
                label: "CHOOSE_EP",
                say: [
                  "Which one should I tell you more do about?",
                  "Which EP do you want to hear more about?",
                  "Do you want to hear more about any of the EPs?",
                  "Should I go into detail about any of them?",
                ],
                user: [
                  {
                    intent: chooseGamesInTheDark,
                    bot: {
                      say: "",
                      goto: "ABOUT_GAMESINTHEDARK",
                    },
                  },
                  {
                    intent: chooseTheseWaters,
                    bot: {
                      say: "",
                      goto: "ABOUT_THESEWATERS",
                    },
                  },
                  {
                    intent: chooseOldPine,
                    bot: {
                      say: "",
                      goto: "ABOUT_OLDPINE",
                    },
                  },
                  {
                    intent: chooseBHWRDLIVE,
                    bot: {
                      say: "",
                      goto: "ABOUT_BHWRDLIVE",
                    },
                  },
                  {
                    intent: chooseTheBurghIsland,
                    bot: {
                      say: "",
                      goto: "ABOUT_THEBURGHISLAND",
                    },
                  },
                  {
                    intent: inTellAboutAllEP,
                    bot: {
                      say: "",
                      goto: "TELL_ALL_ABOUT",
                    },
                  },
                  {
                    intent: no,
                      bot: {
                        say: varNegativeFillers,
                  },
                },
                  {
                    intent: yes,
                    bot: {
                      say: varPositiveFillers,
                      goto: "CHOOSE_EP",
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
  {
    intent: inHowManyEP,
    bot: {
      say: ["Five so far.", "So far, five."],
      bot: {
        say: "Want to know more about them?",
        user: [
          {
            intent: yes,
            bot: {
                say: "",
                goto: "ABOUT_EP",
            }
          },
          {
            intent: no,
              bot: {
                say: varNegativeFillers,
            },
          },
        ],
      },
    },
  },
]

export const UIAboutEP = [aboutEP]
