class LocalStorageComp {
	addUser(user) {
		const finalUser = JSON.stringify(user);
		localStorage.setItem('user', finalUser);
	}
	getUser() {
		const user = JSON.parse(localStorage.getItem('user'));
		return user;
	}
	clearStorage() {
		localStorage.clear();
	}
}

const nieco = new LocalStorageComp();
export default nieco;
