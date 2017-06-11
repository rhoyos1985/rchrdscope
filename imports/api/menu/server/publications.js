/* eslint-disable prefer-arrow-callback */

import { Meteor } from 'meteor/meteor';

import { Menu } from '../menu.js';

Meteor.publish('list.menu', function menu() {
  return Menu.find();
});