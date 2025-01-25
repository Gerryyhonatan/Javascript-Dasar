function kerjakanTugas(matakuliah, selesai) { // 'Function kerjakanTugas disebut higher order function. Function yang disimpan dalam argumen disebut callback
    console.log(`Mulai mengerjakan tugas ${matakuliah}`);
    selesai()
}

function selesai() {
    alert('Selesai mengerjakan tugas');
}

kerjakanTugas('Matematika', selesai);

// CONTOH LAIN HIGHER ORDER FUNCTION
setTimeout(function() {
    console.log('Hello World');
}, 1000);


// CONTOH LAIN HIGHER ORDER FUNCTION
const tombol = document.querySelector('.submit')
tombol.addEventListener('click', function() {
    console.log('Tombol diklik');
});
