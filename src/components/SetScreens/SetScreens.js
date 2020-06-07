// External imports, installed libraries, etc
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Internal components, images, etc
import '../App/App.css';
import '../App/reset.css';
import pages from '../../pages';
import Layout from '../../components/Layout';
import ChooseGender from '../ChooseGender';

function SetScreens() {
	const { currentGender } = useContext(GenderContext);

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				{pages.map((props, index) => {
					const routeUniqueKey = `ROUTE_${index}`;
					return (
						<Route
							key={routeUniqueKey}
							exact={props.exact}
							path={props.path}
							
							component={routeProps => {
								return (
									<Layout {...routeProps} {...props}>
										{((currentGender) || (props.pageName === 'ErrorPage')) ? (
											<props.component />
										) : (
											<ChooseGender/>
										)}
									</Layout>
								);
							}}
						/>
					);
				})}
			</Switch>
		</Router>
	);
}

export default SetScreens;
