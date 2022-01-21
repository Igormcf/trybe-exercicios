function calSumSub(num1, num2, operacao) {
  if (operacao === '+') {
    return num1 + num2;
  } else if (operacao === '-') {
    return num1 - num2;
  } else {
    return 0;
  }
};
console.log(calSumSub(4, 2, '+'));