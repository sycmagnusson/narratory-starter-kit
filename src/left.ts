/* {
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
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: questionAnswerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              bot: {
                label: "WDYM_EK",
                say: 'Type "yes" if you want me to tell you more about Every Kingdom.',
                bot: {
                  say: 'Type "no" if you want us to move on to another topic.',
                  bot: {
                    say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                    repair: true,
                    user: [
                      {
                        /* intent: yes,
                        bot: {
                          say: "",
                          goto: "ABOUT_EVERYKINGDOM",
                        },
                      },
                      {
                        intent: no,
                        bot: {
                          say: varNegativeFillers,
                        },
                      },
                      {
                        intent: inGoodbye,
                        bot: {
                          say: ["Uh-huh...", "Hm hm..."],
                          goto: "GOODBYE",
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    },
  },*/
/*{
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
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: questionAnswerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_EK",
            },
          },
        ],
      },
    },
  },*/
/* {
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
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: questionAnswerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_EK",
            },
          },
        ],
      },
    },
  },*/
/* {
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
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: questionAnswerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              bot: {
                label: "WDYM_IFWWW",
                say: 'Type "yes" if you want me to tell you more about I Forget Where We Were.',
                bot: {
                  say: 'Type "no" if you want us to move on to another topic.',
                  bot: {
                    say: 'Or type "goodbye" if you feel like you\'re done talking to me.',
                    repair: true,
                    user: [
                      {
                        intent: inGoodbye,
                        bot: {
                          say: ["Uh-huh...", "Hm hm..."],
                          goto: "GOODBYE",
                        },
                      },
                    ],
                  },
                },
              },
            },
          },
        ],
      },
    },
  },*/
/* {
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
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: questionAnswerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_IFWWW",
            },
          },
        ],
      },
    },
  },*/
/* {
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
              say: varNegativeFillers,
            },
          },
          {
            intent: ANYTHING,
            bot: questionAnswerFallback,
          },
          {
            intent: inMean,
            bot: {
              say: "",
              goto: "WDYM_IFWWW",
            },
          },
        ],
      },
    },
  },*/
/* {
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
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varAskNegative,
                goto: "QUERY_QUESTION",
              },
            },
          },
        ],
      },
    },
  },*/
/*{
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
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varAskNegative,
                goto: "QUERY_QUESTION",
              },
            },
          },
        ],
      },
    },
  },*/
/* {
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
              say: ["Uh-huh...", "Hm hm..."],
              bot: {
                say: varAskNegative,
                goto: "QUERY_QUESTION",
              },
            },
          },
        ],
      },
    },
  },*/
/*{
     intent: inTellAboutAllAlbum,
      bot: {
      say: "",
        oto: "TELL_ALL_ABOUT_ALBUM",
           },
},*/
/*{
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
  },*/

/*{
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
  },*/

/*{
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
  },*/

/*  {
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
  },*/

/* {
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
  },*/

/* {
    intent: inTellAboutAllEP,
        bot: {
        say: "",
        goto: "TELL_ALL_ABOUT",
            },
        },*/

        /*
export const inAboutEveryKingdom: Intent = {
  entities: {  FIRST: entFirst, /*ALBUM: entAlbum, EK: entEK, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo  EK: entEK},
  examples: [
    "tell me about your _FIRST album",
    "i want to hear about your _FIRST album",
    "info about _FIRST album",
    "tell me about your _FIRST record",
    "i want to hear about your _FIRST record",
    "info about _FIRST record",
    "tell me about _EK",
    "i want to hear about _EK",
     "_INFO about _EK",
    "_FIRST _ALBUM",
    "_INFO _SOMETHING about _EK",
    "_INFO _SOMETHING about _FIRST _ALBUM",
    "i want to _KNOW about _EK",
    "i want to _KNOW about your _FIRST _ALBUM",
    "what's your _FIRST _ALBUM",
    "_EK" 
  ],
}*/
/*
export const inNameOfFirstAlbum: Intent = {
  entities: { FIRST: entFirst, NAME: entName },
  examples: ["_NAME of _FIRST album", /*"What's your _FIRST _ALBUM _NAME", "_NAME of _FIRST record", "What's the _NAME of your _FIRST album", "What's the _NAME of your _FIRST record",],
}*/

