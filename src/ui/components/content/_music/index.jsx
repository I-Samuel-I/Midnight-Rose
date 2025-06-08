import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import * as img from "../../../../assets/images/index";
import * as music from "../../../../assets/images/index";
import * as S from "./style";

export default function Music() {
  const [Playing, setPlaying] = useState(false);
  const [Volume, setVolume] = useState(0.01);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = Volume;
      if (Playing) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [Playing, Volume]);

  const togglePlay = () => {
    setPlaying(!Playing);
  };
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <S.MusicContainer>
      <S.SingleMusic>
        <figure>
          <img src={img.cubeUsseewa} />
          <figcaption>うっせぇわ (usseewa) - Ado</figcaption>
        </figure>
        {Playing ? (
          <FontAwesomeIcon icon={faPause} onClick={togglePlay} />
        ) : (
          <FontAwesomeIcon icon={faPlay} onClick={togglePlay} />
        )}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={Volume}
          onChange={handleVolumeChange}
        />
        <audio ref={audioRef} autoplay loop>
          <source src={music.song01} type="audio/mp3" />
        </audio>
      </S.SingleMusic>
    </S.MusicContainer>
  );
}
