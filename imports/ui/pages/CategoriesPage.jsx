import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Categories } from '../../api/postscategories/categories.js';
import BaseComponent from '../components/BaseComponent.jsx';

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
		return(
			<div className="form_categorie">
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input 	type="text" className="form-control" name="categorieName" 
								placeholder="Categorie" ref={(c) => { this.categorieName = c; }} />
					</div>
					<button type="submit" className="btn btn-default">Submit</button>
				</form>
			</div>
		);
	}
}