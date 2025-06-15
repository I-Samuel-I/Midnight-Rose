import * as S from "./style";

import { useNavigate } from "react-router";
export default function Error() {
  const navigate = useNavigate();
  return (
    <S.ErrorContainer>
      <h1>404</h1>
      <span>
        <p>Sorry! The page you are looking for was not found.</p>
        <button onClick={() => navigate("/")}>Go to the Home Page</button>
      </span>
    </S.ErrorContainer>
  );
}
