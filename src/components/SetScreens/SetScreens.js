// External, react, library, etc imports
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Internal global, context, etc
import { GenderContext } from '../genderContext/genderContext.js';

// Website, function/hooks, etc imports
import '../App/App.css';
import '../App/reset.css';
import pages from '../../pages';
import Layout from '../../components/Layout';
import ChooseGender from '../ChooseGender';

function SetScreens() {
	const { currentGender } = useContext(GenderContext);

	return (
		<>
			{currentGender ? (
				<Router>
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
												<props.component />
											</Layout>
										);
									}}
								/>
							);
						})}
					</Switch>
				</Router>
			) : (
				<ChooseGender />
			)}
		</>
	);
}

export default SetScreens;
