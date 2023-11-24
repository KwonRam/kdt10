//promise 객체
//비동기 함수를 동기처리하기 위해 만든 객체
//미래에 성공과 실패에 대한 결과값을 약속한다
//성공과 실패를 분리해서 반환
//성공에 대한 결과는 then 이라는 메서드
//실패에 대한 결과는 catch라는 메서드
//resolved: 성공
//rejected: 실패 

//promise를 생성하는 코드

/*function promise1(flag) {
    //프로미스 객체를 생성하여 반환
    return new Promise(function(resolve, reject) {
        if(flag) {
            resolve(`현재 프로미스의 상태는 fulfilled then 메서드로 연결 flag: ${flag}`);
        }
        else {
            reject(`현재 프로미스의 상태는 rejected(거절), catch 메서드로 연결 flag: ${flag}`);
        }
    })
}*/

// promise를 사용하는 코드 작성

/*promise1(true).then((result)=> {
    console.log('result:', result);
}).catch((error)=> {
    console.log('error:', error);
})*/

//프로미스 예제
//index.js에서 콜백함수를 이용해서 동기처리한 코드를 프로미스를 이용해 동기처리

/*function goMart() {
    console.log('마트에 와서 어떤 음료를 살지 고민');
}

function pickDrink() {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log('고민을 끝냄')
            product = '콜라';
            price= 1600;
            //위의 코드가 실행된 이후 실행될 콜백함수

            resolve();//성공을 의미하는 resolve 실행
        }, 3000);
    })
    // 3초 고민(3초후 실행)
    
}

function pay(product, price) {
    console.log(`상품명: ${product}, 가격: ${price}`)
}

let product, price;

goMart();
pickDrink().then(() =>{
    pay(product, price);
})
*/

//프로미스 체이닝

function add(n1, n2, cb) {
    setTimeout(function () {
        const result = n1 + n2;
        cb(result);
    }, 1000);
}

function mul(n, cb) {
    setTimeout(function () {
        const result = n * 2;
        cb(result);
    }, 700);
}

function sub(n, cb) {
    setTimeout(function () {
        const result = n - 1;
        cb(result);
    }, 500);
}

add(4, 3, function (result) {
    console.log(`add result :`, result);
    mul(result, function (result) {
        console.log(`mul result:`, result);
        sub(result, function (result) {
            console.log(`sub result:`, result);
        })
    })
})

//프로미스 체이닝으로 작성


function addPromise(n1, n2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n1 + n2;
            resolve(result);
        }, 1000);
    })
}

function mulPromise(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n * 2;
            resolve(result);
        }, 700);
    })
}

function subPromise(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n - 1;
            resolve(result);
        }, 500);
    })
}

addPromise(4,3).then(function (result1){
    console.log(`add result : `, result1);
    return mulPromise(result1);
}).then(function(result2) {
    console.log(`mul result : `, result2);
    return subPromise(result2);
}).then(function(result3) {
    console.log(`sub result : `, result3);
})