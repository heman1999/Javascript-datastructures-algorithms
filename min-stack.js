var MinStack = function () {
  this.stack = [];
  this.start = -1;
  this.min = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.start === -1) {
    this.min = x;
  } else if (x < this.min) {
    let temp = x;
    x = x * 2 - this.min;
    this.min = temp;
  }
  this.stack[++this.start] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.start === -1) {
    return;
  } else {
    if (this.stack[this.start] >= this.min) {
      this.start--;
    } else {
      this.min = 2 * this.min - this.stack[this.start--];
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.start === -1) {
    return;
  } else {
    if (this.stack[this.start] >= this.min) {
      return this.stack[this.start];
    } else {
      return this.min;
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length === 0) {
    return;
  } else {
    return this.min;
  }
};

var obj = new MinStack();
obj.push(5);
obj.display();
obj.push(-3);
obj.display();
obj.push(-8);
obj.display();
obj.push(-1);
obj.display();
obj.pop();
obj.display();
obj.pop();
obj.display();
obj.pop();
obj.display();
