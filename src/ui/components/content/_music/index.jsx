import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faVolumeHigh,
  faVolumeLow,
  faVolumeOff,
  faVolumeXmark,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { music } from "./musicData";
import * as S from "./style";

export default function Music() {
  const [Playing, setPlaying] = useState(false);
  const [Volume, setVolume] = useState(0.02);
  const [PreviousVolume, setPreviousVolume] = useState(0.02);
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
    setVolume(parseFloat(e.target.value));
  };

  const VolumeIcon = () => {
    if (Volume === 0.0) return faVolumeXmark;
    if (Volume <= 0.04) return faVolumeOff;
    if (Volume <= 0.095) return faVolumeLow;
    return faVolumeHigh;
  };
  const toggleMute = () => {
    if (Volume > 0) {
      setPreviousVolume(Volume);
      setVolume(0);
    } else {
      setVolume(PreviousVolume || 0.02);
    }
  };

  return (
    <S.MainContainer>
      <S.SingleMusic>
        {music.map((musicData) => (
          <figure key={musicData.title}>
            <img src={[musicData.image]} alt={musicData.image} />
            <S.InfoContainer>
              <figcaption>{musicData.title}</figcaption>
              <S.ControlsContainer>
                <S.PreviousTrack>
                  <FontAwesomeIcon icon={faForwardStep} />
                </S.PreviousTrack>
                
                {Playing ? (
                  <FontAwesomeIcon icon={faPause} onClick={togglePlay} />
                ) : (
                  <FontAwesomeIcon icon={faPlay} onClick={togglePlay} />
                )}
                <FontAwesomeIcon icon={faForwardStep} />
                <S.VolumeContainer>
                  <FontAwesomeIcon icon={VolumeIcon()} onClick={toggleMute} />
                  <input
                    type="range"
                    min="0"
                    max="0.15"
                    step="0.001"
                    value={Volume}
                    onChange={handleVolumeChange}
                  />
                  <audio ref={audioRef} autoPlay loop>
                    {/* <source src={musicData.audio} type="audio/mp3" /> */}
                  </audio>
                </S.VolumeContainer>
              </S.ControlsContainer>
            </S.InfoContainer>
          </figure>
        ))}
      </S.SingleMusic>
    </S.MainContainer>
  );
}
