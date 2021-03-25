const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let numberOfCats= 0;//начало отсчета кошек
  const rangeLength= backyard.length;//идем по строке
  for (let i=0;i<rangeLength;i++){
    const elemLength=backyard[i].length;//идем по элементу
    for(let j=0;j<elemLength;j++){
      if (backyard[i][j]==='^^') numberOfCats+=1;//+1 когда нашли ^^)
    }
  }
return numberOfCats;
};
