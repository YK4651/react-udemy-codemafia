// POINT アロー関数の使い方
function fn(number) {
  return number * 2;
}

console.log(fn(2));
console.log(fn(4));

const fnArrow = number => {
  console.log(number);
  return number * 2;
};

// objectを戻り値どして返したい時はこのような記法になる。
const fnArrowObj = number => ({ result: number * 2 })

console.log(fnArrowObj(2));