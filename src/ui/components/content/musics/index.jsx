import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import * as img from "../../../../assets/images/index";
import * as S from "./style";
export default function Musics() {
  return (
    <S.MusicContainer id="musics">
      <h1>MUSICS</h1>
      <figure>
        <div className="ImageContainer">
          <img src={img.odo} alt="Odo" />
          <div className="Overlay">
            <h1>ODO</h1>
            <a
              href="https://open.spotify.com/intl-pt/track/7z6qHGEKxRtwtYym2epV7l?si=fb6fdcb4aee2484f"
              target="_blank" rel="noopener noreferrer"
            >
              <div>
                <p>VIEW MORE</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
        <div className="ImageContainer">
          <img src={img.night} alt="All Night Radio" />
          <div className="Overlay">
            <h1>ALL NIGHT RADIO</h1>
            <a
              href="https://open.spotify.com/intl-pt/track/7GRfiALpnehkSNn34LDeci?si=643d1b89819c4390"
              target="_blank" rel="noopener noreferrer"
            >
              <div>
                <p>VIEW MORE</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
        <div className="ImageContainer">
          <img src={img.readymade} alt="Readymade" />
          <div className="Overlay">
            <h1>READYMADE</h1>
            <a
              href="https://open.spotify.com/intl-pt/track/3gKtkQp6cQ4wqsx3bzs4tk?si=534cb55942644688"
              target="_blank" rel="noopener noreferrer"
            >
              <div>
                <p>VIEW MORE</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
        <div className="ImageContainer">
          <img src={img.pierrot} alt="Yoru No Pierrot" />
          <div className="Overlay">
            <h1>YORU NO PIERROT</h1>
            <a
              href="https://open.spotify.com/intl-pt/track/59bPgyrdKgjWkcjxcYoaox?si=466a04bdf6bf4720"
              target="_blank" rel="noopener noreferrer"
            >
              <div>
                <p>VIEW MORE</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
        <div className="ImageContainer">
          <img src={img.show} alt="Show" />
          <div className="Overlay">
            <h1>SHOW</h1>
            <a
              href="https://open.spotify.com/intl-pt/track/1rDgAHDX95RmylxjgVW9tN?si=58189e8aa8834710"
              target="_blank" rel="noopener noreferrer"
            >
              <div>
                <p>VIEW MORE</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
        <div className="ImageContainer">
          <img src={img.himawari} alt="Show" />
          <div className="Overlay">
            <h1>HIMAWARI</h1>
            <a
              href="https://open.spotify.com/intl-pt/track/4CEg2ZSlsQaO8zOCai89gA?si=a17c44d12b2e4f71"
              target="_blank" rel="noopener noreferrer"
            >
              <div>
                <p>VIEW MORE</p>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </a>
          </div>
        </div>
      </figure>
      <S.LinkAdo>
        <a
          href="https://open.spotify.com/intl-pt/artist/6mEQK9m2krja6X1cfsAjfl?si=bEOcom0pREKOT9Bx1HxfGQ"
          target="_blank" rel="noopener noreferrer"
        >
          ADO
        </a>
      </S.LinkAdo>
    </S.MusicContainer>
  );
}
