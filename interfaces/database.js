/**
 * Database interface is a gateway between an application and
 * database related actions
 */
class Database {
	constructor(options) {
		this.databaseAdapter = options.DatabaseAdapter;
	}
}

module.exports = Database;