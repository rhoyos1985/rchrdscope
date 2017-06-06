import React from 'react';
import { Link } from 'react-router';

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
							<a className="subjectsList_itemLink" href="#" key={categorie._id.toString()}>{categorie.categorieName}</a> 
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