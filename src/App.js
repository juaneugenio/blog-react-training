/** @format */

import Home from "./Home";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
	return (
		<Router>
			<div className="App">
				<NavBar />
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/create">
							<Create />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
