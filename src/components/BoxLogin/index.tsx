import ButtonLarge from "components/ButtonLarge";
import * as S from "./style";
import logo from "assets/imgs/logo.png";

const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
          <span>Pizza</span>
          <span>Fresh</span>
        </S.BoxLoginLogoText>
        <S.BoxLoginLogoImage src="{logo}" alt="Logo"/>
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input type="text" placeholder="E-mail"/>
        <input type="password" placeholder="Senha" />
        <ButtonLarge value="Entra" type="button" />
      </S.BoxLoginForm>
    </S.BoxLogin>
  );
};

export default BoxLogin;
