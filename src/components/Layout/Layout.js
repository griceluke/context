// External, react, library, etc imports
import React from 'react';
import styled from 'styled-components';

// Internal global, context, etc
// NA ATM

// Website, function/hooks, etc imports
// NA ATM

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
				<Main>{children}</Main>
				{/* <Navigation navItems={}/> */}
			</ContentArea>
		</Root>
	);
}

export default MainLayout;
