import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';


import App from '../layouts/App.jsx';

export default createContainer(() => {
    return {
        menuOpen: Session.get('menuOpen')
    };
}, App);