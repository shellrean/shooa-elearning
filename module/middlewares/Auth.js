const jwt = require("jsonwebtoken");

class Auth 
{
	/**
	 * Check is the user has authenticated
	 */
	isAuthenticated(req, res, next) {
		const token = req.headers['authorization'];
		if (!token) return res.status(401).json({ message: 'unauthorized' });

		try {
			const bearer = token.split(" ");
			const bearerToken = bearer[1];
			const decode = jwt.verify(bearerToken, "secret");
			req.user = decode.user;
			next();
		} catch (e) {
			res.status(401).send({ message: "unauthorized" });
		}
	}
}

module.exports = new Auth();