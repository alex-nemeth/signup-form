const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", checkMatch);

const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");

const email = document.querySelector(".email");

const passOne = document.querySelector(".password");
const passTwo = document.querySelector(".confirmpassword");

const nameAlert = document.querySelector("#namealert");
const mailAlert = document.querySelector("#emailalert");
const pwAlert = document.querySelector("#pwalert");

document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    new FormData(document.querySelector(".form"));
});

document.querySelector(".form").addEventListener("formdata", (e) => {
    let fName = e.formData.get("firstname");
    let lName = e.formData.get("lastname");
    let mail = e.formData.get("email");
    let pwOne = e.formData.get("password");
    let pwTwo = e.formData.get("confirmpassword");
    pwCheck(pwOne, pwTwo);
    nameCheck(fName, lName);
    emailCheck(mail);
});

function checkMatch(e) {
    const formData = new FormData(document.querySelector(".form"));
    e.preventDefault();
}

function nameCheck(fName, lName) {
    if (fName.length === 0 || lName.length === 0) {
        nameAlert.textContent = "Please fill out your name.";
        highlight(firstName, lastName, nameAlert);
    } else {
        nameAlert.textContent = "";
        hideHighlight(firstName, lastName);
    }
}

function emailCheck(mail) {
    if (!mail.includes("@")) {
        mailAlert.textContent = "Please provide a real e-mail address.";
        highlight(email, email, mailAlert);
    } else {
        mailAlert.textContent = "";
        hideHighlight(email, email);
    }
}

function pwCheck(pwOne, pwTwo) {
    if (pwOne !== pwTwo) {
        pwAlert.textContent = "Passwords do not match.";
        highlight(passOne, passTwo, pwAlert);
    } else if (pwOne.length < 6 || pwTwo.length < 6) {
        pwAlert.textContent = "Password must be at least 6 symbols long.";
        highlight(passOne, passTwo, pwAlert);
    } else {
        pwAlert.textContent = "";
        hideHighlight(passOne, passTwo);
    }
}

function highlight(elementOne, elementTwo, alertText) {
    elementOne.style.borderColor = "red";
    elementTwo.style.borderColor = "red";
    alertText.style.display = "block";
}

function hideHighlight(elementOne, elementTwo) {
    elementOne.style.borderColor = "rgb(37, 37, 37)";
    elementTwo.style.border = "rgb(37, 37, 37)";
}

//maybe make good notification if inputs are right
//fix the css on alert text
