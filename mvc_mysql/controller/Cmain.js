//유저에 대한 처리
const Visitor = require('../model/Visitor');
//get /
exports.main = (req, res) => {
    res.render('index');
}
/*
exports.index = (req, res) => {
    res.render('index');
}*/

exports.visitor = (req, res)=>{
    console.log('req body: ', req.params);
    res.render('visitor', {data: req.params});
}