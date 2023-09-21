/* 큐 만들기 */
function Queue(arr) {
  this.arr = arr;
};

Queue.prototype.getBuffer = function () {
  return this.slice();
}

Queue.prototype.isEmpty = function () {
  return this.length == 0;
}

Queue.prototype.size = function () {
  return this.length;
}

Queue.prototype.prontPush = function (element) {
  return this.arr.unshift(element);
}

Queue.prototype.prontPop = function () {
  return this.arr.unshift();
}

Queue.prototype.backPush = function (element) {
  return this.arr.push(element);
}

Queue.prototype.backPop = function () {
  return this.arr.pop();
}
Queue.prototype.front = function (arr) {
  return this.arr.length == 0 ? undefined : this.arr[0];
}

Queue.prototype.back = function (arr) {
  return this.arr.length == 0 ? -1 : this.arr[this.arr.length - 1];
}

Queue.prototype.clear = function (arr) {
  this.arr = [];
}

/* user code */
function answer(cmds) {
  let result = [];

 

  return result;
}

/* main code */
let input = [
  // TC: 1
  ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"],

  // TC: 2
  [
    "enqueue 3",
    "enqueue 4",
    "enqueue 5",
    "enqueue 6",
    "front",
    "back",
    "dequeue",
    "size",
    "empty",
  ],

  // TC: 3
  [
    "enqueue 7",
    "enqueue 8",
    "front",
    "back",
    "size",
    "empty",
    "dequeue",
    "dequeue",
    "dequeue",
    "size",
    "empty",
    "dequeue",
    "enqueue 9",
    "empty",
    "front",
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
