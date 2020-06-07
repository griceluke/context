// External imports, installed libraries, etc
import React, {  useEffect, useState } from 'react';
import styled from 'styled-components';

// Internal data, functions, custom hooks, etc
import {CHANGED_OPENING_TIMES_DATA, OPENING_TIMES_HAVE_CHANGED_MESSAGE} from '../WeeklyOpeningTimes/data/changedOpeningTimes';
import {momentDateToday, momentDateIn7Days} from '../../libraries/moment/moment';

// Internal components, images, etc
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

