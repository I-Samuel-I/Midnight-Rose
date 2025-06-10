import * as img from "../../../../assets/images/index";
import * as S from "./style";
export default function About() {
  return (
    <S.AboutContainer id="about">
      <img src={img.adoPreview} alt="Ado" />
      <article>
        <h1>EARLY CARRER</h1>
        <p>
          Ado began her musical journey as a utaite — a singer who shares vocal
          covers online, often of Vocaloid or anime songs. She gained
          recognition on platforms like Nico Nico Douga and YouTube, where her
          unique voice and emotional delivery quickly stood out. Despite never
          showing her face, her raw talent and expressive performances attracted
          a growing fanbase, setting the stage for her professional debut.
        </p>
      </article>
    </S.AboutContainer>
  );  
}
