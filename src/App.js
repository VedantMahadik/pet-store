import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/pages/Home";
import Pet from "./components/pages/Pet";
import PetStore from "./components/pages/PetStore";
import SignUp from "./components/pages/SignUp";
import Dog from "./components/Dog/Dog";
import Cat from "./components/Cat/Cat";

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<Route path="/pet_store" exact component={Home} />
					<Route path="/pet" exact component={Pet} />
					<Route path="/pet/dog" component={Dog} />
					<Route path="/pet/cat" component={Cat} />
					<Route path="/petStore" component={PetStore} />
					<Route path="/sign-up" component={SignUp} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
