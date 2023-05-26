import throttle from 'lodash.throttle';
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const form = document.querySelector('form')
form.addEventListener('input', throttle(onInput, 500))
form.addEventListener('submit', onFormSubmit)
const storageKey = "feedback-form-state";
let userForm = {};
onLocalStorageForm()
function onFormSubmit(e) {
    e.preventDefault();
    if (input.value === '' || textarea.value === '') {
        return
    }
    console.log(userForm);
    localStorage.removeItem(storageKey)
    e.currentTarget.reset();
}
function onInput() {
    userForm = {
        email: input.value,
        message: textarea.value,
    }
    localStorage.setItem(storageKey, JSON.stringify(userForm))
}
function onLocalStorageForm() {
    const saveForm = JSON.parse(localStorage.getItem(storageKey))
    if (saveForm) {
        input.value = saveForm.email
        textarea.value = saveForm.message
    }
}