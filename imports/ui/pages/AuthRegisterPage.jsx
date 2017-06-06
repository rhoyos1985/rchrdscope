import React from 'react';
import BaseComponent from '../components/BaseComponent.jsx';

export default class AuthRegisterPage extends BaseComponent {
	constructor(props) {
       super(props);
    }

	render(){
		return(
			<div className="authregister">
				<div className="">
					<h1>Join</h1>
					<h3>Joining allows you to make private lists</h3>
				</div>
				<form>
					<div className="form-group">
						<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}