const BookMain = require('../model/BookMain');

exports.main = (req, res) => {
    res.render('index');
}

exports.book_content = (req, res) => {
    console.log('북컨텐트')
    console.log(req.query); // { id: '1' }
    //console.log(req.query.id);
    BookMain.getBookInfo(req.query.id, (result)=> {
        console.log('CbookContent.js > ', result);
        res.send(result);
    })
}

exports.book_content_detail = (req, res) => {
    bookContent.for
    res.render('bookContent', {})
}