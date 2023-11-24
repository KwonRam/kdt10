function first() {
    second();
    console.log(1);
}
function second() {
    console.log(2);
}

first();

function run() {
    console.log('3초뒤 실행')
}
console.log('시작')
setTimeout(run, 3000);
console.log('끝')