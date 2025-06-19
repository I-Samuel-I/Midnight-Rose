import About from "./_about";
import Albums from "./_albums";
import Carrer from "./_carrer";
import Musics from "./musics";
import * as S from "./style";
export default function Content() {
  return (
    <S.ContentContainer>
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
    </S.ContentContainer>
  );
}
