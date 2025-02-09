const HOST_NAME = "https://johnnyo11.github.io";
const REPO_NAME = "lemmedoit";

export const websiteConfig = {
    repoName: window.location.hostname === HOST_NAME ? REPO_NAME : null,
};