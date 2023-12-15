//유저에 대한 처리
const userInfo = require('../model/UserLocal');

//get /
/*router.get('/', (req, res) => {
    res.render('user',{userInfo});
})*/


exports.user = (req, res)=>{
    console.log(userInfo.userInformations());
    res.render('user', {userInfo: userInfo.userInformations()})
}