var menu = prompt('Masukkan menu anda cth: nasi/ayam/sayur')

switch(menu) {
    case 'nasi':
        alert('Makanan anda mengandung karbo')
        break;
    case 'ayam':
        alert('Makanan anda mengandung protein')
        break;
    case 'sayur':
        alert('Makanan anda mengandung zinc')
        break;
    default:
        alert('Duh makanan apa itu')
        break;
}