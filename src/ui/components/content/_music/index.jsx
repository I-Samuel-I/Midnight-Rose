import { useEffect, useRef, useState } from "react";
import { music } from "./musicData";
import * as S from "./style";

//Import svg/icons (https://fontawesome.com)
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
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Music() {
  // Manage player state
  const [Playing, setPlaying] = useState(false); // Whether the music is playing (play/pause)
  const [Volume, setVolume] = useState(0.02); // Current audio volume (0 to 0.15)
  const [Arrow, setArrow] = useState(false);
  const [PreviousVolume, setPreviousVolume] = useState(0.02); // Stores volume before muting
  const [CurrentIndex, setCurrentIndex] = useState(0); // Index of the current song

  // Audio DOM reference
  const audioRef = useRef(null);

  // Music Data
  const totalMusics = music.length;
  const currentMusic = music[CurrentIndex];

  // Load audio when the current track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load();
    }
  }, [CurrentIndex]);

  // Sync audio playback and volume with state
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

  // Toogle play/pause
  const togglePlay = () => {
    setPlaying((prev) => !prev);
  };

  // Update volume
  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  // Get appropriate volume icon base on current volume
  const VolumeIcon = () => {
    if (Volume === 0.0) return faVolumeXmark;
    if (Volume <= 0.04) return faVolumeOff;
    if (Volume <= 0.095) return faVolumeLow;
    return faVolumeHigh;
  };

  //Functions

  // Toggle mute/unmute
  const toggleMute = () => {
    if (Volume > 0) {
      setPreviousVolume(Volume);
      setVolume(0);
    } else {
      setVolume(PreviousVolume || 0.02);
    }
  };

  // Switch to previous track
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalMusics - 1 : prevIndex - 1
    );
  };

  // Switch to next track
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalMusics - 1 ? 0 : prevIndex + 1
    );
  };
  const toogleSideArrow = () => {
    setArrow((prev) => !prev);
  };
  const isMobile = window.innerWidth <= 992;

  return (
    <S.MusicContainer>
      <S.SingleMusic>
        <figure key={currentMusic.title}>
          <img src={currentMusic.image} alt={currentMusic.title} />
          <S.InfoContainer>
            {(Arrow || !isMobile) && (
              <S.MusicInfo>
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
              </S.MusicInfo>
            )}
            <S.SideArrow onClick={toogleSideArrow}>
              <FontAwesomeIcon icon={faAngleDown} />
            </S.SideArrow>
          </S.InfoContainer>
        </figure>
        <audio ref={audioRef} loop>
          <source src={currentMusic.audio} type="audio/mp3" />
        </audio>
      </S.SingleMusic>
    </S.MusicContainer>
  );
}
