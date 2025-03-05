document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const invalidEmailMessage = document.getElementById("invalid-email");
  const form = document.getElementById("email-form");

  if (!form) {
    console.error("Form not found!");
    return;
  }

  form.addEventListener("submit", submitForm);

  emailInput.addEventListener("invalid", (e) => {
    invalidEmailMessage.style.display = "flex";
  });

  function submitForm(event) {
    event.preventDefault();
    const userEmail = emailInput.value;

    location.replace(
      "./pages/success-page.html?user-email=" + encodeURIComponent(userEmail)
    );
  }
});
