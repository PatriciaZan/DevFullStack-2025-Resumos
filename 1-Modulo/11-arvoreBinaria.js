// Dois filhos apenas

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)

        if(this.root === null){
            this.root = newNode
            return
        }

        this.insertNode(this.root, newNode)
    }

    insertNode(currentNode, newNode){
        // verifica se é menor que a raiz
        if(newNode.value < currentNode.value){
            if(currentNode.left === null){
                currentNode.left = newNode
            } else{
                this.insertNode(currentNode.left, newNode)
            }
        } else{
            if(currentNode.right === null){
                currentNode.right = newNode
            }else {
                this.insertNode(currentNode.right, newNode)

            }
        }
    }

    inorderTraversal(node = this.root){
        if(node !== null){
            this.inorderTraversal(node.left)
            console.log(node.value);
            this.inorderTraversal(node.right)
        }
    }

    search(value, node = this.root){
        if(node === null) return false

        if(value === node.value) return true

        if(value < node.value){
            return this.search(value, node.left)
        } else{
            return this.search(value, node.right)
        }

        //return -1
    }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
tree.insert(11)
tree.insert(3)
tree.insert(6)
tree.insert(10)
tree.insert(9)

tree.inorderTraversal()

// Binary search

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let numbers = [1, 3, 5, 7, 9, 10, 12, 13, 16, 20];

console.log(binarySearch(numbers, 10));