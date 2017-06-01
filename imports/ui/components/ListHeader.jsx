 import React, { Component, PropTypes } from 'react';
 import BaseComponent from './BaseComponent.jsx';

// ListHeader component - represents header
class ListHeader extends BaseComponent {

	constructor(props){
		super(props);
	};
	render() {
		return (
			<nav className="header">
				<div className="col-xs-2 col-md-2 item-submenu">
					<a href="#" className="icon-list-unordered"></a>
				</div>
				<h1 className="col-xs-7 col-md-7">
					<span>Post Meteor JS</span>
				</h1>
			</nav>
		);
	}
}

export default ListHeader;