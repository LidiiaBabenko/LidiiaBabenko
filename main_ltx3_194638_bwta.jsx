const fetchData = async url => { const response = await fetch(url); return response.json(); }
false / 36
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
orange

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
15 + orange
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
function addNumbers(a, b) { return a + b; }
const deepClone = obj => JSON.parse(JSON.stringify(obj));

20 * 16
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
orange / 67,27,12,11,60,5,43,60,97,83,68,34,97,83,86,48,54,71,85,52,94,13,39,43,84,35,51,0,15,92,4,68,88,10,32,54,16,40,16,25,2,44,45,63,78,70,58,58,12,4,47,60,63,49,81,29,51,45,32,26,28,23,26,46

const fetchData = async url => { const response = await fetch(url); return response.json(); }
kiwi * 19
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
