/* Buatlah fungsi callback untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan.*/
// 120 + 140
function penjumlahan(a , b, hasil) {
    setTimeout(() => {
        hasil(null, a + b);
    }, 0);
}

let  hasilpenjumlahan = 0;
penjumlahan(120, 140, function(err, result) {
    console.log(result);
});

// 400 - 150
function pengurangan(a, b, jumlah) {
    setTimeout(() => {
        jumlah(null, a - b);
    }, 0);
}

let hasilPengurangan = 0;
pengurangan(400, 150, function(err, result) {
    console.log(result);
});

// 700 * 20
function pengkalian(a, b, jumlah) {
    setTimeout(() => {
        jumlah(null, a * b);
    }, 0);
}

let hasilPengkalian= 0;
pengkalian(700, 20, function(err, result) {
    console.log(result);
});

// 2500 : 20
function pembagian(a, b, jumlah) {
    setTimeout(() => {
        jumlah(null, a / b);
    }, 0);
}

let hasilpembagian = 0;
pembagian(2500, 20, function(err, result) {
    console.log(result);
});

//120 ** 3
function perpangkatan(a, b, jumlah) {
    setTimeout(() => {
        jumlah(null, a ** b);
    }, 0);
}

let hasilpangkat= 0;
perpangkatan(120, 3, function(err, result) {
    console.log(result);
});