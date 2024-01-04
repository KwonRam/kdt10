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
  return (
    <div>
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
      </form>
      <h1>
        {name}: {mail}
      </h1>
    </div>
  );
}

export default Practice2;
