//example 편의점에 들어가서 음료수를 사고 나오는 코드
function goMart() {
    console.log('마트에 와서 어떤 음료를 살지 고민');
}

function pickDrink(callback) {
    // 3초 고민(3초후 실행)
    setTimeout(function() {
        console.log('고민을 끝냄')
        product = '콜라';
        price= 1600;
        //위의 코드가 실행된 이후 실행될 콜백함수
        callback(product,price);
    }, 3000
    );
}

function pay(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`)
}

let product, price;

goMart();
pickDrink(pay);
//pay(product, price);