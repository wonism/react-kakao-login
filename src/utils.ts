import { CSSProperties } from "react";

export const loadSdk = () => {
  return new Promise((resolve, reject) => {
    const js: HTMLScriptElement = document.createElement("script");

    js.id = "kakao-sdk";
    js.src = "//developers.kakao.com/sdk/js/kakao.min.js";
    js.onload = resolve;

    document.body.append(js);
  });
};

export const DEFAULT_STYLE: CSSProperties = {
  display: "inline-block",
  padding: "0px",
  width: "222px",
  height: "49px",
  lineHeight: "49px",
  color: "rgb(60, 30, 30)",
  backgroundColor: "rgb(255, 235, 0)",
  border: "1px solid transparent",
  borderRadius: "3px",
  fontSize: "16px",
  textAlign: "center",
};
