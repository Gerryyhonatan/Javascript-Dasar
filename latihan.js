var penumpang = ['Sandhika', undefined, 'Doddy']

var tambahPenumpang = function(namaPenumpang, penumpang) {
 if(penumpang.length == 0) {
    penumpang.push(namaPenumpang)
    return penumpang
 } else {
    for ( let i = 0; i< penumpang.length; i++) {
        if(penumpang[i] == undefined) {
            penumpang[1] = namaPenumpang
            return penumpang
        } else if(penumpang[i] == namaPenumpang ) {
            console.log(namaPenumpang + ' Sudah ada didalam angkot')
            return penumpang
        } else if(i == penumpang.length - 1) {
            penumpang.push(namaPenumpang) 
            return penumpang
        }
    }
 }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log('Angkot kosong dan tidak ada penumpang')
        return penumpang
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[1] = undefined
                return penumpang
            } else if(i == penumpang.length -1){
                console.log(namaPenumpang + ' tidak ada didalam angkot')
                return penumpang
            }
        }
    }
}