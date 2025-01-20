// var arr = ['teks', 2, false, 'teko', [4,5,6]];

// console.log(arr[4][1])

// var mahasiswa = ['Sandhika', 'Doddy', 'Yho', 'Yin']

// for (let i = 0; i < mahasiswa.length; i++) {
//     console.log("Mahasiswa ke " + (i+1 ) +" "+ mahasiswa[i])
// }

// var arr = ['Sandhika', 'Galih', 'Nova']
// console.log(arr.join())

// var buah = ['Jeruk', 'Apel', 'Anggur']
// var sayur = ['Tomat', 'Timun']

// buah.push('Mangga')
// sayur.pop()

// console.log(buah)
// console.log(sayur)

// var mahasiswa = ['Sandhika', 'Doddy', 'Yho', 'Yin']

// mahasiswa.splice(1,0,'Gerry')
// console.log(mahasiswa)

// let angka = [1,2,3,4,5,6,7,8,9]
// let mahasiswa = ['Sandhika', 'Galih', 'Doddy']

// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i])
// }


// angka.forEach(function(e) {
//     console.log(e)
// })

// mahasiswa.forEach(function(e, i) {
//     console.log('Mahasiswa ke ' + (i+1) + ' adalah ' + e)
// })

let angka = [1,2,3,5,11,4,6,7,8,9]
angka.sort(function(a,b) {
    return a-b
})
console.log(angka)