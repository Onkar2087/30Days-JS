//1
console.log("Feature Request - 1");
function fact(n)
{
    if(n==0 || n==1){
        return 1;
    }

    return n*fact(n-1);
}

console.log(fact(5));
console.log(fact(10));
console.log("\n");

function fibo(n)
{
    if(n==0){
        return 0;
    }

    if(n==1){
        return 1;
    }

    return fibo(n-1) + fibo(n-2);
}

console.log(fibo(7));
console.log(fibo(11));
console.log("\n");

//2
console.log("Feature Request - 2");
function add(arr, size)
{
    if(size<=0)
    {
        return 0;
    }

    return arr[size-1] + add(arr, size-1);
}

arr1 = [1, 56, 90, 31];
arr2 = [7, 5, 4, 3];
console.log(add(arr1, 4));
console.log(add(arr2, 4));
console.log("\n");

function max(arr, size)
{
    if(size==1)
    {
        return arr[0];
    }

    return Math.max(arr[size-1], max(arr, size-1))
}

arr3 = [11, 56, 90, 31];
arr4 = [7, 5, 4, 3];
console.log(max(arr3, 4));
console.log(max(arr4, 4));
console.log("\n");

//3
console.log("Feature Request - 3");
function reverse(str)
{
    if(str == "")
    {
        return "";
    }

    return reverse(str.substr(1)) + str.charAt(0);
}

str1 = "Samose mei Aloo";
str2 = "Khada hoon aaj bhi vahi";
console.log(reverse(str1));
console.log(reverse(str2));
console.log("\n");

function palin(str)
{
    if(str.length == 1)
    {
        return true;
    }

    if(str.charAt(0) != str.charAt(str.length - 1))
    {
        return false;
    }
    return palin(str.substr(1, str.length-2));
}

let str3 = "Madam";
let str4 = "MadaM"
let str5 = "Chai";
console.log(palin(str3));
console.log(palin(str4));
console.log(palin(str5));
console.log("\n");

//4
console.log("Feature Request - 4");
function bSearch(arr, x, low, high)
{
    if(low> high)
    {
        return -1;
    }

    let mid = Math.floor((low + high)/2);

    if(arr[mid] == x)
    {
        return mid;
    }
    else if(arr[mid] < x)
    {
        return bSearch(arr, x, mid+1, high)
    }
    else
    {
        return bSearch(arr, x, low, mid-1);
    }
}

let brr = [23, 34, 67, 98, 110];
let brr1 = [1, 3, 6, 10, 17];
console.log(bSearch(brr, 67, 0, 5));
console.log(bSearch(brr1, 17, 0, 5));
console.log("\n");

function find(arr, x, size)
{
    if(size == 0)
    {
        return 0;
    }

    let c = (arr[size-1] == x) ? 1 : 0;

    return c + find(arr, x, size-1)
}

let crr = [12, 45, 67, 67, 91, 12, 67, 67];
console.log(find(crr, 12, 8));
console.log(find(crr, 67, 8));
console.log(find(crr, 1, 8));
console.log("\n");

//5
console.log("Feature Request - 5");
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inOrderTraversal(node) {
    if (node === null) {
        return;
    }
    
    inOrderTraversal(node.left);
    
    console.log(node.value);
    
    inOrderTraversal(node.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
inOrderTraversal(root);
console.log("\n");

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateDepth(node) {
    if (node === null) {
        return 0;
    }

    let leftDepth = calculateDepth(node.left);
    let rightDepth = calculateDepth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);
root1.right.left = new Node(6);
root1.right.right = new Node(7);

console.log("The depth of the binary tree is:", calculateDepth(root1));
console.log("\n");