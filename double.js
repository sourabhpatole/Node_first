// const double = (n) => n * 2;
// console.log(double(4));

const [, , num] = process.argv;
const double = (n) => n * 2;
console.log(double(num));
