/* Implementation details
    1. Visualize it as binary tree where (every parent Node > its child nodes) recursively
    2. the tree is complete binary tree. i.e. nodes of tree will be filled from left to right without missing
        any nodes
    3. This complete binary tree will be stored in array representation
    4. For every i'th node:
        - left child will be located at ( i*2 + 1 )th index
        - right child will be located at ( i*2 + 2 )th index
        - parent will be located at (Floor((i-1)/2))th index
*/

class MaxHeap {
  constructor() {
    this.maxHeap = [];
  }

  // push an element into Heap
  push(element) {
    this.maxHeap.push(element);
    this.heapifyUp();
  }

  // remove top element from heap and return it
  poll() {
    let polledElement = this.maxHeap[0];
    this.maxHeap[0] = this.maxHeap[this.maxHeap.length - 1];
    this.maxHeap.length--;
    this.heapifyDown();
    return polledElement;
  }

  // return top element (In case of Max heap its largest element)
  peek() {
    return this.maxHeap[0]
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.maxHeap[this.getLeftChildIndex(currentIndex)] != undefined) {
      let biggestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChildIndex(currentIndex) != undefined &&
        this.maxHeap[this.getRightChildIndex(currentIndex)] > this.maxHeap[biggestChildIndex]
      ) {
        biggestChildIndex = this.getRightChildIndex(currentIndex);
      }
      if(this.maxHeap[biggestChildIndex]>this.maxHeap[currentIndex]){
        this.swap(biggestChildIndex,currentIndex);
        currentIndex = biggestChildIndex
      }
      else{
        return
      }
    }
  }

  heapifyUp() {
    let currentIndex = this.maxHeap.length - 1;
    while (
      this.maxHeap[currentIndex] >
      this.maxHeap[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  swap(i1, i2) {
    let temp = this.maxHeap[i1];
    this.maxHeap[i1] = this.maxHeap[i2];
    this.maxHeap[i2] = temp;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return index * 2 + 1;
  }

  getRightChildIndex(index) {
    return index * 2 + 2;
  }
}

let maxHeapInstance = new MaxHeap();

maxHeapInstance.push(12);
maxHeapInstance.push(10);
maxHeapInstance.push(8);
maxHeapInstance.push(20);
maxHeapInstance.push(15);

console.log(maxHeapInstance.maxHeap)
console.log(maxHeapInstance.peek())

console.log(maxHeapInstance.poll())
console.log(maxHeapInstance.maxHeap)
console.log(maxHeapInstance.poll())
console.log(maxHeapInstance.poll())

