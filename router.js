import { websiteConfig } from "./config.js";

export const redirect = (endpoint) => {
    window.location.href = `/${websiteConfig.repoName ? `${websiteConfig.repoName}/` : ''}${endpoint}`;
}