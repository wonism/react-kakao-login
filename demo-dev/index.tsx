import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import KakaoLogin from '../src';

const key = '4a5607f2dc1622d91b7137fff35a464d';

const success = console.log;

const failure = console.error;

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

const App = () => (
  <>
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
    <p>
      Change button text with
      &nbsp;
      <code>
        buttonText
      </code>
    </p>
    <pre>
      {`<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
  buttonText="Button Text"
/>`}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      buttonText="Button Text"
    />
    <p>
      Use style that is defined in KakaoLogin component with
      &nbsp;
      <code>
        useDefaultStyle
      </code>
    </p>
    <pre>
      {`<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
  useDefaultStyle
/>`}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      useDefaultStyle
    />
    <p>
      Pass component that is styled as
      &nbsp;
      <code>
        children
      </code>
    </p>
    <pre>
      {`<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
>
  <Italic>Children</Italic>
</KakaoLogin>`}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
    >
      <Italic>
        Children
      </Italic>
    </KakaoLogin>
    <p>
      Pass
      &nbsp;
      <code>
        className
      </code>
      &nbsp;
      to style component
    </p>
    <pre>
      {`<KakaoLogin
  jsKey={key}
  onSuccess={success}
  onFailure={failure}
  className="css-with-class"
/>`}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      className="css-with-class"
    />
    <p>
      Pass
      &nbsp;
      <code>
        render
      </code>
      &nbsp;
      function to render fully customized component
    </p>
    <pre>
      {`<KakaoLogin
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
/>`}
    </pre>
    <KakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
      render={(props: any) => (
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
    <p>
      Use
      &nbsp;
      <code>
        third party
      </code>
      , like
      &nbsp;
      <code>
        styled-components
      </code>
    </p>
    <pre>
      {`import styled from 'styled-components';

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
/>`}
    </pre>
    <StyledKakaoLogin
      jsKey={key}
      onSuccess={success}
      onFailure={failure}
    />
  </>
);

render(<App />, appRoot);
