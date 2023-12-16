const User = require('../model/BookMain');

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
    console.log('get descripytion')
    console.log(req.query); // { id: '1' } : 라우트 매개변수에 대한 정보가 담겨 있음
    //console.log('id >', req.params.id);

    const books = BookMain.bookInfos(); // (model 연결 후 추가)
    const bookTitle = req.query.title; // 데이터로 받은 책 제목 
    //const bookAuthor = req.params.authorName; // 데이터로 받은 책 작가

    for(i=0; i < books.length ;i++){
        if(books[i].title.includes(bookTitle)) {
            res.render('bookContent', { bookInfo: books[i] });
        }
    }
    //console.log(comments[commentId - 1]);

    // 존재하지 않는 댓글 id 접속시 404 페이지
    /*if (commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }*/

    //console.log(typeof commentId); // string

    // :id 변수에 숫자가 아닌 값이 온다면 404 페이지
    /*if (isNaN(commentId)) {
        return res.render('404');
    }*/ 
};