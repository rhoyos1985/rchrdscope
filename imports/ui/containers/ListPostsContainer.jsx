import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../../api/posts/posts.js';
import ListPosts from '../layouts/ListPosts.jsx';

export default createContainer(() => {
  return {
    posts: Posts.find().fetch(),
  };
}, ListPosts);