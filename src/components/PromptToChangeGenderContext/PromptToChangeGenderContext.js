// External, react, library, etc imports
import React, { useContext } from 'react';
import styled from 'styled-components';

// Internal global, context, etc
import { GenderDataContext } from '../genderContext/genderDataContext.js';

// Website, function/hooks, etc imports
import ToggleGender from '../ToggleGender/index.js';

const Message = styled.div`
    background: lightgray;
    font-size: small;
    padding: .8rem;
    margin-top: 1em;
`;

const PromptToChangeGenderContext = ({genderDataForCalendar}) => {
    const { currentGender, currentGenderData, otherGenderData } = useContext(GenderDataContext);

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
                <p>You're on our {currentGenderData.name} {currentGenderData.salonType} website. To view more information from the {otherGenderData.name} {otherGenderData.salonType} side of our business, <ToggleGender elementType='a'>switch to the {otherGenderData.name} {otherGenderData.salonType} website</ToggleGender>.</p>
            </Message>
        ) : (null)
	);
};

export default PromptToChangeGenderContext;

