// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc


// Website, function/hooks, etc imports
import Navigation from '../Navigation';
import pages from '../../pages';

const Root = styled.div`
	background: red;
	/* display: flex; */
	font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 18px;
	/* overflow: hidden; */
	/* flex: 1; */
`;

const ContentArea = styled.div`
	background: white;
	/* flex-basis: 100%; */
	/* margin: 50px; */
	/* display: flex;
    flex-direction: column; */
`;

const Main = styled.main`
	/* height: 100vh; */
	/* overflow: scroll;
    white-space: nowrap; */
`;

function MainLayout({ children }) {
	return (
		<Root>
			<ContentArea>
				<Navigation navItems={pages}/>
				<Main>{children}</Main>
			</ContentArea>
		</Root>
	);
}

export default MainLayout;
