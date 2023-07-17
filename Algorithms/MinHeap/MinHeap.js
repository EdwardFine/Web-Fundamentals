/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    idxOfParent(i){
        return Math.floor(i/2);
    }
    idxOfLeftChild(i){
        return i*2;
    }
    idxOfRightChild(i){
        return i*2 + 1;
    }


    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        if (this.heap[1] === undefined) {
            return null
        } return this.heap[1];
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        this.heap.push(num);
        let i = this.heap.length-1;
        while(true){
            if(this.heap[i] < this.heap[this.idxOfParent(i)]){
                [this.heap[i],this.heap[this.idxOfParent(i)]]= [this.heap[this.idxOfParent(i)],this.heap[i]];
                i = this.idxOfParent(i);
            }else{return this}
        }
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
}

let testHeap = new MinHeap;
let insertHeap = new MinHeap;
testHeap.heap=[null,1,9,2,13,10,5,3,15,14,11,21,7,6,4,17,16,24,28,23,12,22,27,30,8,20,26,19,31,18,25,29];
console.log(testHeap.top());
testHeap.insert(10);
testHeap.printHorizontalTree();

insertHeap.insert(31)
.insert(30)
.insert(29)
.insert(28)
.insert(27)
.insert(26)
.insert(25)
.insert(24)
.insert(23)
.insert(22)
.insert(21)
.insert(20)
.insert(19)
.insert(18)
.insert(17)
.insert(16)
.insert(15)
.insert(14)
.insert(13)
.insert(12)
.insert(11)
.insert(10)
.insert(9)
.insert(8)
.insert(7)
.insert(6)
.insert(5)
.insert(4)
.insert(3)
.insert(2)
.insert(1);
console.log("");
insertHeap.printHorizontalTree();