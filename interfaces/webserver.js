/**
 * Webserver interface is a gateway between usecases and web server detail
 * implementation
 */
class WebServer {
	// constructor()
	// We are injecting the interactors as part of the constrctor
	constructor(options) {
		this.versionInteractor = options.VersionInteractor;
	}

	// displayApiVersion() show th current API version
	displayApiVersion() {
		return this.versionInteractor.display();
	}
}

module.exports = WebServer;