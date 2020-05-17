export const moment = require('moment');
export const momentDayToday = moment().day();
export const momentDateToday = moment().format('L');
export const momentDateIn7Days = moment().add(7, 'days').format('L');