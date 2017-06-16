import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import { Categories } from '../../api/postscategories/categories.js';
import AppLayout from '../layouts/AppLayout.jsx';


export default AppContainer = createContainer(({ content, list }) => {
	const publicHandle = Meteor.subscribe('list.categories');
  	return {
			connected: Meteor.status().connected,
			listMenu: list,
		    menuOpen: Session.get('menuOpen'),
		    content,
		};

},AppLayout);