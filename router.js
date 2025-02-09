import { config } from "./config.js";

export const redirect = (endpoint) => {
    window.location.href = `/${config.repoName ? `${config.repoName}/` : ''}${endpoint}`;
}