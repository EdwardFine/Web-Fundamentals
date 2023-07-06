// This is the class for our Singly Linked Node
class SLNode {
    // The constructor is built to take 1 parameter; the value of the node we want
    // to create
    constructor(val) {
        // The node's actual value being set to the value passed in through the constructor
        this.value = val;
        // And the pointer that refers to the node next in the sequence after
        // this node. Note it starts as null, because when you first create a node,
        // it is not connected to anything.
        this.next = null;
    }
}
class SLList {
    constructor() {
        // The head marks the beginning of the linked list.
        this.head = null;
        // Note that it's null. This is because when you first create a list, it's empty!
    }
    /**
   * Determines if this list is empty. Write a method that returns a
   * boolean based on whether or not the list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
    isEmpty() {
        return this.head == null
    }

    /*
      Write a method that will add to the back of a singly linked list.
  
      Hint: Essentially, have a runner start at the head, traverse along to the end, 
      then create a new node at the end, and reassign the last node's .next pointer
      to the new node.
  
      * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
    */
    addToBack(value) {
        if (this.isEmpty()) {
            this.head = new SLNode(value);
            return this;
        }
        let runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        } runner.next = new SLNode(value);
        return this;
    }
    /**
     * BONUS: Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data to be added to the new node.
     * @param {?SLNode} runner The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {SLList} This list.
     */
    addToBackRecursive(data, runner = this.head) {
        if (this.isEmpty()) {
            this.head = new SLNode(data);
            return this;
        }
        if (runner.next === null) {
            runner.next = new SLNode(data);
            return this;
        } return this.addToBackRecursive(data, runner.next);
    }

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SLList} This list.
     */
    addToFront(value) {
        if (this.isEmpty()) {
            this.head = new SLNode(value);
            return this;
        }
        let newNode = new SLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeHead() {
        if (this.isEmpty()) {
            return this;
        } else if (this.head.next == null) {
            this.head = null;
            return this;
        } else {
            this.head = this.head.next;
            return this;
        }
    }

    // 
    /**BONUS: Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        //Code goes here
        if (this.isEmpty()) {
            return 0;
        }
        let sum = 0;
        let count = 0;
        let runner = this.head;
        while (runner !== null) {
            sum += runner.value;
            count++;
            runner = runner.next;
        }
        return sum / count;
    }

    /**
     * Removes the last node of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack() {
        if (this.isEmpty()) {
            return this;
        }
        let runner = this.head;
        if (runner.next === null) {
            this.head = null;
            return this;
        }
        while (runner.next.next !== null) {
            runner = runner.next
        } runner.next = null;
        return this;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val) {
        //Code goes here
        if (this.isEmpty()) {
            return false;
        } let runner = this.head;
        while (runner != null) {
            if (runner.value === val) {
                return true;
            } runner = runner.next;
        } return false;
    }

    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?ListNode} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {
        if (this.isEmpty()) {
            return false;
        } else if (current.value === val) {
            return true;
        }
        else if (current.next === null) {
            return false;
        } else {
            return this.containsRecursive(val, current.next);
        }
    }

    /*
   * EXTRA
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
    recursiveMax(runner = this.head, maxNode = this.head) {
        if (this.isEmpty()) {
            return null;
        }if(runner === null){
            return maxNode;
        }else if(runner.value > maxNode.value){
            maxNode = runner;
        }return this.recursiveMax(runner.next,maxNode);
    }

    //****** Thursday *******

    /**
     * Retrieves the data of the second to last node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        if (this.isEmpty() || this.head.next === null) {
            return null
        } let current = this.head;
        while (current.next.next != null) {
            current = current.next;
        } return current;
    }

    /**
     * Removes the node that has the matching given val as it's data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) {
        if (this.isEmpty()) {
            return false;
        } let current = this.head;
        if (current.value === val) {
            this.removeHead();
            return true;
        }
        while (current.next != null) {
            if (current.next.value === val) {
                current.next = current.next.next;
                return true;
            } current = current.next;
        } return false;
    }

    // EXTRA
    /**
     * Inserts a new node before a node that has the given value as its data.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} newVal The value to use for the new node that is being added.
     * @param {any} targetVal The value to use to find the node that the newVal
     *    should be inserted in front of.
     * @returns {boolean} To indicate whether the node was pre-pended or not.
     */
    prepend(newVal, targetVal) {
        if (this.isEmpty()) {
            return false;
        }let current = this.head;
        if (current.value === targetVal) {
            this.addToFront(newVal);
            return true;
        }
        while (current.next != null) {
            if (current.next.value === targetVal) {
                let prepend = new SLNode(newVal);
                prepend.next=current.next;
                current.next = prepend;
                return true;
            } current = current.next;
        }return false;
    }

    //****** Friday *******
    /**
     * Concatenates the nodes of a given list onto the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {SinglyLinkedList} addList An instance of a different list whose
     *    whose nodes will be added to the back of this list.
     * @returns {SinglyLinkedList} This list with the added nodes.
     */
    concat(addList) { }

    /**
     * Finds the node with the smallest data and moves that node to the front of
     * this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {SinglyLinkedList} This list.
     */
    moveMinToFront() { }

    // EXTRA
    /**
     * Splits this list into two lists where the 2nd list starts with the node
     * that has the given value.
     * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
     * and the return value will be a new list containing (5=>2=>4)
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} val The value in the node that the list should be split on.
     * @returns {SinglyLinkedList} The split list containing the nodes that are
     *    no longer in this list.
     */
    splitOnVal(val) { }


    // Here's a gimme: This will print the contents of a singly linked list.
    printList() {
        if (this.isEmpty()) {
            console.log("This list is empty");
            return this;
        }
        let toPrint = "";
        let runner = this.head;
        while (runner != null) {
            toPrint += `${runner.value} -> `;
            runner = runner.next;
        }
        console.log(toPrint);
        return this;
    }

}

/******************************************************************* 
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
let myList = new SLList();
myList.addToBack(1).addToBack(2).addToBack(3).addToBack(4).addToBack(5).addToBack(-8).addToBack(-5);
myList.printList()
console.log(myList.average());
myList.removeBack().printList().removeHead().printList();
console.log(myList.contains(4));
console.log(myList.contains(-8));
console.log(myList.contains(1));
myList.addToBackRecursive(7);
myList.printList();
console.log(myList.containsRecursive(2));
console.log(myList.containsRecursive(6));
console.log(myList.secondToLast().value);
console.log(myList.removeVal(4));
myList.printList();
console.log(myList.prepend(6,-8));
myList.printList();
console.log(myList.recursiveMax().value);

  // const singleNodeList = new SinglyLinkedList().addToBack([1]);
  // const biNodeList = new SinglyLinkedList().addToBack([1, 2]);
  // const firstThreeList = new SinglyLinkedList().addToBack([1, 2, 3]);
  // const secondThreeList = new SinglyLinkedList().addToBack([4, 5, 6]);
  // const unorderedList = new SinglyLinkedList().addToBack([-5, -10, 4, -3, 6, 1, -7, -2,]);