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

let flaga = true;

const usernameRe =
  /^[A-ZĘÓĄŚŁŻŹĆŃ]{1}([a-zęóąśłżźćń]+)?([-']([A-ZĘÓĄŚŁŻŹĆŃ]{1})?([a-zęóąśłżźćń]{1})?[a-zęóąśłżźćń]+)*(\s[A-ZĘÓĄŚŁŻŹĆŃ]{1}([a-zęóąśłżźćń]+)?([-']([A-ZĘÓĄŚŁŻŹĆŃ]{1})?[a-zęóąśłżźćń]+)*)*$/;
const streetRe = /^[A-Za-zĘÓĄŚŁŻŹĆŃęóąśłżźćń]+$/;
const houseNumberRe = /^\d\d?$/;
const apartamentNumberRe = /^\d\d?\d?\d?$/;
const phoneNumberRe = /^\+\d{11}$/;
const peselRe = /^\d{11}$/;
const indexRe = /^\d{2}-\d{3}$/;

form.addEventListener("submit", (e) => {
  validateInputs();

  if (flaga == false) {
    e.preventDefault();
  }
});

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
    flaga = true;
    setError(username, "Pole Imię nie może być puste");
  } else if (usernameValue.length > 30) {
    setError(username, "Imie nie może być dłużej niż 30 symboli");
    flaga = false;
  } else if (!usernameRe.test(usernameValue)) {
    flaga = false;
    setError(username, "Nieprawidłowe imię");
  } else {
    flaga = false;
    setSuccess(username);
  }

  if (surnameValue === "") {
    flaga = true;
    setError(surname, "Pole Nazwisko nie może być puste");
  } else if (surnameValue.length > 30) {
    flaga = false;
    setError(surname, "Nazwisko nie może być dłużej niż 30 symboli");
  } else if (!usernameRe.test(surnameValue)) {
    flaga = false;
    setError(username, "Nieprawidłowe nazwisko");
  } else {
    flaga = false;
    setSuccess(surname);
  }

  if (streetValue === "") {
    flaga = true;
    setError(street, "Pole Ulica nie może być puste");
  } else if (streetValue.length < 2) {
    flaga = false;
    setError(street, "Ulica musi przyjmować co najmniej 2 znaki");
  } else if (streetValue.length > 30) {
    flaga = false;
    setError(street, "Ulica może przyjmować maksymalnie 30 znaków");
  } else if (!streetRe.test(streetValue)) {
    flaga = false;
    setError(street, "Ulica nie może mieć ani znaków ani cyfr");
  } else {
    flaga = false;
    setSuccess(street);
  }

  if (houseNumberValue === "") {
    flaga = true;
    setError(houseNumber, "Pole Numer domu nie może być puste");
  } else if (!houseNumberRe.test(houseNumberValue)) {
    flaga = false;
    setError(
      houseNumber,
      "Numer domu nie może być ujemny lub większy od 100  "
    );
  } else {
    flaga = false;
    setSuccess(houseNumber);
  }

  if (apartamentNumberValue === "") {
    flaga = true;
    setError(apartamentNumber, "Pole Numer mieszkania nie może być puste");
  } else if (!apartamentNumberRe.test(apartamentNumberValue)) {
    setError(
      apartamentNumber,
      "Numer mieszkania nie może być ujemny lub większy od 1000"
    );
  } else {
    flaga = false;
    setSuccess(apartamentNumber);
  }

  if (commentsValue === "") {
    flaga = true;
    setError(comments, "Pole Uwagi nie może być puste");
  } else {
    flaga = false;
    setSuccess(comments);
  }

  if (phoneNumberValue === "") {
    flaga = true;
    setError(phoneNumber, "Pole Numer telefonu nie może być puste");
  } else if (!phoneNumberRe.test(phoneNumberValue)) {
    flaga = false;
    setError(phoneNumber, "Wpisany numer telefonu nie jest prawidłowy");
  } else {
    flaga = false;
    setSuccess(phoneNumber);
  }

  // Date mamy w formacie yyyy-mm-dd, więc
  if (dateOfBirthValue === "") {
    flaga = true;
    setError(dateOfBirth, "Pole Data urodzenia nie może być puste");
  } else if (dateOfBirthValue.split("-")[0] > currentYear - 18) {
    flaga = false;
    setError(dateOfBirth, "Musisz mieć 18 lat, żeby wypełnić formularz");
  } else if (dateOfBirthValue.split("-")[0] < currentYear - 100) {
    flaga = false;
    setError(dateOfBirth, "Wprowadź prawidłową datę urodzenia!");
  } else {
    flaga = false;
    setSuccess(dateOfBirth);
  }

  if (peselValue === "") {
    flaga = true;
    setError(pesel, "Pole Pesel nie może być puste");
  } else if (!peselRe.test(peselValue)) {
    flaga = false;
    setError(pesel, "Wpisany pesel nie jest prawidłowy");
  } else {
    flaga = false;
    setSuccess(pesel);
  }

  if (indexValue === "") {
    flaga = true;
    setError(index, "Pole Kod pocztowy nie może być puste");
  } else if (!indexRe.test(indexValue)) {
    flaga = false;
    setError(index, "Wpisany kod pocztowy nie prawidłowy");
  } else {
    flaga = false;
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
