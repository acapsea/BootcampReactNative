var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let time = 10000;

readBooks(time, books[0], function(remain){
    if (remain) {
        return readBooks(remain, books[1], (remain) => {
            return readBooks(remain, books[2], (remain) => {
                return readBooks(remain, books[0], (remain) => {
                    return remain
                })
            })
        })
    }
    
})




