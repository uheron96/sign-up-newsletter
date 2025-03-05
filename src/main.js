const emailInput = document.getElementById("email");
const invalidEmailMessage = document.getElementById("invalid-email");
const form = document.getElementById("form");
form.addEventListener("submit", submitForm);

emailInput.addEventListener("invalid", (e) => {
  invalidEmailMessage.style.display = "flex";
});

function submitForm(event) {
  event.preventDefault();

  location.replace("./success-page.html");
}
