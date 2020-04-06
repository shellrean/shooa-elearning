const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
	email: {
		type: String,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
	},
	role: {
		type: String, 
		enum: ['admin','teacher','student']
	},
	status: {
		type: String,
		enum: ['active','banned']
	}
});

UserSchema.pre('save', function (next) {
	const user = this;
	bcrypt.hash(user.password, null, null, function (err, hash) {
		if (err) return next(err);
		user.password = hash;
		next();
	})
})

module.exports = mongoose.model('User', UserSchema);