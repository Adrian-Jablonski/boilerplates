import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<div>
				Login Page
			</div>
			<Link to={'./page'}>
				<button>
					Go to Page
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

export default App;
