const _ = require('lodash');

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

updateOutput(storageKey);

form.addEventListener("input", _.throttle(function(e) {
    console.log('e: ', e.currentTarget);
    handleInput(e)
    }, 500));
form.addEventListener("submit", handleSubmit);


console.log('localStorage.getItem(storageKey): ', localStorage.getItem(storageKey));



function handleInput(e) {

    const {elements: { email, message }} = e.currentTarget;
    const data = {"email": email.value, "message": message.value.trim()};

    save(storageKey, data);
}

function handleSubmit(e) {
    e.preventDefault()
    const {elements: { email, message }} = e.currentTarget;

    console.log(localStorage.getItem(storageKey));   
    localStorage.removeItem(storageKey);
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