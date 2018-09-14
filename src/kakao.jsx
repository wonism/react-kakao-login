import React, { PureComponent } from 'react';
import { oneOf, bool, string, func, node, element } from 'prop-types';

export default class KakaoLogin extends PureComponent {
  static propTypes = {
    jsKey: string.isRequired,
    onSuccess: func.isRequired,
    onFailure: func.isRequired,
    version: oneOf(['v1', 'v2']),
    buttonComponent: element,
    children: node,
    buttonText: string,
    buttonClass: string,
    getProfile: bool,
  };

  static defaultProps = {
    version: 'v2',
    buttonComponent: null,
    children: null,
    buttonText: 'Login with Kakao',
    buttonClass: '',
    getProfile: false,
  };

  componentDidMount() {
    const { jsKey } = this.props;

    ((d, s, id, cb) => {
      const el = d.getElementsByTagName(s)[0];
      const fjs = el;
      let js = el;

      js = d.createElement(s);
      js.id = id;
      js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'kakao-sdk', () => {
      Kakao.init(jsKey);
    });
  }

  onBtnClick = () => {
    const { version, getProfile, onSuccess, onFailure } = this.props;

    Kakao && Kakao.Auth.login({
      throughTalk: false,
      success: (response) => {
        if (getProfile) {
          Kakao.API.request({
            url: `/${version}/user/me`,
            success: (profile) => {
              const result = { response, profile };
              onSuccess(result);
            },
            fail: (error) => {
              onFailure(error);
            },
          });
        } else {
          onSuccess({ response });
        }
      },
      fail: onFailure,
    });
  }

  render() {
    const { buttonClass, buttonComponent, buttonText, children, render } = this.props;

    if (render && typeof render === 'function') {
      return render({
        onClick: this.onBtnClick,
      });
    }

    const style = {
      display: 'inline-block',
      padding: '0',
      width: '222px',
      height: '49px',
      lineHeight: '49px',
      color: '#3C1E1E',
      backgroundColor: '#FFEB00',
      border: '1px solid transparent',
      borderRadius: '3px',
      fontSize: '16px',
      textAlign: 'center',
    };

    return (
      <button
        className={buttonClass}
        onClick={this.onBtnClick}
        style={buttonClass ? {} : style}
      >
        {buttonComponent || children || buttonText}
      </button>
    );
  }
}