/*
export const inHaveFirstAlbum: Intent = {
  entities: { FIRSTALBUM: entFirstAlbum, RELEASE: entRelease},
  examples: [
    "have you _RELEASE a _FIRSTALBUM",
    "did you _RELEASE a _FIRSTALBUM?",
    "Do you have a _FIRSTALBUM out",
    "have you got a _FIRSTALBUM out",
  ],
}*/
/*
export const inReleaseDateFirstAlbum: Intent = {
  entities: { FIRSTALBUM: entFirstAlbum, RELEASE: entRelease, WHEN: entWhen},
  examples: [
    "_WHEN was your _FIRSTALBUM _RELEASE",
    "_WHEN did you _RELEASE your _FIRSTALBUM",
    "_WHEN did your _FIRSTALBUM _RELEASE",
    "_RELEASE _FIRSTALBUM",
  ],
}*/
/*
export const inAboutIFWWW: Intent = {
  entities: { SECOND: entSecond, ALBUM: entAlbum, IFWWW: entIFWWW, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo,  IFWWW: entIFWWW},
  examples: [
    "tell me about your _SECOND album",
    "i want to hear about your _SECOND album",
    "info about _SECOND album",
    "tell me about your _SECOND record",
    "i want to hear about your _SECOND record",
    "info about _SECOND record",
    "tell me about _IFWWW",
    "i want to hear about _IFWWW",
    "_INFO about _IFWWW",
    "_SECOND _ALBUM",
    "_INFO _SOMETHING about _IFWWW",
    "_INFO _SOMETHING about _SECOND _ALBUM",
    "i want to _KNOW about _IFWWW",
    "i want to _KNOW about your _SECOND _ALBUM",
    /*"what's your _SECOND _ALBUM",
    "_IFWWW" 
  ],
} */
/*
export const inNameOfSecondAlbum: Intent = {
  entities: {SECOND: entSecond, NAME: entName},
  examples: ["_NAME of _SECOND album", "_NAME of _SECOND record", /*"What's your _SECOND _ALBUM _NAME", "What's the _NAME of your _SECOND album", "What's the _NAME of your _SECOND record"],
} */
/*
export const inHaveSecondAlbum: Intent = {
  entities: {SECONDALBUM: entSecondAlbum, RELEASE: entRelease},
  examples: [
    "have you _RELEASE a _SECONDALBUM",
    "did you _RELEASE a _SECONDALBUM?",
    "Do you have a _SECONDALBUM out",
    "have you got a _SECONDALBUM out",
  ],
} */
/*
export const inReleaseDateSecondAlbum: Intent = {
  entities: { FIRSTALBUM: entFirstAlbum, RELEASE: entRelease, WHEN: entWhen},
  examples: [
    "_WHEN was your _FIRSTALBUM _RELEASE",
    "_WHEN did you _RELEASE your _FIRSTALBUM",
    "_WHEN did your _FIRSTALBUM _RELEASE",
    "_RELEASE _FIRSTALBUM",
  ],
} */
/*
export const inAboutNoondayDream: Intent = {
  entities: { THIRD: entThird,  ALBUM: entAlbum, ND: entND, KNOW: entKnow, SOMETHING: entSomething, INFO: entInfo, ND: entND},
  examples: [
    "tell me about your _THIRD album",
    "i want to hear about your _THIRD album",
    "info about _THIRD album",
    "tell me about your _THIRD record",
    "i want to hear about your _THIRD record",
    "info about _THIRD record",
    "tell me about _ND",
    "i want to hear about _ND",
    "_INFO about _ND",
    "_THIRD _ALBUM",
    "_INFO _SOMETHING about _ND",
    "_INFO _SOMETHING about _THIRD _ALBUM",
    "i want to _KNOW about _ND",
    "i want to _KNOW about your _THIRD _ALBUM",
    /*"what's your _THIRD _ALBUM",
    "_ND" 
    /*"What's your _LATEST _ALBUM _NAME",
  ],
}*/
/*
export const inNameOfThirdAlbum: Intent = {
  entities: {THIRD: entThird, NAME: entName},
  examples: ["_NAME of _THIRD album", "What's your _THIRD _ALBUM _NAME", "_NAME of _THIRD record", "What's the _NAME of your _THIRD album", "_NAME of _THIRD record"],
}*/
/*
export const inHaveThirdAlbum: Intent = {
  entities: {THIRDALBUM: entThirdAlbum, RELEASE: entRelease},
  examples: [
    "have you _RELEASE a _THIRDALBUM",
    "did you _RELEASE a _THIRDALBUM?",
    "Do you have a _THIRDALBUM out",
    "have you got a _THIRDALBUM out",
  ],
} */
/* 
export const inReleaseDateThirdAlbum: Intent = {
  entities: {RELEASE: entRelease, WHEN: entWhen, THIRD: entThird},
  examples: [
    "_WHEN was your _THIRD _ALBUM _RELEASE",
    "_WHEN did you _RELEASE your _THIRD _ALBUM",
    "_WHEN did your _THIRD _ALBUM _RELEASE",
    "_RELEASE _THIRD _ALBUM",
  ],
} */
/*
export const inTellAboutAllAlbum: Intent = {
  entities: {INFO: entInfo, HAVE: entHave, RELEASE: entRelease},
  examples: [
   "_INFO about _ALL the _ALBUM",
    "i wanna _KNOW about _ALL the _ALBUM",
    "can i _KNOW about _ALL _ALBUM",
    "can you _INFO about _ALL _ALBUM",
  ],
}*/

