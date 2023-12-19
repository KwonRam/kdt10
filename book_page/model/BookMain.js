//임시 데이터

exports.bookInfos = () => {

    /*const bookDataDetail = {
        title: ,
        link: ,
        author: ,
        pubDate: ,
        description: ,
        isbn: ,
        isbn13: ,
        priceSales: ,
        priceStandard: ,
        cover: ,
        publisher: ,
    }*/

    return [
        {
            title: "제3인류 1",
            link: "http://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8932916373&partner=openAPI",
            author: "베르나르 베르베르 지음, 이세욱 옮김",
            pubDate: "2013-10-21",
            description: "베르나르 베르베르 특유의 상상력으로 축조한 장대한 스케일의 과학 소설. 남극. 저명한 고생물학자 샤를 웰즈의 탐사대가 17미터에 달하는 거인의 유골들을 발굴한다. 그러나 인류사를 다시 쓰게 만들 이 중대한 발견은 발굴 현장의 사고와 함께 곧바로 파묻히고 마는데…",
            isbn: 8932916373,
            isbn13: 9788932916378,
            priceSales: 12420,
            priceStandard: 13800,
            cover: "http://image.aladin.co.kr/product/3213/68/coversum/8932916373_2.jpg",
            publisher: "열린책들",
        },
        {
            title: "제3인류 2",
            link: "http://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8932916381&partner=openAPI",
            author: "베르나르 베르베르 지음, 이세욱 옮김",
            pubDate: "2013-10-21",
            description: "베르나르 베르베르 특유의 상상력으로 축조한 장대한 스케일의 과학 소설. 남극. 저명한 고생물학자 샤를 웰즈의 탐사대가 17미터에 달하는 거인의 유골들을 발굴한다. 그러나 인류사를 다시 쓰게 만들 이 중대한 발견은 발굴 현장의 사고와 함께 곧바로 파묻히고 마는데…",
            isbn: 8932916381,
            isbn13: 9788932916385,
            priceSales: 12420,
            priceStandard: 13800,
            cover: "http://image.aladin.co.kr/product/3213/69/coversum/8932916381_2.jpg",
            publisher: "열린책들",
        },
        {
            title: "딸아, 외로울 때는 시를 읽으렴 - 지금 생의 가장 아름다운 시절을 보내고 있는 당신에게 주고 싶은 시 90편",
            link: "http://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8901121182&partner=openAPI",
            author: "신현림 엮음",
            pubDate: "2010-04-04",
            description: "사진작가이자 시인 신현림이 인생의 가장 아름다운 시절을 보내고 있는 세상의 모든 딸들에게 들려주고 싶은 시 90편을 모았다. 그녀는 자신이 얼마나 예쁜지도 모른 채 방황하고 있는 딸들을 생각하며 시를 골랐다고 한다. 이 책은 시를 통해 넘어져 아파도 씩씩하게 털고 일어나는 힘을 얻게 되길, 그래서 세상에서 가장 행복한 사람이 되길 바라는 마음을 담은 따뜻한 응원가이다.",
            isbn: 8901121182,
            isbn13: 9788901121185,
            priceSales: 5000,
            priceStandard: 10000,
            cover: "http://image.aladin.co.kr/product/1132/19/coversum/8901121182_1.jpg",
            publisher: "걷는나무",
        },
        {
            title: "높고 푸른 사다리",
            link: "http://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8984317470&partner=openAPI",
            author: "공지영 지음",
            pubDate: "2013-10-28",
            description: '공지영 장편소설. 한 젊은 수사의 사랑과 방황을 그린 일종의 성장소설이다. 주인공 요한이 소희를 만나 사랑을 하고, 주변 사람들의 이야기를 들으며, "고통은 왜 있는 것이며, 인간은 왜 존재하는지, 사랑은 무엇인지" 같은 질문을 하면서 성장해나가는 과정을 그리고 있다.',
            isbn: 8984317470,
            isbn13: 9788984317475,
            priceSales: 11700,
            priceStandard: 13000,
            cover: "http://image.aladin.co.kr/product/3226/50/coversum/8984317470_3.jpg",
            publisher: "한겨레출판",
        },
        {
            title: "정글만리 2",
            link: "http://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8965744032&partner=openAPI",
            author: "조정래 지음",
            pubDate: "2013-07-15",
            description: "태백산맥, 한강의 작가 조정래 장편소설. 한국의 자본주의를 조망했던 허수아비 춤 이후, 한국의 현재와 미래에 대한 작가의 고민이 중국과 주변정세에 대한 통찰로 이어지며 정글만리라는 3년 만의 신작 소설로 탄생했다.",
            isbn: 8965744032,
            isbn13: 9788965744030,
            priceSales: 12150,
            priceStandard: 13500,
            cover: "http://image.aladin.co.kr/product/2794/33/coversum/8965744032_1.jpg",
            publisher: "해냄",
        },
        {
            title: "정글만리 1",
            link: "http://www.aladin.co.kr/shop/wproduct.aspx?ISBN=8965744024&partner=openAPI",
            author: "조정래 지음",
            pubDate: "2013-07-15",
            description: "태백산맥, 한강의 작가 조정래 장편소설. 한국의 자본주의를 조망했던 허수아비 춤 이후, 한국의 현재와 미래에 대한 작가의 고민이 중국과 주변정세에 대한 통찰로 이어지며 정글만리라는 3년 만의 신작 소설로 탄생했다.",
            isbn: 8965744024,
            isbn13: 9788965744023,
            priceSales: 12150,
            priceStandard: 13500,
            cover: "http://image.aladin.co.kr/product/2794/28/coversum/8965744024_1.jpg",
            publisher: "해냄",
        }
    ]
}

exports.getBookInfo = (bookInfos, data, cb) => {
    const books = bookInfos;
    //console.log('겟 북 인포 ', books);
    //const individualBook = [data.title, data.author];
    console.log('북스의 타입 ', typeof(books));
    console.log('북스 ', books);
    console.log('북스 ', books[0]);
    console.log('북스 렝스 ', books.length);
    console.log('데이타 ', data);
    for(i=0; i < books.length ; i++){
        if(books[i].title == data){
            cb(books[i]);
            console.log('검색 결과 ', books[i]);
        }
    }
}