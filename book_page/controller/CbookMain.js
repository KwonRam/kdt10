const BookMain = require('../model/BookMain');

exports.main = (req, res) => {
    res.render('index');
    console.log('컨트롤러인덱스')
}

exports.get_bookshelf = (req, res) => {
    res.render('bookShelf');
    console.log('컨트롤러북쉘프')
}

/*exports.get_description = (req, res) => {
    res.render('book');
}*/

// GET /comment/:id
exports.get_description = (req, res) => {
    // req.query : /comment?id=1
    //res.render('bookShelf');
    console.log('get descripytion')
    console.log('쿼리 ', req.query);
    console.log('파람s ', req.params);

    //const books = BookMain.bookInfos(); // (model 연결 후 추가)
    //const bookTitle = req.query.title; // 데이터로 받은 책 제목 
    //const bookAuthor = req.params.authorName; // 데이터로 받은 책 작가

    /*for(i=0; i < books.length ;i++){
        if(books[i].title.includes(bookTitle)) {
            res.render('bookContent', { bookInfo: books[i] });
        }
    }*/
    res.render('bookContent');
};