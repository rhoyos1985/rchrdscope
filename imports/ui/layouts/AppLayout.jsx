import PropTypes from 'prop-types';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ListHeader from '../components/ListHeader.jsx';
import UserAvatar from '../components/UserAvatar.jsx';
import ListMenu from '../components/ListMenu.jsx';

// a common layout wrapper for auth pages
const AppLayout = ({ content,connected,listMenu,menuOpen }) => (
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

AppLayout.propTypes = {
    connected: PropTypes.bool,  // server connection status
    listMenu: PropTypes.array,      // list categories
    menuOpen: PropTypes.bool,   // is side menu open?
    content: PropTypes.element, // Elements
};

export default AppLayout;