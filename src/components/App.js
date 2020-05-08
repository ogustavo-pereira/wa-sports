import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import LeftMenu from './LeftMenu';
import Header from './Header';
import Dashboard from './Dashboard';
import CSGO from './CSGO';

const hist = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<Header />
			<div className="container">
				<Router history={hist}>
					<LeftMenu />
					<div className="page-content">
						<Switch>
							<Route path="/dashboard" component={Dashboard} />
							<Route path="/csgo" component={CSGO} />
							<Redirect from="/" to="/dashboard" />
						</Switch>
					</div>
				</Router>
			</div>
		</div>
	);
}

export default App;
