let a = 10; // number
let b = '20'; // string | number string
b = Number.parseInt(b); // ep ve kieu so (so nguyen)

let c = a + b; // 30 | 1020
// + : toan tu ghep chuoi
console.log(c, typeof(c));

let number = 'b100';
let val = Number.parseInt(number);
console.log(val,  typeof(val));

//NaN !== NaN

if(!Number.isNaN(number)){
    console.log('yes');
} else {
    console.log('No');
}


let name = '';
// '' == false == 0 : ve mat gia tri
// true == 1 : ve mat gia tri
if(name === 0) {
    console.log('oke');
} else {
    console.log('Error');
}
let res = 10/0;
console.log(res, typeof(res));
//////////////////////////////////////////////////////
// chuoi
let time = '18h30';
let myString = 'dang hoc js' + time;
let myString2 = "dang hoc js" + time;
let myString3 = `dang hoc js ${time}`; // su dung bien trong chuoi
console.log(typeof(myString, myString2, myString3));
console.log(myString3);
let str = ' Sap hoc \'RectJS\' ';
let str2 = " sap hoc \"ReactJS\"  ";
let str23 = " hoc 'reactjs' ";
console.log(str);
let html = `
    <html>
        <head></head>
        <body></body>
    </html>
`;
let html2 = '<html>';
html2 += '<head></head>'
html2 += '</html>';

let str4 = 'toi dang hoc \n js'; // \n ky tu dac biet nam trong chuoi
console.log(str4);
let str5 = 'hoc js'
console.log(str5.length);
console.log(str5.toUpperCase());
// toUpperCase : tac dong truc tiep vao chuoi ban dau

let str6 = "Hom nay la thu 6";
let pos = str6.lastIndexOf('6');
let pos2 = str6.indexOf('6');
let pos3 = str6.includes('6');
console.log(pos, pos2, pos3);
//  "Hom nay la thu 6";
let child = str6.slice(2,-1);
let child2 = str6.substring(2,-2); // > 0 : tham so thu 2
console.log(child)
console.log(child2);

let link = "https://abc.xzyx.com.vn?id=10&name=teo&age=20";
// ?id=10&name=teo : query string
// viet ham tach chuoi lay ra het phan query string
function myGetQueryString(url){
    return url.slice(url.indexOf('?'), url.length);
}
let getQueryString = url => url.slice(url.indexOf('?'), url.length);

console.log(myGetQueryString(link), getQueryString(link));
/////////////////////////////////////////////////////////////////////
// Symbol type
let id = Symbol('MyName');
let id2 = Symbol('MyName');
// id ko bang id2 duoc ve mat gia tri
if(id == id2){
    console.log('yes');
} else {
    console.log('No');
}
console.log(id.description); // in gia tri truyen vao Symbol