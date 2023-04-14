export default function sum(a,b){
    return a + b;
}
// trong 1 file(module) chi dc phep export default duy nhat 1 doi tuong
export function checkIsEven(n) {
    return n % 2 === 0;
}
export const checkIsOdd = (n) => {
    return n % 2 !== 0;
}