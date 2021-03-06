/**
 * API service
 *
 */

import axios from "axios";
import li from "li";

axios.defaults.baseURL = "http://localhost:4000";

const get = async (endpoint) => {
	const response = await axios.get(endpoint);

	//return content
	return response.data;
};

const post = async (endpoint, data) => {
	const response = await axios.post(endpoint, data);

	return response.data;
};

// Get all books
export const getBooks = async () => {
	return await get(`/books`);
};

// Get a single book with id
export const getBook = async (id) => {
	return await get(`/books/${id}`);
};

export const createBook = async (data) => {
	return await post(`/books`, data);
};
