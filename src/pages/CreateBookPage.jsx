import React from "react";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";

import { Button } from "react-bootstrap/";
import BookForm from "../components/BookForm";
const CreateBookPage = () => {
	const history = useHistory();

	return (
		<Container className="py-3">
			<h1>Create Book</h1>

			<BookForm />

			<div className="mt-5">
				<Button variant="secondary" onClick={history.goBack}>
					Go Back
				</Button>
			</div>
		</Container>
	);
};

export default CreateBookPage;
