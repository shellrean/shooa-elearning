/**
 * Configuration usecase is a business logic of configuration
 */
class Configuration {
	// Constructor
	// We are injecting the configuration interface as part of the constructor
	constructor(options) {
		this.configurationInterface = options.ConfigurationInterface;
	}

	// load9) is responsible for loading configuration data
	load() {
		// We are loading the configuration using the interface
		return this.configurationInterface.load();
	}
}

module.exports = Configuration;