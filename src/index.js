module.exports = function toReadable (number) {
  const ones = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
  const tens = 'empty empty twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
  const hundred = ' hundred'
  const firstDigitStr = Number(String(number)[0]); //for first digit of given number
  const secondDigitStr = Number(String(number)[1]); //for second digit of given number
  const thirdDigitStr = Number(String(number)[2]); //for third digit of given number
  const lastTwoDigits = Number(String(number)[1] + String(number)[2]); //for last two digits of given number
  if (number < 20) return ones[number];
  if (number < 100) return number % 10 === 0 ? tens[firstDigitStr] : tens[firstDigitStr] + ' ' + ones[secondDigitStr];
  if (number < 1000) return number % 100 === 0 ? ones[firstDigitStr] + hundred 
                                               : lastTwoDigits < 20 ? // check if two last digits is eleven, twelve, thirteen and etc.
                                               ones[firstDigitStr] + hundred + ' ' + ones[lastTwoDigits]
                                               : secondDigitStr === 0 ? // check if second digit is 0.
                                               ones[firstDigitStr] + hundred + ' ' + ones[thirdDigitStr]
                                               : thirdDigitStr === 0 ? // check if third digit is 0
                                               ones[firstDigitStr] + hundred + ' ' + tens[secondDigitStr] 
                                               : ones[firstDigitStr] + hundred + ' ' + tens[secondDigitStr] + ' ' + ones[thirdDigitStr];
                                               
}
