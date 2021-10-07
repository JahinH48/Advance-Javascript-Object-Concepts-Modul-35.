const bottle = { color: 'Yellow', hold: 'water', price: 50, isCleaned: true };

const key = Object.keys(bottle)
// console.log(key)
const value = Object.values(bottle)
// console.log(value)
const end = Object.entries(bottle)
// console.log(end)


// propaty change 
bottle.price = 100

// freeze korle kono kichu change ba delete kora jay na 
Object.freeze(bottle)

// dont delete this Object 
Object.seal(bottle)

// delete 
delete bottle.isCleaned
console.log(bottle)