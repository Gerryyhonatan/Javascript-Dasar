// var mhs = {
//     nama : 'Sandhika',
//     umur : 31,
//     ips : [3.00,2.50,3.20],
//     alamat : {
//         jalan : 'JL. Kita masih panjang',
//         kota : 'Salatiga',
//         provinsi : 'Jawa Tengah'
//     }
// }

// OBJECT LITERAL
// var mhs = {
//     nama : 'Sandhika',
//     nim : 682022104,
//     email : 'sandhika@gmail.com',
//     jurusan : 'Teknik Industri'
// }
// var mhs2 = {
//     nama : 'Galih',
//     nim : 682022100,
//     email : 'galih@gmail.com',
//     jurusan : 'Teknik Komputer'
// }


// FUNCTION DECLARATION
// function buatObjectMahasiswa(nama,nim,email,jurusan) {
//     var mhs = {}
//     mhs.nama = nama
//     mhs.nim = nim
//     mhs.email = email
//     mhs.jurusan = jurusan
//     return mhs
// }
// var mhs3 = buatObjectMahasiswa('Yho', '682022107', 'yho@gmail.co', 'Biologi')


// CONSTRUCTOR
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan
}

var mhs4 = new Mahasiswa('Natan', '682022001', 'natan@gmail.com', 'Sistem Informasi')
