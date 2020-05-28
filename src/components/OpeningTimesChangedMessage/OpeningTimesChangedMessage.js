// External, react, library, etc imports
import React, {  useEffect, useState } from 'react';
import styled from 'styled-components';

// Internal global, context, etc
import {CHANGED_OPENING_TIMES_DATA, OPENING_TIMES_HAVE_CHANGED_MESSAGE} from '../WeeklyOpeningTimes/data/changedOpeningTimes';
import {momentDateToday, momentDateIn7Days} from '../../libraries/moment/moment';

// Website, function/hooks, etc imports
// NA ATM

const Message = styled.div`
    background: lightgray;
    font-size: small;
    padding: .8rem;
    margin-top: 1em;
`;

const haveOpeningTimesChanged = (genderDataForCalendar) => {
    if (genderDataForCalendar) {
        const foundDay = CHANGED_OPENING_TIMES_DATA.find(e => 
            (
                (momentDateToday <= e.date) && (momentDateIn7Days > e.date) && (e.gender === genderDataForCalendar.id)
            ));
        if (foundDay){
            return true;
        }
    }
    return false;
}

const WeeklyOpeningTimes = ({genderDataForCalendar}) => {
    const [openingTimesHaveChanged, setOpeningTimesHaveChanged] = useState(false);

    useEffect(() => {
		setOpeningTimesHaveChanged(
            haveOpeningTimesChanged(genderDataForCalendar)
        );
    }, [genderDataForCalendar]);

	return (
        openingTimesHaveChanged ? (
            <Message>
                <p><strong>*</strong> {OPENING_TIMES_HAVE_CHANGED_MESSAGE}</p>
            </Message>
        ) : (null)
	);
};

export default WeeklyOpeningTimes;

