import ButtonLarge from "components/ButtonLarge";
import * as S from "./style";
import { HTMLAttributes, useState } from "react";

type BoxLoginType = HTMLAttributes<HTMLDivElement>;

export type BoxLoginProps = {
  onSubmitData: (data: { nickname: string; password: string }) => void;
  errorMessage: string;
} & BoxLoginType;

const BoxLogin = ({ onSubmitData, errorMessage }: BoxLoginProps) => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (): void => {
    const data = { nickname, password };
    onSubmitData(data);
  };

  return (
    <S.BoxLogin>
      <S.BoxLoginLogo>
        <span style={{ fontSize: "50px" }}>PIZZA FRESH</span>
      </S.BoxLoginLogo>
      <S.BoxLoginForm>
        <input
          type="text"
          placeholder="Usuário"
          value={nickname}
          onChange={({ target }) => setNickname(target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <ButtonLarge value="ENTRAR" type="button" onClick={handleSubmit} />
      </S.BoxLoginForm>
      {Boolean(errorMessage.length) && (
        <S.BoxLoginError>{errorMessage}</S.BoxLoginError>
      )}
    </S.BoxLogin>
  );
};

export default BoxLogin;
