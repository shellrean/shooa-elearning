/**
 * JSON Web Token class is responsible for creating the JSON Web Token
 */
const jwt = require('jsonwebtoken');

class JsonWebToken {

	// generate() created new token
	// options parameter contains the following
	// > tokenPayload
	// > secret
	// > expiration
	static generate(options) {
		const tokenOptionalInfo = {
			algorithm: 'HS256',
			expiresIn: options.expiration
		}

		return jwt.sign(
			options.tokenPayload,
			options.secret,
			tokenOptionalInfo
			)
	}
}

module.exports = JsonWebToken;