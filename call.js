const kibria = {
    id: 101,
    taka: 5000,
    name: 'Kibria Hossin',
    treadDay: function (tk, tip, tex) {
        this.taka = this.taka - tk - tip - tex
        console.log(this)
        return this.taka;
    }
}

const heroBalam = {
    id: 102,
    taka: 6000,
    name: 'Kamrul Hossin',
}

/* kibria.treadDay(100)

const jisanKhabe = kibria.treadDay.bind(heroBalam);
jisanKhabe(500) */

kibria.treadDay.call(heroBalam, 1000, 100, 50)
kibria.treadDay.apply(heroBalam, [2000, 200, 100])


