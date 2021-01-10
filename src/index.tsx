import React from "react";
import { loadSdk, DEFAULT_STYLE } from "./utils";
import { ExtendedWindow, Props, State } from "./types";

declare let window: ExtendedWindow;

export default class KakaoLogin extends React.PureComponent<Props, State> {
  state = { isLoggedIn: false };

  public static DEFAULT_STYLE = DEFAULT_STYLE;

  public async componentDidMount() {
    await loadSdk();
    window.Kakao.init(this.props.token);
  }

  private onButtonClick = () => {
    const {
      throughTalk = true,
      persistAccessToken = true,
      needProfile = true,
      useLoginForm = false,
      onSuccess,
      onFail,
    } = this.props;

    const method = useLoginForm ? "loginForm" : "login";

    (window.Kakao?.Auth)[method]({
      throughTalk,
      persistAccessToken,
      success: (response) => {
        this.setState({ isLoggedIn: true });

        if (needProfile) {
          window.Kakao?.API.request({
            url: "/v2/user/me",
            success: (profile) => {
              const result = { response, profile };
              onSuccess(result);
            },
            fail: onFail,
          });
        } else {
          onSuccess({ response });
        }
      },
      fail: onFail,
    });
  };

  private onLogout = () => {
    window.Kakao?.Auth.logout(() => {
      this.props.onLogout?.(window.Kakao?.Auth.getAccessToken());
      this.setState({ isLoggedIn: false });
    });
  };

  public render() {
    const { isLoggedIn } = this.state;
    const onClick = isLoggedIn ? this.onLogout : this.onButtonClick;
    const {
      render,
      className = "",
      style = DEFAULT_STYLE,
      children = "카카오로 로그인하기",
    } = this.props;

    if (typeof render === "function") {
      return render({ onClick });
    }

    return (
      <button
        type="button"
        className={className}
        onClick={onClick}
        style={style}
      >
        {children}
      </button>
    );
  }
}
