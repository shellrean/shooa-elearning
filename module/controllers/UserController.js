const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User.js");

class UserController
{
	/**
	 * Authentication system
	 * get authenticate
	 */
	async auth(req, res)
	{
		check("email", "Please enter a valid email").isEmail()
		check("password", "Please enter a valid password").isLength({
			min: 5
		});

		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).json({
				errors: errors.array()
			});
		}

		const { email, password } = req.body;
		try {
			let user = await User.findOne({
				email
			});
			if (!user) {
				return res.status(401).json({
					message: 'User not found'
				});
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.status(401).json({
					message: "incorrect password"
				});
			}

			const payload = {
				user : {
					id: user.id
				}
			}

			jwt.sign(
				payload,
				"secret",
				{
					expiresIn: 3600
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (e) {
			res.json({ messsage: 'Server error' });
		}
	}

	/**
	 * getting the user logged in 
	 */
	async authenticated(req, res)
	{
		try {
			const user = await User.findById(req.user.id).select('_id email name role status');
			res.json(user);
		} catch (e) {
			res.send({ message: "Error in fetching user" }).status(500);
		}
	}
}

module.exports = new UserController();