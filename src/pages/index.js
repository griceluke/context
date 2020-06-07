import HomePage, { config as HomeConfig } from './HomePage';
import ServicesPage, { config as ServicesConfig } from './ServicesPage';
import StylistsPage, { config as StylistsConfig } from './StylistsPage';
import ContactPage, { config as ContactConfig } from './ContactPage';
import ErrorPage, { config as ErrorConfig } from './ErrorPage';

const pages = [
	{
		...HomeConfig,
		exact: true,
		component: HomePage,
	},
	{
		...ServicesConfig,
		exact: true,
		component: ServicesPage,
	},
	{
		...StylistsConfig,
		exact: true,
		component: StylistsPage,
	},
	{
		...ContactConfig,
		exact: true,
		component: ContactPage,
	},
	{
		...ErrorConfig,
		exact: false,
		component: ErrorPage,
	},
];

export default pages;
