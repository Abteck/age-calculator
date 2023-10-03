const form = document.getElementById("form");
const button = document.getElementById("button");
const image = document.getElementById("image");

// error and success sounds
const errorSound = new Audio("./sounds/assets_sounds_error.mp3");
const pingSound = new Audio("./sounds/assets_sounds_ping.mp3");

const playSound = (sound) => {
  sound.play();
};

// inputs
const dayInp = document.getElementById("day-inp");
const monthInp = document.getElementById("month-inp");
const yearInp = document.getElementById("year-inp");

// output
const dayOut = document.getElementById("day-out");
const monthOut = document.getElementById("month-out");
const yearOut = document.getElementById("year-out");

form.addEventListener("submit", calculateAge);

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;

  // using for each to iterate over all inputs to show error
  inputs.forEach((i) => {
    const parent = i.parentElement;

    //  WHEN ANY FIELD IS EMPTY UPON FORM SUBMITTION
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerHTML = "This field is required";
      parent.querySelector("label").classList.add("error");
      playSound(errorSound);
      validator = false;

      // 1-12 WHEN THE MONTH NUMBER IS NOT BETWEEN 1-12
    } else if (monthInp.value > 12 || monthInp.value < 1) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerHTML =
        "must be a valid month";
      monthInp.parentElement.querySelector("label").classList.add("error");
      playSound(errorSound);
      validator = false;

      // WHEN THE DAY NUMBER IS NOT BETWEEN 1-31
    } else if (dayInp.value > 31 || dayInp.value == 0) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerHTML =
        "must be a valid day";
      dayInp.parentElement.querySelector("label").classList.add("error");
      playSound(errorSound);
      validator = false;

      // WHEN THE YEAR IS IN THE FUTURE
    } else if (yearInp.value > year) {
      yearInp.style.borderColor = "red";
      yearInp.parentElement.querySelector("small").innerHTML =
        "must be in the past";
      yearInp.parentElement.querySelector("label").classList.add("error");
      playSound(errorSound);
      validator = false;

      // WHEN THE DATE IS INVALID e.g 31/04/1991 (There are 30 days in April)
    } else if (
      (monthInp.value == 2 ||
        monthInp.value == 4 ||
        monthInp.value == 6 ||
        monthInp.value == 9 ||
        monthInp.value == 11) &&
      dayInp.value == 31
    ) {
      i.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerHTML =
        "not a valid date";
      parent.querySelector("label").classList.add("error");
      playSound(errorSound);
      validator = false;
    }

    // when everything is entered correctly
    else {
      i.style.borderColor = "";
      parent.querySelector("small").innerHTML = "";
      parent.querySelector("label").classList.remove("error");
      playSound(pingSound);
      validator = true;
    }
  });
  return validator;
}

// run the below function to calculate age, if validate(above) exist
function calculateAge(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOut.innerHTML = d;
    monthOut.innerHTML = m;
    yearOut.innerHTML = y;
  }
}
