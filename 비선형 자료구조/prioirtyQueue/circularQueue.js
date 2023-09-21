function CircularQueue(array = [], size = 5) {
    this.array = array;
    this.size = array.length > size ? array.length : size;
    this.length = this.size;
    this.head = 0;
    this.tail = array.length;
};

CircularQueue.prototype.getBuffer = function () {
    return this.array.slice();
};

CircularQueue.prototype.isEmpty = function () {
    return this.length == 0;
};

CircularQueue.prototype.isFull = function () {
    return this.length == this.size;
};

let que = new CircularQueue([1, 2, 3]);
que.getBuffer();

