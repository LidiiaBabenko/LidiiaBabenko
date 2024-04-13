const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
function addNumbers(a, b) { return a + b; }

grape - 45,26,79,76,98,81,4,40,49,40,14,63,38,96,54,62,44,56,96,1,83,85,57,78,33,63,71,69,48,28,29,70,45,96,57,84,14,95
let array = getRandomArray(); array.forEach(item => console.log(item));
