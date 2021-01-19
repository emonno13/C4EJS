// document.getElementById('count').innerHTML = 10;

let count = JSON.parse(localStorage.getItem('count'));
if (count) {
    document.getElementById('count').innerHTML = count;
} else {
    document.getElementById('count').innerHTML = 0;
}

function plus() {
    let x = document.getElementById('count').innerHTML;
    let result = Number(x) + 1;
    document.getElementById('count').innerHTML = result;
    localStorage.setItem('count', JSON.stringify(result));
};

function minus() {
    let x = document.getElementById('count').innerHTML;
    let result = Number(x) - 1;
    document.getElementById('count').innerHTML = result;
    localStorage.setItem('count', JSON.stringify(result));
}

function removeStorage() {
    localStorage.removeItem('count');
    document.getElementById('count').innerHTML = 0;
}


let x = 0;
let y = 'khanh';
let z = true;
let t = [{ name: 'Khanh', age: 12, status: true },
        { name: 'Nhat', age: 14, status: false }];

/**
 * Local storage 
 * Dữ liệu lưu xuống sẽ bị ép thành chuỗi
 * Dữ liệu được gửi lên cũng là chuỗi
 * Khi gửi dữ liệu -> JSON.stringtify
 * Khi nhận dữ liệu -> JSON.parse
 */
localStorage.setItem('myAge', JSON.stringify(x));
localStorage.setItem('myName', JSON.stringify(y));
localStorage.setItem('myStatus', JSON.stringify(z));
// localStorage.setItem('users', t);
localStorage.setItem('users', JSON.stringify(t));


let xLocal = JSON.parse(localStorage.getItem('myAge'));
let yLocal = JSON.parse(localStorage.getItem('myName'));
let zLocal = JSON.parse(localStorage.getItem('myStatus'));
// let tLocal = localStorage.getItem('users');
let tLocal = JSON.parse(localStorage.getItem('users'));

console.log('myAge:', xLocal);
console.log('myName:', yLocal);
console.log('myStatus:', zLocal);
console.log('users:', tLocal);

