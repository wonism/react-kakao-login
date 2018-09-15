import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import KakaoLogin from '../src';

const key = '4a5607f2dc1622d91b7137fff35a464d';

const success = (response) => {
  console.log(response); // eslint-disable-line no-console
};

const failure = (error) => {
  console.log(error); // eslint-disable-line no-console
};

const appRoot = document.getElementById('react-kakao-login');

const Italic = styled.i`
  color: #3c1e1e;
  font-size: 20px;
  font-weight: 700;
`;

const StyledKakaoLogin = styled(KakaoLogin)`
  display: inline-block;
  padding: 0;
  width: 222px;
  height: 49px;
  line-height: 49px;
  color: #3C1E1E;
  background-color: #FFEB00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
`;

ReactDOM.render(
  <Fragment>
    <p><code>No options</code></p>
    <pre>
      {`
<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
/>
      `}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
    />
    <p>Change button text with <code>buttonText</code></p>
    <pre>
      {`
<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
  buttonText="Button Text"
/>
      `}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      buttonText="Button Text"
    />
    <p>Use style that is defined in KakaoLogin component with <code>useDefaultStyle</code></p>
    <pre>
      {`
<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
  useDefaultStyle
/>
      `}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      useDefaultStyle
    />
    <p>Pass component that is styled as <code>children</code></p>
    <pre>
      {`
<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
>
  <Italic>Children</Italic>
</KakaoLogin>
      `}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
    >
      <Italic>Children</Italic>
    </KakaoLogin>
    <p>Pass <code>className</code> to style component</p>
    <pre>
      {`
<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
  className="css-with-class"
/>
      `}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      className="css-with-class"
    />
    <p>Pass <code>render</code> function to render fully customized component</p>
    <pre>
      {`
<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
  render={props => (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        props.onClick();
      }}
    >
      Render Prop
    </a>
  )}
/>
      `}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      render={props => (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            props.onClick();
          }}
        >
          Render Prop
        </a>
      )}
    />
    <p>Use <code>third party</code>, like <code>styled-components</code></p>
    <pre>
      {`
import styled from 'styled-components';

const StyledKakaoLogin = styled(KakaoLogin)\`
  display: inline-block;
  padding: 0;
  width: 222px;
  height: 49px;
  line-height: 49px;
  color: #3C1E1E;
  background-color: #FFEB00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  text-align: center;
\`;

<StyledKakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
/>
      `}
    </pre>
    <StyledKakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
    />
  </Fragment>, appRoot
);
