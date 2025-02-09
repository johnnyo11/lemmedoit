function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const teleportButton = (nopeButton, buttonContainer) => {
    const buttonContainerHeight = buttonContainer.clientHeight;
    const buttonContainerWidth = buttonContainer.clientWidth; 

    const maxTeleportHeight = buttonContainerHeight - nopeButton.clientHeight + 1;
    const maxTeleportWidth = buttonContainerWidth - nopeButton.clientWidth + 1;

    const randomHeight = Math.floor(Math.random() * (maxTeleportHeight));
    const randomWidth = Math.floor(Math.random() * (maxTeleportWidth));

    if (!nopeButton.getAttribute('moved')) {
        nopeButton.setAttribute('moved', '');
    };

    nopeButton.style.left = randomWidth + 'px';
    nopeButton.style.top = randomHeight + 'px';
}

export const onClick = async() => {
    const nopeButton = document.getElementById('nope-button');
    const buttonContainer = document.getElementById('button-container');
    const yesButton = document.getElementById('yes-button');
    if (!nopeButton) {
        alert('Nope button not found!');
        return;
    }

    if (!buttonContainer) {
        alert('Button container not found!');
        return;
    }
    
    teleportButton(nopeButton, buttonContainer);

    var currentFontSize = parseInt(
        window.getComputedStyle(yesButton).fontSize
      );
      yesButton.style.fontSize = currentFontSize + 10 + "px";
}

export const redirectToSubmitPage = () => {
    window.location.href = "/mcq.html";
}