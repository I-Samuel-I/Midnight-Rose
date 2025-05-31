import * as img from "../../../../assets/images/index";
import * as S from "./style";
export default function Socials() {
  return (
    <>
      <S.SocialsContainer>
        <div>
            <a href="https://www.linkedin.com/in/samuel-gomes-481062316/" target="_blank">
          <img src={img.linkedin} alt="LINKEDIN" />
        </a>
        <a href="https://github.com/I-Samuel-I" target="_blank">
          <img src={img.github} alt="GITHUB" />
        </a>
         <a href="https://www.instagram.com/sam.pongp/" target="_blank">
          <img src={img.instagram} alt="GITHUB" />
        </a>

        </div>
        <div>
            <p>© 2025 by Samuel Gomes</p>
        </div>
      </S.SocialsContainer>
    </>
  );
}
