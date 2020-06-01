import HomePage, { config as HomeConfig } from './HomePage';
import ErrorPage, { config as ErrorConfig } from './ErrorPage';

const pages = [
	{
		...HomeConfig,
		exact: true,
		component: HomePage,
		navigationItem: true,
		navigationChildren: {
			toggleGenders: true
		}
	},
	{
		...ErrorConfig,
		exact: false,
		component: ErrorPage,
		navigationItem: false,
	},
];

export default pages;
