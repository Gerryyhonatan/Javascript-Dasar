// OBJECT LITERAL PROBLEM: tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Sandhika',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Selamat datang ${this.nama}, selamat makan`);
//     }
// }

// FUNCTION DECLARATION
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`)
//     },

//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain`)
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat tidur`)
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let sandhika = Mahasiswa('Sandhika', 10);


// VERSI PROTOTYPE
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat Makan`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat Bermain`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, Selamat Tidur`;
// }

// let sandhika = new Mahasiswa('Sandhika', 10);


// VERSI CLASS
class Mahasiswa {
    constructor(nama,energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan`;
    }

    main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Bermain`;
    }

    tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur`;
    }
}

let sandhika = new Mahasiswa('Sandhika', 10);


// CONSTRUCTOR FUNCTION
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan`)
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain`)
//     }
// }

// let sandhika = new Mahasiswa('Sandhika', 10)