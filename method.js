const student = {
    name: 'jisan',
    tk: 4000,
    age: 47,
    subject: ['Bangla', 'English', 'Math'],
    bestFrind: ['Rasel', 'Hasan', 'suruj'],
    bestFriendSub: {
        name: 'Hasan',
        subject: ['Bangla ', 'English'],
    },
    nasim: function () {
        console.log(this.name, ' xm')
    },
    tride: function (tk, tip) {
        this.tk = this.tk - tk - tip
        return this.tk
    }
}

student.nasim()
console.log(student.tride(500, 20))