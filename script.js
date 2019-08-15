let form = document.forms["msg-sender-form"];

form.formCheckBtn.addEventListener("click", function () {
    event.preventDefault();

    if (validate(form)) {
        alert("OK!");
        form.reset();
    }
});

function validate(form) {

    let name = form.msgFrom;
    let password = form.password;
    let repassword = form.repassword;
    let body = form.msgBody;

    let nameError = document.getElementById("name-required");
    let passError = document.getElementById("pass-required");
    let repassError = document.getElementById("repass-required");
    let bodyError = document.getElementById("msg-body-required");

    removeError(name, nameError);
    removeError(password, passError);
    removeError(repassword, repassError);
    removeError(body, bodyError);

    let isValid = true;

    if (!name.value) {
        displayError(name, nameError);
        isValid = false;
    }
    if (!password.value) {
        displayError(password, passError);
        isValid = false;
    }
    if (password.value != repassword.value) {
        displayError(repassword, repassError);
        isValid = false;
    }
    if (!body.value) {
        displayError(body, bodyError);
        isValid = false;
    }

    return isValid;
}

function displayError(field, label) {
    field.classList.add("input-red-border");
    label.style.visibility = "visible";
}

function removeError(field, label) {
    field.classList.remove("input-red-border");
    label.style.visibility = "hidden";
}