var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let time = 10000;
let i = 0;

function getTime() {
    readBooks(time, books[i], (remain) => {
        time = remain
        i++
        if (i < books.length) {
            getTime()
        }
    })
}

getTime()


