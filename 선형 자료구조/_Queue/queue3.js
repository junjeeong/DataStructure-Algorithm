function Queue(arr) {
    this.arr = arr ? arr : [];
}

Queue.prototype.getBuffer = function () {
    return this.arr.slice();
}

Queue.prototype.isEmpty = function () {
    return this.length === 0;
}

Queue.prototype.enqueue = function (element) {
    return this.arr.push(element);
}

Queue.prototype.dequeue = function () {
    return this.arr.shift();
}

Queue.prototype.front = function () {
    return this.arr.length === 0 ? undefined : this.arr[0];
}

Queue.prototype.size = function () {
    return this.arr.length;
}

Queue.prototype.clear = function () {
    this.arr = [];
}

let queue = new Queue([1, 2, 3, 4]);

queue.dequeue();
console.log(queue.front());
queue.clear();
console.log(queue);