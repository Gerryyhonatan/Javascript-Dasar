/*
// EXECUTION CONTEXT, HOISTING & SCOPE
console.log(nama) // akan undifined karena console.log() memanggil nama sedangkan nama blm didefinisikan sebelumnya
let nama = 'Gerry'
let umur = 21

console.log(sayHello()) // akan aman jika console.log() dipanggil sebelum function
function sayHello() {
    return `Hello nama saya ${nama}, saya berumur ${umur} tahun.`
}

var nama = 'sandhika';
var username = '@sandhika' // langkah 3 akan cek ke variable global

function cetakURL() { // langkah 2 akan cek di argumennya 
var instagramURL = 'http://instagram.com/';
return instagramURL + username; // langkah 1 username akan cek ke variable lokal
}

console.log(cetakURL('@doddy')) // ini akan masuk ke object argument
*/
