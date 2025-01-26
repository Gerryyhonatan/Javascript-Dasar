const mhs = ['Sandhika', 'Doddy', 'Erik'];

// PAKAI FOR BIASA
for(let i = 0; i < mhs.length; i++) {
    console.log(mhs[i])
}


// PAKAI FOREACH
mhs.forEach(function(m) {
    console.log(m)
})

mhs.forEach(m => console.log(m)) //FOREACH KHUSUS UNTUK ARRAY


// PAKAI FOR OF
for(const m of mhs) {
    console.log(m) // SECARA DEFAULT TIDAK MEMILIKI INDEX
}

const nama = 'Sandhika'
for(const n of nama) {
    console.log(n)
}

