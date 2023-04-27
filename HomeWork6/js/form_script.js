const form = document.getElementById("form");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const street = document.getElementById("street");
const city = document.getElementsByClassName("city");
const houseNumber = document.getElementById("house_number");
const apartamentNumber = document.getElementById("apartament_number");
const comments = document.getElementById("comments");
const phoneNumber = document.getElementById("phone_number");
const dateOfBirth = document.getElementById("date_of_birth");
const pesel = document.getElementById("pesel");
const index = document.getElementById("index");
let isGood = true;

const usernameRe =
  /^[A-ZĘÓĄŚŁŻŹĆŃ]{1}([a-zęóąśłżźćń]+)?([-']([A-ZĘÓĄŚŁŻŹĆŃ]{1})?([a-zęóąśłżźćń]{1})?[a-zęóąśłżźćń]+)*(\s[A-ZĘÓĄŚŁŻŹĆŃ]{1}([a-zęóąśłżźćń]+)?([-']([A-ZĘÓĄŚŁŻŹĆŃ]{1})?[a-zęóąśłżźćń]+)*)*$/;
const streetRe = /^[A-Za-zĘÓĄŚŁŻŹĆŃęóąśłżźćń]+$/;
const houseNumberRe = /^\d\d?$/;
const apartamentNumberRe = /^\d\d?\d?\d?$/;
const phoneNumberRe = /^\+\d{11}$/;
const peselRe = /^\d{11}$/;
const indexRe = /^\d{2}-\d{3}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});
if (isGood == true) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
  });
}

function validateInputs() {
  const usernameValue = username.value.trim();
  const surnameValue = surname.value.trim();
  const streetValue = street.value.trim();
  const houseNumberValue = houseNumber.value.trim();
  const apartamentNumberValue = apartamentNumber.value.trim();
  const commentsValue = comments.value.trim();
  const phoneNumberValue = phoneNumber.value.trim();
  const dateOfBirthValue = dateOfBirth.value;
  const dateHelper = new Date();
  const currentYear = dateHelper.getFullYear();
  const currentMonth = dateHelper.getMonth() + 1;
  const currentDay = dateHelper.getDate();
  const peselValue = pesel.value.trim();
  const indexValue = index.value.trim();

  if (usernameValue === "") {
    setError(username, "Pole Imię nie może być puste");
    isGood = false;
  } else if (usernameValue.length > 30) {
    setError(username, "Imie nie może być dłużej niż 30 symboli");
    isGood = false;
  } else if (!usernameRe.test(usernameValue)) {
    setError(username, "Nieprawidłowe imię");
    isGood = false;
  } else {
    setSuccess(username);
  }

  if (surnameValue === "") {
    setError(surname, "Pole Nazwisko nie może być puste");
    isGood = false;
  } else if (surnameValue.length > 30) {
    setError(surname, "Imie nie może być dłużej niż 30 symboli");
    isGood = false;
  } else if (!usernameRe.test(surnameValue)) {
    isGood = false;
  } else {
    setSuccess(surname);
  }

  if (streetValue === "") {
    setError(street, "Pole Ulica nie może być puste");
    isGood = false;
  } else if (streetValue.length < 2) {
    setError(street, "Ulica musi przyjmować co najmniej 2 znaki");
    isGood = false;
  } else if (streetValue.length > 30) {
    setError(street, "Ulica może przyjmować maksymalnie 30 znaków");
    isGood = false;
  } else if (!streetRe.test(streetValue)) {
    setError(street, "Ulica nie może mieć ani znaków ani cyfr");
    isGood = false;
  } else {
    setSuccess(street);
  }

  if (houseNumberValue === "") {
    setError(houseNumber, "Pole Numer domu nie może być puste");
    isGood = false;
  } else if (!houseNumberRe.test(houseNumberValue)) {
    setError(
      houseNumber,
      "Numer domu nie może być ujemny lub większy od 100  "
    );
    isGood = false;
  } else {
    setSuccess(houseNumber);
  }

  if (apartamentNumberValue === "") {
    setError(apartamentNumber, "Pole Numer mieszkania nie może być puste");
    isGood = false;
  } else if (!apartamentNumberRe.test(apartamentNumberValue)) {
    setError(
      apartamentNumber,
      "Numer mieszkania nie może być ujemny lub większy od 1000"
    );
    isGood = false;
  } else {
    setSuccess(apartamentNumber);
  }

  if (commentsValue === "") {
    setError(comments, "Pole Uwagi nie może być puste");
    isGood = false;
  } else {
    setSuccess(comments);
  }

  if (phoneNumberValue === "") {
    setError(phoneNumber, "Pole Numer telefonu nie może być puste");
    isGood = false;
  } else if (!phoneNumberRe.test(phoneNumberValue)) {
    setError(phoneNumber, "Wpisany numer telefonu nie jest prawidłowy");
    isGood = false;
  } else {
    setSuccess(phoneNumber);
  }

  // Date mamy w formacie yyyy-mm-dd, więc
  if (dateOfBirthValue === "") {
    setError(dateOfBirth, "Pole Data urodzenia nie może być puste");
    isGood = false;
  } else if (dateOfBirthValue.split("-")[0] > currentYear - 18) {
    setError(dateOfBirth, "Musisz mieć 18 lat, żeby wypełnić formularz");
    isGood = false;
  } else if (dateOfBirthValue.split("-")[0] < currentYear - 100) {
    setError(dateOfBirth, "Wprowadź prawidłową datę urodzenia!");
    isGood = false;
  } else {
    setSuccess(dateOfBirth);
  }

  if (peselValue === "") {
    setError(pesel, "Pole Pesel nie może być puste");
    isGood = false;
  } else if (!peselRe.test(peselValue)) {
    setError(pesel, "Wpisany pesel nie jest prawidłowy");
    isGood = false;
  } else {
    setSuccess(pesel);
  }

  if (indexValue === "") {
    setError(index, "Pole Kod pocztowy nie może być puste");
    isGood = false;
  } else if (!indexRe.test(indexValue)) {
    setError(index, "Wpisany kod pocztowy nie prawidłowy");
    isGood = false;
  } else {
    setSuccess(index);
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
