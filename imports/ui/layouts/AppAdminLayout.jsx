import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BaseComponent from '../components/BaseComponent.jsx';
import ListHeader from '../components/ListHeader.jsx';
import UserMenu from '../components/UserMenu.jsx';
import ListMenu from '../components/ListMenu.jsx';

// App component - represents the whole app
export default class AppAdminLayout extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
        };
        this.logout = this.logout.bind(this);
    }

    logout() {
        Meteor.logout();
    }

    render() {
        const { 
            user,
            connected,
            menu,
            menuOpen, 
            content,
        } = this.props;

        return (
            <div className={menuOpen ? 'container menu-open' : 'container'}>
                <section className="menu">
                    <UserMenu user={user} logout={this.logout}/>
                    <ListMenu listMenu={menu} />
                </section>
                
                <div className="content-container">
                    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={200} transitionLeaveTimeout={200}>
                        <ListHeader />
                        <div className="row content-post ">
                            {content}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        );
    }
}

AppAdminLayout.propTypes = {
    user: PropTypes.object,     // User
    connected: PropTypes.bool,  // server connection status
    menu: PropTypes.array,      // list categories
    menuOpen: PropTypes.bool,   // is side menu open?
    content: PropTypes.element, // Elements
};