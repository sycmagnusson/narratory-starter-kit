import { Entity } from "narratory"

export const entAlbum: Entity = {
    name: "ALBUM",
     enums: [
    {
        name: "album", alts: ["record", "LP", "tape", "albums", "records", "lps", "tapes"]
    }
]
}

export const entEK: Entity = {
    name: "EVERY_KINGDOM",
    enums: [
    {
        name: "ifwww", alts: ["EK", "Every Kingdom"]
    }
]
}

export const entIFWWW: Entity = {
    name: "IFWWW",
    enums: [
      {
        name: "ifwww", alts: ["i forget where we were", "iforgetwherewewere"]
      },
    ],
  }

  export const entND: Entity = {
    name: "ND",
    enums: [
      {
        name: "nd", alts: ["noonday dream", "noondaydream"]
      },
    ],
  }


  export  const entities = [entAlbum,
    entEK,
    entIFWWW]