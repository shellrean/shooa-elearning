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
				return res.json({
					status: 'error'
				});
			}

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) {
				return res.json({
					status: 'error'
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
					expiresIn: 72000
				},
				(err, token) => {
					if (err) throw err;
					res.json({ status: 'success', token });
				}
			);
		} catch (e) {
			res.json({ messsage: 'Server error' }).status(500);
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