/**
 * Unique Id class is responsible for generating a universally unique indentifier
 */
const uuidV4 = require('uuid/v4');

class UniqueId {

	// generate() creates a new Universally unique identifier
	static generate() {
		// Generate a v4 UUID (random
		return uuidV4();
	}
}

module.exports = UniqueId;