import React, { Component } from 'react';

import { Categories } from '../../api/postscategories/categories.js';
import BaseComponent from '../components/BaseComponent.jsx';
import AppContainer from '../containers/AppContainer.jsx';

export default class CategoriesPage extends BaseComponent {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);	
	}

	onSubmit(event) {
		event.preventDefault();

		const categorieName = this.categorieName.value;
		const creationDate = new Date();

		Categories.insert({
	    	categorieName,
			creationDate,
	  	});
	}

	render() {
		const content = (
			<div className="panel panel-default panel-pr">
				<div className="panel-heading panel-pr-title">Categories</div>
				<div className="panel-body">
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<input 	type="text" className="form-control" name="categorieName" 
									placeholder="New categories" ref={(c) => { this.categorieName = c; }} />
						</div>
						<div className="btn-group" role="group" aria-label="...">
							<button type="button" className="btn btn-primary">Save</button>
							<button type="button" className="btn btn-default">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		);

		return <AppContainer content={content} />;
	}
}