/*
// OBJECT LITERAL PROBLEM: tidak efektif untuk object yang banyak karena harus buat lagi namun nama tidak boleh sama
let mahasiswa = {
    nama: 'Sandhika',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Selamat datang ${this.nama}, selamat makan`);
    }
}


// FUNCTION DECLARATION
function Mahasiswa(nama,energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    mahasiswa.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Selamat datang ${this.nama}, selamat makan`);
    }
        return mahasiswa;
    }
        
let sandhika = Mahasiswa('Sandhika', 20)
let doddy = Mahasiswa('Doddy', 20)


// CONSTRUCTOR FUNCTION
function Mahasiswa(nama,energi) {
    this.nama = nama;
    this.energi = energi;
           
    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Selamat datang ${this.nama}, selamat makan`);
    }
}

let sandhika = new Mahasiswa('Sandhika', 20)


// FUNCTION DECLARATION YANG LEBIH EFEKTIF SECARA MANAJEMEN
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Selamat datang ${this.nama}, selamat makan`);
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan;

    return mahasiswa;
}

let sandhika = Mahasiswa('Sandhika', 20);


// FUNCTION DECLARATION LEBIH LEBIH EFEKTIF MENGGUNAKAN OBJECT.CREATE()
const methodMahasiswa = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Selamat datang ${this.nama}, selamat makan`);
    }
}

function Mahasiswa(nama, energi) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    
    return mahasiswa;
}

let sandhika = Mahasiswa('Sandhika', 20);


// VERSI PROTOTYPE
function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

Mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, Selamat Makan`;
}

Mahasiswa.prototype.main = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, Selamat Bermain`;
}

Mahasiswa.prototype.tidur = function (jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur`;
}

let sandhika = new Mahasiswa('Sandhika', 10);


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
*/