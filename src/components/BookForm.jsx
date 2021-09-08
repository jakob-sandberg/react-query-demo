import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

const BookForm = ({ onFormSubmit, defaultValues, isLoading }) => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({ defaultValues });

	return (
		<Form onSubmit={handleSubmit(onFormSubmit)}>
			<Form.Group className="mb-3" controlId="title">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					{...register("title")}
					placeholder="Enter book title"
				/>
				{errors.title && <p>This field is required</p>}
			</Form.Group>

			<Form.Group className="mb-3" controlId="author">
				<Form.Label>Author</Form.Label>
				<Form.Control
					type="text"
					{...register("author")}
					placeholder="Enter author"
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="published">
				<Form.Label>Published</Form.Label>
				<Form.Control
					type="text"
					{...register("published")}
					placeholder="Enter year the book was published"
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="pages">
				<Form.Label>Pages</Form.Label>
				<Form.Control
					type="number"
					min="0"
					{...register("pages")}
					placeholder="Enter the amount of pages the book contains"
				/>
			</Form.Group>
			<Button variant="success" type="submit" disabled={isLoading}>
				{isLoading ? "Submitting..." : "Submit"}
			</Button>
		</Form>
	);
};

export default BookForm;
