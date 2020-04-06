/**
 * server.js is a starting point
 */
const EnvironmentVariables = require('./infrastructures/environment-variables');
const ExpressWebServer = require('./infrastructures/express-server');
const JsonWebToken = require('./infrastructures/json-web-token');
const MongoDB = require('./infrastructures/mongodb');
const UniqueId = require('./infrastructures/unique-id');

const AuthenticationInterface = require('./interfaces/authentication');
const ConfigurationInterface = require('./interfaces/configuration');
const DatabaseInterface = require('./interfaces/database');
const WebServerInterface = require('./interfaces/webserver');
 
const ConfigurationInteractor = require('./usecases/configuration');
const VersionInteractor = require('./usecases/version');
const UserInteractor = require('./usecases/user');

const environmentVariable = new EnvironmentVariables();
const configurationInterface = new ConfigurationInterface({
	ConfigurationAdapter: environmentVariable
});

const configurationInteractor = new ConfigurationInteractor({
	ConfigurationInterface : configurationInterface
});

const configurationData = configurationInteractor.load();

const mongoDB = new MongoDB({
	ConfigurationData: configurationData
});

mongoDB.connect();

const versionInteractor = new VersionInteractor();
const webServerInterface = new WebServerInterface({
	VersionInteractor: versionInteractor
});

const expressWebServer = new ExpressWebServer({
	WebServerInterface: webServerInterface
});


expressWebServer.start();