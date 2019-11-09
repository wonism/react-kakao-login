declare module reactKakaoLogin {
  import * as React from 'react';

  type versionType = 'v1' | 'v2';

  interface UserPropertiesV2 {
    nickname: string | null;
    profile_image?: string;
    thumbnail_image?: string;
  }

  interface KakaoAccountV2 {
    email?: string;
    age_range?: string;
    birthday?: string;
    gender?: string;
    has_age_range: boolean;
    has_birthday: boolean;
    has_email: boolean;
    has_gender: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
  }

  interface ProfilePropsV2 {
    properties: UserPropertiesV2;
    kakao_account: KakaoAccountV2;
  }

  interface AuthResponse {
    access_token: string;
    expires_in: number;
    refresh_token: string;
    refresh_token_expires_in: number;
    scope: string;
    stateToken: string;
    token_type: string;
  }

  export interface KakaoLoginResponseV2 {
    id: number;
    profile: ProfilePropsV2;
    response: AuthResponse;
  }

  export interface KakaoLoginProps {
    jsKey: string;
    onSuccess(response: KakaoLoginResponseV2 | any): void;
    onFailure(response: any): void;
    version?: versionType;
    throughTalk?: boolean;
    getProfile?: boolean;
    useDefaultStyle?: boolean;
    buttonText?: string;
    className?: string;
    render?: (props: any) => React.ComponentElement<any, any> | Element | React.ReactElement;
  }
}

declare module 'react-kakao-login' {
  export type KakaoLoginResponseV2 = reactKakaoLogin.KakaoLoginResponseV2;
  export type KakaoLoginProps = reactKakaoLogin.KakaoLoginProps;
}
