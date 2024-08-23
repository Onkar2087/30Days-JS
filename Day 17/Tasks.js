//Task-1
console.log("Task-1");
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let node1 = new Node(5);
console.log(node1);
console.log("\n");

//Task-2
console.log("Task-2");
class LinkedList{
    constructor(){
        this.head = null;
    }

    addNode(value){
        const newNode = new Node(value);

        if(this.head == null){
            this.head = newNode;
        }
        else{
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    remove(){
        if(this.head === null){
            console.log("The list is empty");
            return;
        }
        else{
            let current = this.head;
            while(current.next.next !== null){
                current = current.next;
            }
            current.next = null;
        }
    }

    display()
    {
        if(this.head == null){
            console.log("The list is empty");
            return;
        }

        let current =  this.head;
        let output = "";
        while(current !== null)
        {
            output += current.value + "->";
            current = current.next;
        }
        console.log(output + "null");
        
    }
}

let o1 = new LinkedList();
o1.addNode(2);
o1.display();
o1.addNode(3);
o1.addNode(4);
o1.addNode(5);
o1.display();
o1.remove();
o1.remove();
o1.display();
console.log("\n");

//Task-3
console.log("Task-3");
class Stack
{
    constructor()
    {
        this.items = [];
    }

    push(element)
    {
        this.items.push(element);
    }

    pop()
    {
        if(this.items.length == 0){
            console.log("Stack is empty");
            return null;
        }
        return this.items.pop();
    }

    peek(){
        if(this.items.length == 0){
            console.log("No elements to display")
            return null;
        }

        console.log(this.items[this.items.length - 1]);
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let o2 = new Stack();
o2.peek();
o2.push(10);
o2.push(20);
o2.peek()
o2.push(30);
o2.push();
o2.pop();
o2.push(40);
o2.pop()
o2.peek();
console.log("\n");

//Task-4
console.log("Task-4");
function revString(str){
    const stack = new Stack();
    let rev = "";

    for(let char of str){
        stack.push(char);
    }

    while(!stack.isEmpty()){
        rev += stack.pop();
    }

    return rev;
}

const originalString = "Hello World";
const reversed = revString(originalString);

console.log("Original String:", originalString); 
console.log("Reversed String:", reversed); 
console.log("\n");

//Task-5
console.log("Task-5");
class Queue{
    constructor()
    {
        this.items = [];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }
        return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return null;
        }
        console.log(this.items[0]);
        
    }

    isEmpty(){
        return this.items.length === 0;
    }

    display() {
        console.log(this.items.join(' '));
    }
}

let q1 = new Queue();
q1.front();
q1.enqueue(10);
q1.front();
q1.dequeue();
q1.enqueue(20);
q1.enqueue(30);
q1.front();
console.log("\n");

//Task-6
console.log("Task-6");
class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    addPrintJob(job) {
        console.log(`Adding print job: ${job}`);
        this.queue.enqueue(job);
    }

    processPrintJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs to process.");
        } else {
            const job = this.queue.dequeue();
            console.log(`Processing print job: ${job}`);
        }
    }

    showPendingJobs() {
        if (this.queue.isEmpty()) {
            console.log("No pending print jobs.");
        } else {
            console.log("Pending print jobs:");
            this.queue.display();
        }
    }
}

const printer = new PrinterQueue();

printer.addPrintJob("Document1.pdf");
printer.addPrintJob("Image.png");
printer.addPrintJob("Presentation.pptx");

console.log("\nPending print jobs:");
printer.showPendingJobs();

console.log("\nProcessing print jobs:");
printer.processPrintJob(); 
printer.processPrintJob(); 

console.log("\nPending print jobs after processing:");
printer.showPendingJobs();

printer.processPrintJob();
printer.processPrintJob(); 
console.log("\n");

//Task-7
console.log("Task-7");
class TreeNode{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let t1 = new TreeNode(5);
console.log(t1);
console.log("\n");

//Task-8
console.log("Task-8");
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new TreeNode(value);

        if(this.root== null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } 
            else {
                this.insertNode(node.left, newNode);
            }
        } 
        else {
            if (node.right === null) {
                node.right = newNode;
            } 
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(3);
tree.insert(7);
tree.insert(15);
tree.insert(30);

console.log("In-order traversal of the binary tree:");
tree.inOrderTraversal();
console.log("\n");


//Task-9
console.log("Task-9");
class Graph {
    constructor() {
        this.adjacencyList = new Map(); 
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []); 
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
            this.adjacencyList.get(vertex1).push(vertex2);
            this.adjacencyList.get(vertex2).push(vertex1); 
        } else {
            console.log("One or both vertices not found in the graph.");
        }
    }

    bfs(startingVertex) {
        if (!this.adjacencyList.has(startingVertex)) {
            console.log("Starting vertex not found in the graph.");
            return;
        }

        let visited = new Set();
        let queue = [];

        visited.add(startingVertex);
        queue.push(startingVertex);

        while (queue.length > 0) {
            let vertex = queue.shift();
            console.log(vertex);

            let neighbors = this.adjacencyList.get(vertex);

            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor); 
                }
            }
        }
    }

    bfs(startingVertex) {
        if (!this.adjacencyList.has(startingVertex)) {
            console.log("Starting vertex not found in the graph.");
            return;
        }

        let visited = new Set(); // To keep track of visited vertices
        let queue = []; // Queue for BFS

        visited.add(startingVertex);
        queue.push(startingVertex);

        while (queue.length > 0) {
            let vertex = queue.shift(); // Dequeue a vertex
            console.log(vertex); // Visit the vertex

            // Get all adjacent vertices
            let neighbors = this.adjacencyList.get(vertex);

            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor); // Mark as visited
                    queue.push(neighbor); // Enqueue the neighbor
                }
            }
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");

console.log("BFS starting from vertex A:");
graph.bfs("A");
console.log("\n");

//Task-10
console.log("Task-10");

const graph1 = new Graph();

graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
graph1.addVertex("E");

graph1.addEdge("A", "B");
graph1.addEdge("A", "C");
graph1.addEdge("B", "D");
graph1.addEdge("C", "E");
graph1.addEdge("D", "E");

console.log("BFS starting from vertex A:");
graph1.bfs("A");
console.log("\n");