const express = require('express');
const app = express();
const PORT =8000;

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
//임시 db 데이터 댓글 목록

const comments = [
    {
        id: 1,
        userid: 'helloword',
        date: '2022-10-31',
        comment: '안녕하세요~'
    },
    {
        id: 2,
        userid: 'hello',
        date: '2022-11-31',
        comment: '반가워요~'
    },
    {
        id: 3,
        userid: 'apple',
        date: '2022-3-31',
        comment: '신기하다~'
    },
    {
        id: 4,
        userid: 'best',
        date: '2022-4-31',
        comment: '댓글 적기~'
    },
]

const userInfo = {
    realId: 'hello',
    realPw: '1234',
    realName: '홍길동',
    age: 20
};


//mvc 적용 전
app.get('/', (req,res)=> {
    res.render('index');
})

//get / comments
app.get('/comments', (req, res)=>{
    console.log(comments);
    res.render('comments', {commentInfos: comments})
})

//get comment /:id

app.get('/comment/:id', (req, res)=>{
    console.log(req.params); // {id: 1}: 라우트 매개변수에 대한 정보가 담겨있음 
    console.log('id >', req.params.id);

    const commentId = req.params.id;//댓글 id: url로 들어온 매개변수
    console.log(comments[commentId -1]);

    if(commentId < 1 || commentId > comments.length) {
        return res.render('404');
    }

    res.render('comment', { commentInfo: comments[commentId -1]});
})

app.get('/user', (req, res)=>{
    res.render('user', {userInfo});
})

//404처리는 맨 밑에 맨 나중에 라우트로 선언
app.get('*', (req, res)=> {
    res.render('404');
})

app.listen(PORT, () => {
    console.log(`${PORT} port is opening`);
})