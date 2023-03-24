const { tambah, kurang, kali, bagi } = require('./aritmatika');

const str = '4000 / 2 + 25 - 2';
const hasil = eval(str.replace(/([+\-*/])/g, ' $1 '));

console.log(hasil);
