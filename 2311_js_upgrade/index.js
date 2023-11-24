//구조분해할당

//1.배열 구조분해할당
//-순서가 중요함 

const arr1 = [1,2,3,4,5];
const arr2 = ['a','b','c'];

//구조분해할당
const [one , two, three, four, five] =arr1;
console.log(one , two, three, four, five);
const[x,y,z, alpha]=arr2;
console.log(x,y,z, alpha);

const list = ['apple','orange'];
const [f1, f2, f3='banana'] = list;
console.log(f1, f2, f3);

let num1 = 1, num2 =3;
console.log('swap 전 >', num1, num2);
[num1, num2]=[num2, num1];
console.log('swap 후 >', num1, num2);

//2. 객체 구조분해 할당
// -key 값과 변수명이 일치
const obj = {
    title: '독전2',
    star: 1,
    content: '제발 보지마라...'
}

//구조분해 없이
console.log(obj.content, obj.star, obj.title);

//구조분해
const{content, star, title, price = 10000} = obj;
console.log(content, star, title, price);

//콜론을 이용해 새 변수명으로 바꿔서 저장 가능

const {content: c1, star: s1, title: t1} = obj;
console.log(c1,s1,t1);

function getInfo(lecture) {

}

const result = getInfo(info);
console.log(result);