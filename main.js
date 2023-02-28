const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", checkMatch);

const passOne = document.querySelector(".password");
const passTwo = document.querySelector(".confirmpassword");

const alertText = document.querySelector(".alert");

document.querySelector(".form").addEventListener("submit", (e) => {
    // on form submission, prevent default
    e.preventDefault();

    // construct a FormData object, which fires the formdata event
    new FormData(document.querySelector(".form"));
});

document.querySelector(".form").addEventListener("formdata", (e) => {
    let fName = e.formData.get("firstname");
    let lName = e.formData.get("lastname");
    let email = e.formData.get("email");
    let pwOne = e.formData.get("password");
    let pwTwo = e.formData.get("confirmpassword");
    pwCheck(pwOne, pwTwo);
});

function checkMatch(e) {
    const formData = new FormData(document.querySelector(".form"));
    e.preventDefault();
}

function pwCheck(pwOne, pwTwo) {
    if (pwOne !== pwTwo) {
        alertText.textContent = "Passwords do not match.";
        highlightPw();
    } else if (pwOne.length < 6 || pwTwo.length < 6) {
        alertText.textContent = "Password must be at least 6 symbols long.";
        highlightPw();
    } else {
        alertText.textContent = "";
        hideHighlight();
    }
}

function nameCheck(fName, lName) {
    if (fName.length === 0 || lName.length === 0) {
    }
}

function highlightPw() {
    passOne.style.borderColor = "red";
    passTwo.style.borderColor = "red";
    alertText.style.display = "block";
}

function hideHighlight() {
    passOne.style.borderColor = "rgb(37, 37, 37)";
    passTwo.style.border = "rgb(37, 37, 37)";
}

//make alert frame go away on good input
//maybe make good notification if inputs are right
//implement alert frames for all the other elements
//fix the css on alert text
