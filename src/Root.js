import { Navigate, Route, Routes } from "react-router-dom";
import { BaseCom } from "./parts/login-que";
import { Main } from "./parts/Main";
import { Login } from "./parts/sign_in";
import { SignPage } from "./parts/sign_up";

export const Root = (props) => {
  const { isDarkTheme } = props;
  return (
    <Main isDarkTheme={isDarkTheme}>
      <Routes>
        <Route path="/" exact element={<Navigate replace to="/login" />} />
        <Route path="/login" element={Login(isDarkTheme)} />
        <Route path="/sign_up" element={SignPage(isDarkTheme)} />
        <Route path="/loginQue" element={BaseCom(isDarkTheme)} />
      </Routes>
    </Main>
  );
};
