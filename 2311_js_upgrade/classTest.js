//클래스
// 객체 생성 탬플릿: 캑체를 만들기 위해 사용

class House {

    constructor(year, name, window) {
        this.year = year;
        this.name = name;
        this.window = window;
    }

    getAge() {
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 됐다`)
    }

    getWindow() {
        console.log(`${this.name}의 창문 갯수는 ${this.window}개다`)
    }
}

const house1 = new House(2010, '아파트', 10);
console.log('house1>', house1);

console.log(house1.name);
house1.getAge();

class Shape {
    
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width*this.height;
    }

}
let rec1 =new Shape(3,4);
console.log(rec1.getArea());

class Apartment extends House {
    constructor (year, name, window, floor) {
        super(year, name, window);
        this.floor = floor;
    }
    
    getFloor() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor}`;
    } 
}

const apt1 = new Apartment(2022, '래미안', 100, 10);
console.log(apt1.getFloor());

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getDiagonal(){
        return Math.sqrt(this.width**2 + this.height**2);
    }
}
const rec2=new Rectangle(3,4) 
console.log(rec2.getDiagonal())

class Triangle extends Shape {
    constructor(width, height) {
        super(width, height);
    }
    getArea(){
        return this.width*this.height/2;
    }
}

class Circle extends Shape {
    constructor(width, height,radius) {
        super(width, height);
        this.radius=radius;
    }
    getArea(){
        return this.width*this.height*Math.PI;
    }
}

const tri1 = new Triangle(3,4)
console.log(tri1.getArea())
const cir1 = new Circle(3,4,5)
console.log(cir1.getArea())