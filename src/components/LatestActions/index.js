import React from 'react';
import PropTypes from 'prop-types';

export default function LatestActions({ actions = [] }) {
	return (
		<div id="latest-actions">
			<ul className="table-striped">
				{actions.map((action, index) => (
					<li key={index}>
						<span className="description">{action.description}</span>
						<span className="time">{action.date}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

LatestActions.prototype = {
	actions: PropTypes.array,
};
