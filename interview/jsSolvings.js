// 60 JavaScript Exercises for Interviews - All Levels

// Beginner Level Exercises (1-20)

// 1. Hello, World!
function helloWorld() {
  return "Hello, World!";
}
// Simple function returning a string

// 2. Add Two Numbers
function add(a, b) {
  return a + b;
}
// Basic arithmetic operation

// 3. Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
// Formula application

// 4. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
// String manipulation using array methods

// 5. Factorialize a Number
function factorialize(num) {
  return num <= 1 ? 1 : num * factorialize(num - 1);
}
// Recursive function for factorial calculation

// 6. Find the Longest Word in a String
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map((word) => word.length));
}
// String splitting, mapping, and Math.max with spread operator

// 7. Return Largest Numbers in Arrays
function largestOfFour(arr) {
  return arr.map((subArr) => Math.max(...subArr));
}
// Nested array manipulation with map and Math.max

// 8. Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}
// String slicing for end comparison

// 9. Repeat a String
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : "";
}
// Conditional repetition using the repeat method

// 10. Truncate a String
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
// Conditional string slicing

// 11. Finders Keepers
function findElement(arr, func) {
  return arr.find(func);
}
// Using find method with a callback function

// 12. Check if a Value is Boolean
function isBoolean(value) {
  return typeof value === "boolean";
}
// Type checking

// 13. Check if a Number is Even or Odd
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
// Modulo operator for parity check

// 14. Find the Smallest Number in an Array
function findSmallestNum(arr) {
  return Math.min(...arr);
}
// Using Math.min with spread operator

// 15. Calculate the Sum of an Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}
// Array reduction for sum calculation

// 16. Check if a String Contains a Substring
function containsSubstring(str, substr) {
  return str.includes(substr);
}
// Using the includes method for substring check

// 17. Convert Minutes to Seconds
function minutesToSeconds(minutes) {
  return minutes * 60;
}
// Simple multiplication

// 18. Find the Index of the First Occurrence in a String
function findFirstOccurrence(str, char) {
  return str.indexOf(char);
}
// Using indexOf for character position

// 19. Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// Using Set for unique values

// 20. Capitalize the First Letter of a String
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
// String manipulation for capitalization

// Intermediate Level Exercises (21-40)

// 21. Title Case a Sentence
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
// Regex for title casing

// 22. Slice and Splice
function frankenSplice(arr1, arr2, n) {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
// Array slicing and spreading

// 23. Falsy Bouncer
function bouncer(arr) {
  return arr.filter(Boolean);
}
// Filtering falsy values

// 24. Where do I Belong
function getIndexToIns(arr, num) {
  return arr.filter((val) => num > val).length;
}
// Array filtering for insertion index

// 25. Mutations
function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every((letter) => arr[0].toLowerCase().includes(letter));
}
// String manipulation and array methods

// 26. Chunky Monkey
function chunkArrayInGroups(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
}
// Array chunking using Array.from

// 27. Sum All Numbers in a Range
function sumAll(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  return ((max - min + 1) * (min + max)) / 2;
}
// Mathematical formula for sum of range

// 28. Diff Two Arrays
function diffArray(arr1, arr2) {
  return [...arr1, ...arr2].filter(
    (item) => !arr1.includes(item) || !arr2.includes(item)
  );
}
// Array comparison using filter

// 29. Seek and Destroy
function destroyer(arr, ...args) {
  return arr.filter((item) => !args.includes(item));
}
// Array filtering with rest parameters

// 30. Wherefore art thou
function whatIsInAName(collection, source) {
  return collection.filter((obj) =>
    Object.keys(source).every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}
// Object property matching

// 31. Spinal Tap Case
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
// Regex for spinal case conversion

// 32. Pig Latin
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}
// Regex for Pig Latin conversion

// 33. Search and Replace
function myReplace(str, before, after) {
  const newAfter =
    before[0] === before[0].toUpperCase()
      ? after[0].toUpperCase() + after.slice(1)
      : after[0].toLowerCase() + after.slice(1);
  return str.replace(before, newAfter);
}
// String replacement with case matching

// 34. DNA Pairing
function pairElement(str) {
  const pairs = { A: "T", T: "A", C: "G", G: "C" };
  return str.split("").map((char) => [char, pairs[char]]);
}
// DNA base pairing

