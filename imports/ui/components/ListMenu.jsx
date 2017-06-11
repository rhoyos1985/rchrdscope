import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import BaseComponent from './BaseComponent.jsx';

class ListMenu extends BaseComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { listMenu } = this.props;
		return(
			<div className="subjects">
			    <ul className="subjectsList">
			        <li className="subjectsList_item">
						{listMenu.map(list => (
							<NavLink 	to="/" key={list._id} 
										title={list.description}
										className="subjectsList_itemLink" activeClassName="active">
									{list.description}
							</NavLink>
							
						))}
			        	
			        </li>
			    </ul>
			</div>
		);
	}
};

ListMenu.propTypes = {
	listMenu: PropTypes.array,
};

export default ListMenu;