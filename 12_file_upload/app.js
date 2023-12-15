const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');

//multer관련 설정
const multer = require('multer');
const upload = multer({
    dest: 'uploads/',//dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
})

//multer 세부 설정
const uploadDetail = multer({
    //storage: 저장할 공간에 대한 정보
    storage: multer.diskStorage({
        //destination: 경로 설정
        destination(req, file, done) {
            //done: callback 함수
            done(null, 'uploads/')//파일을 업로드할 경로 설정
        },
        filename(req, file, done) {
            //파일 확장자 추출
            const ext = path.extname(file.originalname);

            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        }
    }),
    limits: {fileSize: 10*1024*1024}
})

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/uploads', express.static(__dirname+'/uploads'));

app.get('/', (req, res) => {
    res.render('index');
})

//1.single(): 하나의 파일을 업로드
//upload.single('userfile)
app.post('/upload', uploadDetail.single('userfile'),(req, res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send('파일 업로드 완료');
})

app.post('/upload/array', uploadDetail.array('userfiles'),(req, res)=> {
    console.log(req.files);
    console.log(req.body);
    res.send('하나의 인풋에 여러개의 파일 업로드')
})

app.post('/upload/fields', uploadDetail.fields([{name: 'userfile1'}, {name: 'userfile2'}]),(req, res)=> {
    console.log(req.files);
    console.log(req.body);
    res.send('여러개의 인풋에 각각의 파일 업로드')
})

app.post('/dynamic', uploadDetail.single('dynamicFile'),(req, res)=> {
    console.log(req.file);
    console.log(req.body);
    res.send({ file: req.file, title: req.body.title});
})

app.listen(PORT, () => {
    console.log(`${PORT} port is opening`);
})