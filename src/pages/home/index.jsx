import Content from "../../ui/components/content";
import Header from "../../ui/layout/header"
import Footer from "../../ui/layout/footer"
import Top from "../../ui/components/topButton";
import * as S from "./style"
export default function Home() {
  return (
    <S.MainContainer>
      <Header/>
      <Content/>
      <Top/>
      <Footer/>
    </S.MainContainer>
  );
}
