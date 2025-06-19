import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import * as img from "../../../../assets/images/index";
import * as S from "./style";
import { useNavigate } from "react-router";

export default function Nav() {
  const [MenuDisplay, setMenuDisplay] = useState(false);
  const navigate = useNavigate();

  function handleMenu() {
    setMenuDisplay((prev) => !prev);
  }
  return (
    <>
      <S.NavContainer>
        <a href="https://github.com/I-Samuel-I" target="_blank">
          <img src={img.github} alt="Github" />
        </a>
        <li>
          <S.DisplayButton onClick={handleMenu}>MENU</S.DisplayButton>
        </li>
      </S.NavContainer>

      {MenuDisplay && (
        <S.InfoMenu>
          <ul>
            <li>
              <a href="/#about">ABOUT</a>
            </li>
            <li>
              <a href="/#musics">WORKS</a>
            </li>
            <li>
              <a href="/#albums">ALBUMS</a>
            </li>
            <li>
              <button onClick={() => navigate("/contact")}>CONTACT</button>
            </li>
          </ul>
          <button onClick={handleMenu}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </S.InfoMenu>
      )}
    </>
  );
}
