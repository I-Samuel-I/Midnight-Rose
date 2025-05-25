import Content from "../../ui/components/content";
import Footer from "../../ui/components/footer";
import Header from "../../ui/components/header";
import * as S from "./style"
export default function Home() {
  return (
    <S.MainContainer>
      <Header />
      <Content/>
      <Footer/>
    </S.MainContainer>
  );
}
