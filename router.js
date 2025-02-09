import { config } from "./config.js";

const redirect = (endpoint) => {
    window.location.href = `/${config.repoName ? `${config.repoName}/` : ''}${endpoint}`;
}