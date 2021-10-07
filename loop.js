const bottle = {
    color: 'Yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/* for (const bot in bottle) {
    console.log(bot, bottle[bot])
}
 */

const keys = Object.keys(bottle)

/* for (const key of keys) {
    console.log(key, bottle[key])
}
 */


const arrays = Object.entries(bottle)
for (let [key, value] of arrays) {
    console.log(key, value)
}
