import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BaseComponent from '../components/BaseComponent.jsx';
import ListPostsContainer from '../containers/ListPostsContainer.jsx'; 
import AppContainer from '../containers/AppContainer.jsx';

// App component - represents the whole app
export default class AppPrueba extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
    	const content = <ListPostsContainer />;
        return <AppContainer content={content} />
    }
}