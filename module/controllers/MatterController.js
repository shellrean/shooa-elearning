const Matter = require('../models/Matter');

class MatterController
{
	/**
	 *
	 */
	async index(req, res)
	{
		try {
			let selector = {};
			if(req.params.name) {
				selector.name = {$regex : new RegExp(".*" + req.query.name +".*", "i") }
			}
			const matters = await Matter.find(selector)
			.select('_id title description content')
			.populate({
				path: '_subject',
			})
			.populate({
				path: '_classroom',
				select: 'name'
			})
			.populate({
				path: '_teacher',
				select: 'name'
			})
			.exec();

			res.json({ data: matters });
		} catch (err) {
			res.status(500).json({ message: 'Server error' +err.message });
		}
	}

	/**
	 *
	 */
	async store(req, res)
	{
		try {
			let matter = new Matter(req.body);
			await matter.save();

			res.json({message: 'matter created' });
		} catch (err) {
			res.status(500).json({ message: 'Server error'+ err.message });
		}
	}

	/**
	 *
	 */
	async show(req,res)
	{
		try {
			let matter = await Matter.findById(req.params.id)
			.populate({
				path: '_subject',
			})
			.populate({
				path: '_classroom',
				select: 'name'
			})
			.populate({
				path: '_teacher',
				select: 'name'
			})
			.exec();

			res.json({ data: matter });
		} catch (err) {
			res.status(500).json({ message: 'Server error' +err.message });
		}
	}

	/**
	 *
	 */
	async update(req, res)
	{
		try {
			await Matter.findByIdAndUpdate(req.params.id, req.body);

			res.json({message: 'matter updated' });
		} catch (err) {
			res.status(500).json({ message: 'Server error' + err.message });
		}
	}

	/*
	 *
	 */
	async destroy(req, res)
	{
		try {
			await Matter.findByIdAndRemove(req.params.id);

			res.json({ message: 'mater deleted' });
		} catch (err) {
			res.status(500).json({ message: 'Server error' + err.message });
		}
	}
}

module.exports = new MatterController();