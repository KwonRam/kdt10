//모델 연결을 해봅시다
const Comment = require('../model/Comment');

//get /
exports.main = (req, res) => {
    res.render('index');
}

//get /comments
exports.comments = (req, res)=>{
    console.log(Comment.commentInfos());
    res.render('comments', {commentInfos: Comment.commentInfos()})
}

//get /comment/:id
exports.comment = (req, res)=>{
    console.log(req.params); // {id: 1}: 라우트 매개변수에 대한 정보가 담겨있음 
    console.log('id >', req.params.id);
    const comments = Comment.commentInfos();//모델 연결
    const commentId = req.params.id;//댓글 id: url로 들어온 매개변수
    console.log(comments[commentId -1]);

    if(commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }

    res.render('comment', { commentInfo: comments[commentId -1]});
}
