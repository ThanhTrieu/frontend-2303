class Student {
    // dinh nghia thuoc tinh
    name = 'Teo';
    age = 20;
    static address = 'Ha Noi';
    // khong dung cac tu khoa var, let, const de khai bao thuoc tinh

    // dinh nghia phuong thuc (ham) - hanh dong cua doi tuong
    learning(){
        // kho can dung tu khoa function
        return "JS";
    }
    sleeping = () => {
        return "00:00";
    }

    getName = () => {
        console.log(this);
        return this.name;
    }
    getAge(){
        console.log(this);
        return this.age;
    }
    static showName = () => {
        //console.log(this);
        // ban chat trong nay ko ton tai doi tuong this
        const st = new Student;
        return st.name //this.getName();
    }

    static getAddress(){
        //console.log(this);
        // neu dung this thi chi goi den nhung thuoc tinh hay phuong cung phai la static
        return this.address;
    }

    myAddress = () => {
        console.log(this);
        return Student.getAddress();
    }
}
// khoi tao doi tuong cho class
const IT = new Student;
const CK = new Student;
console.log(Student.showName());
console.log(Student.address);
console.log(Student.getAddress());
console.log(IT.myAddress());

// truy cap vao thuoc tinh trong class
//console.log(IT.name);
//console.log(CK.age);
// truy cap vao phuong thuc trong class (truy cap vao ham va goi ham ra su dung)
// console.log(IT.learning());
// console.log(CK.sleeping());
// console.log(IT.getAge());
// console.log(CK.getName());
