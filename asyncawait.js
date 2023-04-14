function penjumlahan(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error('hasilnya adalah angka'));
        }
        resolve(a + b);
    });
}

function pengurangan(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error('hasilnya adalah angka'));
        }
        resolve(a - b);
    });
}

function perkalian(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error('hasilnya adalah angka'));
        }
        resolve(a * b);
    });
}

function pembagian(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error('hasilnya adalah angka'));
        }
        resolve(a / b);
    });
}

function perpangkatan(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error('hasilnya adalah angka'));
        }
        resolve(a ** b);
    });
}

function penjumlahan(a, b) {
    return new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject(new Error('hasilnya adalah angka'));
        }
        resolve(Math.pow(a, b));
    });
}

async function hasilA() {
    try{
        const hasilBagi = await pembagian(375, 125);
        const hasilpangkat = await perpangkatan(3, 2);
        const hasilkali = await perkalian(hasilBagi, hasilpangkat);
        const hasilkurang1 = await pengurangan(hasilkali, 750);
        const hasilkali2 = await pembagian(96, 10);
        const hasilkali3 = await pembagian(hasilkali2, 84);
        const hasilBagi2 = await pembagian(hasilkali3, 12);
        const hasilAkhir = await pembagian(hasilkurang1, hasilBagi2);
        console.log('hasil A =', hasilAkhir);
    }catch (error) {
        console.log('error.message');
    }  
}
hasilA();

