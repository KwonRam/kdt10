//crypto - nodejs 내장 모듈
const crypto = require('crypto');

//crypto 단방향 
//createHash

const createHashedPW = (password) => {
    return crypto.createHash('sha512').update(password).digest('base64');
}

console.log(createHashedPW('1234'));

//pbkdf2Sync(비밀번호, salt, 반복회수, 키의 길이, 알고리즘)

//-단방향 암호화 생성 함수
function saltAndHashPW(password){
    const salt = crypto.randomBytes(16).toString('base64');//salt 생성
    const iteration = 100; //반복횟수
    const keylen = 64; 
    const algorithm = 'sha512'

    const hash = crypto.pbkdf2Sync(password, salt, iteration,keylen,algorithm).toString('base64');

    return {salt , hash};
}
//-암호 비교 함수
function checkPW(inputPW, savedSalt, savedHash) {
    const iteration = 100; //반복횟수
    const keylen = 64; 
    const algorithm = 'sha512'
    const hash = crypto.pbkdf2Sync(inputPW, savedSalt, iteration,keylen,algorithm).toString('base64');

    return savedHash === hash; 
}

const password = '1234!';

const {salt, hash } = saltAndHashPW(password);

const inputPW = '1234!';
const isMatch = checkPW(inputPW, salt , hash);
console.log(isMatch);