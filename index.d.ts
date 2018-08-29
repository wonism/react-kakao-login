import * as React from 'react';

export default class KakaoLogin extends React.PureComponent<KaKaoLoginProps, {}> {}

type versionType = 'v1' | 'v2';

export interface KaKaoLoginProps {
  jsKey: string;
  version?: versionType;
  buttonComponent?: React.ComponentElement<any, any> | Element | JSX.Element;
  buttonText?: string;
  buttonClass?: string;
  getProfile?: boolean;
  onSuccess(response: KakaoLoginResponseV2 | any): void;
  onFailure(response: any): void;
}

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
  readonly properties: UserPropertiesV2;
  readonly kakao_account: KakaoAccountV2;
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
  readonly id: number;
  readonly profile: ProfilePropsV2;
  readonly response: AuthResponse;
}
