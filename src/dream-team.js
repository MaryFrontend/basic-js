const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//проверка на массив

if (!(members instanceof Array)) return false;
  const newArr =[];
for (let i=0;i<members.length;i++){
  if (typeof members[i] ==='string'){
    const trimMember = members[i].trim();//убираем пробелы
    newArr.push(trimMember[0].toUpperCase());//переводим в верхний регистр и пушим в новый массив
  }
}
  return newArr.sort().join('');//сортировка и объединение
};
