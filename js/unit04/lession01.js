// object trong js
const car = {}; // empty
car.name = 'Toyota'; // bo sung thuoc tinh vao object
car['weight'] = 500;
car.color = 'red';
car.start = function(){
    // bo sung phuong thuc vao object
    console.log('do something');
}
console.log(car);// {name: 'Toyota', weight: 500, color: 'red'}
// truy cap vao thuoc tinh - phuong thuc trong object
// 1 - truy cap thuoc tinh: cu phap : nameObject.key || nameObject['key']
console.log(car.name, car['color']);
car.start(); // truy cap phuong thuc: () thuc thi phuong thuc

const person = {
    name: 'teo',
    age: 20,
    phone: '3243242',
    add: 'Ha Noi'
};
console.log(person['add'], person.age);
person.email = 'teo@gmail.com';
//person = 'teo@gmail.com';
console.log(person);
// duyet object
for(let i in person){
    console.log(i, person[i]);
}

const { a, b, c } = { a: 10, b: 20, c: 30}
console.log(a,b,c);
const student = {...person, msv: 'abc1213', class: 'IT405'};
console.log(student);
////////////// ket hop array + object

const listProductions = [
    {id: 1, name: 'Iphone', price: 1234},
    {id: 2, name: 'Samsung', price: 100},
    {id: 3, name: 'Nokia', price: 50}
];
console.log(listProductions);
// lay ra gia cua san pham
const total = listProductions.filter(item => item.price > 50).reduce((i,j) => i.price + j.price);
console.log(total);

const tableList = `
    <table>
        <thead>
            <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Price</th>
            </tr>
        </thead>
        <tbody>
            ${listProductions.map((item, key) => (`
                <tr key=${key}>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.price}</td>
                </tr>
            `) )}
        </tbody>
    </table>
`;
//console.log(tableList);
const rooms = [
    {id: 1, name: 'CNTT'},
    {id: 2, name: 'Ke Toan'}
];
const staffs = [
    {id: 1, room_id: 1, name: 'Van Teo', age: 20, phone: '1212'},
    {id: 2, room_id: 1, name: 'Van Ty', age: 22, phone: '12323'},
    {id: 3, room_id: 2, name: 'Thi Hoi', age: 19, phone: '0986'},
];
// lam the nao lay dc ten phong tu rooms sang staffs
for(let i = 0; i < staffs.length; i++){
    for(let j = 0; j < rooms.length; j++){
        if(staffs[i].room_id === rooms[j].id){
            staffs[i].room_name = rooms[j].name;
        }
    }
}
console.log(staffs);
const tableStaff = `

`;

const randomNumbers = [10,20,91,2,11,8,9,1,90];
// viet ham tra ve mang chua 2 so min va max cua mang
const findMinAndMax = (arrNumbers) => {
    let min = arrNumbers[0];
    let max = arrNumbers[0]; // gan mac dinh bang phan tu dau tien
    for(let i = 1; i < arrNumbers.length; i++){
        if(arrNumbers[i] < min){
            min = arrNumbers[i];
        }
        if(arrNumbers[i] > max){
            max = arrNumbers[i];
        }
    }
    return [min, max];
}
let min, max; // data type: undefined
[min, max] = findMinAndMax(randomNumbers);
console.log(min, max);

// ex
const listWorks = [
    {id: 1, name: 'Hoc HTML', done: false},
    {id: 2, name: 'Hoc CSS', done: false},
    {id: 3, name: 'Hoc JS', done: true},
];
// tra ve mot mang ko chua id = 3
const myWorks1 = listWorks.filter(item => item.id !== 3);
// them 1 object moi vao ko lam thay doi mang ban dau
const myWorks = [...listWorks, {id: 4, name: 'Hoc React', done: false}];

// chuyen trang thai done: false ve true voi id = 2
const newWorks = listWorks.map(item => {
    return item.id === 2 ? {...item, done: true} : item;
   // ...item // {id: 2, name: 'Hoc CSS', done: false , done: true}
});
console.log(newWorks);

const t1 = { a: 1, b: 2, c:3 };
const t2 = {...t1, c: 5, d: 6};
console.log(t2);

const t3 = { a: 1, b: 2, c:3, list: [{id: 1, name: 'Teo'}, {id: 2, name: 'Ty'}] };
// in ra data Ty - dung destructing asm
const { list } = t3; //[{id: 1, name: 'Teo'}, {id: 2, name: 'Ty'}]
const { name } = list[1]; // {id: 2, name: 'Ty'}
console.log(name);

