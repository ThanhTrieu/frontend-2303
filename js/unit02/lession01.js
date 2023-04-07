// function js
// goi ham ra su dung
let res = sumNumber(1,9);
console.log(res);

// viet ham tinh tong 2 so bat ky
function sumNumber(a, b ,c = 1) {
    // function: keyword (hoc thuoc)
    // sumNumber: LTV tu dinh nghia
    // a, b tham so truyen vao ham (neu co)

    // logic code
    return a + b + c;
}


// viet ham cho biet tong so chan tu 1 - 100;
// 1 - viet ham bo tro - kiem tra so chan
// 2 - viet ham chinh - tinh tong cac so chan (dua vao ham ben tren da co)

function kiemTraChanLe(n){
    return n % 2 === 0;
}

function tinhTong(i = 1, j = 100){
    // tinh tong cac so chan tu i ... j
    let sum = 0;
    for(let k = i; k <= j; k++){
        if(kiemTraChanLe(k)){
            sum += k;
        }
    }
    return sum;
}

console.log(tinhTongHaiSo(1,2));
let tinhTongHaiSo = function(n,m){
    return n + m;
}

// viet ham kiem tra so nguyen to - function expression
let kiemTraSoNT = function(n){
    if( n <= 1){
        return false;
    }
    if( n === 2){
        return true;
    }
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}
// viet ham dem co bao nhieu so nguyen to tu 1 ... 100 nho hon 50
let demSoNguyenTo = function(i , j, cond){
    let count = 0;
    for(let k = i; k<= j; k++){
        if(kiemTraSoNT(k) && k < cond){
            count += 1;
        }
    }
    return count;
}
demSoNguyenTo(1, 100, 50);

let check1 = (n) => n % 2 === 0 ;
let check2 = (n) => {
    return n % 2 === 0;
}
let check3 = (n) => {
    return n % 2 === 0 ? true : false;
}
let check4 = (n) => {
    if(n % 2 === 0){
        return true;
    }
    return false;
}
let check5 = (n) => {
    if(n % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let u = 10;
let v = 9;
let result = ((u+v)/2 >= Math.sqrt(u*v)) ? (v-u > u/2 ? v : u) : (u-v);

let r = 0;
if((u+v)/2 >= Math.sqrt(u*v)){
    if(v-u > u/2){
        r = v;
    } else {
        r = u;
    }
} else {
   r = u - v; 
}

// viet ham tim USCLN cua 2 so bat ky
function timUSCLN(a,b) {
    if(a === 0 || b === 0){
        return a + b;
    }
    while( a != b){
        if( a > b){
            a -= b;
        } else {
            b -= a;
        }
    }
    return a; // hoac b vi a va b luc nay bang nhau sau vong lap
}
// viet ham giai ptbh