/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let [prev, curr] = [0, 1];

  yield prev;
  yield curr;

  while (true) {
    let sum = prev + curr;
    yield sum;
    prev = curr;
    curr = sum;
  }
};

// const gen = fibGenerator();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2

// console.log(gen.next().value); // 3
// console.log(gen.next().value); // 5
// console.log(gen.next().value); // 8

// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 21
// console.log(gen.next().value); // 34

// console.log(gen.next().value); // 55
// console.log(gen.next().value); // 89
// console.log(gen.next().value); // 144
// console.log(gen.next().value); // 233
