import { UserTurn } from "narratory"
import { inOnlyLove } from "./variables"

export const onlyLove: UserTurn = 
{
  intent: inOnlyLove,
  bot: {
  say: "Thank you!",
}
}

export const userInitiatives = [onlyLove]

