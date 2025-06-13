import About from "./_about";
import Albums from "./_albums";
import Intro from "./_intro";
import Carrer from "./_carrer";
import Musics from "./musics";

import * as S from "./style";
import Music from "./_music";
export default function Content() {
  return (
    <S.ContentContainer>
      <section>
        <Intro />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Carrer />
      </section>
      <section>
        <Musics />
      </section>
      <section>
        <Albums />
      </section>
      <section>
        <Music/>
      </section>
    </S.ContentContainer>
  );
}
