/**
 * Configuration data domain encapsulate all the configuration settings data
 * to be used in the application
 */
class ConfigurationData {
	// Connection string to MongoDB getter and setter
	get MongoDBUrl() {
		return this.mongoDBUrl;
	}
	set MongoDBUrl(url) {
		this.mongoDBUrl = url;
	}

	// node environment name getter and setter
	// usual 'development', 'staging', 'production'
	get NodeEnv() {
		return this.nodeEnv;
	}
	set NodeEnv(environment) {
		this.nodeEnv = environment;
	}

	get SecretKey() {
		return this.secretKey;
	}

	set SecretKey(key) {
		return this.secretKey = key;
	}

	// toString() print out all the configuration data in easy to read format
	toString() {
		const output = {
			MongoDBUrl : this.mongoDBUrl,
			NodeEnv : this.nodeEnv,
			SecretKey: this.secretKey
		};

		return JSON.stringify(output, null, 2);
	}
}

module.exports = ConfigurationData;