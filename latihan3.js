// AMBIL SEMUA ELEMEN VIDEO
const videos = Array.from(document.querySelectorAll('[data-duration]')); // carikan elemen yang ada atribut data-duration

// PILIH YANG HANYA 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// AMBIL DURASI MASING-MASING VIDEO
    .map(item => item.dataset.duration)

// UBAH DURASI MENJADI FLOAT, UBAH MENIT MENJADI DETIK
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part))
        return parts[0] * 60 + parts[1]
    })

// JUMLAHKAN SEMUA DETIK
    .reduce((total, detik) => total + detik);

// UBAH FORMATNYA MENJADI JAM MENIT DETIK
const jam = Math.floor(jsLanjut/3600);
jsLanjut = jsLanjut - jam * 3600
const menit = Math.floor(jsLanjut/60)
const detik = jsLanjut - menit * 60

// SIMPAN DI DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pVideo = document.querySelector('.jumlah-video')
pVideo.textContent = `${jmlVideo} Video.`
