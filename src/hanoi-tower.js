const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  //diskNumber - это количество дисков на одном стержне/число
  // TurnSpeed - это скорость перемещения дисков (в оборотах в час)/число
  //число ходов за число секунд(целочисленно)

//перевод ходов в секунды
const  turnSpeedSecond= turnsSpeed/3600;//1 час =3600сунд
//формула нахождения числа ходов
  const turns= (2**disksNumber)-1;
  //деление ходов на скорость в сек
  const seconds=turns/turnSpeedSecond;
  //округление
  const FloorSeconds= Math.floor(seconds);

  return {turns, seconds:FloorSeconds};

};
