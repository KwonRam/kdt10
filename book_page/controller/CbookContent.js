const BookMain = require('../model/BookMain');

exports.main = (req, res) => {
    res.render('index');
}

exports.book_content = (req, res) => {
    console.log('북컨텐트')
    console.log('북컨텐트 ', req.query);
    console.log('북컨텐트 ',req.query.title);
    BookMain.getBookInfo(req.query.title, (result)=> {
        console.log('CbookContent.js > ', result);
        res.send(result);
    })
}

exports.book_content_detail = (req, res) => {
    console.log('북컨텐트 디테일')
    console.log('북컨텐트 디테일 ', req.params);
    console.log('북컨텐트 디테일 ', req.params.title);
    BookMain.getBookInfo(req.params.title, (result) => {
        res.send(result);
    })
}