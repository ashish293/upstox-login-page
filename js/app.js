const passToggle = document.getElementById("togglePassword");
const password = document.getElementById("password");
passToggle.addEventListener("click", () => {
	const type = password.getAttribute("type") == "password" ? "text" : "password";
	password.setAttribute("type", type);
	passToggle.classList.toggle("fa-eye-slash");
	if (type == "password") {
		password.style = "letter-spacing:0.5rem";
	} else {
		password.style = "letter-spacing:normal";
	}
});
