import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BaseComponent from '../components/BaseComponent.jsx';

import UserAvatar from '../components/UserAvatar.jsx';
import ListCategories from '../components/ListCategories.jsx';
import ListHeader from '../components/ListHeader.jsx';
import ListPosts from './ListPosts.jsx'; 
import AuthRegisterPage from '../pages/AuthRegisterPage.jsx';
import CategoriesPage from '../pages/CategoriesPage.jsx';

// App component - represents the whole app
export default class App extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        };
    }

    render() {
        const { 
            listCategories,
            menuOpen, 
        } = this.props;

        return (
            <div className={menuOpen ? 'container menu-open' : 'container'}>
                <section className="menu">
                    <UserAvatar />
                    <ListCategories listsCategories={listCategories} />
                </section>
                
                <div className="content-container">
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                        <ListHeader />
                        <ListPosts />
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    listCategories: React.PropTypes.array,  // list categories
    menuOpen: React.PropTypes.bool,         // is side menu open?
};