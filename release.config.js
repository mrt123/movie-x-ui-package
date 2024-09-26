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
            label: "static dist",
            name: "movie-x-ui",
          },
        ],
        draftRelease: true,
        // successComment and failTitle = false: to avoid "Request quota exhausted for request GET /search/issues"
        successComment: false,
        failTitle: false,
      },
    ],
  ],
};
