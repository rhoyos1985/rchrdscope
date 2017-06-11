import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BaseComponent from '../components/BaseComponent.jsx';
import ListHeader from '../components/ListHeader.jsx';
import UserAvatar from '../components/UserAvatar.jsx';
import ListMenu from '../components/ListMenu.jsx';

// App component - represents the whole app
export default class AppLayout extends BaseComponent {
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
            connected,
            listMenu,
            menuOpen, 
            content,
        } = this.props;

        return (
            <div className={menuOpen ? 'container menu-open' : 'container'}>
                <section className="menu">
                    <UserAvatar />
                    <ListMenu listMenu={listMenu} />
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

AppLayout.propTypes = {
    connected: PropTypes.bool,        // server connection status
    listMenu: PropTypes.array,  // list categories
    menuOpen: PropTypes.bool,         // is side menu open?
    content: PropTypes.element,       // Elements
};