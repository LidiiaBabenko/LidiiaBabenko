const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const getUniqueValues = array => [...new Set(array)];

apple - kiwi
function addNumbers(a, b) { return a + b; }

grape - apple
class MyClass { constructor() { this.property = getRandomString(); } }

true / 54,95,16,16,60,88,87,33,52,84,78,51,5,10,81,47,79
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const squareRoot = num => Math.sqrt(num);
const variableName = getRandomNumber();

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
false / 28,10,31,39,20,10,22,48,77,27,46,96,48,87,31,85,68,30,42,67,15,38,8,27,25,14,4,13,18,24,76,49,0,0,38,25,1,75,85
const reverseString = str => str.split("").reverse().join("");
68 - 
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
grape / 39

const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
banana / 7
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
false + banana
function addNumbers(a, b) { return a + b; }
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
41,68,17,98,63,55,48,86,75,8,96 / false
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

38,68,93 * 34
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

27 * false

const removeDuplicates = array => Array.from(new Set(array));
const sum = (a, b) => a + b;
