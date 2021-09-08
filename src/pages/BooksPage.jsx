import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useQuery } from "react-query";
import BooksList from "../components/BooksList";
import { getBooks } from "../services/API";
import { Link } from "react-router-dom";

const BooksPage = () => {
	const { data, error, isError, isLoading } = useQuery(["books"], () => {
		return getBooks();
	});

	return (
		<Container className="py-3">
			<h1>Books</h1>

			{isLoading && <p className="my-3">Loading...</p>}

			{isError && (
				<Alert className="my-3">
					<strong>Error: </strong> {error.message}
				</Alert>
			)}

			<div className="d-flex justify-content-end">
				<Link
					to="/books/create"
					className="btn btn-success btn-sm mb-2"
				>
					Create new book
				</Link>
			</div>

			{data && <BooksList books={data} />}
		</Container>
	);
};

export default BooksPage;
