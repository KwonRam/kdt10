//rest파라미터

const values = [1,2,3,4,5]

//함수 선언

function get(a,b, ...rest){
    console.log('a>', a);
    console.log('b>', b);
    console.log('rest>', rest)
}

get(...values);

//객체에서 rest

const icecream = {
    flavor: 'choco',
    price: 1000,
    company: 'bingre'
}