export const displayCheckboxQuestions = () => {
    const activityItem = document.createElement("div");
    activityItem.className = "activity-item";

    const label = document.createElement("label");

    const img = document.createElement("img");
    img.src = "https://static.wixstatic.com/media/cc504e_1e62d9ecc8b942dc8cba586230f63b9e~mv2.jpeg/v1/fill/w_750,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cc504e_1e62d9ecc8b942dc8cba586230f63b9e~mv2.jpeg";
    img.alt = "Flowers";
    label.appendChild(img);

    const innerDiv = document.createElement("div");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "gift";
    input.value = "flowers";

    const textNode = document.createTextNode("Flowers");
    innerDiv.appendChild(input);
    innerDiv.appendChild(textNode);
    label.appendChild(innerDiv);
    activityItem.appendChild(label);
    document.body.appendChild(activityItem);
}