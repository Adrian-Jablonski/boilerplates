import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<div>
			<div>
				This page does not exist
			</div>
			<Link to={'./'}>
				<button>
					Go to index page
				</button>
			</Link>
			<Link to={'./page'}>
				<button>
					Go to Page
				</button>
			</Link>
		</div>
	);
};

export default ErrorPage;
