$(document).ready(function () {
  $("#loading").fadeOut(2000, function () {
    $(document).css("overflow", "visible");
  });
});

let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userAge = document.getElementById("userAge");
let userNumber = document.getElementById("userNumber");
let userPassword = document.getElementById("userPassword");
let rePassword = document.getElementById("rePassword");
let inputs = document.getElementsByTagName("input");
let submitBtn = document.getElementById("submitBtn");

let nameRejex = /^[a-zA-Z]{2,12}$/;
let emailRejex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let ageRejex = /^\S[0-9]{0,3}$/;
let phoneRejex = /^01\d{9}$/;

userName.onkeyup = function () {
  if (nameRejex.test(userName.value) == false) {
    nameError.classList.remove("d-none");
  } else {
    nameError.classList.add("d-none");
  }
};

userEmail.onkeyup = function () {
  if (emailRejex.test(userEmail.value) == false) {
    emailError.classList.remove("d-none");
  } else {
    emailError.classList.add("d-none");
  }
};

userAge.onkeyup = function () {
  if (ageRejex.test(userAge.value) == false) {
    ageError.classList.remove("d-none");
  } else {
    ageError.classList.add("d-none");
  }
};

userNumber.onkeyup = function () {
  if (phoneRejex.test(userNumber.value) == false) {
    phoneError.classList.remove("d-none");
  } else {
    phoneError.classList.add("d-none");
  }
};

rePassword.onkeyup = function () {
  if (rePassword.value != userPassword.value) {
    rePasswordError.classList.remove("d-none");
  } else {
    rePasswordError.classList.add("d-none");
  }
};

/*--------------------------------------------------------------------------------- */
// inputs.onkeyup = function () {
//   if (
//     nameRejex.test(userName.value) == true &&
//     emailRejex.test(userEmail.value) == true &&
//     ageRejex.test(userAge.value) == true &&
//     phoneRejex.test(userNumber.value) == true &&
//     userPassword.value === rePassword.value
//   ) {
//     // submitBtn.classList.remove("disabled");
//     console.log("all good");
//   } else {
//     // submitBtn.classList.add("disabled");
//     console.log("all bad");
//   }
// };
// /*--------------------------------------------------------------------------------- */
function submit() {
  if (
    nameRejex.test(userName.value) == true &&
    emailRejex.test(userEmail.value) == true &&
    ageRejex.test(userAge.value) == true &&
    phoneRejex.test(userNumber.value) == true &&
    userPassword.value === rePassword.value
  ) {
    submitBtn.classList.remove("disabled");
  } else {
    submitBtn.classList.add("disabled");
  }
}
