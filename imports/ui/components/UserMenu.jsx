import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import BaseComponent from './BaseComponent.jsx';

class UserMenu extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = Object.assign(this.state, { open: false });
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);

        
    }

    toggle(e) {
        e.stopPropagation();
        this.setState({
            open: !this.state.open,
        });
    }

    logout() {
        Meteor.logout();
        this.context.router.history.push('/login');
    }

    renderLogout(){
        return(
            <div className="user-menu">
                <NavLink to="/signin" className="btn-secondary">
                    Signin
                </NavLink>
                <NavLink to="/login" className="btn-secondary">
                    Login
                </NavLink>
            </div>
        );
    }

    renderLogin() {
        const { open } = this.state;
        const { user, logout } = this.props;
        const email = user.emails[0].address;
        const emailLocalPart = email.substring(0, email.indexOf('@'));

        return (
            <div className="user-menu vertical">
                <a href="#toggle" className="btn-secondary" onClick={this.toggle}>
                    {open ? <span className="icon-arrow-up" /> : <span className="icon-arrow-down" />}
                    {emailLocalPart}
                </a>
                {open ? <a className="btn-secondary" onClick={this.logout}>Logout</a> : null}
            </div>
        );
    }

    render() {
        return this.props.user ? this.renderLogin() : this.renderLogout();
    }
};

UserMenu.propTypes = {
    user: PropTypes.object,     // User
};

UserMenu.contextTypes = {
    router: PropTypes.object,
};

export default UserMenu;