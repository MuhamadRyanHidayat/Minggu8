//unlink fs = Hapus data/file

//Panggil library Fs
const fs = require('fs');

//Baca file terserah.txt apakah ada filenya?
//menggunakan fs.readfile
fs.readFile('terserah.txt', async (err, data) =>{
    if(err) return console.log("Data tidak ditemukan!");

    await console.log("Data ditemukan!");
    fs.unlink('terserah.txt', (err)=>{
        if(err) console.log("Gagal hapus data!");
        console.log("Hapus data berhasil!");
    })
})