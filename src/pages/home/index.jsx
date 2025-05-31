import Content from "../../ui/components/content";
import Footer from "../../ui/components/footer";
import Header from "../../ui/components/header";
import Top from "../../ui/components/topButton";
import * as S from "./style"
export default function Home() {
  return (
    <S.MainContainer>
      <Header />
      <Content/>
      <Top/>
      <Footer/>
    </S.MainContainer>
  );
}
