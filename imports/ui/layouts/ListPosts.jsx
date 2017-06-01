import React, { Component } from 'react';
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
        let filteredPosts = this.props.posts;
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

export default createContainer(() => {
  return {
    posts: Posts.find().fetch(),
  };
}, ListPosts);