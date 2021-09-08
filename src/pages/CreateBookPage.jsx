import React from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap/";
import BookForm from "../components/BookForm";
import { useMutation } from "react-query";
import { createBook } from "../services/API";

const CreateBookPage = () => {
	const history = useHistory();
	const { mutateAsync, isLoading } = useMutation(createBook);

	const handleFormSubmit = async (data) => {
		console.log("Got me some data, sending to server", data);

		await mutateAsync(data);
		history.push("/books");
	};

	return (
		<Container className="py-3">
			<h1>Create Book</h1>

			<BookForm onFormSubmit={handleFormSubmit} isLoading={isLoading} />

			<div className="mt-5">
				<Button variant="secondary" onClick={history.goBack}>
					Go Back
				</Button>
			</div>
		</Container>
	);
};

export default CreateBookPage;
