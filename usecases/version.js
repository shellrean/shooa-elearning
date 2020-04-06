/**
 * Version usecase is business logic of version
 */
const VersionDomain = require('../domains/version');

class Version {
	// diplay method show the crrent version of this application
	display() {
		return VersionDomain.toString();
	}
}

module.exports = Version;