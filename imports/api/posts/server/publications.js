/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import { Posts } from '../posts.js';

Meteor.publish('list.posts', function listsPublic() {
  return Posts.find();
});