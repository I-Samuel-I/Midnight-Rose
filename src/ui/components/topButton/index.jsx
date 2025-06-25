import * as S from "./style";

//Import svg/icons (https://fontawesome.com)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Top() {
  const [ScrollPosition, setScrollPosition] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 1000) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);
  return (
    <>
      {showTop && (
        <S.ButtonContainer onClick={scrollTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </S.ButtonContainer>
      )}
    </>
  );
}
