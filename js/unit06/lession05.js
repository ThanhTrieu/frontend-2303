// viet chuong trinh giai ptbh theo oop js

class GiaiPTBH {
    // ham khoi tao
    // ham se tu dong chay dau tien khi khoi tao doi tuong cho class
    // thong thuong contructor cung la noi giup de dinh nghia - tao ra thuoc tinh
    constructor(a, b, c){
        //console.log('call 1st time');
        //console.log(a,b,c);
        this.a = a; // this.a : thuoc tinh || a tham so cua contructor
        this.b = b;
        this.c = c;
        // this.a, this.b, this.c chinh la he so cua phuong trinh bac 2
    }

    // # : private - phuong thuc chi duoc hoat dong trong class
    // ra ngoai class khong the truy cap vao duoc
    // pham vi truy cap cua phuong thuc
    #getDelta = () => {
        return Math.pow(this.b, 2) - (4*this.a*this.c);
    }

    // pham vi truy cap public : truy cap vao tu bat ky noi dau
    getResult = () => {
        const result = {};
        const detal = this.#getDelta();
        if(detal === 0){
            result.mess = 'phuong trinh co nghiem kep';
            result.res  = (-this.b)/(2*this.a);
            return result;

        } else if (detal < 0){
            result.mess = 'phuong trinh vo nghiem';
            result.res  = 'N/A';
            return result;
        } else {
            let x1 = ((-this.b)+ Math.sqrt(detal)) / (2*this.a);
            let x2 = ((-this.b)- Math.sqrt(detal)) / (2*this.a);
            result.mess = 'phuong trinh co 2 nghiem phan biet';
            result.res  = { x1, x2 };
            return result;
        }
    }
}
const pt = new GiaiPTBH(1,-3,2); // constructor se chay
const { mess, res } = pt.getResult();
console.log(mess, res);