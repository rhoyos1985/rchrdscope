import { Meteor } from 'meteor/meteor';

import { Files } from '../files.js';

Meteor.publish('list.files', function listsFiles() {
	return Files.find();
});