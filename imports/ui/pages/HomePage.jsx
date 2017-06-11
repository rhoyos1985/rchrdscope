import React from 'react';

import BaseComponent from '../components/BaseComponent.jsx';
import ListPostsContainer from '../containers/ListPostsContainer.jsx'; 
import AppContainer from '../containers/AppContainer.jsx';

// App component - represents the whole app
export default class HomePage extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
    	const content = <ListPostsContainer />;
        return <AppContainer key='home' content={content} />
    }
}