import axios from "axios";
require("dotenv").config();

export default function BreedHandler(req, res) {
	const {
		query: { id },
	} = req;
	axios
		.get(`${process.env.API_URL}/v1/images/search?breed_ids=${id}`, {
			headers: {
				"x-api-key": process.env.API_KEY,
			},
			params: {
				limit: 8,
			},
		})
		.then(function (response) {
			res.status(200).json(response.data);
		})
		.catch(function (error) {
			res.status(500).json(error);
		});
}
