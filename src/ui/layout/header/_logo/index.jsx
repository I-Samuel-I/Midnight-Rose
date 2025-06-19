import { useNavigate } from "react-router";
import * as img from "../../../../assets/images/index";
import * as S from "./style";
export default function Logo() {
  const navigate = useNavigate();
  return (
    <S.LogoContainer>
      <img src={img.logo} alt="Rose" />
      <div>
        <button onClick={() => navigate("/")}>MIDNIGHT ROSE</button>
        <h2>BETA</h2>
      </div>
    </S.LogoContainer>
  );
}
