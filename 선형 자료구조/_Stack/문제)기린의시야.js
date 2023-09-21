/* 기린의 시야 */

/* user code */
function answer(giraffe) {
  let result = 0;

  let stack = [],
    cnt = 0;
  //기린의 수만큼 루프를 돈다.
  for (let i = 0; i < giraffe.length; i++){
    for (let j = i+1; j < giraffe.length; j++){
      if (giraffe[i] < giraffe[j]) break;
      else cnt++;
      }
  }

  return cnt;
}

/* main code */
let input = [
  // TC: 1
  [7, 4, 12, 1, 13, 11, 12, 6],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
