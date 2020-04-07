const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MatterSchema = new Schema({
	_subject: {
		type: Schema.ObjectId,
		ref: "Subject",
		required: true
	},
	_classroom: {
		type: Schema.ObjectId,
		ref: "Classroom",
		required: true
	},
	_teacher: {
		type: Schema.ObjectId,
		ref: "User",
		required: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	status: {
		type: String,
		enum: ['draft','active','publish']
	},
	createdDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Matter", MatterSchema);