async function hasilB() {
    try {
    const hasilBagi = await pembagian(625, 5);
    const hasilKali = await perkalian(84, 96);
    const hasilBagi2 = await pembagian(hasilKali, 12);
    const hasilKali2 = await perkalian(hasilBagi2, 96);
    const hasilKurang = await pengurangan(500, hasilBagi);
    const hasilAkhir = await penjumlahan(hasilKali2, hasilKurang);
    console.log('hasil B = ', hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilB();
    
    
async function hasilC() {
    try {
    const hasilBagi = await pembagian(750, 2);
    const hasilBagi2 = await pembagian(125, 5);
    const hasilKali = await perkalian(96, hasilBagi2);
    const hasilKali2 = await perkalian(375, 84);
    const hasilAkhir = await penjumlahan(hasilKali, hasilKali2, hasilBagi);
    console.log('hasil C = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilC();
    
    
async function hasilD() {
    try {
    const hasilBagi = await pembagian(750, 125);
    const hasilKali = await perkalian(96, 10);
    const hasilBagi2 = await pembagian(500, 250);
    const hasilKali2 = await perkalian(hasilKali, hasilBagi2);
    const hasilKurang = await pengurangan(1000, hasilBagi);
    const hasilAkhir = await penjumlahan(hasilKali2, hasilKurang, 12);
    console.log('hasil D = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilD();
    
    
async function hasilE() {
    try {
    const hasilPangkat = await perpangkatan(36, 2);
    const hasilBagi = await pembagian(hasilPangkat, 72);
    const hasilKali = await perkalian(125, 10);
    const hasilKali2 = await perkalian(24, 3);
    const hasilKurang = await pengurangan(hasilKali, hasilKali2);
    const hasilAkhir = await penjumlahan(hasilBagi, hasilKurang);
    console.log('hasil = E',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilE();
    
    
    async function hasilF() {
    try {
    const hasilBagi = await pembagian(500, 100);
    const hasilKali = await perkalian(hasilBagi, 20);
    const hasilKali2 = await perkalian(84, 2);
    const hasilBagi2 = await pembagian(125, 5);
    const hasilKurang = await pengurangan(hasilKali, hasilBagi2);
    const hasilAkhir = await penjumlahan(hasilKali2, hasilKurang);
    console.log('hasil F = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilF();
    
    
    async function hasilG() {
    try {
    const hasilKali = await perkalian(375, 2);
    const hasilBagi = await pembagian(750, 25);
    const hasilBagi2 = await pembagian(1000, 500);
    const hasilKali2 = await perkalian(hasilBagi2, hasilBagi);
    const hasilAkhir = await penjumlahan(hasilKali, hasilKali2);
    console.log('hasil G = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilG();
    
    
    async function hasilH() {
    try {
    const hasilPangkat = await perpangkatan(96, 2);
    const hasilKali = await perkalian(12, 12);
    const hasilKali2 = await perkalian(hasilKali, 2);
    const hasilKurang = await pengurangan(hasilPangkat, 84);
    const hasilAkhir = await penjumlahan(hasilKali2, hasilKurang);
    console.log('hasil H = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilH();
    
    
async function hasilI() {
    try {
    const hasilBagi = await pembagian(750, 25);
    const hasilBagi2 = await pembagian(375, 125);
    const hasilBagi3 = await pembagian(72, 12);
    const hasilKali = await perkalian(84, 12);
    const hasilKali2 = await perkalian(hasilBagi, hasilBagi2);
    const hasilKali3 = await perkalian(hasilBagi3, hasilKali2);
    const hasilAkhir = await penjumlahan(hasilKali, hasilKali3);
    console.log('hasil I = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilI();
    
    
async function hasilJ() {
    try {
    const hasilBagi = await pembagian(625, 5);
    const hasilPangkat = await perpangkatan(12, 2);
    const hasilBagi2 = await pembagian(375, 125);
    const hasilKali = await perkalian(375, 84);
    const hasilKurang = await pengurangan(hasilBagi, hasilKali);
    const hasilAkhir = await penjumlahan(hasilPangkat, hasilBagi2, hasilKurang);
    console.log('hasil J = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilJ();
    
    
async function hasilK() {
    try {
    const hasilBagi = await pembagian(250, 25);
    const hasilKali = await perkalian(36, 2);
    const hasilBagi2 = await pembagian(hasilKali, 72);
    const hasilKali2 = await perkalian(125, 10);
    const hasilKurang = await pengurangan(hasilBagi, hasilKali2);
    const hasilAkhir = await penjumlahan(hasilBagi2, hasilKurang);
    console.log('hasil K = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
    }
hasilK();
    
    
async function hasilL() {
    try {
    const hasilBagi = await pembagian(375, 125);
    const hasilKali = await perkalian(hasilBagi, 100);
    const hasilBagi2 = await pembagian(500, 250);
    const hasilKali2 = await perkalian(hasilBagi2, 50);
    const hasilKali3 = await perkalian(96, 10);
    const hasilKurang = await pengurangan(hasilKali3, hasilKali);
    const hasilAkhir = await penjumlahan(hasilKali2, hasilKurang);
    console.log('hasil L = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilL();
    
    
async function hasilM() {
    try {
    const hasilBagi = await pembagian(750, 25);
    const hasilBagi2 = await pembagian(375, 125);
    const hasilPangkat = await perpangkatan(96, 2);
    const hasilPangkat2 = await perpangkatan(12, 2);
    const hasilBagi3 = await pembagian(hasilPangkat, hasilPangkat2);
    const hasilKurang = await pengurangan(hasilBagi, hasilBagi2);
    const hasilAkhir = await penjumlahan(hasilKurang, hasilBagi3);
    console.log('hasil M = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilM();
    
async function hasilN() {
    try {
    const hasilBagi = await pembagian(1000, 500);
    const hasilBagi2 = await pembagian(375, 125);
    const hasilBagi3 = await pembagian(72, 12);
    const hasilKali = await perkalian(hasilBagi, hasilBagi2);
    const hasilKali2 = await perkalian(hasilBagi3, hasilKali);
    const hasilKali3 = await perkalian(84, 12);
    const hasilAkhir = await pengurangan(hasilKali2, hasilKali3);
    console.log('hasil N = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilN();
    
async function hasilO() {
    try {
    const hasilPangkat = await perpangkatan(12, 2);
    const hasilBagi = await pembagian(500, 250);
    const hasilBagi2 = await pembagian(375, 125);
    const hasilKali = await perkalian(hasilBagi, hasilBagi2);
    const hasilKurang = await pengurangan(96, hasilPangkat);
    const hasilKali2 = await perkalian(hasilBagi, hasilKurang);
    const hasilKali3 = await perkalian(84, 2);
    const hasilAkhir = await pengurangan(hasilKali2, hasilKali3);
    console.log('hasil O = ',hasilAkhir);
    } catch (error) {
    console.log(error.message);
    }
}
hasilO();