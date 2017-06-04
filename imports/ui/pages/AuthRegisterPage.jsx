import React from 'react';
import BaseComponent from '../components/BaseComponent.jsx';

export default class AuthRegisterPage extends BaseComponent {
	constructor(props) {
       super(props);
    }

	render(){
		return(
		<form>
			<div className="form-group">
				<label for="exampleInputEmail1">Email address</label>
				<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
			</div>
			<div className="form-group">
				<label for="exampleInputPassword1">Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
			</div>
			<div className="form-group">
				<label for="exampleInputPassword1">Confirm Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
			</div>
			<button type="submit" className="btn btn-default">Submit</button>
		</form>
		);
	}
}