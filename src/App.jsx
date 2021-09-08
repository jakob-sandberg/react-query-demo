import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalFetchingSpinner from "./components/GlobalFetchingSpinner";
import HomePage from "./pages/HomePage";
import Navigation from "./pages/partials/Navigation";
import PageNotFound from "./pages/PageNotFound";
import BooksPage from "./pages/BooksPage";

function App() {
	return (
		<>
			<Navigation />

			<div id="App">
				<GlobalFetchingSpinner />

				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/books">
						<BooksPage />
					</Route>
					<Route>
						<PageNotFound />
					</Route>
				</Switch>
			</div>
		</>
	);
}

export default App;
