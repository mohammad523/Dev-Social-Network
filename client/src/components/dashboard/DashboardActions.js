/** @format */

import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
	return (
		<div className='dash-buttons'>
			<Link to='/edit-profile' className='small-btn '>
				<i className='fas fa-user-circle text-primary' />
				Edit Profile
			</Link>
			<Link to='/add-experience' className='small-btn '>
				<i className='fab fa-black-tie text-primary' /> Add Experience
			</Link>
			<Link to='/add-education' className='small-btn'>
				<i className='fas fa-graduation-cap text-primary' /> Add Education
			</Link>
		</div>
	);
};

export default DashboardActions;
