/**
 * Environment variable class is reponsible for loading environment variables
 * from process and/or operating system so it is avaiable to be used in
 * this application
 */
const ConfigurationData = require('../domains/configuration-data');

class EnvironmentVariable {

	// load() is renponsible for loading configuration data
	load() {
		// By using the domain's configuration data object here
		// we reffered from the domain layer which doesn't break the dependency
		// rule of the clean architecture
		const configurationData = new ConfigurationData();

		// We are loading the configuration from the environtment variable
		configurationData.MongoDBUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/el2';
		configurationData.NodeEnv = process.env.NODE_ENV || 'development';
		configurationData.SecretKey = process.env.SECRET_KEY || 'secret';

		return configurationData;
	}
}

module.exports = EnvironmentVariable;