/*export const inNameOfFirstEP: Intent = {
  examples: [
  /*  "What’s your first EP called",
    "What’s your 1 EP called",
    "What’s the title of your first EP",
    "What’s the title of your 1 EP",
    "Title of first EP",
    "what's the name of your debut EP",
    "what's the title of your debut EP",
    "title of debut EP",
  ],
}
export const inHaveFirstEP: Intent = {
  examples: [
  /*  "Have you released a first EP",
    "Did you release a first EP",
    "Do you have a first EP",
    "Is there a first EP",
    "have you got a first EP?",
  ],
}

export const inReleaseDateFirstEP: Intent = {
  examples: [
   /* "When was your first EP released",
    "What year did you release your first EP",
    "When did you release your first EP",
    "When did your first EP come out",
    "Release first EP",
    "Release 1 EP.",
    "When was games in the dark released",
    "What year did you release games in the dark",
    "When did you release games in the dark",
    "When did games in the dark come out",
  ],
}
export const inNameOfSecondEP: Intent = {
  examples: [
  /*  "What’s the name of your second EP",
    "What’s your second EP called",
    "What’s your 2 EP called",
    "What’s the title of your second EP",
    "What’s the title of your 2 EP",
    "Title of second EP",
  ],
}
export const inHaveSecondEP: Intent = {
  examples: [
  /*  "Have you released a second EP",
    "Did you release a second EP",
    "Do you have a second EP",
    "Is there a second EP",
    "have you got a second EP?"
  ],
}
export const inReleaseDateSecondEP: Intent = {
  examples: [
  /*  "When was your second EP released",
    "What year did you release your second EP",
    "When did you release your second EP",
    "When did your second EP come out",
    "Release second EP",
    "Release 2 EP.",
    "When was these waters released",
    "What year did you release these waters",
    "When did you release these waters",
    "When did these waters come out",
  ],
}
export const inNameOfThirdEP: Intent = {
  examples: [
  /*  "What’s the name of your third EP",
    "What’s your third EP called",
    "What’s your 3 EP called",
    "What’s the title of your third EP",
    "What’s the title of your 3 EP",
    "Title of third EP",
  ],
}
export const inHaveThirdEP: Intent = {
  examples: [
  /*  "Have you released a third EP",
    "Did you release a third EP",
    "Do you have a third EP",
    "Is there a third EP",
    "have you got a third EP?"
  ],
}
export const inReleaseDateThirdEP: Intent = {
  examples: [
  /*  "When was your third EP released",
    "What year did you release your third EP",
    "When did you release your third EP",
    "When did your third EP come out",
    "Release third EP",
    "Release 3 EP.",
  ],
}
export const inNameOfFourthEP: Intent = {
  examples: [
   /* "What’s the name of your fourth EP",
    "What’s your fourth EP called",
    "What’s your 4 EP called",
    "What’s the title of your fourth EP",
    "What’s the title of your 4 EP",
    "Title of fourth EP",
  ],
}
export const inHaveFourthEP: Intent = {
  examples: [
  /*  "Have you released a fourth EP",
    "Did you release a fourth EP",
    "Do you have a fourth EP",
    "Is there a fourth EP",
    "have you got a fourth EP?"
  ],
}
export const inReleaseDateFourthEP: Intent = {
  examples: [
   /* "When was your fourth EP released",
    "What year did you release your fourth EP",
    "When did you release your fourth EP",
    "When did your fourth EP come out",
    "Release fourth EP",
  ],
}
export const inNameOfFifthEP: Intent = {
  examples: [
   /* "What’s the name of your fifth EP",
    "What’s your fifth EP called",
    "What’s your 5 EP called",
    "What’s the title of your fifth EP",
    "What’s the title of your 5 EP",
    "Title of fifth EP",
    "have you got a fifth EP?"
  ],
}
export const inHaveFifthEP: Intent = {
  examples: [
   /* "Have you released a fifth EP",
    "Did you release a fifth EP",
    "Do you have a fifth EP",
    "Is there a fifth EP",
  ],
}
export const inReleaseDateFifthEP: Intent = {
  examples: [
   /* "When was your fifth EP released",
    "What year did you release your fifth EP",
    "When did you release your fifth EP",
    "When did your fifth EP come out",
    "Release fifth EP",
    "Release 5 EP.",
  ],
}

export const chooseGamesInTheDark: Intent = {
  examples: [
/*"Games In The Dark",
    "first EP",
    "tell me about games in the dark",
    "i want to know about games in the dark",
    "info games in the dark",
    "give me details about Games in the dark",
  ],
}
export const chooseTheseWaters: Intent = {
  examples: [
  /*  "These Waters",
    "second EP",
    "tell me about These Waters",
    "i want to know about These Waters",
    "info These Waters",
    "give me details about These Waters",
  ],
}
export const chooseOldPine: Intent = {
  examples: [
   /* "Old Pine",
    "third EP",
    "tell me about Old Pine",
    "i want to know about Old Pine",
    "info Old Pine",
    "give me details about Old Pine",
  ],
}
export const chooseBHWRDLIVE: Intent = {
  examples: [
   /* "Ben Howard Live",
    "fourth EP",
    "tell me about Ben Howard Live",
    "i want to know about Ben Howard Live",
    "info Ben Howard Live",
    "give me details about Ben Howard Live",
  ],
}
export const chooseTheBurghIsland: Intent = {
  examples: [
   /* "The Burgh Island",
    "fifth EP",
    "tell me about The Burgh Island",
    "i want to know about The Burgh Island",
    "info The Burgh Island",
    "give me details about The Burgh Island",
  ],
}
export const inTellAboutAllEP: Intent = {
  examples: [
   /* "tell me about all the ep",
    "i wanna know about all the ep",
    "tell about all ep",
    "can i hear about all ep",
    "can you tell me about all ep",
    "tell me about all of his ep",
    "i wanna know about all of his ep",
  ],
}*/

