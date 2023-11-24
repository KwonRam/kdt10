//spread연산자
//반복 가능한 객체에 대해 단일 요소로 압축을 해제하는 역할
//객체들의 값을 펼쳐준다

//배열에서 spread

const a =[1,2,3];
const b =[4,5];
const spread = [...a, ...b];
console.log(spread);

//문자열 spread

const str = 'Hello'
console.log([...str]);

//객체에서 spread

const chip = {
    base: 'chip',
    company: 'lotte'
}

const potatoChip = {
    ...chip,
    flavor: 'onion'
}

console.log(potatoChip);

const sweatPotatoChip = {
    ...potatoChip,
    flavor: 'sweet onion'
}

console.log(sweatPotatoChip);