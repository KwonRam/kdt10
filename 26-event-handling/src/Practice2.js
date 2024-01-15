import { useState } from 'react';
function Practice2() {
  const [name, setName] = useState('코디');
  const changeName = (e) => {
    setName(e.target.value);
  };
  const [mail, setMail] = useState('codi@gmail.com');
  const changeMail = (e) => {
    setMail(e.target.value);
  };
  const [comment, setComment] = useState('안녕');
  const changeComment = (e) => {
    setComment(e.target.value);
  };
  const [serchWord, setSerchWord] = useState('검색');
  const changeSerchWord = (e) => {
    setSerchWord(e.target.value);
  };
  const [serchType, setSerchType] = useState('name');
  const changeSerchType = (e) => {
    setSerchType(e.target.value);
  };
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: '코디',
      mail: 'codi@gmail.com',
      comment: '안녕',
    },
    {
      id: 2,
      name: '윤소희',
      mail: 'yoonsohee@gmail.com',
      comment: '하이하이',
    },
    {
      id: 3,
      name: '권민수',
      mail: 'kms971226@gmail.com',
      comment: '하이요',
    },
    {
      id: 4,
      name: '권희수',
      mail: 'heesoo@naver.com',
      comment: '안녕하세요',
    },
  ]);
  const addUserData = () => {
    const newId = userData.length + 1;
    console.log(newId);
    let newData = {
      id: newId,
      name: name,
      mail: mail,
      comment: comment,
    };
    setUserData([...userData, newData]);
    setName('');
    setMail('');
    setComment('');
  };
  const onRemoveData = (id) => {
    const NextData = userData.filter((userData) => userData.id !== id);
    setUserData(NextData);
  };
  const userDataList = userData.map((userData) => {
    return (
      <tr key={userData.id} onDoubleClick={() => onRemoveData(userData.id)}>
        <td>{userData.id}</td>
        <td>{userData.name}</td>
        <td>{userData.mail}</td>
        <td>{userData.comment}</td>
      </tr>
    );
  });
  const [serchData, setSerchData] = useState({
    type: 'name',
    serchWord: '',
  });
  const addSerchData = (e) => {
    setSerchData({
      type: serchType,
      serchWord: serchWord,
    });
  };
  const serchDataList = userData.filter((item) => {
    if (serchData.type === '' || serchData.serchWord === '') {
      return null;
    } else if (
      serchData.type === 'name' &&
      item.name.includes(serchData.serchWord)
    ) {
      return item;
    } else if (
      serchData.type === 'mail' &&
      item.mail.includes(serchData.serchWord)
    ) {
      return item;
    } else if (
      serchData.type === 'comment' &&
      item.comment.includes(serchData.serchWord)
    ) {
      return item;
    }
    return null;
  });
  const serchResultList = serchDataList.map((item, idx) => {
    return (
      <tr key={idx}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.mail}</td>
        <td>{item.comment}</td>
      </tr>
    );
  });
  return (
    <div>
      <h2>댓글 작성</h2>
      <form>
        <label for="writeName"></label>
        <input
          type="text"
          id="writeName"
          placeholder="이름"
          onChange={(e) => changeName(e)}
        />
        <label for="writeMail"></label>
        <input
          type="text"
          id="writeMail"
          placeholder="이메일"
          onChange={(e) => changeMail(e)}
        />
        <input
          type="text"
          id="writeComment"
          placeholder="댓글"
          onChange={(e) => changeComment(e)}
        />
        <button type="button" onClick={addUserData}>
          작성
        </button>
      </form>
      <h2>댓글 검색</h2>
      <form>
        <select name="type" onChange={changeSerchType}>
          <option value="name">이름</option>
          <option value="mail">이메일</option>
          <option value="comment">댓글</option>
        </select>
        <label for="writeSerch"></label>
        <input
          type="text"
          id="writeSerch"
          placeholder="검색어"
          onChange={(e) => changeSerchWord(e)}
        />
        <button type="button" onClick={addSerchData}>
          작성
        </button>
      </form>
      <h3>전체 댓글 목록</h3>
      <div>
        <table border={1} style={{ marginTop: '30px', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>이메일</th>
              <th>작성 내용</th>
            </tr>
          </thead>
          <tbody>{userDataList}</tbody>
        </table>
      </div>
      <h3>검색 결과</h3>
      <div>
        <table border={1} style={{ marginTop: '30px', width: '500px' }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>작성자</th>
              <th>이메일</th>
              <th>작성 내용</th>
            </tr>
          </thead>
          <tbody>{serchResultList}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Practice2;
