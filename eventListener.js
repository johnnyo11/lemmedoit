import { redirectToSubmitPage, onHover } from "./button.js";

document.addEventListener('DOMContentLoaded', () => {
    // Add onClick
    document.getElementById('nope-button').addEventListener("mouseover", onHover);
    document.getElementById('yes-button').addEventListener("click", redirectToSubmitPage);
});