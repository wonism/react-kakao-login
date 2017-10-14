import React from 'react';
import ReactDOM from 'react-dom';
import KakaoLogin from '../src';

const success = (response) => {
  console.log(response); // eslint-disable-line no-console
};

const failure = (error) => {
  console.log(error); // eslint-disable-line no-console
};

const appRoot = document.getElementById('react-kakao-login');

const LoginButton = () => {
  const style = {
    marginRight: '4px',
  };

  return (
    <div>
      <i className="xi-kakao" style={style} />
      카카오톡으로 로그인하기
    </div>
  );
};

ReactDOM.render(
  <KakaoLogin
    jsKey="4a5607f2dc1622d91b7137fff35a464d"
    onSuccess={success}
    onFailure={failure}
    buttonComponent={<LoginButton />}
    getProfile
  />, appRoot
);
