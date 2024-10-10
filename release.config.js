module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github"
  ],
  release: {
    analyzeCommits: {
      preset: "conventionalcommits",
      releaseRules: [
        {type: "breaking", release: "major"},
        {type: "feat", release: "minor"},
        {type: "fix", release: "patch"}
      ]
    }
  }
};
