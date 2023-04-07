//console.log('Hello word');
/*
comment tren
nhieu dong
*/
let number = 3.14/'abc';
console.log(typeof(number), number);

var myName = 'Teo';
console.log(typeof(myName), myName); 

// hang so
const PI = 3.14;
//PI = 3.15; // sai - khong the thay doi gia tri cua const
console.log(PI);
// phan biet tu khoa let va var

let a = 10;
//let a = 20; // sai ko dung tu khoa let de dinh nghia lai bien da ton tai
console.log(a);

var b = 10;
var b = 20;
console.log(b);

let x = 10; // 1
if(a == 10){
    //let x = 20; // 2
    if(b == 20){
        let x = 30; // 3
        console.log(x);
    }
    console.log(x);
}
console.log(x);

// viet 1 doan code don gian kiem tra chan le
// dung if...else
// in ra het cac so le tu 1 - 20;
// su dung cac vong lap xu ly
// 1 - for
for(let i = 1; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
let j = 1;
while(j <= 20){
    if(j % 2 !== 0){
        console.log(j);
    }
    j++;
}

//
let u = 10;
let v = 9;
let res = (u++) + (--v) + (u--) - (v++) + (++u) + (v--);
//         10   +   8   +  11   -   8   +   11  +  9

let x1 = 20;
let x2 = 30;
let res2 = (--x2) - (--x1) + (x2++) - (x1++) - (x2--) + (++x1);
//           29   -   19   +   29   -   19   -   30   +  21
//
let month = 5;
switch(month) {
    case 1:
        // do something
        break;
    case 2:
        break;
    default:
        //
        break;
}
if(month === 5){
    // do something
} else if (month === 5){
        //
} else {
    // tuong duong default cua switch ... case
}

// cho biet tu 1- 100 co bao nhieu so chia het cho 5
let count = 0;
for(let i = 1; i <= 100 ; i++){
    if(i % 5 === 0){
        count++;
    }
}
let count2 = 0;
let n = 1;
while ( n <= 100) {
    if(n % 5 === 0){
        count2++;
    }
    n++;
}
let count3 = 0;
let  m = 1;
do {
    if(m % 5 === 0){
        count3++;
    }
    m++;
} while( m <= 100);