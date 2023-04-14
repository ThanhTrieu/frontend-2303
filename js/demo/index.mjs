import { api } from "./services/api.mjs";
import sumTotalNumber, { checkIsEven as isEven, checkIsOdd as isOdd } from './test.mjs';


console.log(sumTotalNumber(1,3));
console.log(isEven(1));

function getData(){
    const data = api.getAllDataProducts();
    data.then( result => {
            console.log(result.data);
        }).catch(err => {
            console.log(err)
        });
}
function getDataById(id) {
    api.getDataProductById(id)
       .then(result => result.data)
       .then(data => {
            console.log(data)
       })
       .catch(err => {
        console.log(err);
       })
}
//getDataById(1);