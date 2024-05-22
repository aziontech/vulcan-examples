export default {
  rules: {
    request: [
      {
        name: "Main_Rule",
        match: "^\\/",
        runFunction: {
          path: ".edge/worker.js",
        },
        forwardCookies: true,
      },
    ],
  },
};
