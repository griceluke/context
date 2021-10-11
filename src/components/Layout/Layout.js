// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';
import fonts from '../../styles/fonts';

// Internal components, images, etc
import Navigation from '../Navigation';
import Footer from '../Footer';
import WelcomeBox from '../WelcomeBox';

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

const PageNameHeader = ( { pageData, currentGender } ) => {
	console.log(currentGender);

	return (
		<WelcomeBox>
			<div>Taylors &amp; Co.</div>
			<div>{pageData.pageName}</div>
		</WelcomeBox>
	)
}

const Header = ({pageData}) => {
	const { currentGender, currentGenderData } = useContext(GenderContext);

	if ((!pageData.customWelcomeBox) || (!currentGenderData.gender && pageData.customWelcomeBox)) {
		return (
			<header>
				<PageNameHeader pageData={pageData} currentGender={currentGender} />
			</header>
		);
	} else { 
		return null;
	}
}

const MainLayout = ({ children, pageData }) => {
	return (
		<Root>
			<ContentArea>
				<Navigation/>
				<Header pageData={pageData}/>
				<Main>
					{children}
				</Main>
				<Footer/>
			</ContentArea>
		</Root>
	);
}

export default MainLayout;
