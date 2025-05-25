import About from "./_about";
import Albums from "./_albums";
import Carrer from "./_carrer";
import Intro from "./_intro";
import Musics from "./musics";

import * as S from "./style";
export default function Content() {
  return (
    <S.ContentContainer>
      <div>
        <Intro />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Carrer/>
      </div>
      <div>
        <Musics/>
      </div>
      <div>
        <Albums/>
      </div>
    </S.ContentContainer>
  );
}
