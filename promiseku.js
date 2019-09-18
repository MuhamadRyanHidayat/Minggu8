const a = 'a';
const promise = new Promise((resolve, reject) =>{
    if(a === 'a'){
        resolve("Berhasil");
    }else{
        reject("Gagal");
    }
});
promise.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});