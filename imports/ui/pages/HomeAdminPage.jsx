import React from 'react';

import BaseComponent from '../components/BaseComponent.jsx';
import AppAdminContainer from '../containers/AppAdminContainer.jsx';

// App component - represents the whole app
export default class HomeAdminPage extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
    	const content = (
    		<div>
    			<p> Admin de Prueba </p>
    		</div>
    	);
        return <AppAdminContainer key='homeadmin' content={content} />
    }
}