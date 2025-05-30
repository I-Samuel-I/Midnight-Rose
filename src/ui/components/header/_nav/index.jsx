import * as img from "../../../../assets/images/index";
import * as S from "./style";
export default function Nav() {
  return (
    <>
      <S.NavContainer>
        <ul>
          <a href="https://github.com/I-Samuel-I" target="_blank">
            <img src={img.github} alt="Github" />
          </a>

          <li>
            <a href="#about"> ABOUT</a>
          </li>
          <li>
            <a href="#works"> WORKS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </S.NavContainer>
    </>
  );
}
