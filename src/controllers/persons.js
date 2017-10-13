import Person from '../models/Person';

export default class PersonController {
	/**
	 * 
	 * 
	 * @readonly
	 * @static
	 * @memberof PersonController
	 */
	static get create() {
		return (async (req, res) => {
			const person = await Person
				.query()
				.allowInsert('[pets, children.[pets, movies], movies, parent]')
				.insertGraph(req.body);
			console.log(person);
			res.send(person);
		});
	}

	static get path() {
		return (async (req, res) => {
			const person = await Person
				.query()
				.patchAndFetchById(req.params.id, req.body);
			res.send(person);
		});
	}
}