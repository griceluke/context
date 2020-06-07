// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc

// Internal components, images, etc
import Navigation from '../Navigation';
import Footer from '../Footer';

const Root = styled.div`
	background: red;
	font-family: 'Montserrat', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 18px;
`;

const ContentArea = styled.div`
	background: white;
`;

const Main = styled.main`
`;

function MainLayout({ children }) {
	return (
		<Root>
			<ContentArea>
				<Navigation/>
				<Main>{children}</Main>
				<Footer/>
			</ContentArea>
		</Root>
	);
}

export default MainLayout;
