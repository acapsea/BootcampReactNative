// No. 1 Looping While

console.log('LOOPING PERTAMA');

var i = 2;
while (i <= 20) {

    console.log(`${i} - I love coding`);

    i+= 2;
}

console.log('LOOPING KEDUA');

var j = 20;
while (j >= 2) {

    console.log(`${j} - I love coding`);

    j-= 2;
}

// // No. 2 Looping For

for (let i = 1; i <= 20; i++) {

    if (i % 2 != 0 && i % 3 === 0) {
        console.log(`${i} - I Love Coding`);
    } else if (i % 2 != 0) {
        console.log(`${i} - Santai`);
    } else {
        console.log(`${i} - Berkualitas`);
    }
}

// No. 3 Membuat Persegi Panjang #

for (let i = 0; i < 4; i++) {

    var rows = "";
    for (let j = 0; j < 8; j++) {
        rows+= "#";
    }

    console.log(rows);
}

// No. 4 Membuat Tangga

for (let i = 0; i < 7; i++) {

    var rows = "";
    for (let j = 0; j <= i; j++) {
        rows+= "#";
    }
    
    console.log(rows);
}

/* No. 5 Membuat Papan Catur

Output:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/

for (let i = 0; i < 8; i++) {

    var rows = "";
    for (let j = 0; j < 8; j++) {
        if (i % 2 === 0) {

            if (j % 2 === 0) {
                rows+= " ";
            } else {
                rows+= "#";
            }
        } else {
            
            if (j % 2 != 0) {
                rows+= " ";
            } else {
                rows+= "#";
            }
        }
    }

    console.log(rows);
}