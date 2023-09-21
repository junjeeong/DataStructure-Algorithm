// Stack() :  스택 생성자 함수
function Stack(arr) {
    this.arr = arr ? arr : [];
}

// getBuffer() : 객체 내 데이터 셋 반환
Stack.prototype.getBuffer = function () {
    return this.arr.slice();
    // slice() :  빈 인자값을 넣었을때 해당 배열을 얕은복사한 새로운 배열을 반환한다.
}

// isEmpty() : 객체 내 데이터 o/x
Stack.prototype.isEmpty = function() {
    return this.length === 0;
}

// push() : 데이터 추가
Stack.prototype.push = function(element) {
    return this.arr.push(element);
}

// pop() : 데이터 삭제
Stack.prototype.pop = function ()  {
    return this.arr.pop();
}

// peek() : 가장 끝 데이터 반환
Stack.prototype.peek = function ()  {
    return this.arr[this.arr.length - 1];    
}

// size() : 스택 내 데이터 개수 확인
Stack.prototype.size = function ()  {
    return this.arr.length;
}

let stack = new Stack([1, 2]);
console.log(stack);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack.pop());

// index() : 매개변수로 넘어온 element의 위치 확인
Stack.prototype.index = function (element, position=0) {
    for (let i = position; i < this.arr.length; i++){
        if (element === this.arr[i]) return i;
    }
}

// include() : 매개변수로 넘어온 elements가 있는지 확인
Stack.prototype.include = function (element) {
    for (let i = 0; i < this.arr.length; i++){
        if (element == this.arr[i]) return true;
    }
    return false;
}

