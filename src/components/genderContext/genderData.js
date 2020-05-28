// External, react, library, etc imports
// NA ATM

// Internal global, context, etc
import {OPENING_TIMES_GENDER_1_DATA, OPENING_TIMES_GENDER_2_DATA} from '../WeeklyOpeningTimes/data/openingTimes';

// Website, function/hooks, etc imports
// NA ATM

export const DEFAULT_GENDER = null;

export const MALE_GENDER = 1;

export const FEMALE_GENDER = 2;

export default [
    {
    id: 1,
    gender: 'male',
    name: 'gents',
    nameCap: 'Gents',
    salonType: 'barbers',
    openingTimes: OPENING_TIMES_GENDER_1_DATA,
    },
    {
        id: 2,
        gender: 'female',
        name: 'ladies',
        nameCap: 'Ladies',
        salonType: 'salon',
        openingTimes: OPENING_TIMES_GENDER_2_DATA,
    }
]