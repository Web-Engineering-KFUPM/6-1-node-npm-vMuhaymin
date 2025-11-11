import _ from "lodash";

export function parseNumbers(input) {
  const numbers = _.map(input, (e) => Number(e));
  return _.filter(numbers, Number.isFinite);
}

export function isValidOperation(operation) {
  const validOp = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOp, operation);
}