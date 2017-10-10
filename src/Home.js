import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'

const Home = ( {model} ) => {

	return (
		<div className="home">
		<div className="container">
			<header>
				<div className="container header">
					<div class="row">
						<div className="col-xs-12 text-center">
							<img src="image/gio.png" alt=""/>
						</div>
					</div>
				</div>
			</header>
			<div>
			<div className="col-md-6 col-xs-6">
				<NavLink to={"/signup"} className="btn btn-lyft btn-lg btn-block">
					Log in
				</NavLink>
			</div>
			<div className="col-md-6 col-xs-6">
				<NavLink to={"/signup"} className="btn botonPink btn-lg btn-block">
					Sign Up
				</NavLink>
			</div>
			</div>
		</div>
		</div>
	);
}

export default Home;