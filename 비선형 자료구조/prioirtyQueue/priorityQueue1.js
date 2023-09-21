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

PriorityQueue.prototype.enqueue = function (data,priority) {
    let element = new PriorityQueue(data, priority);
    let added = false;

    for (let i = 0; i < this.array.length; i++){
        if (element[i].priority < this.array[i].priority) {
            this.array.splice(i, 0, element);
            added = true;
            break;
        }

    }
    if (!added) {
        this.array.push(element);
    }
    return this.array.length;
}

PriorityQueue.prototype.dequeue = function () {
    return this.array.shift();
}

PriorityQueue.prototype.front = function () {
    return this.array.length === 0 ? undefined : this.array[0].data;
};

PriorityQueue.prototype.size = function () {
    return this.array.length;
};

PriorityQueue.prototype.clear = function () {
    this.array = [];
};

