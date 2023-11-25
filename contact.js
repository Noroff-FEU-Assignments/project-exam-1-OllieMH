const form = document.querySelector(".contactform");
const mail = document.querySelector("#mail");
const mailError = document.querySelector("#mailError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const fName = document.querySelector("#name");
const fNameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const btn = document.querySelector("button");
const confirmation = document.querySelector(".confirmation");
btn.disabled = true;

function validateForm() {
	if (validateEmail(mail.value) && checkLength(message.value, 24) && checkLength(subject.value, 14) && checkLength(fName.value, 4)) {
		btn.disabled = false;
	} else {
		confirmation.innerHTML = "";
		btn.disabled = true;
	}
	if (validateEmail(mail.value) === true) {
		mailError.style.display = "none";
	} else {
		mailError.style.display = "block";
	}
	if (checkLength(message.value, 24) === true) {
		messageError.style.display = "none";
	} else {
		messageError.style.display = "block";
	}
	if (checkLength(subject.value, 14) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
	}
	if (checkLength(fName.value, 4) === true) {
		fNameError.style.display = "none";
	} else {
		fNameError.style.display = "block";
	}
}

mail.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);
fName.addEventListener("keyup", validateForm);
subject.addEventListener("keyup", validateForm);

function submitForm(event) {
	event.preventDefault();
	confirmation.innerHTML = `Form has been submitted!`;
}

btn.addEventListener("click", submitForm);

function checkLength(value, len) {
	if (value.trim().length > len) {
		return true;
	} else {
		return false;
	}
}

function validateEmail(mail) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(mail);
	return patternMatches;
}
