import * as img from "../../../../assets/images/index";
import * as S from "./style";

export default function About() {
  return (
    <S.AboutContainer id="about">
      <img src={img.ado} alt="Ado" />
      <article>
        <h1>EARLY CARRER</h1>
        <p>
          Ado started as an utaite, gaining online recognition on Nico Nico
          Douga and YouTube with her unique voice and expressive covers. Her raw
          talent attracted a growing fanbase, even without showing her face,
          leading to her professional debut.
        </p>
      </article>
    </S.AboutContainer>
  );
}
