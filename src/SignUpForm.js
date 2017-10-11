
import React, {Component} from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom'
import './SignUpForm.css';



class SignUpForm extends Component {

	constructor (props) {
		super (props);
		this.state = {
			goFordward : false, 
			validation : false,
			next : false
		}
	}

	render () {
		const {model} = this.props;
		console.log('SignUpForm');

		const onInputChange = (e) => {
			this.setState ({
				goFordward: e.target.checked
			});
		}

		const validations = () => {
			this.setState({
				validation : true
			});
			if (model.name === '' && model.lastname === '' && model.email === '' && !(/\S+@\S+\.\S+/.test(model.email))){
				this.setState({
					next: false
				});
			}else{
				this.setState({
					next: true
				});
			}
		}

		return (
			<div>
				<header>
					<div className="container">
						<div className="row">
							<div className="col-xs-3 text-center icono">
								<NavLink to="/signup" className="col-xs-3 text-center icono">
									<a><i className="glyphicon glyphicon-menu-left"></i></a> 
								</NavLink>
							</div>
							<div className="col-xs-9 text-center"> 
								<h3>Sign up</h3><br/>
								<small>Join now for free ride credit</small>
								<hr/>
							</div>
						</div>
					</div>
					
				</header>
				
				<section className="form">
				<div className="row">
                <div className="col-xs-12">
                    <div className="inner container">
                        <input className="form-control" defaultValue='' onchange={e => model.name = e.target.value}  id="name" type="text" placeholder="First name"/>
                        <i className="glyphicon glyphicon-user"></i>
                    </div>
                    {model.nombre === '' && this.state.validacion && <p className="error">Please enter a name</p>}
                    <br/>
					<div className="inner  container">
                        <input className="form-control" onkeyup="" onchange="" id="lastname" type="text" placeholder="Last name"/>
                        <i className="glyphicon glyphicon-user"></i>
                    </div>
                    <div id="mensajeName"></div>
                    <br/>
                    <div className="inner  container">
                        <input className="form-control" onkeyup=""
                        onchange="" id="email" type="text" placeholder="Email"/>
                         <i className="glyphicon glyphicon-envelope"></i>
                    </div>
                    <div id="mensajeEmail"></div>
				</div>
				</div>
				<br/>
				<center>
				<label className="form-check-label ">
					<input className="form-check-input text-center" id="agreeUser" type="checkbox" onChange={onInputChange}/>
						I agree to Lyft's <a href="lyft.com"> Terms of Service</a>
				</label>
				</center>
					{
						this.state.goFordward ?
							<NavLink
								to={"/lyftmap"}
								className="btn btn-lg btn-block btn-lyft">Next</NavLink>
							:
							<button
								className="btn btn-lg btn-block btn-lyft disabled">Next</button>

					}

				</section>
			</div>

		);
	}
}

export default SignUpForm;