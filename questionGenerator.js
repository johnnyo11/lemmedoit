const generatingQuestionAnswer = (inputValue, answers, container) => {
    for (let answer of answers) {
        const activityItem = document.createElement("div");
        const label = document.createElement("label");
        const img = document.createElement("img");
        const innerDiv = document.createElement("div");
        const input = document.createElement("input");
        const span = document.createElement("span");
        const textNode = document.createTextNode(`${answer.label}`);

        activityItem.className = "activity-item";
        label.className = "checkbox-wrapper-13";
        innerDiv.className = "activity-item-input";
        img.src = answer.image;
        img.alt = answer.label;
        input.type = "checkbox";
        input.name = inputValue;
        input.value = answer.value;

        label.appendChild(img);
        innerDiv.appendChild(input);
        span.appendChild(textNode);
        innerDiv.appendChild(span);
        label.appendChild(innerDiv);
        activityItem.appendChild(label);
        container.appendChild(activityItem);
    }
}

export const generatingQuestion = (questionContainer, questionData, endpoint, lastQuestion = false, stackSearch = false, encryption = false) => {

    if (!questionContainer) {
        alert("Question container not found");
        return;
    }

    const form = document.createElement("form");
    form.action = endpoint;
    form.className = "question-form";
    form.method = "GET";

    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    titleDiv.textContent = questionData.question;
    form.appendChild(titleDiv);

    const activitySelection = document.createElement("div");
    activitySelection.className = "activity-selection";

    generatingQuestionAnswer(questionData.value, questionData.answers, activitySelection);
    form.appendChild(activitySelection);

    const buttonContainer = document.createElement("div");
    buttonContainer.style.textAlign = "center";
    buttonContainer.style.paddingTop = "40px";

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Submit";
    buttonContainer.appendChild(button);
    form.appendChild(buttonContainer);

    questionContainer.appendChild(form);

    form.addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the current form action URL
        const currentAction = new URL(form.action, window.location.origin);
        let existingParams = new URLSearchParams(window.location.search);
        const secret_code = existingParams.get('secret_code');

        if (secret_code) {
            existingParams = new URLSearchParams(decryptParams(secret_code));
        }

        if (stackSearch) {
            existingParams.forEach((value, key) => {
                currentAction.searchParams.append(key, value);
            });
        }

        const formData = new FormData(form);
        for (const [key, value] of formData.entries()) {
            currentAction.searchParams.append(key, value);
        }

        let url = currentAction.toString();
        if (encryption) {
            const encryptedParams = encryptParams(currentAction.searchParams.toString());
            url = url.replace(currentAction.searchParams.toString(), `secret_code=${encryptedParams}`);
        }

        if (lastQuestion) {
            navigator.clipboard.writeText(url);
            alert("The link is copied, send it to your valentine!");
        } else {
            window.location.href = url;
        }
    });
}

const encryptParams = (params) => {
    return btoa(params);
}

export const decryptParams = (encodedParams) => {
    return atob(encodedParams);
}
