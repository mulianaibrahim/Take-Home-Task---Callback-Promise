/* Buatlah promise untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan, boleh dengan mengubah fungsi callback pada nomor 1.*/
// 120 + 140
/* 
//penjumlahan
function jumlah(a, b, hasil) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            hasil('ada angka tapi bukan number', null);
        }else {
            hasil(null, a + b);
        }
    }, 0);
}

function jumlahPromise(a, b) {
    const p = new Promise((resolve, reject) => {
        jumlah(a, b, function (err, hasil) {
            if (err) {
                reject(err);
            }else {
                resolve(hasil)
            }
        });
    });
    return p;
}

jumlahPromise(120, 10)
    .then(function (d) {
        return jumlahPromise(d, 140)
    })
    .then(function (d) {
        console.log('hasilnya', d);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log('done, and alwasy executed');
    })
*/

/* 
//pengurangan
function jumlah(a, b, hasil) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            hasil('ada angka tapi bukan number', null);
        }else {
            hasil(null, a - b);
        }
    }, 0);
}

function jumlahPromise(a, b) {
    const p = new Promise((resolve, reject) => {
        jumlah(a, b, function (err, hasil) {
            if (err) {
                reject(err);
            }else {
                resolve(hasil)
            }
        });
    });
    return p;
}

jumlahPromise(400, 0)
    .then(function (d) {
        return jumlahPromise(d, 150)
    })
    .then(function (d) {
        console.log('hasilnya', d);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log('done, and alwasy executed');
    })
*/

//pengkalian
/*
function jumlah(a, b, hasil) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            hasil('ada angka tapi bukan number', null);
        }else {
            hasil(null, a * b);
        }
    }, 0);
}

function jumlahPromise(a, b) {
    const p = new Promise((resolve, reject) => {
        jumlah(a, b, function (err, hasil) {
            if (err) {
                reject(err);
            }else {
                resolve(hasil)
            }
        });
    });
    return p;
}

jumlahPromise(700, 10)
    .then(function (d) {
        return jumlahPromise(d, 20)
    })
    .then(function (d) {
        console.log('hasilnya', d);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log('done, and alwasy executed');
    })
*/

//pembagian
/*
function jumlah(a, b, hasil) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            hasil('ada angka tapi bukan number', null);
        }else {
            hasil(null, a / b);
        }
    }, 0);
}

function jumlahPromise(a, b) {
    const p = new Promise((resolve, reject) => {
        jumlah(a, b, function (err, hasil) {
            if (err) {
                reject(err);
            }else {
                resolve(hasil)
            }
        });
    });
    return p;
}

jumlahPromise(2500, 10)
    .then(function (d) {
        return jumlahPromise(d, 20)
    })
    .then(function (d) {
        console.log('hasilnya', d);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log('done, and alwasy executed');
    })
*/

//perpangkatan
function jumlah(a, b, hasil) {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            hasil('ada angka tapi bukan number', null);
        }else {
            hasil(null, a ** b);
        }
    }, 0);
}

function jumlahPromise(a, b) {
    const p = new Promise((resolve, reject) => {
        jumlah(a, b, function (err, hasil) {
            if (err) {
                reject(err);
            }else {
                resolve(hasil)
            }
        });
    });
    return p;
}

jumlahPromise(120, 1)
    .then(function (d) {
        return jumlahPromise(d, 3)
    })
    .then(function (d) {
        console.log('hasilnya', d);
    })
    .catch(function (err) {
        console.log(err);
    })
    .finally(() => {
        console.log('done, and alwasy executed');
    })

