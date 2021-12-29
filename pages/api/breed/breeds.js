import axios from "axios";
require("dotenv").config();

export default function handler(req, res) {
	// get data from external api
	try {
		axios
			.get(`${process.env.API_URL}/v1/breeds`, {
				headers: {
					"x-api-key": process.env.API_KEY,
				},
			})
			.then(function (response) {
				res.status(200).json(response.data);
			})
			.catch(function (error) {
				res.status(500).json(error);
			});
	} catch (error) {
		res.status(500).json(error);
	}
}
