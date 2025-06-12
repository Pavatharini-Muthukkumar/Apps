export default {
	login() {
		const username = UsernameInput.text;
		const password = PasswordInput.text;

		if (username === "admin" && password === "1234") {
			storeValue("isLoggedIn", true);
			showAlert("Login successful!", "success");
			navigateTo("Home", {}, "SAME_WINDOW");
		} else {
			showAlert("Invalid username or password", "error");
		}
	}
}
