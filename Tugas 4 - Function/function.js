// No. 1 
// Tulislah sebuah function dengan nama teriak() yang mengembalikan nilai “Halo Sanbers!” yang kemudian dapat ditampilkan di console.


function teriak() {
    return "Halo Sanbers!"
}
 
console.log(teriak()) // "Halo Sanbers!" 

// No. 2 
// Tulislah sebuah function dengan nama kalikan() yang mengembalikan hasil perkalian dua parameter yang di kirim.


function kalikan(num1, num2) {
    return num1 * num2
}
 
var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48


// No. 3
// Tulislah sebuah function dengan nama introduce() yang memproses paramater yang dikirim menjadi sebuah kalimat perkenalan seperti berikut: “Nama saya [name], umur saya [age] tahun, alamat saya di [address], dan saya punya hobby yaitu [hobby]!”

function introduce(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`
}
 
var name = "Agus"
var age = 30
var address = "Jln. Malioboro, Yogyakarta"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogyakarta, dan saya punya hobby yaitu Gaming!"