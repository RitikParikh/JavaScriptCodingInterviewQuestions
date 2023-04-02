const mySet = new Set();
console.log(mySet); // {}
mySet.add(42)
console.log(mySet); //{42}
mySet.add(100)
console.log(mySet); //{42,100}
mySet.add('alvin') 
console.log(mySet); //{42,100,alvin}
mySet.add(100)
console.log(mySet); //{42,100,alvin}
mySet.has(42)
console.log(mySet); //true
mySet.has('cindy')
console.log(mySet); //false
console.log(Array.from(mySet)); // [42,100,alvin]