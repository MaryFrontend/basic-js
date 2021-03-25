const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
        //throw new CustomError('Not implemented');

//If the date argument was not passed
if (date === null || !date)
        return ('Unable to determine the time of year!');//Если аргумент даты не был передан, функция должна вернуть эту строку
//If the date argument is invalid
else if ((date.hasOwnProperty('getMonth')))
        throw Error;//Если аргумент даты недопустим, функция должна выдать ошибку

//Seasons
let month = date.getMonth();
if (month === 0 || month === 1 || month === 11 ) return 'winter';
else if (month === 2 || month === 3 || month === 4 ) return 'spring';
else if (month === 5 || month === 6 || month === 7 ) return 'summer';
else if (month === 8 || month === 9 || month === 10 ) return 'autumn (fall)';
};
