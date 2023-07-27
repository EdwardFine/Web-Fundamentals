const { Stack } = require("./Stack");
/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.items.length;
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length == 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }

    /**
     * Logs the items of this queue.
     * - Time: O(n) linear.
     * - Space: O(n) linear.
     * @returns {string} The same string that is logged.
     */
    print() {
        const str = this.items.join(" ");
        console.log(str);
        return str;
    }
    /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(1) constant.
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
    compareQueues(q2) {
        if (this.size() != q2.size()) {
            return false;
        }
        for (let i = 0; i < this.size(); i++) {
            const curr1 = this.dequeue();
            const curr2 = q2.dequeue()
            if (curr1 != curr2) {
                return false;
            }
            this.enqueue(curr1);
            q2.enqueue(curr2);
        } return true;
    }

    /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(n) from the stack being used to store the items again.
   * @returns {boolean}
   */
    isPalindrome() {
        if (this.size < 2) {
            return true;
        }
        let stack = [];
        for (let i = 0; i < this.size(); i++) {
            const curr = this.dequeue();
            stack.push(curr);
            this.enqueue();
        }
        for (let i = 0; i < this.size(); i++) {
            const curr = this.dequeue();
            const temp = stack.pop();
            if (curr != temp) {
                return false
            }
            this.enqueue(curr);
        } return true;

    }
    isSumOfHalvesEqual() {
        if (this.isEmpty()) return false;
        let rightSum = 0;
        let leftSum = 0;
        const mid = Math.ceil(this.items.length / 2)
        for (let i = 0; i < this.items.length; i++) {
            const val = this.dequeue();
            if (i < mid) {
                leftSum += val;

            } else {
                rightSum += val;
            }
            this.enqueue(val);
        }
        console.log("Left", leftSum, rightSum)
        return leftSum === rightSum;
    }
}

/* EXTRA: Rebuild the above class using a linked list instead of an array. */

/* 
    In order to maintain an O(1) enqueue time complexity like .push with an array
    We add a tail to our linked list so we can go directly to the last node
*/

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.top = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() {
        return this.size == 0;
    }

    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(val) {
        let node = new QueueNode(val);
        if (this.isEmpty()) {
            this.top = node;
            this.size += 1;
            return this.size
        }
        let runner = this.top;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
        this.size += 1;
        return this.size;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let nodeToReturn = this.top;
        this.top = this.top.next;
        return nodeToReturn.data;
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() {
        return this.head;
    }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchVal) {
        if (this.isEmpty()) {
            return false;
        }
        let runner = this.top;
        while (runner != null) {
            if (runner.data === searchVal) {
                return true;
            }
            runner = runner.next;
        } return false;
    }
}

let queue1 = new Queue();
let queue2 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);
queue1.enqueue(5);
queue1.print();
console.log(queue1.size());
console.log(queue1.compareQueues(queue2));
queue1.print();
queue2.enqueue(1);
queue2.enqueue(2);
queue2.enqueue(3);
queue2.enqueue(4);
queue2.enqueue(5);
console.log(queue1.compareQueues(queue2));
console.log("=========================================")
let slQueue = new LinkedListQueue();
console.log(slQueue.enqueue(1));
console.log(slQueue.enqueue(2));
console.log(slQueue.enqueue(3));
console.log(slQueue.enqueue(4));
console.log(slQueue.enqueue(5));
console.log(slQueue.dequeue());
console.log(slQueue.contains(1));
console.log(slQueue.contains(5));

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    /**
     * Adds a new item to the back of the queue.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} item To be added.
     * @returns {number} The new number of items in the queue.
     */
    enqueue(item) {
        this.stack1.push(item);
        return this.stack1.size();
    }

    /**
     * Removes the next item in the line / queue.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The removed item.
     */
    dequeue() {
        if(this.stack1.isEmpty()){
            return null;
        }
        const length = this.stack1.size()-1;
        for(let i =0;i<length;i++){
            this.stack2.push(this.stack1.pop());
        }
        const toReturn = this.stack1.pop();
        for(let i=0;i<length;i++){
            this.stack1.push(this.stack2.pop());
        }
        return toReturn;
    }
}

const two1 = new TwoStackQueue();
const two2 = new TwoStackQueue();

two1.enqueue(1);
two1.enqueue(2);
two1.enqueue(3);
two1.enqueue(4);
two1.enqueue(5);
console.log(two1.stack1);
console.log(two1.dequeue());
console.log(two1.stack1);
