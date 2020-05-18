// External, react, library, etc imports
// NA ATM

// Internal global, context, etc
import {weeklyOpeningTimesGender1, weeklyOpeningTimesGender2} from '../WeeklyOpeningTimes/data/openingTimes';

// Website, function/hooks, etc imports
// NA ATM


export default [
    {
    id: 1,
    gender: 'male',
    name: 'gents',
    nameCap: 'Gents',
    salonType: 'barbers',
    openingTimes: weeklyOpeningTimesGender1,
    },
    {
        id: 2,
        gender: 'female',
        name: 'ladies',
        nameCap: 'Ladies',
        salonType: 'salon',
        openingTimes: weeklyOpeningTimesGender2,
    }
]