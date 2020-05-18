// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc
// NA ATM

// Website, function/hooks, etc imports
// NA ATM


const Img = styled.img`
	max-width: 100%;
`;

function Component({ ...props }) {
	return <Img {...props} />;
}

export default Component;
