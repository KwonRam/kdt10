//유저에 대한 처리
const userInfo = require('../model/User');
//get /
exports.main = (req, res) => {
    res.render('index');
}

exports.index = (req, res)=>{
    const userData = userInfo.userInformations();
    if (userData.userId === req.body.userId && userData.userPw === req.body.userPw) {
        res.send({ userInfo: req.body, isSuccess: true });
    } else {
        res.send({ isSuccess: false });
    }
}