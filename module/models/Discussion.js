const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema({
	_parent: {
		type: Schema.ObjectId,
		ref: 'Discussion'
	},
	_matter: {
		type: Schema.ObjectId,
		ref: 'Matter'
	},
	_user: {
		type: Schema.ObjectId,
		ref: 'User',
		required: true
	},
	content: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Discussion', DiscussionSchema);