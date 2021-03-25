const CustomError = require("../extensions/custom-error");
module.exports = function dateSample(sampleActivity) {
  const MODERN_ACTIVITY= 15;
  const HALF_LIFE_PERIOD= 5730;
  if( typeof sampleActivity !== 'string') return false;//проверка,чтобы входное значение было строкой

  const NUMsmplAct=parseFloat(sampleActivity);//принимаем строку,возвращаем число
//проверка пришедшего числа на 'адекватность'
  if (isNaN(NUMsmplAct)) return false;
  if (NUMsmplAct === 0) return false;
  if (NUMsmplAct < 0) return false;
  if (NUMsmplAct > MODERN_ACTIVITY) return false;
//дормула для нахождения константы
  const k=Math.LN2/HALF_LIFE_PERIOD;//LN2=0,693
//формула
  let form = Math.log(MODERN_ACTIVITY/sampleActivity)/k;
  //округление до целого числа
  return Math.ceil(form);
};
