import axios from 'axios';

function* callData(){
    console.log('call Get all comments');
    yield axios.get('https://dummyjson.com/comments');
    console.log('call single comments');
    yield axios.get(`https://dummyjson.com/comments/1`);
}
const data = callData();
//console.log(data.next());
//const result = data.next().value; // promies
data.next().value.then( r => r.data)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    });
data.next().value.then(r => r.data).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})


