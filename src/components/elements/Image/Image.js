import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
	max-width: 100%;
`;

function Component({ ...props }) {
	return <Img {...props} />;
}

export default Component;
