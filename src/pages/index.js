import HomePage, { config as HomeConfig } from './HomePage';
import ErrorPage, { config as ErrorConfig } from './ErrorPage';

const pages = [
	{
		...HomeConfig,
		exact: true,
		component: HomePage,
	},
	{
		...ErrorConfig,
		exact: false,
		component: ErrorPage,
	},
];

export default pages;
