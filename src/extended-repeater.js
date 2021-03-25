const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    // options - это объект параметров, который содержит свойства
    //str - строка, которую нужно повторить; СТРОКА/оюязательный параметр
    if (options == undefined)
    {options = {};}

    // repeatTimes устанавливает количество повторений строки; ЦЕЛОЕ ЧИСЛО
    if (options.repeatTimes === undefined)
    {options.repeatTimes = 1;}

    // separator - строка, разделяющая повторы str; СТРОКА/+
    if (options.separator === undefined)
    {options.separator = "+";}

    // add - это дополнительная строка, которая будет добавляться к каждому повторению строки str; СТРОКА
    if (options.addition === undefined)
    {options.addition = "";}

    // addRepeatTimes устанавливает количество повторений сложения; ЦЕЛОЕ ЧИСЛО
    if (options.additionRepeatTimes === undefined)
    {options.additionRepeatTimes = 1;}

    // addSeparator - это строка, разделяющая повторы добавления; СТРОКА "|"
    if (options.additionSeparator === undefined)
    {options.additionSeparator = "|";}

    let part = new Array(options.additionRepeatTimes).fill(String(options.addition));
    let result = new Array(options.repeatTimes).fill(String(str) + part.join(String(options.additionSeparator)));

    return result.join(options.separator);
}







  