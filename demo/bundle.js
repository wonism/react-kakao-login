
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (React, reactDom, styled) {
    'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    }

    var KakaoLogin = (function (_super) {
        __extends(KakaoLogin, _super);
        function KakaoLogin() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.onBtnClick = function () {
                var _a = _this.props, _b = _a.throughTalk, throughTalk = _b === void 0 ? false : _b, _c = _a.version, version = _c === void 0 ? 'v2' : _c, _d = _a.getProfile, getProfile = _d === void 0 ? false : _d, onSuccess = _a.onSuccess, onFailure = _a.onFailure;
                if (window.Kakao) {
                    window.Kakao.Auth.login({
                        throughTalk: throughTalk,
                        success: function (response) {
                            if (getProfile) {
                                window.Kakao.API.request({
                                    url: "/" + version + "/user/me",
                                    success: function (profile) {
                                        var result = { response: response, profile: profile };
                                        onSuccess(result);
                                    },
                                    fail: onFailure,
                                });
                            }
                            else {
                                onSuccess({ response: response });
                            }
                        },
                        fail: onFailure,
                    });
                }
            };
            return _this;
        }
        KakaoLogin.prototype.componentDidMount = function () {
            var jsKey = this.props.jsKey;
            (function (id, cb) {
                if (document.getElementById(id) == null) {
                    var js = document.createElement('script');
                    js.id = id;
                    js.src = '//developers.kakao.com/sdk/js/kakao.min.js';
                    js.onload = cb;
                    document.body.append(js);
                }
            })('kakao-sdk', function () {
                window.Kakao.init(jsKey);
            });
        };
        KakaoLogin.prototype.render = function () {
            var _a = this.props, render = _a.render, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.useDefaultStyle, useDefaultStyle = _c === void 0 ? false : _c, _d = _a.children, children = _d === void 0 ? null : _d, _e = _a.buttonText, buttonText = _e === void 0 ? 'Login with Kakao' : _e;
            if (typeof render === 'function') {
                return render({ onClick: this.onBtnClick });
            }
            return (React__default.createElement("button", { type: "button", className: className, onClick: this.onBtnClick, style: useDefaultStyle ? KakaoLogin.DEFAULT_STYLE : undefined }, children || buttonText));
        };
        KakaoLogin.DEFAULT_STYLE = {
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
        return KakaoLogin;
    }(React.PureComponent));

    var key = '4a5607f2dc1622d91b7137fff35a464d';
    var success = console.log;
    var failure = console.error;
    var appRoot = document.getElementById('react-kakao-login');
    var Italic = styled.i(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #3c1e1e;\n  font-size: 20px;\n  font-weight: 700;\n"], ["\n  color: #3c1e1e;\n  font-size: 20px;\n  font-weight: 700;\n"])));
    var StyledKakaoLogin = styled(KakaoLogin)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  padding: 0;\n  width: 222px;\n  height: 49px;\n  line-height: 49px;\n  color: #3C1E1E;\n  background-color: #FFEB00;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  font-size: 16px;\n  text-align: center;\n"], ["\n  display: inline-block;\n  padding: 0;\n  width: 222px;\n  height: 49px;\n  line-height: 49px;\n  color: #3C1E1E;\n  background-color: #FFEB00;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  font-size: 16px;\n  text-align: center;\n"])));
    var App = function () { return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement("p", null,
            React__default.createElement("code", null, "No options")),
        React__default.createElement("pre", null, "\n<KakaoLogin\n  jsKey={key}\n  onSuccess={success}\n  onFailure={failure}\n/>\n      "),
        React__default.createElement(KakaoLogin, { jsKey: key, onSuccess: success, onFailure: failure }),
        React__default.createElement("p", null,
            "Change button text with \u00A0",
            React__default.createElement("code", null, "buttonText")),
        React__default.createElement("pre", null, "<KakaoLogin\n  jsKey={key}\n  onSuccess={success}\n  onFailure={failure}\n  buttonText=\"Button Text\"\n/>"),
        React__default.createElement(KakaoLogin, { jsKey: key, onSuccess: success, onFailure: failure, buttonText: "Button Text" }),
        React__default.createElement("p", null,
            "Use style that is defined in KakaoLogin component with \u00A0",
            React__default.createElement("code", null, "useDefaultStyle")),
        React__default.createElement("pre", null, "<KakaoLogin\n  jsKey={key}\n  onSuccess={success}\n  onFailure={failure}\n  useDefaultStyle\n/>"),
        React__default.createElement(KakaoLogin, { jsKey: key, onSuccess: success, onFailure: failure, useDefaultStyle: true }),
        React__default.createElement("p", null,
            "Pass component that is styled as \u00A0",
            React__default.createElement("code", null, "children")),
        React__default.createElement("pre", null, "<KakaoLogin\n  jsKey={key}\n  onSuccess={success}\n  onFailure={failure}\n>\n  <Italic>Children</Italic>\n</KakaoLogin>"),
        React__default.createElement(KakaoLogin, { jsKey: key, onSuccess: success, onFailure: failure },
            React__default.createElement(Italic, null, "Children")),
        React__default.createElement("p", null,
            "Pass \u00A0",
            React__default.createElement("code", null, "className"),
            "\u00A0 to style component"),
        React__default.createElement("pre", null, "<KakaoLogin\n  jsKey={key}\n  onSuccess={success}\n  onFailure={failure}\n  className=\"css-with-class\"\n/>"),
        React__default.createElement(KakaoLogin, { jsKey: key, onSuccess: success, onFailure: failure, className: "css-with-class" }),
        React__default.createElement("p", null,
            "Pass \u00A0",
            React__default.createElement("code", null, "render"),
            "\u00A0 function to render fully customized component"),
        React__default.createElement("pre", null, "<KakaoLogin\n  jsKey={key}\n  onSuccess={success}\n  onFailure={failure}\n  render={props => (\n    <a\n      href=\"#\"\n      onClick={(e) => {\n        e.preventDefault();\n        props.onClick();\n      }}\n    >\n      Render Prop\n    </a>\n  )}\n/>"),
        React__default.createElement(KakaoLogin, { jsKey: key, onSuccess: success, onFailure: failure, render: function (props) { return (React__default.createElement("a", { href: "#", onClick: function (e) {
                    e.preventDefault();
                    props.onClick();
                } }, "Render Prop")); } }),
        React__default.createElement("p", null,
            "Use \u00A0",
            React__default.createElement("code", null, "third party"),
            ", like \u00A0",
            React__default.createElement("code", null, "styled-components")),
        React__default.createElement("pre", null, "import styled from 'styled-components';\n\nconst StyledKakaoLogin = styled(KakaoLogin)`\n  display: inline-block;\n  padding: 0;\n  width: 222px;\n  height: 49px;\n  line-height: 49px;\n  color: #3C1E1E;\n  background-color: #FFEB00;\n  border: 1px solid transparent;\n  border-radius: 3px;\n  font-size: 16px;\n  text-align: center;\n`;\n\n<StyledKakaoLogin\n  jsKey={key}\n  onSuccess={success}\n  onFailure={failure}\n/>"),
        React__default.createElement(StyledKakaoLogin, { jsKey: key, onSuccess: success, onFailure: failure }))); };
    reactDom.render(React__default.createElement(App, null), appRoot);
    var templateObject_1, templateObject_2;

}(React, ReactDOM, styled));
