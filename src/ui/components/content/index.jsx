import * as S from "./style";
import About from "./_about";
import Albums from "./_albums";
import Carrer from "./_carrer";
import Musics from "./musics";

export default function Content() {
  return (
    <S.ContentContainer>
      <section data-aos="fade-up">
        <About />
      </section>
      <section data-aos="fade-up">
        <Carrer />
      </section>
      <section data-aos="fade-up">
        <Musics />
      </section>
      <section data-aos="fade-up">
        <Albums />
      </section>
    </S.ContentContainer>
  );
}
