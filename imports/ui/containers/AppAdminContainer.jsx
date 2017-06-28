import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import { Menu } from '../../api/menu/menu.js';
import AppAdminLayout from '../layouts/AppAdminLayout.jsx';

export default AppAdminContainer = createContainer(({ content }) => {
	const publicHandle = Meteor.subscribe('list.menu');
  
    return {
    	user: Meteor.user(),
    	connected: Meteor.status().connected,
    	menu: Menu.find().fetch(),
        menuOpen: Session.get('menuOpen'),
        content,
    };
}, AppAdminLayout);