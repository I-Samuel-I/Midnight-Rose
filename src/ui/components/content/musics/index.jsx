import { musics } from "./musicsData";
import * as img from "../../../../assets/images/index";
import * as S from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Musics() {
  return (
    <S.MusicContainer id="musics">
      <h1>MUSICS</h1>
      <figure>
        {musics.map((music) => (
          <div className="ImageContainer" key={music.title}>
            <img src={img[music.image]} alt={music.title} />
            <div className="Overlay">
              <h1>{music.title}</h1>
              <a href={music.link} target="_blank" rel="noopener noreferrer">
                <div>
                  <p>VIEW MORE</p>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
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
