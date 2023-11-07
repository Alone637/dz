import React from "react";
import "./LoginPage.scss";
import { AppButton } from "../../components/UI/Button/AppButton";
import { AuthLink } from "../../components/UI/AuthLink/AuthLink";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Registration } from "../../components/UI/Registration/Registration";
import { LoginPageWrapper } from "./LoginPageWrapper";
import { Heading } from "../../components/UI/Heading/Heading";

export const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <Heading type="h1" headingText="Авторизация" />
      <form action="#">
        <AppInput type="tel" placeholder="Номер телефона" />
        <AppInput type="password" placeholder="Пароль" />
        <AppButton type="button" buttonLabel="Войти" isPrimary />
      </form>
      <AuthLink path="/regestration" linkText="Забыли пароль?" />
      <Registration />
    </LoginPageWrapper>
  );
};
