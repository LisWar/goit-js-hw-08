const _ = require('lodash');

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

updateOutput(storageKey);

form.addEventListener("input", _.throttle(function(e) {
    handleInput(e)
    }, 500));
form.addEventListener("submit", handleSubmit);


console.log('localStorage.getItem(storageKey): ', localStorage.getItem(storageKey));



function handleInput(e) {
    const data = {"email": form.elements.email.value, "message": form.elements.message.value.trim()};

    save(storageKey, data);
}

function handleSubmit(e) {
    e.preventDefault()
    const {elements: { email, message }} = e.currentTarget;

    if (email.value == "" || message.value == "") {
        alert("Заповніть обидва поля перед подачею.")
        return;
    }
    email.value = "";
    message.value = "";
}

function updateOutput(key) {
    try {
        const data = load(key);
        console.log('data: ', data);

        form.email.value = data.email;
        form.message.value = data.message;
    } catch (error) {
        console.log('error: ', error);
        return;
    }
}

function load(key) {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
    }
}
  
function save(key, data) {
    try {
        const serializedData = JSON.stringify(data);
        localStorage.setItem(key, serializedData);
    } catch (error) {
        console.log(error);
    }
}