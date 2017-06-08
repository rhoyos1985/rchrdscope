import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import { Categories } from '../../api/postscategories/categories.js';
import AppLayout from '../layouts/AppLayout.jsx';

export default AppContainer = createContainer(({ content }) => {
	const publicHandle = Meteor.subscribe('list.categories');
  
    return {
    	listCategories: Categories.find().fetch(),
        menuOpen: Session.get('menuOpen'),
        content,
    };
}, AppLayout);