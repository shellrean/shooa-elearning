const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const major = require("./Major");

const ClassroomSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	grade: {
		type: String,
		required: true
	},
	_major: {
		type: Schema.ObjectId,
		ref: 'Major',
		required: true
	},
	_subjects: [{
		type: Schema.ObjectId,
		ref: 'Subject'
	}]
})

module.exports = mongoose.model('Classroom', ClassroomSchema);