import { useEffect, useState } from "react";

import * as img from "../../../assets/images/index";
import * as S from "./style";

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
        <S.ButtonContainer>
          <button onClick={scrollTop}>
            <img src={img.svgArrowUp} alt="ArrowUp" />
          </button>
        </S.ButtonContainer>
      )}
    </>
  );
}
