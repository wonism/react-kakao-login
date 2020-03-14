# React Kakaotalk Login
> A Component for Kakaotalk Login

[![NPM](https://img.shields.io/badge/react-kakao-login)](https://npmjs.org/package/react-kakao-login)
[![Build Status](https://travis-ci.org/wonism/react-kakao-login.svg?branch=master)](https://travis-ci.org/wonism/react-kakao-login)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/react-kakao-login.svg)
![Test coverage for branches](https://github.com/wonism/react-kakao-login/blob/master/coverage/badge-branches.svg)
![Test coverage for functions](https://github.com/wonism/react-kakao-login/blob/master/coverage/badge-functions.svg)
![Test coverage for lines](https://github.com/wonism/react-kakao-login/blob/master/coverage/badge-lines.svg)
![Test coverage for statements](https://github.com/wonism/react-kakao-login/blob/master/coverage/badge-statements.svg)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.carloscuesta.me)

## Getting Started
```sh
$ cd /PROJECT/PATH
$ npm i -S react react-dom react-kakao-login
```

## Development
```sh
$ npm start
```

## Production Bundle
```sh
$ npm run bundle
```

## Parameters
| Parameter        | Type       | Remarks                                                       |
|:-----------------|:-----------|:--------------------------------------------------------------|
| jsKey            | string     | Required                                                      |
| onSuccess        | function   | Required                                                      |
| onFailure        | function   | Required                                                      |
| version          | string     | One of [`v1`, `v2`]. default is `v2`                          |
| throughTalk      | bool       | If true, Open Kakao Talk instead of new browser tab           |
| getProfile       | bool       | If true, Can get user's information                           |
| useDefaultStyle  | bool       | If true, Use default style                                    |
| buttonText       | string     | `textContent` of `button`                                     |
| className        | string     | `button`'s `className`                                        |
| render           | function   | Can render with return of this instead of button as a child   |

## Usage
https://wonism.github.io/react-kakao-login
