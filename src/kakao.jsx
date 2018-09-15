import React, { Component } from 'react';
import { oneOf, bool, string, func, node } from 'prop-types';

export default class KakaoLogin extends Component {
  static DEFAULT_STYLE = {
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

  static propTypes = {
    jsKey: string.isRequired,
    onSuccess: func.isRequired,
    onFailure: func.isRequired,
    version: oneOf(['v1', 'v2']),
    getProfile: bool,
    useDefaultStyle: bool,
    buttonText: string,
    className: string,
    render: func,
    children: node,
  };

  static defaultProps = {
    version: 'v2',
    getProfile: false,
    useDefaultStyle: false,
    buttonText: 'Login with Kakao',
    className: '',
    render: null,
    children: null,
  };

  componentDidMount() {
    const { jsKey } = this.props;

    ((d, s, id, cb) => {
      if (!d.getElementById(id)) {
        const el = d.getElementsByTagName(s)[0];
        const fjs = el;
        let js = el;

        js = d.createElement(s);
        js.id = id;
        js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
        fjs.parentNode.insertBefore(js, fjs);
        js.onload = cb;
      }
    })(document, 'script', 'kakao-sdk', () => {
      Kakao.init(jsKey);
    });
  }

  onBtnClick = () => {
    const { version, getProfile, onSuccess, onFailure } = this.props;

    if (Kakao) {
      Kakao.Auth.login({
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
  }

  render() {
    const { render, className, useDefaultStyle, children, buttonText } = this.props;

    if (typeof render === 'function') {
      return render({ onClick: this.onBtnClick });
    }

    return (
      <button
        className={className}
        onClick={this.onBtnClick}
        style={useDefaultStyle ? KakaoLogin.DEFAULT_STYLE : {}}
      >
        {children || buttonText}
      </button>
    );
  }
}
