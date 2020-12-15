// 1. Mengubah fungsi menjadi fungsi arrow

const golden = () => {
    return "this is golden!!"
}
 
console.log(golden())

// 2. Sederhanakan menjadi Object literal di ES6

const newFunction = (firstName, lastName) => {
    return {
        fullName() { return `${firstName} ${lastName}` }
    }
}
   
//Driver Code 
console.log(newFunction("William", "Imoh").fullName())

// 3. Destructuring
// Diberikan sebuah objek sebagai berikut:

const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject;

console.log(firstName)
console.log(lastName)
// Driver code
console.log(firstName, lastName, destination, occupation)

// 4. Array Spreading
// Kombinasikan dua array berikut menggunakan array spreading ES6

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [... west, ...east]
//Driver Code
console.log(combined)

// 5. Template Literals
// sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:

const planet = "earth"
const view = "glass"

let before = `Lorem ${view}dolor sit amet, consectetur adipiscing elit,${planet}do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`
 
// Driver Code
console.log(before) 

