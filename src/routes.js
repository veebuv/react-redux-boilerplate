import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import About from './components/about';
import Inbox from './components/inbox';


export default(
	<Route path="/" component={App}>
		<Route path="about/:name" component={About} />
		<Route path="inbox" component={Inbox} />
	</Route>
);