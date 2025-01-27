/*
// DENGAN JQUERY
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
    success: movies => console.log(movies)
})


// TANPA JQUERY
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response));
        }
    } else {
        console.log(xhr.responseText);
    }
}
xhr.open('get', 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
xhr.send()


// PAKAI FETCH
fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
.then(response => response.json())
.then(response => console.log(response))
*/


// PROMISE -> Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronus di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finaly)
// aksi (then / catch)
// promise biasanya digunakan ketika kita akan request ke API

let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if(ditepati) {
        resolve('Janji ditepati')
    } else {
        reject('Ingkar janji')
    }
})

janji1
.then(response => console.log('OK : ' + response ))
.catch(response => console.log('NOT OK : ' + response))