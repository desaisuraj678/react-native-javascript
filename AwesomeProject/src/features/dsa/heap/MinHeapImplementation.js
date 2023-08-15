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

class MinHeap {
  constructor() {
    this.minHeap = [];
  }

  // push an element into Heap
  push(element) {
    this.minHeap.push(element);
    this.heapifyUp();
  }

  // remove top element from heap and return it
  poll() {
    let polledElement = this.minHeap[0];
    this.minHeap[0] = this.minHeap[this.minHeap.length - 1];
    this.minHeap.length--;
    this.heapifyDown();
    return polledElement;
  }

  // return top element (In case of Max heap its largest element)
  peek() {
    return this.minHeap[0]
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.minHeap[this.getLeftChildIndex(currentIndex)] != undefined) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.getRightChildIndex(currentIndex) != undefined &&
        this.minHeap[this.getRightChildIndex(currentIndex)] < this.minHeap[smallestChildIndex]
      ) {
        smallestChildIndex = this.getRightChildIndex(currentIndex);
      }
      if(this.minHeap[smallestChildIndex]<this.minHeap[currentIndex]){
        this.swap(smallestChildIndex,currentIndex);
        currentIndex = smallestChildIndex
      }
      else{
        return
      }
    }
  }

  heapifyUp() {
    let currentIndex = this.minHeap.length - 1;
    while (
      this.minHeap[currentIndex] <
      this.minHeap[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  swap(i1, i2) {
    let temp = this.minHeap[i1];
    this.minHeap[i1] = this.minHeap[i2];
    this.minHeap[i2] = temp;
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

let minHeapInstance = new MinHeap();

minHeapInstance.push(12);
minHeapInstance.push(10);
minHeapInstance.push(8);
minHeapInstance.push(20);
minHeapInstance.push(15);

console.log(minHeapInstance.minHeap)
console.log(minHeapInstance.peek())

console.log(minHeapInstance.poll())
console.log(minHeapInstance.minHeap)
console.log(minHeapInstance.poll())
console.log(minHeapInstance.poll())

