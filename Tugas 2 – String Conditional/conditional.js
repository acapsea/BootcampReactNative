/*

- if-else

Petunjuk : Kita akan memasuki dunia game werewolf. Pada saat akan bermain kamu diminta memasukkan nama dan peran . Untuk memulai game pemain harus memasukkan variable nama dan peran. Jika pemain tidak memasukkan nama maka game akan mengeluarkan warning “Nama harus diisi!“. Jika pemain memasukkan nama tapi tidak memasukkan peran maka game akan mengeluarkan warning “Pilih Peranmu untuk memulai game“. Terdapat tiga peran yaitu penyihir, guard, dan werewolf. Tugas kamu adalah membuat program untuk mengecek input dari pemain dan hasil response dari game sesuai input yang dikirimkan.

Petunjuk:

Nama dan peran diisi manual dan bisa diisi apa saja
Nama tidak perlu dicek persis sesuai dengan input/output
Buat kondisi if-else untuk masing-masing peran
Input:

var nama = "John"
var peran = ""
Output:

// Output untuk Input nama = '' dan peran = ''
"Nama harus diisi!"
 
//Output untuk Input nama = 'John' dan peran = ''
"Halo John, Pilih peranmu untuk memulai game!"
 
//Output untuk Input nama = 'Jane' dan peran 'Penyihir'
"Selamat datang di Dunia Werewolf, Jane"
"Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!"
 
//Output untuk Input nama = 'Jenita' dan peran 'Guard'
"Selamat datang di Dunia Werewolf, Jenita"
"Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf."
 
//Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
"Selamat datang di Dunia Werewolf, Junaedi"
"Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!" 
*/

var nama = "Raline";
var peran = "Werewolf";

var welcome = `Selamat datang di Dunia Werewolf, ${nama}`

if (!nama) {
    console.log("Nama harus diisi!")
} else if (!peran) {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
} else if (peran === "Penyihir") {
    console.log(welcome)
    console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
} else if (peran === "Guard") {
    console.log(welcome)
    console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
} else if (peran === "Werewolf") {
    console.log(welcome)
    console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
}


/*

- Switch Case
Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

Gunakan switch case untuk kasus ini!

Contoh:

var hari = 21; 
var bulan = 1; 
var tahun = 1945;
//  Maka hasil yang akan tampil di console adalah: '21 Januari 1945'; 
Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi

var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

*/

var tanggal = 17; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 12; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1945; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (bulan) {
    case 1:
        bulan = "Januari"
        break;
    case 2:
        bulan = "Februari"
        break;
    case 3:
        bulan = "Maret"
        break;
    case 4:
        bulan = "April"
        break;
    case 5:
        bulan = "Mei"
        break;
    case 6:
        bulan = "Juni"
        break;
    case 7:
        bulan = "Juli"
        break;
    case 8:
        bulan = "Agustus"
        break;
    case 9:
        bulan = "September"
        break;
    case 10:
        bulan = "Oktober"
        break;
    case 11:
        bulan = "November"
        break;
    case 12:
        bulan = "Desember"
        break;
    default:
        bulan = "Anda memasukkan bulan yang salah!"
        break;
}

console.log(`${tanggal} ${bulan} ${tahun}`)