const arrNumbers = [1,2,3,4,5,6,7,8,9];
// tu viet 1 ham tra ve 1 mang toan so chan hoac le tu mang da cho

function filterArray(arr, callback) {
    // callback: chinh la 1 function de tinh toan xu ly logic nao do
    if(typeof callback !== 'function'){
        return false;
    }
    if(!Array.isArray(arr)){
        return false;
    }

    let results = [];
    for(let numbers of arr){
        if(callback(numbers)){
            results.push(numbers);
        }
    }
    return results;
}

// dinh nghia 1 callback de truyen vao ham khac
function isEven(number){
    return number % 2 === 0;
}
function isOdd(number){
    return number % 2 !== 0;
}

//console.log(filterArray(arrNumbers, isEven));
//console.log(filterArray(arrNumbers, isOdd));
//console.log(filterArray(arrNumbers, (n) => n % 3 === 0));

console.log('A');
setTimeout(() => {
    console.log('B');
}, 0);
console.log('C');