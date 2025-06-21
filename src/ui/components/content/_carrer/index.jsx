import * as img from "../../../../assets/images/index"
import * as S from "./style";

export default function Carrer() {
  return (
    <>
      <S.CarrerContainer>
        <article>
          <h1>TODAY</h1>
          <p>
            Now a leading voice in Japan’s music scene, Ado is known for her
            intense vocals, and artistic identity. She continues to keep her
            face hidden, using animated visuals and symbolic imagery — like the
            blue rose — to express her persona. Ado’s music has reached global
            audiences, and she remains one of the most distinctive and respected
            artists of her generation.
          </p>
        </article>
         <img src={img.ado} alt="Ado" />
      </S.CarrerContainer>
    </>
  );
}
