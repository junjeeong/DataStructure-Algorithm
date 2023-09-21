function Element(data, priority) {
    this.data = data;
    this.priority = priority;
}

function PriorityQueue(data, priority) {
    this.array = [];
};

PriorityQueue.prototype.getBuffer = function () {
    return this.map((element) => element.data);
}

PriorityQueue.prototype.isEmpty = function () {
    return this.array.length;
}

PriorityQueue.prototype.deQueue    = function () {
    
}