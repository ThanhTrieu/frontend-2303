// mang trong js
// kieu du lieu: object
const numbers = [1,2,3,4,5,6,7,8,9];
numbers[9] = 10; // dung
//numbers = 11; // sai
console.log(numbers);
// so luong phan tu
console.log(numbers.length);
// truy cap vao phan tu trong mang
// cu phap: nameArray[key] : key - vi tri phan tu trong mang
// in so 6 ra man hinh console trong mang numbers
console.log(numbers[5]);
const numbers2 = ['tao','quyt', ['dua', 'le'], 1,2,3];
// in gia tri dua ra man hinh console ???
console.log(numbers2[2][0]);

// duyet qua phan tu nam trong mang
// 1 -for ...
const numbers3 = [1,2,3,4,5,6,,7,8,9];
let count = numbers3.length;
for(let i = 0; i < count; i++){
    //console.log(numbers3[i]);
}
// 2 - forEach
numbers3.forEach(function(e,k,a){
    // e: phan tu trong mang (bat buoc)
    // k: vi tri (tuy chon)
    // a: mang ban dau (tuy chon)
    //console.log(`vi tri ${k} = gia tri ${e}`);
});
numbers3.forEach(e => {
    //console.log(`gia tri phan tu = ${e}`);
});
// 3 - for ... of
for(let j of numbers3){
    //console.log('gia tri ' + j);
}
// 4 - map

const res = numbers3.filter((item) => {
    //console.log(`gia tri = ${item} : vitri = ${key}`);
    if(item % 2 !== 0){
        return item;
    }
});
// lay 1 mang chua cac so le trong mang da cho
console.log(res);

const numbers4 = [1,2,3,4,5,6,7,8,9];
// viet ham  xu ly tra ve mot mang chua tat ca cac so la binh phuong cua so chan nam trong mang da cho
let myFn = (arr) => {
    //return arr.filter(item => item % 2 === 0)
              //.map(item => Math.pow(item, 2));
    let newArr = [];
    let j = 0;
    let k = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
           //newArr.push(arr[i]); 
            newArr[j] = arr[i];
            j++;
        }
    }
    // newArr: chua toan so chan
    let newArr2 = [];
    for(let i = 0; i < newArr.length; i++){
        //newArr2.push(Math.pow(newArr[i], 2));
        newArr2[k] = Math.pow(newArr[i], 2);
        k++;
    }
    return newArr2;
}
console.log(myFn(numbers4));
//////////////////////////////////////////////////////////////////////////////////
const myArr = [1,2,3,4,5];
const myArr2 = [...myArr,6,7,8,9]; //Spread operator
console.log(myArr2); 

function testDemo(...a) {
    // ...a - rest params
    console.log(a); // array
}
testDemo(1,2,3,'apple', 'lemon');
// myArr2 [1,2,3,4,5,6,7,8,9];
const findEl = myArr2.includes(6);
console.log(findEl);

const childArr = myArr2.slice(2,6);
//console.log(childArr, myArr2);

const newTest = [1,2,3,4,5,6];
const childArr2 = newTest.splice(2,3,100,200);
console.log(childArr2, newTest);

const newTest2 = [1,2,3,4,5,6];
// viet ham tinh tong cac so chan
const myFn2 = (arr) => {
    // [2,4,6];
    //return arr.filter(item => item % 2 === 0)
                //.reduce((next, current) => next + current);
    let s = 0;
    for(let i = 0; i< arr.length; i++) {
        if(arr[i] % 2 === 0){
            s += arr[i];
        }
    }
    return s;
}
console.log(myFn2(newTest2));

let t1, t2, t3, rest;
[t1,t2,t3, ...rest] = [10,30,40,1,2,3,4,5];
console.log(rest.reduce((i,j) => i+j));

