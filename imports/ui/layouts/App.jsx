import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BaseComponent from '../components/BaseComponent.jsx';
import ListHeader from '../components/ListHeader.jsx';
import ListPosts from './ListPosts.jsx'; 
import AuthRegisterPage from '../pages/AuthRegisterPage.jsx';
import CategoriesPage from '../pages/CategoriesPage.jsx';

// App component - represents the whole app
class App extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        };
    }

    render() {
        const { menuOpen } = this.props;

        return (
            <div className={menuOpen ? 'container menu-open' : 'container'}>
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
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                        <CategoriesPage />
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

App.propTypes = {
  menuOpen: React.PropTypes.bool,    // is side menu open?
};

export default createContainer(() => {
    return {
        menuOpen: Session.get('menuOpen')
    };
}, App);