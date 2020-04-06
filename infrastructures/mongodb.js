/**
 * MongoDB class is renponsible for connecting to API MongoDB
 */
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

class MongoDB {
	
	// we are injecting the configuration as part of the construction
	constructor(options) {
		this.configuration = options.ConfigurationData
	}

	// connect() is the starting poin of the mongoose connect
	async connect() {
		try {
			await mongoose.connect(this.configuration.MongoDBUrl, {
				useNewUrlParser: true,
				useUnifiedTopology: true
			});
			console.log('Connected to database');
		} catch (e) {
			console.log(e)
			throw e;
		}
	}
}

module.exports = MongoDB;