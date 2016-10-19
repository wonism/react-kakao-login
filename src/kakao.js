import React, { PropTypes, Component } from 'react';

class KakaoLogin extends Component {
  constructor(props) {
    super(props);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    const { jsKey } = this.props;

    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;

      js = d.createElement(s);
      js.id = id;
      js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'kakao-sdk', () => {
      Kakao.init(jsKey);
    });
  }

  onBtnClick() {
    const { getProfile, onSuccess, onFailure } = this.props;

    Kakao.Auth.login({
      success: (response) => {
        if (getProfile) {
          Kakao.API.request({
            url: '/v1/user/me',
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

    const { buttonClass, buttonComponent, buttonText, children } = this.props;

    return (
      <button
        className={buttonClass}
        onClick={this.onBtnClick.bind(this)}
        style={buttonClass ? {} : style}
      >
        {buttonComponent || children || buttonText}
      </button>
    );
  }
}

KakaoLogin.propTypes = {
  jsKey: PropTypes.string.isRequired,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  buttonComponent: PropTypes.element,
  buttonClass: PropTypes.string,
  buttonText: PropTypes.string,
  getProfile: PropTypes.bool,
  children: React.PropTypes.node,
};

KakaoLogin.defaultProps = {
  buttonText: 'Login with Kakao',
};

export default KakaoLogin;

