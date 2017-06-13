import { Meteor } from 'meteor/meteor';

import { Categories } from '../categories.js';

Meteor.publish('list.categories', function listsCategories() {
	return Categories.find();
});