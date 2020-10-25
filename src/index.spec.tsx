import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import KakaoLogin from ".";

const token = "64d0c649f5b7e5a3ef9790587ee5f19b";

test("displays a '카카오로 로그인하기' message", () => {
  render(
    <KakaoLogin
      token={token}
      onSuccess={console.log}
      onFail={console.error}
      onLogout={console.info}
    />,
  );
  expect(screen.getByText("카카오로 로그인하기")).toBeInTheDocument();
});
