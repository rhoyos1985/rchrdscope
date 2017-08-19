import PropTypes from 'prop-types';
import React from 'react';
import fs from 'fs';

//import { Categories } from '../../api/postscategories/categories.js';
import BaseComponent from '../components/BaseComponent.jsx';
import AppAdminContainer from '../containers/AppAdminContainer.jsx';
import { insert } from '../../api/postscategories/methods.js';
import Files from '../../api/filestores/files.js';
import Log from '../../lib/both/logs.js';

export default class CategoriesPage extends BaseComponent {

	constructor(props) {
		super(props);
		this.state = Object.assign(this.state, { errors: {} });
		this.onSubmit = this.onSubmit.bind(this);
		this.onError = this.onError.bind(this);
		this.onCancel= this.onCancel.bind(this);
		this.pruebaHandler = this.pruebaHandler.bind(this);
		this.fileUpload = this.fileUpload.bind();
		this.onSaveFile = this.onSaveFile.bind();
	}

	onSaveFile(event){

		event.preventDefault();

		let pruebap=[];

		let files = this.file.files; // FileList object
		let file = event.target.files;
		

		/*insertFile.call({prueba: files}, (err) => {
			if (err) {
				alert(err);
			}	
		});*/


		for (var i = 0, ln = files.length; i < ln; i++) {
			console.log(files[i]);
			fsFile = new FS.File(files[i]);
			Files.insert(fsFile, function (err, fileObj) {
		        if(err){
		        	console.log(err);
		        }else{
		        	console.log(fileObj._id);
		        	console.log(fileObj.url());
		        	console.log(fileObj.name());
		        	console.log(fileObj.isUploaded());
		        }
		   	});
		}
	}

	fileUpload(event){
		event.preventDefault();

		let files = this.file.files; // FileList object

		    // files is a FileList of File objects. List some properties.
		/*let output = [];
		for (var i = 0, f; f = files[i]; i++) {
			console.log(f);
			var target_path = './public/img/' + f.name;
			fs.rename(f.name, target_path, function(err) {
			if (err) throw err;
				// Eliminamos el fichero temporal
				fs.unlink(tmp_path, function() {
				if (err) throw err;
					alert('Error: ' + err);
				});
			});
			alert(f.path);
			output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
						f.size, ' bytes, last modified: ',
						f.lastModifiedDate.toLocaleDateString(), '</li>');
		}*/
		//document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
	}

	pruebaHandler(event){
		event.preventDefault();

		let prueba = this.prueba.value;
		alert(prueba);
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
					<div className='form-group form-group-pr'>
						<input 	type="text" className="form-control form-control-pr" name="text" 
								placeholder="New categories" ref={(c) => { this.prueba = c; }} />
					</div>
					<div className="col-xs-12 col-md-6">
								<button type="button" onClick={this.pruebaHandler} className="btn btn-pr btn-primary">Save</button>
							</div>
							<input type="file" size="45" name="file[]" ref={(c) => { this.file = c; }} id="file" onChange={this.fileUpload} multiple/>
							<button type="button" onClick={this.onSaveFile} className="btn btn-pr btn-primary">Save File</button>
					
					<output id="list"></output>
				</div>
			</div>
		);

		return <AppAdminContainer content={content} />;
	}
}