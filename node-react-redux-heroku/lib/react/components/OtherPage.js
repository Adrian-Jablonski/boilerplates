import React from 'react';
import { Link } from 'react-router-dom';

const OtherPage = () => {
	return (
		<div>
			<div>
				Other Page
			</div>
			<Link to={'./'}>
				<button>
					Go to index page
				</button>
			</Link>
			<Link to={'./123'}>
				<button>
					Go to Error Page
				</button>
			</Link>
		</div>
	);
};

export default OtherPage;
