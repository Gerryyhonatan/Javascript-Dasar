/*
// MENGGABUNGKAN ARRAY

const mhs = ['Sandhika', 'Doddy', 'Erik'];
const dosen = ['Ade', 'Hendra', 'Wanda']
const orang = [...mhs, 'Aji', ...dosen];
console.log(orang)


// MENGCOPY ARRAY
const mhs = ['Sandhika', 'Doddy', 'Erik'];
const mhs1 = [...mhs];
console.log(mhs1)
*/


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;


