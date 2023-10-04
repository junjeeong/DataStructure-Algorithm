function Queue(arr) {
    this.array = arr ? arr : [];
}

Queue.prototype.getBuffer = function () {
    return this.array.slice();
}

Queue.prototype.isEmpty = function () {
    return this.length === 0;
}

Queue.prototype.enqueue = function (element) {
    return this.array.push(element);
}

Queue.prototype.dequeue = function () {
    return this.array.shift();
}

let data = new Queue([1, 2, 3]);
data.enqueue(3);
data.dequeue();
console.log(data);