import PropTypes from 'prop-types';
import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import BaseComponent from '../components/BaseComponent.jsx';
import AppAdminContainer from '../containers/AppAdminContainer.jsx';

export default class AuthLoginPage extends BaseComponent {
	constructor(props) {
       super(props);
       this.state = Object.assign(this.state, { errors: {} });
       this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event){
    	event.preventDefault();

    	const email = this.email.value;
    	const password = this.password.value;
    	const errors = {};

    	if(!email){
    		errors.email = "Error email";
    	}
    	if(!password){
    		errors.password = "Error password";
    	}

    	this.setState({errors});
    	if(Object.keys(errors).length){
    		return;
    	}

		Meteor.loginWithPassword(email, password, (err) => {
			if (err) {
				this.setState({
					errors: { none: err.reason },
				});
			} else {
				this.context.router.history.push('/admin');
			}
		});
    	
    }

	render(){

		const { errors } = this.state;
    	const errorMessages = Object.keys(errors).map(key => errors[key]);
    	const errorClass = key => errors[key] && 'has-error';

		const content = (
			<div className="panel panel-default panel-pr">
				<div className="panel-heading panel-pr-title">Join</div>
				<div className="panel-body">
					<div className="caption">
						<h3>Joining allows you to make private lists</h3>
					</div>
					<form onSubmit={this.onSubmit}>
						<div className="errors">
							{errorMessages.map(msg => (
								<div className="list-item" key={msg}>{msg}</div>
							))}
						</div>
						<div className={`form-group form-group-pr ${errorClass('email')}`}>
							<input 	type="email" className="form-control form-control-pr" 
									name="email" ref={(c) => { this.email = c; }} placeholder="Email"/>
						</div>
						<div className={`form-group form-group-pr ${errorClass('password')}`}>
							<input 	type="password" className="form-control form-control-pr" name="password" 
									placeholder="Password" ref={(c) => { this.password = c; }} />
						</div>
						<button type="submit" className="btn btn-pr btn-primary">Save</button>
					</form>
				</div>
			</div>
		);

		return <AppAdminContainer content={content} />;
	}
}

AuthLoginPage.contextTypes = {
	router: PropTypes.object,
};