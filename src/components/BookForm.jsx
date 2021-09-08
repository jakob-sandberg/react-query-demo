import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const BookForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const onFormSubmit = (data) => {
		console.log("Got some data", data);
	};

	return (
		<Form onSubmit={handleSubmit(onFormSubmit)}>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					defaultValue="bananna"
					{...register("title")}
					placeholder="Enter book title"
				/>
				{errors.title && <p>This field is required</p>}
			</Form.Group>

			<Form.Group className="mb-3" controlId="author">
				<Form.Label>Author</Form.Label>
				<Form.Control
					type="text"
					defaultValue="John"
					{...register("author")}
					placeholder="Enter author"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="published">
				<Form.Label>Published</Form.Label>
				<Form.Control
					type="text"
					defaultValue="1999"
					{...register("published")}
					placeholder="Enter year the book was published"
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="pages">
				<Form.Label>Pages</Form.Label>
				<Form.Control
					type="number"
					min="0"
					defaultValue="123"
					{...register("pages")}
					placeholder="Enter the amount of pages the book contains"
				/>
			</Form.Group>
			<Button variant="success" type="submit">
				Submit
			</Button>
		</Form>
	);
};

export default BookForm;
