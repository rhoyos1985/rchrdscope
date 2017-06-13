import PropTypes from 'prop-types';
import React from 'react';

//import { Categories } from '../../api/postscategories/categories.js';
import BaseComponent from '../components/BaseComponent.jsx';
import AppAdminContainer from '../containers/AppAdminContainer.jsx';
import { insert } from '../../api/postscategories/methods.js';

export default class CategoriesPage extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = Object.assign(this.state, { errors: {} });
		this.onSubmit = this.onSubmit.bind(this);
		this.onError = this.onError.bind(this);
		this.onCancel= this.onCancel.bind(this);
	}

	onError(err){
		this.setState({
			errors: { none: err.error },
		});
	}

	onCancel(){
		this.text.value = '';
	}

	onSubmit(event) {
		event.preventDefault();

		const text = this.text.value;
		const errors = {};

		if(!text){
			errors.text = "Text empty";
		}
		
		this.setState({errors});
		if(Object.keys(errors).length){
			return;
		}

		const listcategorieId = insert.call({ text }, (err) => {
			if (err) {
				this.onError(err);
			}	
		});
		this.onCancel();
	}

	render() {
		const { errors } = this.state;
		const errorMessages = Object.keys(errors).map(key => errors[key]);
		const errorClass = key => errors[key] && 'has-error';
		
		const content = (
			<div className="panel panel-default panel-pr">
				<div className="panel-heading panel-pr-title">Categories</div>
				<div className="panel-body">
					<form name="formCategories" method="post" action="" onSubmit={this.onSubmit}>
						<div className="errors">
							{errorMessages.map(msg => (
								<div className="list-item" key={msg}>{msg}</div>
							))}
						</div>
						<div className={`form-group form-group-pr ${errorClass('text')}`}>
							<input 	type="text" className="form-control form-control-pr" name="text" 
									placeholder="New categories" ref={(c) => { this.text = c; }} />
						</div>
						<div className="btn-group" role="group" aria-label="...">
							<div className="col-xs-12 col-md-6">
								<button type="submit" className="btn btn-pr btn-primary">Save</button>
							</div>
							<div className="col-xs-12 col-md-6">
								<button type="button" className="btn btn-pr btn-default-pr" onClick={this.onCancel} >Cancel</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);

		return <AppAdminContainer content={content} />;
	}
}