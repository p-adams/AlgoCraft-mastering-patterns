export class MaxHeap {
  heap: number[];

  constructor() {
    this.heap = [];
  }

  push(val: number): void {
    this.heap.push(val);
    this.heapifyUp();
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined;

    this.swap(0, this.heap.length - 1);
    const popped = this.heap.pop();
    this.heapifyDown();

    return popped;
  }

  private heapifyUp(): void {
    let currentIdx = this.heap.length - 1;

    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);

      if (this.heap[currentIdx] > this.heap[parentIdx]) {
        this.swap(currentIdx, parentIdx);
        currentIdx = parentIdx;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let currentIdx = 0;

    while (true) {
      const leftIdx = 2 * currentIdx + 1;
      const rightIdx = 2 * currentIdx + 2;
      let largestIdx = currentIdx;

      if (
        leftIdx < this.heap.length &&
        this.heap[leftIdx] > this.heap[largestIdx]
      ) {
        largestIdx = leftIdx;
      }

      if (
        rightIdx < this.heap.length &&
        this.heap[rightIdx] > this.heap[largestIdx]
      ) {
        largestIdx = rightIdx;
      }

      if (largestIdx !== currentIdx) {
        this.swap(currentIdx, largestIdx);
        currentIdx = largestIdx;
      } else {
        break;
      }
    }
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

export class TreeNode {
  #val: number;
  #left: TreeNode | null;
  #right: TreeNode | null;
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.#val = val;
    this.#left = left ?? null;
    this.#right = right ?? null;
  }

  public get val(): number {
    return this.#val;
  }

  public get left(): TreeNode | null {
    return this.#left;
  }

  public set left(v: TreeNode | null) {
    this.#left = v;
  }

  public get right(): TreeNode | null {
    return this.#right;
  }

  public set right(v: TreeNode | null) {
    this.#right = v;
  }
}
