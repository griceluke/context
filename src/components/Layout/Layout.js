// External imports, installed libraries, etc
import React from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import fonts from '../../styles/fonts';

// Internal components, images, etc
import Navigation from '../Navigation';
import Footer from '../Footer';

const Root = styled.div`
	background: red;
	font-family: ${fonts.sans.fontFamily};
	font-size: 18px;
	font-weight: ${fonts.sans.fontWeight.regular};
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
				<Main>
					{children}
				</Main>
				<Footer/>
			</ContentArea>
		</Root>
	);
}

export default MainLayout;
