export const answerFallback = [
  {
    cond: { retryCount: 0 },
    say: [
      {
        text: "Oh hey, I wasn't listening. Come again please?",
        bot: {
            say: "",
            goto: "QUERY_QUESTION",
        }
      }
    ],
    repair: true
}
]