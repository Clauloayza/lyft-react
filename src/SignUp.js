import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'


const SignUp = ({model}) => {
	return (
		<div className= "container">
			<header>
			<div className=" header">
				<div className="row">
					<div className="col-xs-3 text-center icono">
						<a href="index.html"><i className="glyphicon glyphicon-menu-left"></i></a> 
					</div>
					<div className="col-xs-9 text-center"> 
						<h3>Sign up</h3><br/>
						<h5>Join now for free ride credit</h5>
						<hr/>
					</div>
				</div>
			</div>
		</header>
            <div className="">
            <div className="row">
                <div className="col-lg-6">
                <div className="input-group">
                  <div className="input-group-btn">
                    <a href="paises.html" type="button" className="btn btn-default dropdown-toggle" >
                        <img className="img-responsive peru" id="peruFlag" src="image/peru.png" alt=""/> 
                        <span className="caret"></span>
                    </a>
                  </div>
                  <span classna="code"><strong>+<strong id="codeNumber">51</strong></strong></span>
                  <input id="number" className="form-control" aria-label="..." placeholder="1122334455"/>
                </div>
                <br/>
                <div classna="text-center"><h5>We'll send a text to verify your phone</h5></div>
                
                </div>
            </div>
        </div>
			<NavLink to={"/signup-form"}
			         className="btn btn-lyft btn-lg btn-block">
				Next
			</NavLink>
		</div>
	);
}

export default SignUp;