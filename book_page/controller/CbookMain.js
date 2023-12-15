const User = require('../model/BookMain');

exports.main = (req, res) => {
    res.render('index');
    console.log('컨트롤러인덱스')
}

exports.get_bookshelf = (req, res) => {
    res.render('bookshelf');
    console.log('컨트롤러북쉘프')
}

/*exports.get_description = (req, res) => {
    res.render('book');
}*/
