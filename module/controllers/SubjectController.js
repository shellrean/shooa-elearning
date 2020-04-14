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
			res.status(500).json({ message: 'Server error' });
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
			res.status(500).json({ message: 'Server error' });
		}
	}

	/**
	 *
	 */
	async show(req, res)
	{
		try {
			let subject = await Subject.findById(req.params.id);
			res.json({ data: subject });
		} catch (err) {
			res.status(500).json({ message: 'Server error' });
		}
	}

	/**
	 *
	 */
	async update(req, res)
	{
		try {
			await Subject.findByIdAndUpdate(req.params.id, req.body);
			res.json({ message: 'subject updated' });
		} catch (err) {
			res.status(500).json({ message: 'Server error' });
		}
	}

	/**
	 *
	 */
	async destroy(req, res)
	{
		try {
			await Subject.findByIdAndRemove(req.params.id);
			res.json({ message: 'subject removed' });
		} catch (err) {
			res.status(500).json({ message: 'Server error' });
		}
	}
}

module.exports = new SubjectController();