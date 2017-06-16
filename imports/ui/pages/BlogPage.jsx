import React from 'react';

import BaseComponent from '../components/BaseComponent.jsx';
import MarkdownBlog from '../components/markdown/MarkdownBlog.jsx';
import AppContainer from '../containers/AppContainer.jsx';

// App component - represents the whole app
export default class BlogPage extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
    	const content = <MarkdownBlog />;
        return <AppContainer key='home' content={content} />
    }
}