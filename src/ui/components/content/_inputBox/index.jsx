import * as S from "./style";

export default function InputBox({ children }) {
  return (
    <>
      <S.BoxContainer>
        <div>{children}</div>
      </S.BoxContainer>
    </>
  );
}
