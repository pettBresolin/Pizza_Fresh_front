import BoxLogin from "components/BoxLogin";
import { Route } from "react-router-dom";
import * as S from "./style";

const Login = () => {
    return(
        <S.Login>
            <S.LoginContent>
                <BoxLogin />
            </S.LoginContent>
        </S.Login>
    );
}

export default Login