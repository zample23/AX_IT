//main form

const mainForm = document.getElementById("mainForm");
const mainError = document.getElementById("mainError");

const mainEmail = document.getElementById("mainEmail");
const mainPassword = document.getElementById("mainPassword");
const mainName = document.getElementById("mainName");

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];

  if (mainPassword.value.length <= 8) {
    messages.push("The password can't be shorter than 8 symbols");
  }

  if (mainPassword.value.length >= 25) {
    messages.push("The password can't be longer than 25 symbols");
  }

  if (mainName.value.length <= 2) {
    messages.push("The name can't be shorter than 2 symbols");
  }

  if (mainName.value.length >= 15) {
    messages.push("The name can't be longer than 15 symbols");
  }

  if (messages.length > 0) {
    mainError.innerText = messages.join(". ");
    mainError.classList.remove("correct");
    mainError.classList.add("incorrect");
  } else {
    mainError.innerText = "";
    mainEmail.setAttribute("disabled", "true");
    mainPassword.setAttribute("disabled", "true");
    mainName.setAttribute("disabled", "true");
    mainError.innerText = "Successful";
    mainError.classList.remove("incorrect");
    mainError.classList.add("correct");
  }
});

//footer form

const form = document.getElementById("contact-us");
const formName = document.getElementById("formName");
const formSubject = document.getElementById("formSubject");
const formEmail = document.getElementById("formEmail");
const formMessage = document.getElementById("formMessage");

const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (formName.value.length <= 2) {
    messages.push("The name can't be shorter than 2 symbols");
  }

  if (formName.value.length >= 15) {
    messages.push("The name can't be longer than 15 symbols");
  }

  if (formSubject.value.length <= 3) {
    messages.push("The subject can't be shorter than 3 symbols");
  }

  if (formSubject.value.length >= 15) {
    messages.push("The subject can't be longer than 15 symbols");
  }

  if (formMessage.value == 0) {
    messages.push("Write a message please");
  }
  console.log(messages);

  if (messages.length > 0) {
    error.innerText = messages.join(" ");
    error.classList.remove("correct");
    error.classList.add("incorrect");
  } else {
    error.innerText = "";
    formName.setAttribute("disabled", "true");
    formEmail.setAttribute("disabled", "true");
    formSubject.setAttribute("disabled", "true");
    formMessage.setAttribute("disabled", "true");
    error.innerText = "Successful";
    error.classList.remove("incorrect");
    error.classList.add("correct");
  }
});
