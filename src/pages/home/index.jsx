import * as S from "./style";
import Content from "../../ui/components/content";
import Header from "../../ui/layout/header";
import Footer from "../../ui/layout/footer";
import Top from "../../ui/components/topButton";
import Music from "../../ui/components/content/_music";
import Intro from "../../ui/components/content/_intro";

import { Div } from "../../ui/layout/div/style";

export default function Home() {
  return (
    <>
      <S.MainContainer data-aos="fade-down">
        <Header />
        <Intro />
        <Content />
        <Div />
        <Footer />
      </S.MainContainer>
      <Music />
      <Top />
    </>
  );
}
