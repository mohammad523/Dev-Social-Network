/** @format */

import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileEducation = ({
	education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
	return (
		<div>
			<h3 className=''>{school}</h3>

			<p>
				<Moment format='MM/DD/YYYY'>{from}</Moment>-{" "}
				{!to ? " Now" : <Moment format='MM/DD/YYYY'>{to}</Moment>}
			</p>
			<p>
				<strong>Degree: </strong>
				{degree}
			</p>
			<p>
				<strong>Field Of Study: </strong>
				{fieldofstudy}
			</p>
			<p>
				<strong>Degree: </strong>
				{degree}
			</p>
		</div>
	);
};

ProfileEducation.propTypes = {
	education: PropTypes.array.isRequired,
};

export default ProfileEducation;
