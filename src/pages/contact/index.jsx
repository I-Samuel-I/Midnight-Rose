import InputBox from "../../ui/components/content/_inputBox";
import InputField from "../../ui/components/content/_inputField";
import Header from "../../ui/layout/header"
import * as S from "./style";

export default function Contact() {
  return (
    <>
      <S.MainContainer>
        <Header/>
        <InputBox>
          <InputField />
        </InputBox>
      </S.MainContainer>
    </>
  );
}
