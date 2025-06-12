export default {
	run() {
		if (!appsmith.store.isLoggedIn) {
			navigateTo("Login", {}, "SAME_WINDOW");
		}
	}
}
