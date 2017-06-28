import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Posts } from '../../api/posts/posts.js';
import ListPosts from '../components/ListPosts.jsx';

export default ListPostsContiner = createContainer(( {listPosts} ) => {
    const listPostsHandle = Meteor.subscribe('list.posts');
    return {
        loading: listPostsHandle.ready(),
        listPosts: listPosts,
    };
}, ListPosts);