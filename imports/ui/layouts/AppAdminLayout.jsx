import PropTypes from 'prop-types';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import ListHeader from '../components/ListHeader.jsx';
import UserMenu from '../components/UserMenu.jsx';
import ListMenu from '../components/ListMenu.jsx';

// a common layout wrapper for auth pages
const AppAdminLayout = ({ content,user,connected,menu,menuOpen }) => (
    <div className={menuOpen ? 'container menu-open' : 'container'}>
        <section className="menu">
            <UserMenu user={user}/>
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

AppAdminLayout.propTypes = {
    user: PropTypes.object,     // User
    connected: PropTypes.bool,  // server connection status
    menu: PropTypes.array,      // list categories
    menuOpen: PropTypes.bool,   // is side menu open?
    content: PropTypes.element, // Elements
};

export default AppAdminLayout;