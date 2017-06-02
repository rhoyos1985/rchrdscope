import React, { Component } from 'react';
import BaseComponent from './components/BaseComponent.jsx';
import ListHeader from './components/ListHeader.jsx';
import ListPosts from './layouts/ListPosts.jsx'; 

// App component - represents the whole app
export default class App extends BaseComponent {
    constructor(props) {
       super(props);
    }

    render() {
        return (
            <div className="container">
                <section className="menu">
                    <div className="avatar">
                        <img src="/img/cod.png" alt="avatar" className="img-circle avatar_img" />
                        <div className="caption">
                            <h1>
                                <span>Richard</span><span>Hoyos</span>
                            </h1>
                        </div>
                    </div>
                    <div className="subjects">
                        <ul className="subjectsList">
                            <li className="subjectsList_item">
                                <a href="#" className="subjectsList_itemLink">Posts Meteor JS</a>
                            </li>
                            <li className="subjectsList_item">
                                <a href="#" className="subjectsList_itemLink">Posts Angular JS</a>
                            </li>
                            <li className="subjectsList_item">
                                <a href="#" className="subjectsList_itemLink">Marketing MLM</a>
                            </li>
                            <li className="subjectsList_item">
                                <a href="#" className="subjectsList_itemLink">Trading</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <div className="content-container">
                    <ListHeader />
                    <ListPosts />
                </div>
            </div>
        );
    }
}