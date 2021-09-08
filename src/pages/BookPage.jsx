import React from "react";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { getBook } from "../services/API";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap/";

const BookPage = () => {
	const history = useHistory();
	const { id } = useParams();

	const { data, error, isError, isLoading } = useQuery(["book", id], () => {
		return getBook(id);
	});

	return (
		<Container className="py-3">
			<h1>Book {id}</h1>

			{isLoading && <p className="my-3">Loading...</p>}

			{isError && (
				<Alert className="my-3">
					<strong>Error: </strong> {error.message}
				</Alert>
			)}

			{data && (
				<Table bordered>
					<tbody>
						<tr>
							<td>Title</td>
							<td>{data.title}</td>
						</tr>
						<tr>
							<td>Author</td>
							<td>{data.author}</td>
						</tr>
						<tr>
							<td>Published</td>
							<td>{data.published}</td>
						</tr>
						<tr>
							<td>Pages</td>
							<td>{data.pages}</td>
						</tr>
					</tbody>
				</Table>
			)}
			<div className="mt-5">
				<Button variant="secondary" onClick={history.goBack}>
					Go Back
				</Button>
			</div>
		</Container>
	);
};

export default BookPage;
