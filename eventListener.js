import { redirectToSubmitPage, onClick } from "./button.js";

document.addEventListener('DOMContentLoaded', () => {
    // Add onClick
    document.getElementById('nope-button').addEventListener("mouseover", onClick);
    document.getElementById('yes-button').addEventListener("click", redirectToSubmitPage);
});