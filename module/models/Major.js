const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MajorSchema = new Schema({
	name: {
		type: String
	}
});

module.exports = mongoose.model('Major', MajorSchema);