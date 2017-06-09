import PropTypes from 'prop-types';
import React from 'react';

// a common layout wrapper for auth pages
const AuthPage = ({ content }) => (
  <div className="page auth">
    <nav>
      
    </nav>
    <div className="content-scrollable">
      {content}
    </div>
  </div>
);

AuthPage.propTypes = {
  content: PropTypes.element,
};

export default AuthPage;