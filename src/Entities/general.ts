import { Entity } from "narratory"

export const entName: Entity = {
  name: "NAME",
  enums: [
    {
      name: "name", alts: ["title", "called", "call"]
    },
  ],
}

export const entFirst: Entity = {
    name: "FIRST",
    enums: [
      {
        name: "first", alts: ["1", "1st", "debut"]
      },
    ],
  }

  export const entMiddle: Entity = {
    name: "MIDDLE",
    enums: [
      {
        name: "middle", alts: ["midmost", "centermost", "center", "median", "between"]
      },
    ],
  }

  export const entLast: Entity = {
    name: "LAST",
    enums: [
      {
        name: "last", alts: ["ending", "end", "sur", "utmost", "uttermost", "far-off", "ultimate", "surname"]
      },
    ],
  }

  export const entLatest: Entity = {
    name: "LATEST",
    enums: [
      {
        name: "latest", alts: ["newest", "most new", "new", "recent"]
      },
    ],
  }


  export const entFull: Entity = {
    name: "FULL",
    enums: [
      {
        name: "full", alts: ["complete", "thorough", "outright", "entire"]
      },
    ],
  }

  export const entSecond: Entity = {
    name: "SECOND",
    enums: [
      {
        name: "second", alts: ["2", "2nd"]
      },
    ],
  }

  export const entThird: Entity = {
    name: "THIRD",
    enums: [
      {
        name: "third", alts: ["3", "3rd"]
      },
    ],
  }

  export const entWhen: Entity = {
    name: "WHEN",
    enums: [
      {
        name: "when", alts: ["at what time", "which time", "during when",	"during what time", "during",	"while", "when's"]
      },
    ],
  }

  export const entRelease: Entity = {
    name: "RELEASE",
    enums: [
    {
        name: "release", alts: ["released", "dropped", "drop", "come out", "are out"]
    }
]
}

/* export const entKnow: Entity = {
  name: "KNOW",
  enums: [
  {
      name: "know", alts: ["hear", "learn", "be informed", "get the idea", "grasp", "have knowledge", "read", "listen", "follow", "copy", "understand"]
  }
]
} */

export const entSomething: Entity = {
  name: "SOMETHING",
  enums: [
  {
      name: "something", alts: ["smth", "a thing", "something", "whatever", "anything", "anything at all", "any one thing", "any one all"]
  }
]
}

export const entInfo: Entity = {
  name: "INFO",
  enums: [
  {
      name: "info", alts: ["explain", "explain me", "what", "info", "inform me", "tell me", "tell", "teach me", "teach", "brief me", "brief", "update", "update me", "give me details", "do that"]
  }
]
}

export const entWhere: Entity = {
  name: "WHERE",
  enums: [
  {
      name: "where", alts: ["location", "position"]
  }
]
}

export const entPlace: Entity = {
  name: "PLACE",
  enums: [
  {
      name: "place", alts: ["city", "town", "area", "spot", "site", "point"]
  }
]
}

export const entAll: Entity = {
  name: "ALL",
  enums: [
    {
    name: "all", alts: ["every", "each", "each and every"]
    }
  ]
}

export const entMean: Entity = {
  name: "MEAN",
  enums: [
    {
    name: "mean", alts: ["propose", "intend", "have in mind"]
    }
  ]
}

export const entThis: Entity = {
  name: "THIS",
  enums: [
    {
      name: "this", alts: ["that"]
    }
  ]
}

export const entAnother: Entity = {
  name: "ANOTHER",
  enums: [
    {
      name: "another", alts: ["other", "some other", "different"]
    }
  ]
}

export const entQuestion: Entity = {
  name: "QUESTION",
  enums: [
    {
      name: "question", alts: ["inquiry", "query", "qa", "QandA", "q&a", "questions", "inquiries", "querys"]
    }
  ]
}

export const entCan: Entity = {
  name: "CAN",
  enums: [
    {
      name: "can", alts: ["may", "could"]
    }
  ]
}

export const entAsk: Entity = {
  name: "ASK",
  enums: [
    {
      name: "ask", alts: ["request", "inquiry", "demand", "find out"]
    }
  ]
}

export const entIDK: Entity = {
  name: "IDK",
  enums: [
    {
      name: "idk", alts: ["i don't know", "i have no idea", "i have no clue", "i haven't the least idea", "i have no way of knowing"]
    }
  ]
}

export const entHelp: Entity = {
  name: "HELP",
  enums: [
    {
      name: "help", alts: ["advice", "tell", "aid", "guide", "support", "assist"]
    }
  ]
}

export const entAnswer: Entity = {
  name: "ANSWER",
  enums: [
    {
      name: "answer", alts: ["do", "deal with", "meet", "follow", "serve", "respond"]
    },
  ]
}

export const entAble: Entity = {
  name: "ABLE",
  enums: [
    {
      name: "able", alts: ["capable", "prepared", "keen", "skilled"]
    },
  ]
}

export const entHow: Entity = {
  name: "HOW",
  enums: [
    {
      name: "how", alts: ["by what means", "according to what", "by what method", "through what", "whence", "wherewith", "whereby"]
    },
  ]
}

export const entWork: Entity = {
  name: "WORK", 
  enums: [
    {
      name: "work", alts: ["function", "operate", "live", "go", "run", "know", "answer"]
    }
  ]
}

export const entBuild: Entity = {
  name: "BUILD", 
  enums: [
    {
      name: "build", alts: ["build", "create", "created", "construct", "constructed", "made", "set up", "put up"]
    }
  ]
}

export const entDay: Entity = {
  name: "DAY",
  enums: [
    {
      name: "day", alts: ["date"]
}
]
}

/*export const entWhat: Entity = {
  name: "WHAT",
  enums: [
    {
      name: "what", alts: ["which", "what's"]
}
]
}*/

export const entNo: Entity = {
  name: "NO",
  enums: [
    {
      name: "no", alts: ["nah",
      "no thank you",
      "nay",
      "nix",
      "no way",
      "nope",
      "not",
      "definitely not",
      "not ever",
      "not in a million years",
      "god no",
      "please don't",
      "don't",
      "do not",
      "screw that",
      "fuck that"]
}
]
}

export const entYes: Entity = {
  name: "YES",
  enums: [
    {
      name: "yes", alts: [
        "yeah",
        "sure",
        "alright",
        "absolutely",
        "by all means",
        "certainly",
        "indeed",
        "mhm",
        "aye",
        "yep",
        "uh-huh",
        "okay",
        "OK",
        "okey dokey",
        "yea",
        "surely",
        "hell yes",
        "for sure",
        "fine",
        "sure thing",
        "gladly",
        "please",
        "yes, please",
        "ye"]
}
]
}