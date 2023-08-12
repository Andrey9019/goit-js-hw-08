const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector("input[name='email']");
const messageInput = form.querySelector("textarea[name='message']");

form.addEventListener('input', handlerInput);
form.addEventListener('submit', handlerSubmit);

// const throttle = (handlerInput, 500);

function handlerInput() {
  const value = {
    email: emailInput.value,
    message: messageInput.value,
  };

  saveForm(value);
}

function handlerSubmit(event) {
  event.preventDefault();

  console.log(getFormValue());

  localStorage.removeItem('feedback-form-state');

  form.reset();
}

function saveForm(value) {
  localStorage.setItem('feedback-form-state', JSON.stringify(value));
}
loadFormValue();
function loadFormValue() {
  const savedValue = localStorage.getItem('feedback-form-state');

  if (savedValue) {
    const state = JSON.parse(savedValue);
    emailInput.value = state.email ?? '';
    messageInput.value = state.message ?? '';
  }
}

function getFormValue() {
  return {
    email: emailInput.value,
    message: messageInput.value,
  };
}
