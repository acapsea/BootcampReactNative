// Soal No. 1 (Range) 

function range(startNum, finishNum) {

    if (!startNum || !finishNum) {
        return -1
    }

    let output = []

    if (startNum > finishNum) {
        for (let i = startNum; i >= finishNum; i--) {
            output.push(i)
        }
        return output
    }

    for (let i = startNum; i <= finishNum; i++) {
        output.push(i)
    }

    return output
}
 
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 

// Soal No. 2 (Range with Step)

function rangeWithStep(startNum, finishNum, step) {
    let output = []

    if (startNum > finishNum) {
        for (let i = startNum; i >= finishNum; i-= step) {
            output.push(i)
        }
        return output
    }

    for (let i = startNum; i <= finishNum; i+= step) {
        output.push(i)
    }

    return output
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]


// Soal No. 3 (Sum of Range)

// ATURAN: Jika parameter ke-3 tidak diisi maka stepnya adalah 1.

function sum(awalDeret, akhirDeret, bedaJarak) {

    if (!awalDeret && !akhirDeret) {
        return 0
    } else if (!akhirDeret) {
        return awalDeret
    }

    if (!bedaJarak) {
        bedaJarak = 1
    }

    let deret = rangeWithStep(awalDeret, akhirDeret, bedaJarak)
    let outputSum = 0

    for (let i = 0; i < deret.length; i++) {
        outputSum+= deret[i]
    }

    return outputSum
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 

// Soal No. 4 (Array Multidimensi)

function dataHandling(array) {

    let output;

    for (let i = 0; i < array.length; i++) {
        let id;
        let nama;
        let tglLahir;
        let hobi;

        for (let j = 0; j < array[i].length; j++) {
            if (!id) {
                id = `Nomor ID: ${array[i][j]}`
            } else if (!nama) {
                nama = `Nama Lengkap: ${array[i][j]}`
            } else if (!tglLahir) {
                tglLahir = `TTL: ${array[i][j]} ${array[i][j+1]}`
            } else if (j === array[i].length -1) {
                hobi = `Hobi: ${array[i][j]}`
            }
        }
        
        if (i === array.length -1) {
            output += `${id}\n${nama}\n${tglLahir}\n${hobi}`
        } else if (!output) {
            output = `${id}\n${nama}\n${tglLahir}\n${hobi}\n\n`
        } else {
            output += `${id}\n${nama}\n${tglLahir}\n${hobi}\n\n`
        }
    }

    return output
}

//contoh input
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 

 console.log(dataHandling(input))


// Soal No. 5 (Balik Kata)

function balikKata(string) {
    let output = ""

    for (let i = string.length-1; i >= 0; i--) {
        output+= string[i]
    }
    
    return output
}
 
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 
// Dilarang menggunakan sintaks .split , .join , .reverse() , hanya gunakan looping!

// Soal No. 6 (Metode Array)

function dataHandling2(array) {
    
    array.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");

    console.log(array);

    let bulan = Number(array[3][3] + array[3][4]);
    
    switch (bulan) {
        case 01:
            bulan = "Januari";
            break;
        case 02:
            bulan = "Februari";
            break;
        case 03:
            bulan = "Maret";
            break;
        case 04:
            bulan = "April";
            break;
        case 05:
            bulan = "Mei";
            break;
        case 06:
            bulan = "Juni";
            break;
        case 07:
            bulan = "Juli";
            break;
        case 08:
            bulan = "Agustus";
            break;
        case 09:
            bulan = "September";
            break;
        case 10:
            bulan = "Oktober";
            break;
        case 11:
            bulan = "November";
            break;
        case 12:
            bulan = "Desember";
            break;
        default:
            bulan = "Anda memasukkan bulan yang salah!";
            break;
    }

    console.log(bulan)

    let descendingTtl = array[3].split("/");
    descendingTtl.sort(function(a, b){return b-a});
    console.log(descendingTtl);

    let strTtl = array[3].split("/").join("-");
    console.log(strTtl)

    let batasChar = array[1].slice(0, 15)
    console.log(batasChar)

    return `${array.join(" ")}\n${bulan}\n${descendingTtl.join(" ")}\n${strTtl}\n${batasChar}`
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
console.log(dataHandling2(input));
 
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */ 