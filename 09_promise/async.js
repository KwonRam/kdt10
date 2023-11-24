//async - await
//async: 함수 앞에 붙이는 키워드
//-함수만 보고도 비동기 함수임을 알 수 있다
//프로미스를 반환함

//await: 기다리다
//성공 실패로 프로미스 객체의 실행이 완료되기를 기다려줌
//await 뒤에는 프로미스가 옴
//async와 await는 짝꿍 

function goMart() {
    console.log('마트에 와서 어떤 음료를 살지 고민');
}

function pickDrink(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('고민을 끝냄')
            product = '콜라';
            price = 1600;
            //위의 코드가 실행된 이후 실행될 콜백함수
            resolve();
        }, 3000);
    })
}

function pay(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`)
}

let product, price;

async function exec() {
    goMart();
    await pickDrink();
    pay(product, price);
}

exec();

//async-await 키워드 사용시 에러처리는 try catch문으로

async function exec1() {
    try {
        goMart();
        await pickDrink();
        pay(product, price);
    } catch (error) {
        console.log(error);
    }
    
}

//then-catch를 쓰면

goMart();
pickDrink().then((result)=> {
    pay(product,price);
}).catch((err)=> {
    console.log(err);
})

exec1();
