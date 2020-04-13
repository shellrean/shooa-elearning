/**
 * Express server class is renposible for serving the API using
 * the Express web framework
 */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const routes = require('../module/routes/api-V1');

class ExpressServer {
	
	// we are injecting the interface as part of the constructor
	constructor(options) {
		this.webserverInterface = options.WebServerInterface;
	}

	// start() is the starting poin of the web server
	start() {
		app.use(bodyParser.json());
		app.use(cors());
		app.get('/', (req, res) => {
			res.type('application/json');

			// we are getting the current API number via the interface we injected
			// from the constructor
			res.status(200).send(this.webserverInterface.displayApiVersion());
		});

		app.use('/api/v1/', routes);

		app.listen(3000, () => {
			console.log('Server running on port 3000');
		});
	}
}

module.exports = ExpressServer;