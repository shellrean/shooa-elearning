/**
 * User usecase is a business logic of user
 */
const UserDomain = require('../domains/user');

class User {
	constructor(options) {
		this.configurationData = options.configurationData;
		this.authenticationInterface = options.AuthenticationInterface;
		this.databaseInterface = options.DatabaseInterface;
	}

	// Get number of second until token is expired
	// this. is will used in the expiresIn options
	// when the JWT token
	expiresOneYearFromNow() {
		const now = new Date();
		const nowInMiliseconds = now.getTime();

		const nextYearInMilliseconds = new Date(
			new Date().setFullYear(now.getFullYear() + 1)).getTime();
		return (nextYearInMilliseconds - nowInMiliseconds) / 1000;
	}
}

module.exports = User;