// Soal No. 1 (Array to Object)
// Buatlah function dengan nama arrayToObject() yang menerima sebuah parameter berupa array multidimensi. Dalam array tersebut berisi value berupa First Name, Last Name, Gender, dan Birthyear. Data di dalam array dimensi tersebut ingin kita ubah ke dalam bentuk Object dengan key bernama : firstName, lastName, gender, dan age. Untuk key age ambillah selisih tahun yang ditulis di data dengan tahun sekarang. Jika tahun tidak terdefinisi atau tahunnya lebih besar dibandingkan dengan tahun sekarang maka kembalikan nilai : “Invalid birth year”.

// Contoh: jika input nya adalah [["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1985]]

// maka outputnya di console seperti berikut :

// 1. Abduh Muhamad : { firstName: "Abduh", lastName: "Muhamad", gender: "male", age: 28}
// 2. Ahmad Taufik : { firstName: "Ahmad", lastName: "Taufik", gender: "male", age: 35} 
// Untuk mendapatkan tahun sekarang secara otomatis bisa gunakan Class Date dari Javascript.

var now = new Date()
var thisYear = now.getFullYear() // 2020 (tahun sekarang)
// Code

function arrayToObject(arr) {
    if (!arr.length || !arr) {
        return '""'
    }

    let output = {}

    for (let i = 0; i < arr.length; i++) {
        let key = `${i+1}. ${arr[i][0]} ${arr[i][1]}`
        let umur;
        if (arr[i][3] > thisYear || !arr[i][3]) {
            umur = "Invalid Birth Year"
        } else {
            umur = thisYear - arr[i][3]
        }

        if (!output) {
            output[key] = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: umur
            }
        } else {
            output[key] = {
                firstName: arr[i][0],
                lastName: arr[i][1],
                gender: arr[i][2],
                age: umur
            }
        }

    }

    return output
}

// Driver Code
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
console.log(arrayToObject(people))
/*
    1. Bruce Banner: { 
        firstName: "Bruce",
        lastName: "Banner",
        gender: "male",
        age: 45
    }
    2. Natasha Romanoff: { 
        firstName: "Natasha",
        lastName: "Romanoff",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
console.log(arrayToObject(people2))
/*
    1. Tony Stark: { 
        firstName: "Tony",
        lastName: "Stark",
        gender: "male",
        age: 40
    }
    2. Pepper Pots: { 
        firstName: "Pepper",
        lastName: "Pots",
        gender: "female".
        age: "Invalid Birth Year"
    }
*/
 
// Error case 
console.log(arrayToObject([])) // ""

// Soal No. 2 (Shopping Time)
// Problem

// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberIddan parameter ke-2 merupakan value uang (money) yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000
// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

// Jika memberId kosong maka tampilkan “Mohon maaf, toko X hanya berlaku untuk member saja”
// Jika uang yang dimiliki kurang dari 50000 maka tampilkan “Mohon maaf, uang tidak cukup”
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
// Contoh jika inputan memberId: ‘324193hDew2’ dan money: 700000

// maka output:

// { memberId: ‘324193hDew2’, money: 700000, listPurchased: [ ‘Baju Zoro’, ‘Sweater Uniklooh’ ], changeMoney: 25000 }

// Code

function shoppingTime(memberId, money) {
    if (!memberId) {
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
      } else if (money < 50000) {
        return `Mohon maaf, uang tidak cukup`
      } 
    
      let output = {
        memberId: memberId,
        money: money,
        listPurchased: [],
        changeMoney: 0
      }
      
      let product = [
         ['Sepatu Stacattu', 1500000], 
         ['Baju Zoro', 500000],
         ['Baju H&N', 250000],
         ['Sweater Uniklooh', 175000],
         ['Casing Handphone', 50000]
       ]
    
      for (let i = 0; i<product.length; i++) {
        
        if (money >= product[i][1]) {
           output.listPurchased.push(product[i][0])
           money -= product[i][1]
           output.changeMoney = money
         }
      }
    
      return output
    
}
 
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


// Soal No. 3 (Naik Angkot)
// Problem

// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A – F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [ [‘Dimitri’, ‘B’, ‘F’] ] output: [{ penumpang: ‘Dimitri’, naikDari: ‘B’, tujuan: ‘F’, bayar: 8000 }]

// Code

function naikAngkot(arrPenumpang) {
  let rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  if(!arrPenumpang.length || !arrPenumpang) {
      return []
  }
  
  let output = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
      let temp = {
          penumpang: arrPenumpang[i][0],
          naikDari: arrPenumpang[i][1],
          tujuan: arrPenumpang[i][2],
          bayar: 0
      }

      let sign = false
      if(temp.tujuan < temp.naikDari) {

        for (let j = rute.length-1; j >= 0; j--) {
            if (rute[j] === temp.tujuan) {
                break;
            } else if (rute[j] == temp.naikDari) {
                sign = true;
            }
    
            if (sign) {
                temp.bayar+= 2000;
            }
    
          }
      } else {

        for (let j = 0; j < rute.length; j++) {
            if (rute[j] === temp.tujuan) {
                break;
            } else if (rute[j] == temp.naikDari) {
                sign = true;
            }
    
            if (sign) {
                temp.bayar+= 2000;
            }
    
          }
      }

      output.push(temp)
  }

  return output
}
 
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
 
console.log(naikAngkot([])); //[]