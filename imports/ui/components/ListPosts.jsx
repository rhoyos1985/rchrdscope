import React from 'react';

import BaseComponent from '../components/BaseComponent.jsx';
import Post from './Post.jsx';


// Post component - represents Layout Post
export default class ListPosts extends BaseComponent {
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
            <div className="row content-post ">
                    {this.renderPosts()}
            </div>
        );
    }
}

ListPosts.propTypes= {
    loading: React.PropTypes.bool,
    listPosts: React.PropTypes.array,
};