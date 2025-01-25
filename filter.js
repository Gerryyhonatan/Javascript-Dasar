const angka = [1,2,3,4,-5,-6,-7,8,12];

/*
// MENCARI ANGKA YANG LEBIH DARI 3

// PAKAI FOR
const newAngka = []
for (let i = 0; i <= angka.length; i++) {
    if(angka[i] >= 3) {
        newAngka.push(angka[i])
    }
}
console.log(newAngka)


// PAKAI FILTER
const newAngka = angka.filter(function(a) {
    return a >= 3
})
console.log(newAngka);


// PAKAI FILTER DAN ARROW FUNCTION
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);



// MENGKALIKAN SEMUA ANGKA DENGAN 2

// PAKAI MAP
const newAngka = angka.map(function(a) {
    return a * 2
})

const newAngka = angka.map(a => a * 2);



// MENJUMLAHKAN SELURUH ELEMENT PADA ARRAY

// PAKAI REDUCE
const newAngka = angka.reduce(function(accumulator, currentValue) {
    accumulator + currentValue;
})

const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
*/



// MENACARI ANGKA > 5 DAN KEMUDIAN KALIKAN DENGAN 3 KEMUDIAN JUMLAHKAN

// METHOD CHAINING
const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((accumulator,currentValue) => accumulator + currentValue);
 console.log(hasil)