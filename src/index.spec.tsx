import React from 'react';
import { shallow, mount } from 'enzyme';

import KakaoLogin from '.';

describe('<KakaoLogin />', () => {
  beforeEach(() => {
    global.document.body.innerHTML = '';
  });

  it('should render successfully.', () => {
    const wrapper = shallow(<KakaoLogin />);
    expect(wrapper.length).toBe(1);
  });

  it('should render button if `render` is undefined.', () => {
    const wrapper = shallow(<KakaoLogin />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('should render component that is the return of `render`.', () => {
    const wrapper = shallow(<KakaoLogin render={() => (<a />)} />);
    expect(wrapper.find('a').length).toBe(1);
  });

  it('when component is mounted, Kakao SDK will be attached if there is no SDK in DOM.', () => {
    expect(global.document.body.children.length).toBe(0);

    const spy = jest.spyOn(KakaoLogin.prototype, 'componentDidMount');
    const wrapper = mount(<KakaoLogin />);

    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();

    const script = global.document.body.children[0];

    expect(script.constructor.name).toBe('HTMLScriptElement');
    expect(script.id).toBe('kakao-sdk');
  });

  it('button will have `className` if it is exist.', () => {
    const wrapper = mount(<KakaoLogin className="have-class" />);
    const { className } = wrapper.find('button').getDOMNode();

    expect(className).toBe('have-class');
  });

  it('`children` will be rendered inside of button.', () => {
    const wrapper = shallow(
      <KakaoLogin>
        <span>click</span>
      </KakaoLogin>
    );

    expect(wrapper.find('button').find('span').length).toBe(1);
    expect(wrapper.find('button').find('span').text()).toBe('click');
  });

  it('without `children`, the button will have `buttonText` as textContent.', () => {
    const wrapper = shallow(<KakaoLogin buttonText="CLICK" />);
    expect(wrapper.find('button').text()).toBe('CLICK');
  });

  it('`useDefaultStyle` will set style for component.', () => {
    const wrapper = mount(<KakaoLogin useDefaultStyle />);
    const { style } = wrapper.find('button').getDOMNode();

    Object.entries(KakaoLogin.DEFAULT_STYLE).forEach(([key, value]) => {
      expect(style).toHaveProperty(key, value);
    });
  });

  describe('callback', () => {
    beforeEach(() => {
      const Kakao = {
        init: jest.fn(),
        Auth: {
          login: jest.fn().mockImplementation((response) => {
            response.success(Promise.resolve);
          }),
        },
        API: {
          request: jest.fn().mockImplementation((response) => {
            response.success(Promise.resolve);
          }),
        },
      };

      global.Kakao = Kakao;
    });

    it('when Kakao SDK is loaded, Kakao\'s init method will be called with `jsKey`.', async () => {
      const spy = jest.spyOn(KakaoLogin.prototype, 'componentDidMount');
      const wrapper = mount(<KakaoLogin />);

      wrapper.instance().componentDidMount();

      expect(global.Kakao.init).not.toBeCalled();

      const script = global.document.getElementById('kakao-sdk');
      script.onload();

      expect(global.Kakao.init).toBeCalled();
    });

    it('onBtnClick should be called when the element is clicked.', () => {
      const onSuccess = jest.fn().mockImplementation((response) => Promise.resolve(response));
      const wrapper = shallow(<KakaoLogin onSuccess={onSuccess} />);

      wrapper.find('button').simulate('click');

      expect(onSuccess).toBeCalled();
    });

    it('with truthy `getProfile`, Kakao.API.request will be called.', () => {
      const onSuccess = jest.fn().mockImplementation((response) => Promise.resolve(response));
      const wrapper = shallow(<KakaoLogin getProfile version="v2" throughTalk onSuccess={onSuccess} />);

      wrapper.find('button').simulate('click');

      expect(onSuccess).toBeCalled();
    });

    it('if Kakao is not declared yet, `onBtnClick` will not do anything.', () => {
      const onSuccess = jest.fn().mockImplementation((response) => Promise.resolve(response));
      const wrapper = shallow(<KakaoLogin onSuccess={onSuccess} />);

      global.Kakao = null;
      wrapper.find('button').simulate('click');

      expect(onSuccess).not.toBeCalled();
    });
  });
});
