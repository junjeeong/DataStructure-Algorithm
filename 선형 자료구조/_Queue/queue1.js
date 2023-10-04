function Queue(arr) {
    this.arr = arr ? arr : [];
}

Queue.prototype.getBuffer = function () {
    return this.arr.slice();
}

Queue.prototype.isEmpty = function () {
    return this.length === 0;
}

