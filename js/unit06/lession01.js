function foo(){
    console.log('I');
    console.log('can not');
    console.log('pause');
}
//foo();
// I
// can not
// pause
// trien khai theo generator function (ES6)
function* generate(){
    // function* : cu phap phai ghi nho
    console.log('call 1st time');
    yield 1; // pause
    console.log('call 2nd time');
    yield 2; // pause
}
const gen = generate();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
