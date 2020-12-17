var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

let time = 10000

function haveTime() {
  readBooksPromise(time, books[0])
      .then(function (remain) {
          console.log(remain);
      })
      .catch(function (error) {
          console.log(error.message);
      });
}

haveTime() 

