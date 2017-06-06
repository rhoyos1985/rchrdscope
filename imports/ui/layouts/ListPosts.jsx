import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Posts } from '../../api/posts/posts.js';
import BaseComponent from '../components/BaseComponent.jsx';
import Post from '../components/Post.jsx';


// Post component - represents Layout Post
class ListPosts extends BaseComponent {
    constructor(props) {
       super(props);
    }

    renderPosts() {
        let filteredPosts = this.props.listPosts;
        return filteredPosts.map((post) => (
            <Post key={post._id} post={post} />
        ));
    }

    render() {
        return (
            <div className="content-post">
                <div className="row content_post_list">
                    {this.renderPosts()}
                </div>
            </div>
        );
    }
}

ListPosts.propTypes= {
    loading: React.PropTypes.bool,
    listPosts: React.PropTypes.array,
};

export default createContainer(() => {
    const listPostsHandle = Meteor.subscribe('list.posts');
    return {
        loading: listPostsHandle.ready(),
        listPosts: Posts.find().fetch(),
    };
}, ListPosts);