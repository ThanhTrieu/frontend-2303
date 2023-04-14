function getAllUsers(callback){
    //let users = [];
    setTimeout(() => {
        callback([
            {id: 1, name: 'teo', age: 20},
            {id: 2, name: 'ty', age: 21},
            {id: 3, name: 'hoi', age: 19},
            {id: 4, name: 'teo', age: 22},
        ]);
    }, 1000);
    //return users;
    // return [
    //     {id: 1, name: 'teo', age: 20},
    //     {id: 2, name: 'ty', age: 21},
    //     {id: 3, name: 'hoi', age: 19},
    //     {id: 4, name: 'teo', age: 22},
    // ];
}

function getUserByName(name = '', resolve, reject){
    //let users = getAllUsers(); // tra ve mang rong
    //let user  = users.filter(item => item.name === name);
    //return user;
    getAllUsers((users) => {
        let user = users.filter(item => item.name === name);
        if(user.length > 0){
            resolve(user);
        } else {
            reject({cod: 404, mess: 'Not found data'});
        }
    });
}
/*
getUserByName('teo000', data => {
    // xu ly logic o day
    console.log(data);
}, err => {
    console.log(err);
});
*/
//////////////////////////// Promise /////////////////////////////////
function getListUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if(!true){
                resolve([
                    {id: 1, name: 'teo', age: 20},
                    {id: 2, name: 'ty', age: 21},
                    {id: 3, name: 'hoi', age: 19},
                    {id: 4, name: 'teo', age: 22},
                ])
            } else {
                reject({cod: 404, mess: 'Not found data'})
            } 
        }, 1000);
    });
}
// lay data tu promise
const users = getListUsers();
//console.log(users);
users.then(data => {
        let user = data.filter(item => item.name === 'teo');
        console.log(user);
    }) // lay du lieu tu reslove
    .catch(err => {
        console.log(err);
    }) // lay du lieu tu reject