/*const tellAllAboutAlbum: BridgeTurn = {
  label: "TELL_ALL_ABOUT_ALBUM",
  bot: {
    say: ["\"I'll take the long way 'round.\"", '"Where to, where to begin?"', '"Make your mind up, child"'],
    bot: {
      say: ["Let’s start with one of them.", "Let’s go one at a time."],
      bot: {
        say: ["Which album should I tell you more about?", "Which album do you want to hear more about?"],
        repair: true,
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
            intent: no,
            bot: {
              say: varNegativeFillers,
              goto: "QUERY_QUESTION",
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
                bot: {
                  say: varSorryAgain,
                  repair: true,
                },
              },
            ],
          },
        ],
      },
    },
  },
}*/

/*
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
                    say: varPositiveFillers,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
} */

/*
export const anythingCustomStart: BridgeTurn = {
  label: "ANYTHING_START",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: 'Please type "yes", or "no", depending on if you want to hear more or not.',
          repair: true,
        },
    },
  },
    {
      cond: { retryCount: 1 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: 'Make sure you type either "yes" or "no", depending on if you are interested in hearing more about this or not.',
          repair: true,
        },
      },
    },
    {
      bot: {
        say: varSorryAgain,
        repair: true,
      },
    },
  ],
}

export const anythingCustomReal: BridgeTurn = {
  label: "ANYTHING_REAL",
  bot: [
    {
      cond: { retryCount: 0 },
      bot: {
        say: '"I don\'t wanna beg you pardon", but I beg you pardon?',
        bot: {
          say: 'Please type "yes", or "no", depending on if you want to keep talking to me or not.',
          repair: true,
        },
    },
  },
    {
      cond: { retryCount: 1 },
      bot: {
        say: '"I don\'t want to trouble your mind", but I cannot make head nor tail of that.',
        bot: {
          say: 'Type "yes" if you still want to talk to me.',
          bot: {
            say: 'Type "no" if you want to end our conversation here.',
          repair: true,
        },
      },
    },
  },
    {
      bot: {
        say: varSorryAgain,
        repair: true,
      },
    },
  ],
}*/

/*
export const aboutAlbum: BridgeTurn = {
  label: "ABOUT_ALBUM",
  bot: {
    say: '"Every Kingdom" was released in 2011.',
    bot: {
      say: 'I recorded "I Forget Where We Were" in 2014.',
      bot: {
        say: 'Then, "Noonday Dream" is my latest album. It came out in June 2018.',
        bot: {
          say: ["Do you want to hear more about any of the albums?", "Should I go into detail about any of them?"],
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
                goto: "TELL_ALL_ABOUT_ALBUM",
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
}*/