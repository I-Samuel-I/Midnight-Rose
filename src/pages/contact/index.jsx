import InputBox from "../../ui/components/content/_inputBox";
import InputField from "../../ui/components/content/_inputField";
import Footer from "../../ui/components/footer";
import Header from "../../ui/components/header";
import * as S from "./style";

export default function Contact() {
  return (
    <>
      <S.MainContainer>
        <Header />
        <InputBox>
          <InputField />
        </InputBox>
      </S.MainContainer>
    </>
  );
}
