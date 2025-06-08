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
      <div>
        <Intro />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Carrer />
      </div>
      <div>
        <Musics />
      </div>
      <div>
        <Albums />
      </div>
      <div>
        <Music/>
      </div>
    </S.ContentContainer>
  );
}
