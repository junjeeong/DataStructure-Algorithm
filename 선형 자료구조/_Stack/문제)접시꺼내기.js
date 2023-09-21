/* 접시 꺼내기 */

/* user code */
function answer(str) {
  let result = [];

  let stack = [];
  let alpha = Array.sort(str);
  for (let i = 0; i < str.length; i++){
    for (let j = 0; j < str.length; j++) {
      if (!str[i] == alpha[j]) {
        if (stack.peek() == alpha[j])  
        stack.push(alpha[j]);
        result.push(0);
      } else if (str[i] == alpha[i]) {
        stack.push(alpha[j]);
        result.push(0);
        stack.pop();
        result.push(1);
      }
    }
  }

      

  return result;
}

/* main code */
let input = [
  // TC: 1
  "bacd",

  // TC: 2
  "dabc",

  // TC: 3
  "edcfgbijha",
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
