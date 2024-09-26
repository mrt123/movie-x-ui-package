module.exports = {
  branches: [{ name: "main" }],
  plugins: [
    "@semantic-release/commit-analyzer",
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "dist/out/**/*.*",
            label: "static dist", // to avoid "Request quota exhausted for request GET /search/issues"
            name: "movie-x-ui",
          },
        ],
        draftRelease: true,
        successComment: false,
      },
    ],
  ],
};
