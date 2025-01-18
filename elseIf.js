// let angka = prompt('Masukkan Angka : ')

// if (angka % 2 == 0) {
//     alert('Bilangan anda adalah bilangan Genap ' + angka)
// } else if (angka % 2 == 1 ) {
//     alert('Bilangan anda adalah bilangan Ganjil ' + angka)
// } else {
//     alert('Inputan hanya berupa angka')
// }

// let jmlAngkot = 10;
// let angkotBeroperasi = 6;
// let angkotLembur = 8
// let noAngkot = 1;

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
//     } else if (noAngkot == angkotLembur) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur')
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }

let jmlAngkot = 10;
let angkotBeroperasi = 6;
let noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur')
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
    }
}

// for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
//     if(noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
//         console.log('Angkot No. ' + noAngkot + ' sedang lembur')
//     } else if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
//     }
// }