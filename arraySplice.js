let bulan = ['januari', 'februari', 'maret', 'juni'];
bulan.splice(3, 0, 'april');
console.log(bulan);     

bulan.splice(4, 1, 'mei')
console.log(bulan)
  
bulan.splice(4, 1)
console.log(bulan)
//delete semua yg diindex ke 1
bulan.splice(1)
console.log(bulan)

//fish
let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removed = myFish.splice(0, 3, 'parrot', 'anemone', 'blue');
console.log(myFish);
