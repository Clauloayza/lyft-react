import React, { Component } from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
import './SignUp.css';



class SignUp extends Component {
	constructor(props) {	
	  super(props);
	 this.phone =[];
	 this.phone= undefined;
	   this.state = {
		goFordward: false
	  };
	}
	  
	render() {
	  const { model } = this.props;
  
	  const onInputChange = e => {
		this.setState({
		  goFordward: e.target.checked
		});
	  };
  
	  return (
		  <div>
			  <section className="container form text-center">
				  <header>
					  <div className="col-xs-3 text-center icono" >
						  <NavLink to="/signup-validation" className="col-xs-3 text-center icono">
						  	<a href="index.html"><i className="glyphicon glyphicon-menu-left"></i></a> 
						  </NavLink>
					  </div>
					  <div className="col-xs-9 text-center"> 
						<h3>Sign up</h3><br/>
						<h5>Join now for free ride credit</h5>
						<hr/>
				  	  </div>
				  </header>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
					<br/>
				  <div className="text-center">
					<div className="row">
						<div className="col-lg-12 col-xs-12">
							<div className="input-group">
								<div className="input-group-btn">
									<a href="paises.html" type="button" className="btn btn-default dropdown-toggle" >
										<img className="img-responsive peru" id="peruFlag" src="image/peru.png" alt=""/> 
										<span className="caret"></span>
									</a>
								</div>
								<span className="code"><strong>+<strong id="codeNumber">51</strong></strong></span>
								<input onChange={e => {
											this.name = e.target.value;
											}} 
								id="number" type="text" className="form-control" aria-label="..." placeholder="1122334455"/>
							</div>
							<br/>
							<div className="text-center"><h5>We'll send a text to verify your phone</h5></div>
						</div>
					</div>
					{
						this.state.goFordward 
						? 
						  <NavLink 
							to = "/signup-form"    
							className="btn btn-lg-12 btnNext btn-lyft " 
						  >
						  Next
						  </NavLink>
						:
						  <button 
							className="btn btn-lg-12 btnNext btn-lyft anable" type="submit"
							>
							Next
						  </button>
					  }
				</div>
            </section>
		  </div>
	  );
	 
	}
  }
 export default SignUp;