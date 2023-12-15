//임시 db에서 데이터를 받았다
/*app.post('/index', (req, res) => {
    console.log(req.body); // { userId: 'banana', userPw: '1234' }

    // userId, userPw 라는 변수 값과 클라이언트에서 넘겨받은 값이 일치하는지 검사
    if (userId === req.body.userId && userPw === req.body.userPw) {
        res.send({ userInfo: req.body, isSuccess: true });
    } else {
        res.send({ isSuccess: false });
    }
    // 결과 값을 반환
})
*/

exports.getVisitors = () => {
    return [
        {id: 1, name: '홍길동', comment: '내가 왔다.'},
        {id: 2, name: '이찬혁', comment: '으라차차'},
    ];
};
