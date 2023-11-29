
// Represents the btree logic
class BTree {
    constructor() {
      this.c = document.getElementById('my-canvas');
      this.ctx = this.c.getContext('2d');
      this.line = new Line();
      this.root = null;
      this.depth = 0;
      this.postions = [];
    }
  
    // Getter for root
    getRoot() {
      return this.root;
    }
    getDepth(){
      this.depth = this.calculateDepth(this.root)
      return this.depth
    }
  
    add(data) {
      if (this.root) {
        
        this.recursiveAddNode(this.root, null, null, data);
      } else {
        this.root = this.addAndDisplayNode(this.c.width / 2, 30, 15, this.ctx, data);
      }
    }
  
    recursiveAddNode(node, prevNode, coordinateCallback, data) {
      if (!node) {
        const xy = coordinateCallback;
        this.postions.push(xy);
        const newNode = this.addAndDisplayNode(xy.cx, xy.cy, 15, this.ctx, data);
        this.line.draw(prevNode.getX(), prevNode.getY(), xy.cx, xy.cy, prevNode.getRadius(), this.ctx);
        return newNode;
      } else {
        if (data <= node.getData()) {
          node.leftNode = this.recursiveAddNode(node.leftNode, node, node.leftCoordinate(), data);
        } else {
          node.rightNode = this.recursiveAddNode(node.rightNode, node, node.rightCoordinate(), data);
        }
        return node;
      }
    }
    
    addAndDisplayNode(x, y, r, ctx, data) {
      const node = new Node(x, y, r, ctx, data);
      node.draw();
      return node;
    }
    displayData(root){
      if (root != null){
        this.displayData(root.leftNode)
        console.log(root);
        this.displayData(root.rightNode)
      }
    }
    calculateDepth(node) {
      if (node === null) {
          return 0;
      } else {
          const leftDepth = this.calculateDepth(node.leftNode);
          const rightDepth = this.calculateDepth(node.rightNode);
          return  Math.max(leftDepth, rightDepth) + 1;
      }
  }

    findDepth (root , target, currentDepth = 0) {
      if (root === null) return -1;

      if (root.data === target) 
          return currentDepth;
      const leftDepth = this.findDepth(root.leftNode, target, currentDepth + 1);
      const rightDepth = this.findDepth(root.rightNode, target, currentDepth + 1);

      if (leftDepth !== -1) {
          return leftDepth;
      } else if (rightDepth !== -1) {
          return rightDepth;
      }
      return -1;
  }
  }
  
  const btree = new BTree();
 
  function addToTree() {
    const input = document.getElementById('tree-input');
    const btn = document.getElementById('add-to-tree')
    if (!(btree.getDepth() == 6)){
      const value = parseInt(input.value);
      if (!isNaN(value)) {
        btree.add(value);
        input.value = 'Enter number'
      } else {
        alert('Wrong input');
      }
    }else {
      btn.innerText = 'Tree is Full'
    }

  }
  
  // Usage
  
  















