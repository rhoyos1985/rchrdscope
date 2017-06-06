import React from 'react';

import BaseComponent from './BaseComponent.jsx';

class UserAvatar extends BaseComponent {
	constructor(props) {
		super(props);
	}

	render() {
		return(

			<div className="avatar">
			    <img src="/img/cod.png" alt="avatar" className="img-circle avatar_img" />
			    <div className="caption">
			        <h1>
			            <span>Richard</span><span>Hoyos</span>
			        </h1>
			    </div>
			</div>
		);
	}
};

export default UserAvatar;