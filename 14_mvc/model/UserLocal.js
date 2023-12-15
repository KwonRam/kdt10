//임시 db에서 데이터를 받았다

exports.userInformations = () => {
    let userString = '';
    if (typeof window !== 'undefined') {
        userString = localStorage.getItem('userDataLocal');
        console.log('window yes')
    }
    else {
        userString = '';
        console.log('window no')
    }
    const userObj = JSON.stringify(userString);

    const userObj2 = {
        Identify: 'kwonRam',
        Password: '5678',
        userRealName: '권민수',
        userRealAge: '25'
    }
    return userObj2;
}
