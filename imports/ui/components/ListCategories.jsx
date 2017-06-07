import React from 'react';
import { NavLink } from 'react-router-dom';

import BaseComponent from './BaseComponent.jsx';

class ListCategories extends BaseComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { listsCategories } = this.props;
		return(
			<div className="subjects">
			    <ul className="subjectsList">
			        <li className="subjectsList_item">
						{listsCategories.map(categorie => (
							<NavLink 	to="/" key={categorie._id} 
										title={categorie.categorieName}
										className="subjectsList_itemLink" activeClassName="active">
									{categorie.categorieName}
							</NavLink>
							
						))}
			        	
			        </li>
			    </ul>
			</div>
		);
	}
};

ListCategories.propTypes = {
	listsCategories: React.PropTypes.array,
};

export default ListCategories;

/*
	<Link
		to={`/lists/${categorie._id}`}
		key={categorie._id}
		title={categorie.categorieName}
		className="subjectsList_itemLink"
		activeClassName="active"
	>
		{categorie.categorieName}
	</Link>
*/