function call(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(name);
            resolve(name);
        }, 1000);
})
}
function back(name){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`back`);
            resolve(`back`);
        }, 1000);
})
}

function hell(name){
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`callback hell`);
            resolve(`callback hell`);
        }, 1000);
})
}

/*call('kim').then(function (result){
    console.log(result + '반가워');
    return back(result);
}).then(function (result){
    console.log(result + '을 실행했구나');
    return hell(result);
}).then(function (result){
    console.log(`여기는 `+result);
})*/

async function exec() {
    try {
        let name = await call(`kim`);
        console.log(name + '반가워');
        let great = await back(`kim`);
        console.log(great + '을 실행했구나');
        let wellcome = await hell(`kim`);
        console.log(`여기는 `+ wellcome);
    } catch (error) {
        console.log(error);
    }
    
}

exec();