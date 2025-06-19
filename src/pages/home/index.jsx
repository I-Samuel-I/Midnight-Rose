import Content from "../../ui/components/content";
import Header from "../../ui/layout/header";
import Footer from "../../ui/layout/footer";
import Top from "../../ui/components/topButton";
import Music from "../../ui/components/content/_music";
import * as S from "./style";
import Intro from "../../ui/components/content/_intro";

export default function Home() {
  return (
    <S.MainContainer>
      <Header />
      <S.ScrollContainer>
        <Intro />
        <Content />
      </S.ScrollContainer>
      <Top />
      <Music />
      <Footer />
    </S.MainContainer>
  );
}
