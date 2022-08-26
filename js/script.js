const password = document.getElementById("password");
const confirm = document.getElementById("confirmPassword");
const errorLabel = document.getElementById("errorLabel");

function check() {
  if (password.value === confirm.value) {
    password.classList.remove("error");
    confirm.classList.remove("error");
    errorLabel.hidden = true;
    confirm.setCustomValidity("");
  } else {
    password.classList.add("error");
    confirm.classList.add("error");
    errorLabel.removeAttribute("hidden");
    confirm.setCustomValidity("Passwords do not match");
  }
}
