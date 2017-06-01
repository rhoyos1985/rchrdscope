import React, { Component } from 'react';
import BaseComponent from './components/BaseComponent.jsx';
import ListHeader from './components/ListHeader.jsx';
import ListPosts from './layouts/ListPosts.jsx'; 

// App component - represents the whole app
export default class App extends BaseComponent {
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