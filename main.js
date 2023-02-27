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
    let pwOne = e.formData.get("password");
    let pwTwo = e.formData.get("confirmpassword");
    if (pwOne !== pwTwo) {
        alertText.textContent = "Passwords do not match.";
        highlightPw();
    } else if (pwOne.length < 6 || pwTwo.length < 6)
        alertText.textContent = "Password must be at least 6 symbols long.";
    highlightPw();
});

function checkMatch(e) {
    const formData = new FormData(document.querySelector(".form"));
    e.preventDefault();
}

function highlightPw() {
    passOne.style.borderColor = "red";
    passTwo.style.borderColor = "red";
    alertText.style.display = "block";
}

//make alert frame go away on good input
//maybe make good notification if inputs are right
//implement alert frames for all the other elements
//fix the css on alert text
