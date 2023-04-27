const form = document.getElementById("form");
const login = document.getElementById("login");
const passwd = document.getElementById("passwd");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs(e);
});

function validateInputs(e) {
  const loginValue = login.value.trim();
  const passwdValue = passwd.value.trim();
  let isGood = true;

  if (loginValue === "admin") {
    setSuccess(login);
  } else {
    setError(login, "Nie prawidłowy login");
    isGood == false;
  }

  if (passwdValue === "admin123") {
    setSuccess(passwd);
  } else {
    setError(passwd, "Nie prawidłowe hasło");
    isGood = false;
  }

  if (isGood == true) {
    e.unbind("submit").submit();
  }
}

function setError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

function setSuccess(element) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}
