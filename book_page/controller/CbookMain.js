const User = require('../model/BookMain');

exports.main = (req, res) => {
    res.render('index');
}

exports.get_bookshelf = (req, res) => {
    res.render('bookshelf');
}

/*exports.get_description = (req, res) => {
    res.render('book');
}*/
