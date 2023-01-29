const inputName = document.querySelector("#name-input");
const greetingName = document.querySelector("#name-output");

inputName.addEventListener('input', checkInputName);

function checkInputName (event) {
    if (event.currentTarget.value.trim() === "") {
        greetingName.textContent = "Anonymous";
        return;
    }
    greetingName.textContent = event.currentTarget.value.trim();
}