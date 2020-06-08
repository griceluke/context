// External imports, installed libraries, etc
import React from 'react';
import { Grid as _Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import breakpoints from '../../styles/breakpoints';

// Internal components, images, etc
// NA ATM

const Grid = styled(_Grid)`
	padding: 0 12px;

	@media (min-width: ${breakpoints.smUp}px) {
		padding: 0 1.5em;
	}

	@media (min-width: ${breakpoints.mdUp}px) {
		padding: 0 2.25em;
	}

	@media only screen and (min-width: 576px) and (max-width: 1199.8px) {
		width: initial;
	}
`;

function Container({ children, className, ...props }) {
	return (
		<Grid {...props} className={className}>
			{children}
		</Grid>
	);
}

export default Container;
