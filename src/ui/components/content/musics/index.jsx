import * as img from "../../../../assets/images/index";
import * as S from "./style";

//Import svg/icons (https://fontawesome.com)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { musics } from "./musicsData";

export default function Musics() {
  return (
    <S.MusicContainer id="musics">
      <h1>SONGS</h1>
      <figure>
        {musics.map((music) => (
          <div className="ImageContainer" key={music.title}>
            <a
              href="https://open.spotify.com/intl-pt/artist/6mEQK9m2krja6X1cfsAjfl?si=bEOcom0pREKOT9Bx1HxfGQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img[music.image]} alt={music.title} />
            </a>

            <div className="Overlay">
              <h1>{music.title}</h1>
              <a href={music.link} target="_blank" rel="noopener noreferrer">
                <S.TextLink>
                  <p>VIEW MORE</p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </S.TextLink>
              </a>
            </div>
          </div>
        ))}
      </figure>
      <S.LinkAdo>
        <a
          href="https://open.spotify.com/intl-pt/artist/6mEQK9m2krja6X1cfsAjfl?si=bEOcom0pREKOT9Bx1HxfGQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          ADO
        </a>
      </S.LinkAdo>
    </S.MusicContainer>
  );
}
