// External, react, library, etc imports
import React from 'react';
import { Grid as _Grid } from 'react-flexbox-grid';
import styled from 'styled-components';

// Internal global, context, etc
import breakpoints from '../../styles/breakpoints';

// Website, function/hooks, etc imports
// NA ATM





const Grid = styled(_Grid)`
	@media (min-width: ${breakpoints.smUp}) {
		padding: 0 1.75em;
	}
	@media (min-width: ${breakpoints.mdUp}) {
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
