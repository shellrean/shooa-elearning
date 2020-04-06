const Classroom = require('../models/Classroom');

class ClassroomController
{
	/**
	 * get all classroom
	 */
	async index(req, res)
	{
		try {
			let selector = {}
			if (req.query.name) {
				selector.name = {$regex : new RegExp(".*" + req.query.name + ".*", "i") }
			}
			const classrooms = await Classroom.find(selector)
			.select('_id, name')
			.populate('_major _subjects')
			.exec();

			res.json({ data: classrooms });	
		} catch (err) {
			res.json({ message: err.message }).status(500);
		}
	}

	/**
	 *
	 */
	async store(req, res)
	{
		try {
			const classroom = new Classroom(req.body);
			await classroom.save();

			res.json({ message: 'Classroom created' });
		} catch (err) {
			res.json({ message: err.message }).status(500);
		}
	}

	/**
	 *
	 */
	async show()
	{

	}

	/**
	 *
	 */
	async update()
	{

	}

	/**
	 *
	 */
	async destory()
	{

	}
}

module.exports = new ClassroomController();