const Major = require('../models/Major');

class MajorController
{
	/** 
	 *
	 *
	 */
	async index(req, res)
	{
		try {
			const majors = await Major.find({});

			res.json({ data: majors });
		} catch (err) {
			res.status(500).json({ message: 'Server error' });
		}
	}
}

module.exports = new MajorController();