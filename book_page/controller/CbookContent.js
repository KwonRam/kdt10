const BookMain = require('../model/BookMain');

exports.main = (req, res) => {
    res.render('index');
}

exports.book_content = (req, res) => {
    res.render('bookContent');
}

exports.book_content_detail = async (req, res) => {
    console.log('북컨텐트 디테일')
    console.log('북컨텐트 디테일 ', req.params);
    console.log('북컨텐트 디테일 ', req.params.title);
    // try {
    //     const title = req.params.title;
    //     BookMain.getBookInfo(BookMain.bookInfos(), title, (result) => {
    //         // res.send(result);
    //         res.render('test', {title: result.title})
    //     })
    // }
    // catch (error) {
    //     console.error(error);
    //     res.status(500).send('Internal Server Error');
    // }

    try {
        const title = req.body.title;
        BookMain.getBookInfo(BookMain.bookInfos(), title, (result) => {
            // res.send(result);
            res.render('test', {title: result.title})
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}