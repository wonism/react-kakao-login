import React, { CSSProperties, PureComponent } from 'react';
import { KakaoLoginProps, KakaoLoginResponseV2 } from 'react-kakao-login';

declare global {
  interface Window {
    Kakao: any;
  }
}

export default class KakaoLogin extends PureComponent<KakaoLoginProps> {
  componentDidMount() {
    const { jsKey } = this.props;

    ((id, cb) => {
      if (document.getElementById(id) == null) {
        const js: HTMLScriptElement = document.createElement('script');

        js.id = id;
        js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
        js.onload = cb;

        document.body.append(js);
      }
    })('kakao-sdk', () => {
      window.Kakao.init(jsKey);
    });
  }

  onBtnClick = () => {
    const {
      throughTalk = false,
      version = 'v2',
      getProfile = false,
      onSuccess,
      onFailure,
    } = this.props;

    if (window.Kakao) {
      window.Kakao.Auth.login({
        throughTalk,
        success: (response: KakaoLoginResponseV2 | any) => {
          if (getProfile) {
            window.Kakao.API.request({
              url: `/${version}/user/me`,
              success: (profile: string) => {
                const result = { response, profile };
                onSuccess(result);
              },
              fail: onFailure,
            });
          } else {
            onSuccess({ response });
          }
        },
        fail: onFailure,
      });
    }
  }

  static DEFAULT_STYLE: CSSProperties = {
    display: 'inline-block',
    padding: '0px',
    width: '222px',
    height: '49px',
    lineHeight: '49px',
    color: 'rgb(60, 30, 30)',
    backgroundColor: 'rgb(255, 235, 0)',
    border: '1px solid transparent',
    borderRadius: '3px',
    fontSize: '16px',
    textAlign: 'center',
  };

  render() {
    const {
      render,
      className = '',
      useDefaultStyle = false,
      children = null,
      buttonText = 'Login with Kakao',
    } = this.props;

    if (typeof render === 'function') {
      return render({ onClick: this.onBtnClick });
    }

    return (
      <button
        type="button"
        className={className}
        onClick={this.onBtnClick}
        style={useDefaultStyle ? KakaoLogin.DEFAULT_STYLE : undefined}
      >
        {children || buttonText}
      </button>
    );
  }
}
