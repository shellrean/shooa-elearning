const Subject = require('../models/Subject');

class SubjectController 
{
	/**
	 *
	 */
	async index(req, res)
	{
		try {
			let selector = {}
			if (req.query.name) {
				selector.name = {$regex : new RegExp(".*" + req.query.name + ".*", "i") }
			}
			const subjects = await Subject.find(selector);

			res.json({ data : subjects });
		} catch (err) {
			res.json({ message: 'Server error' }).status(500);
		}
	}

	/**
	 *
	 */
	async store(req, res)
	{
		try {
			let subject = new Subject(req.body);
			await subject.save();
			
			res.json({ message: 'subject created'});
		} catch (err) {
			res.json({ message: 'Server error' }).status(500);
		}
	}
}

module.exports = new SubjectController();