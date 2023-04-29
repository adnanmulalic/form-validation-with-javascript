const userName = document.querySelector("#user_name");
const email = document.querySelector("#email");
const country = document.querySelector("#country");
const zipCode = document.querySelector("#zip_code");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const submitButton = document.querySelector("form > button");

userName.addEventListener("input", ()=> {
    if (userName.validity.valid) {
        document.querySelector("#user_name + span.error").textContent = "";
    } else {
        if (userName.validity.tooShort) {
            document.querySelector("#user_name + span.error").textContent = "Username must be between 3 and 12 characters.";
        } else if (userName.validity.valueMissing) {
            document.querySelector("#user_name + span.error").textContent = "You must enter username";
        }
    }
});

email.addEventListener("input", ()=> {
    if (email.validity.valid) {
        document.querySelector("#email + span.error").textContent = "";
    } else {
        if (email.validity.typeMismatch) {
            document.querySelector("#email + span.error").textContent = "Must be valid email";
        } else if (email.validity.valueMissing) {
            document.querySelector("#email + span.error").textContent = "You must enter email";
        }
    }
});

country.addEventListener("input", ()=> {
    if (country.validity.valid) {
        document.querySelector("#country + span.error").textContent = "";
    } else {
        if (country.validity.tooShort){
            document.querySelector("#country + span.error").textContent = "Country name lengt must be at least 4 characters";
        } else if (country.validity.valueMissing) {
            document.querySelector("#country + span.error").textContent = "You must enter country name";
        }
    }
});

zipCode.addEventListener("input", ()=> {
    if (zipCode.validity.valid) {
        document.querySelector("#zip_code + span.error").textContent = "";
    } else {
        if (zipCode.validity.patternMismatch) {
            document.querySelector("#zip_code + span.error").textContent = "Zip code must be 5 digits (between 00001-99950";
        } else if (zipCode.validity.valueMissing){
            document.querySelector("#zip_code + span.error").textContent = "You must enter 5-digit zip code (between 00001-99950)";
        }
    }
});

password.addEventListener("input", ()=> {
    if (password.validity.valid && password.value === confirmPassword.value) {
        document.querySelector("#password + span.error").textContent = "";
        document.querySelector("#confirm_password + span.error").textContent = "";
        confirmPassword.setCustomValidity("");
    } else if (password.validity.valid && password.value != confirmPassword.value){
        document.querySelector("#password + span.error").textContent = "";
        document.querySelector("#confirm_password + span.error").textContent = "Passwords do not match";
        confirmPassword.setCustomValidity("Passwords do not match");
    }
     else {
        if (password.validity.tooShort) {
            document.querySelector("#password + span.error").textContent = "Passsword must be at least 6 characters long";
            confirmPassword.setCustomValidity("Passwords do not match");
        }
        else if (password.validity.valueMissing) {
            document.querySelector("#password + span.error").textContent = "You must enter valid password"
            confirmPassword.setCustomValidity("Passwords do not match");
        }
        else if (password.value != confirmPassword.value) {
            document.querySelector("#confirm_password + span.error").textContent = "Passwords do not match"
            confirmPassword.setCustomValidity("Passwords do not match");
        }
    }
})

confirmPassword.addEventListener("input", ()=> {
    if (password.value === confirmPassword.value) {
        document.querySelector("#confirm_password + span.error").textContent = "";
        document.querySelector("#password + span.error").textContent = "";
        confirmPassword.setCustomValidity("");
    } else {
        }  if (confirmPassword.value != password.value) {
            document.querySelector("#confirm_password + span.error").textContent = "Passwords do not match"
            confirmPassword.setCustomValidity("Passwords do not match");
        } else  {
            document.querySelector("#confirm_password + span.error").textContent = "";
        }
})

submitButton.addEventListener("click", ()=> {
    if(document.querySelector("form").checkValidity()){
        let message = document.createElement("p");
        message.textContent = "All fields are valid";
        message.style.color = "white"; message.style.backgroundColor = "green"
        document.body.appendChild(message);
    };
})