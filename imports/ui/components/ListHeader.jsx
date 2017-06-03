 import React, { Component, PropTypes } from 'react';
 import { Session } from 'meteor/session';
 import BaseComponent from './BaseComponent.jsx';

// ListHeader component - represents header
class ListHeader extends BaseComponent {

	constructor(props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
  	}

	toggleMenu() {
		Session.set('menuOpen', !Session.get('menuOpen'));
	}
	
	render() {
		return (
			<nav className="header">
				<div className="col-xs-2 col-md-2 item-submenu">
					<a href="#toggle-menu" className="nav-item" onClick={this.toggleMenu}>
						<span className="icon-list-unordered" title="menu"/>
					</a>
				</div>
				<h1 className="col-xs-7 col-md-7">
					<span>Post Meteor JS</span>
				</h1>
			</nav>
		);
	}
}

export default ListHeader;