function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const teleportButton = (button, container) => {
    const buttonContainerHeight = container.clientHeight;
    const buttonContainerWidth = container.clientWidth; 

    const maxTeleportHeight = buttonContainerHeight - button.clientHeight + 1;
    const maxTeleportWidth = buttonContainerWidth - button.clientWidth + 1;

    const randomHeight = Math.floor(Math.random() * (maxTeleportHeight));
    const randomWidth = Math.floor(Math.random() * (maxTeleportWidth));

    if (!button.getAttribute('absolute')) {
        button.setAttribute('absolute', '');
    };

    button.style.left = randomWidth + 'px';
    button.style.top = randomHeight + 'px';
}

const enlargeButton = (button, enlargeSize, beAbsolute = false) => {
    var currentFontSize = parseInt(
        window.getComputedStyle(button).fontSize
    );

    

    button.style.fontSize = currentFontSize + enlargeSize + "px";
}

export const onHover = async() => {
    const nopeButton = document.getElementById('nope-button');
    const yesButton = document.getElementById('yes-button');
    const buttonContainer = document.getElementById('button-container');
    
    if (!yesButton) {
        alert('Yes button not found!');
        return;
    }

    if (!nopeButton) {
        alert('Nope button not found!');
        return;
    }

    if (!buttonContainer) {
        alert('Button container not found!');
        return;
    }
    
    teleportButton(nopeButton, document.body);
    enlargeButton(yesButton, 20, true);
}

export const redirectToSubmitPage = () => {
    location.href = "mcq.html";
}