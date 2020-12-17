var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 8000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]



async function haveTime() {
  let time = 10000
  for (let i = 0; i < books.length; i++) {
    time = await readBooksPromise(time, books[i]).then(remain => {
      return remain
    })
    .catch (remain => {
      return remain
    })
  }
}

haveTime() 

