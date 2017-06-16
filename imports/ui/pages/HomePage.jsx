import React from 'react';

import BaseComponent from '../components/BaseComponent.jsx';
import ListPostsContainer from '../containers/ListPostsContainer.jsx'; 
import AppContainer from '../containers/AppContainer.jsx';

// App component - represents the whole app
export default class HomePage extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = Object.assign(this.state, { languages: [] });
    }

    render() {
    	const content = <ListPostsContainer />;
        return <AppContainer key='home' content={content} list={this.state.response} />
    }
}