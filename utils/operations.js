export function add(numbers) {
  return numbers.reduce((e , n) => e + n, 0);
}

export function subtract(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.slice(1).reduce((acc, n) => acc - n, numbers[0]);
}

export function multiply(numbers) {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, n) => acc * n, 1);
}


export function divide(numbers) {
  if (numbers.length === 0) return NaN;
  return numbers.slice(1).reduce((acc, n) => {
    if (n === 0) return NaN; // guard division by zero
    return acc / n;
  }, numbers[0]);
}

