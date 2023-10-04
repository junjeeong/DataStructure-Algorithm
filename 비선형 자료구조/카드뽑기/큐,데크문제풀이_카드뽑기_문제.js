/* 카드 뽑기 */
function Queue(arr) {
  this.data = arr;
};

Queue.prototype.getBuffer = function () {
  return this.slice();
}

Queue.prototype.isEmpty = function () {
  return this.length == 0 ? 1 : 0;
}

Queue.prototype.size = function () {
  return this.length;
}

Queue.prototype.front = function (arr) {
  return this.data.length == 0 ? -1 : this.arr[0];
}

Queue.prototype.back = function (arr) {
  return this.data.length == 0 ? -1 : this.arr[this.arr.length - 1];
}

Queue.prototype.enqueue = function (element) {
  this.data.push(element);
}

Queue.prototype.dequeue = function (element) {
  let ret = this.arr.shift();
  return ret === undefined ? -1 : ret;
}

Queue.prototype.clear = function (arr) {
  this.arr = [];
}
/* user code */
function answer(n) {
  let result = [];
  let input = [];
  let queue = new Queue([]);

  //[0 ~ n] 배열 만들기
  for (let i = 1; i <= n; i++){
    input.push(i);
  }
  //카드 밑에 넣기 = 카드의 짝수 순번은 따로 queue에 삽입 
  for (let i = 1; i <= input.length; i++){
    if (i % 2 == 0) {
      queue.enqueue(input[i - 1]);
      continue;
    }
    result.push(i);
  }
  //밑에 넣었던 카드까지 나눠주기
  for (let i = 0; i < queue.data.length; i++){
    result.push(queue.data[i]);
  }

  return result;
}

/* main code */
let input = [
  // TC: 1
  4
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
