import React, { Component } from 'react';
import BaseComponent from '../components/BaseComponent.jsx';
import Post from '../components/Post.jsx'


// Post component - represents Layout Post
class ListPosts extends BaseComponent {
    getPosts() {
        return [
            { _id: 1, img: '/img/cod.png', title: 'Titulo 1', user: 'Usuario 1', pubDate: '12:00:00 am', comments: '3', resumenPost: 'loreimpsum' },
            { _id: 2, img: '/img/cod.png', title: 'Titulo 2', user: 'Usuario 2', pubDate: '12:00:00 am', comments: '3', resumenPost: 'loreimpsum' },
            { _id: 3, img: '/img/cod.png', title: 'Titulo 3', user: 'Usuario 3', pubDate: '12:00:00 am', comments: '3', resumenPost: 'loreimpsum' },
            { _id: 4, img: '/img/cod.png', title: 'Titulo 3', user: 'Usuario 3', pubDate: '12:00:00 am', comments: '3', resumenPost: 'loreimpsum' },
        ];
    }

    renderPosts() {
        return this.getPosts().map((post) => (
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

export default ListPosts;