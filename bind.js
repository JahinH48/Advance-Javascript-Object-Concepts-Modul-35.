const kibria = {
    id: 101,
    taka: 5000,
    name: 'Kibria Hossin',
    treadDay: function (tk) {
        this.taka = this.taka - tk
        console.log(this)
        return this.taka;
    }
}

const heroBalam = {
    id: 102,
    taka: 6000,
    name: 'Kamrul Hossin',
}

kibria.treadDay(100)

const jisanKhabe = kibria.treadDay.bind(heroBalam);
jisanKhabe(500)