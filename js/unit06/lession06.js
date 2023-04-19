class A {
    #name = 'Teo'; // private thuoc tinh
    age = 20;
    phone = '789';

    constructor(){
        console.log('constructor class A');
    }

    getPhone() {
        // ko dung arrow function vi ko ho tro super o class con (B)
        return this.phone;
    }

    getName = () => {
        return this.#name;
    }
}

class B extends A {
    my_phone = '123'
    constructor(){
        super(); // de tranh tinh trang override constructor cua class cha A
        console.log('constructor class B');
    }

    getPhone = () => {
        // override lai method cua class A
        return this.my_phone;
    }

    myPhone = () => {
        // muon goi method getPhone cua class A thi lam ntn ?
        return super.getPhone();
        //return this.getPhone(); // ?? getPhone cua B hay A
    }

    myAge = () => {
        //return this.#name; // sai vi #name la private cua class A
        return this.age;
    }
}

const b = new B; //
//console.log(b.#name); // private - khong the truy cap ben ngoai class
console.log(b.getName());
console.log(b.myAge());
console.log(b.myPhone()); // ??? 123 - 789
