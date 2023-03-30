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

