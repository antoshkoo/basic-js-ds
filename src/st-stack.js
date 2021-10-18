const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
module.exports = class Stack {
  constructor(elem) {
    this.elem = elem;
    this.arr = [];
  }
  push(elem) {
    this.arr.push(elem);
  }

  pop() {
    return this.arr.pop();
  }

  peek(elem) {
    return this.arr.slice(-1)[0];
  }
};
