// External imports, installed libraries, etc
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import { GenderContext } from '../genderContext/genderContext.js';
import colors from '../../styles/colors';

// Internal components, images, etc
import ToggleGender from '../ToggleGender/index.js';

const Message = styled.div`
    border: 1px solid ${colors.grey[3]};
    font-size: .8em;
    padding: .8rem;
    line-height: 1rem;
    margin-top: 1em;
`;

const PromptToChangeGenderContext = ({genderDataForCalendar}) => {
    const { currentGender, currentGenderData, otherGenderData } = useContext(GenderContext);

    let genderDataIsDifferentToParentComponentData = false;

    if (genderDataForCalendar){
        if (currentGender !== genderDataForCalendar.id) {
            genderDataIsDifferentToParentComponentData = true;
        } else {
            genderDataIsDifferentToParentComponentData = false;
        }
    }

	return (
        genderDataIsDifferentToParentComponentData ? (
            <Message>
                <p>{`You're on our ` + currentGenderData.name + ` ` + currentGenderData.salonType + ` website. To view more information from the ` + otherGenderData.name + ` ` + otherGenderData.salonType + ` side of our business, `}<ToggleGender styleas={'link'}>{`switch to the `+otherGenderData.name+` `+ otherGenderData.salonType+` website`}</ToggleGender>.</p>
            </Message>
        ) : (null)
	);
};

export default PromptToChangeGenderContext;