// 35. Missing letters
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== str.charCodeAt(0) + i) {
      return String.fromCharCode(str.charCodeAt(i) - 1);
    }
  }
}
// Character code manipulation for missing letter

// 36. Sorted Union
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}
// Array flattening and Set for unique values

// 37. Convert HTML Entities
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, (match) => htmlEntities[match]);
}
// HTML entity conversion using regex

// 38. Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let prev = 0,
    curr = 1,
    sum = 0;
  while (curr <= num) {
    if (curr % 2 !== 0) sum += curr;
    [prev, curr] = [curr, prev + curr];
  }
  return sum;
}
// Fibonacci sequence generation and sum calculation

// 39. Sum All Primes
function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (
      Array(i)
        .fill()
        .every((_, j) => i % (j + 2) || j + 2 === i)
    )
      sum += i;
  }
  return sum;
}
// Prime number checking and summation

// 40. Smallest Common Multiple
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const range = Array(max - min + 1)
    .fill()
    .map((_, i) => i + min);
  return range.reduce((lcm, num) => (lcm * num) / gcd(lcm, num));

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
}
// LCM calculation using GCD

// Advanced Level Exercises (41-60)

// 41. Drop it
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) arr.shift();
  return arr;
}
// Array manipulation based on function condition

// 42. Steamroller
function steamrollArray(arr) {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(
        Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten
      ),
    []
  );
}
// Recursive array flattening

// 43. Binary Agents
function binaryAgent(str) {
  return str
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
}
// Binary to ASCII conversion

// 44. Everything Be True
function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}
// Object property truthiness check

// 45. Arguments Optional
function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}
// Function currying and argument checking

// 46. Make a Person
function Person(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };

  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (first) {
    fullName = first + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };

  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
  };
}
// Object-oriented programming with closures

// 47. Map the Debris
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earth, 3) / GM)
    );
    return { name, orbitalPeriod };
  });
}
// Mathematical calculations with object manipulation

// 48. Pairwise
function pairwise(arr, arg) {
  return arr.reduce((sum, num, i) => {
    const pair = arr.indexOf(arg - num, i + 1);
    if (pair !== -1) {
      arr[i] = arr[pair] = NaN;
      return sum + i + pair;
    }
    return sum;
  }, 0);
}
// Array pairing with index summation

// 49. Implement Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
// Bubble sort implementation

// 50. Implement Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
// Merge sort implementation

// 51. Implement Quick Sort
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [],
    right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
// Quick sort implementation

// 52. Implement Binary Search
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
// Binary search implementation

// 53. Implement a Stack
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.isEmpty()) return "Underflow";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
    //[Content from exercises 1-53 remains the same]
  }
  printStack() {
    return this.items.toString();
  }
}
// Stack data structure implementation

// 54. Implement a Queue
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  printQueue() {
    return this.items.toString();
  }
}
// Queue data structure implementation

// 55. Implement a Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    return elements.join(" -> ");
  }
}
// Linked List data structure implementation

// 56. Implement a Binary Search Tree
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  BFS() {
    let node = this.root,
      data = [],
      queue = [];
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}
// Binary Search Tree implementation with Breadth-First Search

// 57. Implement Depth-First Search for a Graph
class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (!this.vertices[vertex]) this.vertices[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1);
  }

  dfs(startingNode) {
    const result = [];
    const visited = {};
    const dfsHelper = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      this.vertices[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfsHelper(neighbor);
        }
      });
    };
    dfsHelper(startingNode);
    return result;
  }
}
// Graph implementation with Depth-First Search

// 58. Implement a Hash Table
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
}
// Hash Table implementation

// 59. Implement a Trie (Prefix Tree)
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return current.isEndOfWord;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let char of prefix) {
      if (!current.children[char]) {
        return false;
      }
      current = current.children[char];
    }
    return true;
  }
}
// Trie (Prefix Tree) implementation

// 60. Implement a basic Promise
class MyPromise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    return new MyPromise((resolve, reject) => {
      if (this.state === "fulfilled") {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }

      if (this.state === "pending") {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onFulfilled(this.value);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const result = onRejected(this.reason);
              resolve(result);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}
// Basic Promise implementation
