import React, { Component } from 'react';
import BaseComponent from './components/BaseComponent.jsx';
import ListHeader from './components/ListHeader.jsx';
import ListPosts from './layouts/ListPosts.jsx'; 

// App component - represents the whole app
export default class App extends BaseComponent {
    /*getPosts() {
        return [
            { _id: 1, img: 'img1', title: 'Titulo 1', user: 'Usuario 1', pubDate: '2017-05-31: 12:00:00 am', comments: '3', resumenPost: 'loreimpsum' },
            { _id: 2, img: 'img2', title: 'Titulo 2', user: 'Usuario 2', pubDate: '2017-05-31: 12:00:00 am', comments: '3', resumenPost: 'loreimpsum' },
            { _id: 3, img: 'img3', title: 'Titulo 3', user: 'Usuario 3', pubDate: '2017-05-31: 12:00:00 am', comments: '3', resumenPost: 'loreimpsum' },
        ];
    }

    renderPosts() {
        return this.getPosts().map((post) => (
            <Post key={post._id} post={post} />
        ));
    }*/

    render() {
        return (
            <div className="container">
                <div className="content-container">
                    <ListHeader />
                    <ListPosts />
                </div>
            </div>
        );
    }
}