// External imports, installed libraries, etc
// NA ATM

// Internal data, functions, custom hooks, etc
import {OPENING_TIMES_GENDER_1_DATA, OPENING_TIMES_GENDER_2_DATA} from '../WeeklyOpeningTimes/data/openingTimes';
import {SOCIALS_GENDER_1_DATA, SOCIALS_GENDER_2_DATA} from '../SocialBar/data/socialAccounts';

// Internal components, images, etc
import GentsTeam from '../../images/gents-team.jpg';
import LadiesTeam from '../../images/ladies-team.jpg';

export const DEFAULT_GENDER = null;

export const MALE_GENDER = 1;

export const FEMALE_GENDER = 2;

const address = {
    line1: '12 Bethel Street',
    town: 'Brighouse',
    postCode: 'HD6 1JN',
};

export default [
    {
    id: 1,
    gender: 'male',
    name: 'gents',
    nameCap: 'Gents',
    nameFull: 'gentlemen',
    nameFullCap: 'Gentlemen',
    salonType: 'barbers',
    jobType: 'barbering',
    jobTypeCap: 'Barbering',
    phoneNumber: '01‪484715063',
    teamPhoto: GentsTeam,
    openingTimes: OPENING_TIMES_GENDER_1_DATA,
    socials: SOCIALS_GENDER_1_DATA,
    address,
    },
    {
        id: 2,
        gender: 'female',
        name: 'ladies',
        nameCap: 'Ladies',
        nameFull: 'ladies',
        nameFullCap: 'Ladies',
        salonType: 'salon',
        jobType: 'hairdressing',
        jobTypeCap: 'Hairdressing',
        phoneNumber: '01‪484721774',
        teamPhoto: LadiesTeam,
        openingTimes: OPENING_TIMES_GENDER_2_DATA,
        socials: SOCIALS_GENDER_2_DATA,
        address,
    }
]