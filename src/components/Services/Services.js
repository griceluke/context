
// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext';
// import breakpoints from '../../styles/breakpoints';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import breakpoints from '../../styles/breakpoints';

// Internal components, images, etc
const FlexRow = styled.div`
	align-items: flex-end;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 1.25rem;
	margin-left: ${(props) => (props.negativemargin)}em;;
	margin-right: ${(props) => (props.negativemargin)}em;
	&::after {
		content: "";
		flex: auto;
	}
`;

const FlexColumn = styled.div`
	flex-basis: calc(50% - ${(props) => (props.padding) && (props.padding * 2)}em);
	margin: 0 ${props => props.padding}em;
	@media (min-width: ${breakpoints.mdUp}px) {
		flex-basis: calc(33.33% - ${(props) => (props.padding) && (props.padding * 2)}em);
	}
	@media (min-width: ${breakpoints.lgUp}px) {
		flex-basis: calc(25% - ${(props) => (props.padding) && (props.padding * 2)}em);
	}
`;

const Service = styled.div`
	background: ${(props) => props.featured ? colors.primary[0] : colors.grey[0]};
	border: 1px solid ${colors.grey[1]};
	box-shadow: 0px 2px 6px 3px rgba(0, 0, 0, .02);
	color: ${(props) => props.featured ? colors.white : colors.grey[7]};
	font-size: calc(${fonts.sans.fontSize} - .1em);
	margin-top: 1rem;
	padding: 1.8rem .95rem 1.4rem;
	position: relative;
	text-align: center;
	
	&::before {
		background: ${props => props.featured && (colors.primary[0])};
		border-radius: ${props => props.featured && ('20px')};
		box-shadow: ${props => props.featured && ('0px 2px 6px 3px rgba(0, 0, 0, .05)')};
		content: ${props => props.featured && ("'"+props.featuredtext+"'")};
		left: ${props => props.featured && ('50%')};
		padding: ${props => props.featured && ('7px 8px')};
		position: ${props => props.featured && ('absolute')};
		top: ${props => props.featured && ('-14px')};
		transform: ${props => props.featured && ('translateX(-50%)')};
		width: ${props => props.featured && ('fit-content')};
	}
`;

const Title = styled.span`
	color: ${(props) => props.featured ? colors.white : colors.grey[7]};
	display: block;
	font-weight: ${fonts.sans.fontWeight.bold};
	font-size: 1.3em;
	margin-bottom: .8em;
`;

const From = styled.span`
	color: ${(props) => props.featured ? colors.white : colors.grey[5]};
	display: block;
	margin-bottom: .25em;
`;
const Price = styled.span`
	color: ${(props) => props.featured ? colors.white : colors.primary[0]};
	display: block;
	font-weight: ${fonts.sans.fontWeight.bold};
	font-size: 2rem;
	margin-bottom: .45em;
`;
const Desc = styled.span`
	color: ${(props) => props.featured ? colors.white : colors.grey[7]};
	display: block;
`;

const Component = () => {	
	const { currentGenderData } = useContext(GenderContext);
	const paddings = .75;

	return (
		<FlexRow negativemargin={-paddings}>
			{currentGenderData && (
				currentGenderData.services && (
					currentGenderData.services.map((service, index) => {
						return (
							<FlexColumn key={index} padding={paddings}>
								<Service featured={service.feature} 
										 featuredtext={service.feature && service.featureText}>
									<Title featured={service.feature}>{service.title}</Title>
									<From featured={service.feature}>From</From>
									<Price featured={service.feature}>£{service.price}</Price>
									<Desc featured={service.feature}>{service.desc}</Desc>
								</Service>
							</FlexColumn>
						);
					})
				)
			)}
		</FlexRow>
	);
}

export default Component;
