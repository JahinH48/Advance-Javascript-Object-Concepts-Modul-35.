/* const first = { a: 1 };
const secound = { a: 1 };

if (first === secound) {
    console.log('equal')
} else {
    console.log('not equal')
} */

// stringfy diya compire 

/* if (JSON.stringify(first) == JSON.stringify(secound)) {
    console.log('equal')
} else {
    console.log('not equal')
}
 */

const first2 = { a: 1, b: 3 };
const secound2 = { b: 3, a: 1 };

/* if (first2 === secound2) {
    console.log('equal')
} else {
    console.log('not equal')
} */


function firstObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (const op in obj1) {
        if (obj1[op] !== obj2[op]) {
            return false
        }
        return true
    }
}

console.log(firstObject(first2, secound2))