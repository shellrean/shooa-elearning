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
			res.json({ message: 'Server error' }).status(500);
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
			res.json({ message: 'Server error' }).status(500);
		}
	}

	/**
	 *
	 */
	async show(req, res)
	{
		try {		
			const classroom = await Classroom.findById(req.params.id)
			.populate('_major _subjects').exec();

			res.json({ data: classroom });
		} catch (err) {
			res.json({ message: 'Server error'}).status(500);
		}
	}

	/**
	 *
	 */
	async update(req, res)
	{
		try {
			await Classroom.findByIdAndUpdate(req.params.id, req.body);

			res.json({ message: 'Classroom updated' });
		} catch (err) {
			res.json({ message: 'Server error:'+err.message }).status(500);
		}
	}

	/**
	 *
	 */
	async destroy(req, res)
	{
		try {
			await Classroom.findByIdAndRemove(req.params.id);

			res.json({ message: 'Classroom deleted' });
		} catch (err) {
			res.json({ message: 'Server error' }).status(500);
		}
	}
}

module.exports = new ClassroomController();