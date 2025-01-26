/*
// DESTRUCTURING ARRAY
const perkenalan = ['Halo', 'nama', 'saya', 'Sandhika'];

const [a, b, c, d] = perkenalan;
const [a, , , d] = perkenalan; // jika ingin skip item variabel bisa dihapus namun koma jangan
console.log(b)


// RETURN VALUE PADA FUNCTION
function coba() {
    return [1,2];
}

const [a,b] = coba()
console.log(a);


// REST PARAMETER
const [a, ...values] = [1,2,3,4,5]
console.log(a);
console.log(values);


// DESTRUCTURING OBJECT
const mhs = {
    nama : 'Sandhika',
    umur : 30
}

const {nama, umur} = mhs;
console.log(nama)


// ASSIGNMENT TANPA DEKLARASI OBJECT
({nama, umur} ={
    nama : 'Sandhika',
    umur : 30
});
console.log(nama)


// ASSIGN KE VARIABEL BARU
const mhs = {
    nama : 'Sandhika',
    umur : 30
}

const {nama : n, umur : u} = mhs;
console.log(n)


// MEMBERIKAN DEFAULT VALUE
const mhs = {
    nama : 'Sandhika',
    umur : 30
}

const {nama, umur, email = 'undifined@gmail.com'} = mhs;
console.log(nama)
*/