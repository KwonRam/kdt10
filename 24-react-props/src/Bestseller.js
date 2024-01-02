function Bestseller(props) {
  const { title, author, price, type } = props;
  return (
    <div className="Bestseller">
      <img src="https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/QRRQLPWHMZHQHOZMWJB5JYHPAI.jpg" />
      <p>
        <b>{title}</b>
      </p>
      <p>
        저자: <b>{author}</b>
      </p>
      <p>
        판매가: <b>{price}</b>
      </p>
      <p>
        구분: <b>{type}</b>
      </p>
    </div>
  );
}

export default Bestseller;
