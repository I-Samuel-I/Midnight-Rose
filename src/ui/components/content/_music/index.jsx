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
  faBackwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { music } from "./musicData";
import * as S from "./style";

export default function Music() {
  const [Playing, setPlaying] = useState(false);
  const [Volume, setVolume] = useState(0.02);
  const [PreviousVolume, setPreviousVolume] = useState(0.02);
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);
  const totalMusics = music.length;
  const currentMusic = music[CurrentIndex];
  
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load(); 
    }
  }, [CurrentIndex]);
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
  }, [Playing, Volume, CurrentIndex]);

  const togglePlay = () => {
    setPlaying((prev) => !prev);
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

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalMusics - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalMusics - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <S.MainContainer>
      <S.SingleMusic>
        <figure key={currentMusic.title}>
          <img src={currentMusic.image} alt={currentMusic.title} />
          <S.InfoContainer>
            <figcaption>{currentMusic.title}</figcaption>
            <S.ControlsContainer>
              <S.PreviousTrack onClick={handlePrevious}>
                <FontAwesomeIcon icon={faBackwardStep} />
              </S.PreviousTrack>

              {Playing ? (
                <FontAwesomeIcon icon={faPause} onClick={togglePlay} />
              ) : (
                <FontAwesomeIcon icon={faPlay} onClick={togglePlay} />
              )}

              <S.NextTrack onClick={handleNext}>
                <FontAwesomeIcon icon={faForwardStep} />
              </S.NextTrack>

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
              </S.VolumeContainer>
            </S.ControlsContainer>
          </S.InfoContainer>
        </figure>

        <audio ref={audioRef} loop>
          <source src={currentMusic.audio} type="audio/mp3" />
        </audio>
      </S.SingleMusic>
    </S.MainContainer>
  );
}
