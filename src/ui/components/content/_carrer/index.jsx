import { useRef, useState } from "react";
import * as img from "../../../../assets/images/index";
import * as S from "./style";

export default function Carrer() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastPosition.current.x;
    const deltaY = e.clientY - lastPosition.current.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.3,
      y: prev.y - deltaX * 0.3,
    }));

    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <S.CarrerContainer>
      <article>
        <h1>TODAY</h1>
        <p>
          Now a leading voice in Japan’s music scene, Ado is known for her
          intense vocals, and artistic identity. She continues to keep her face
          hidden, using animated visuals and symbolic imagery — like the blue
          rose — to express her persona. Ado’s music has reached global
          audiences, and she remains one of the most distinctive and respected
          artists of her generation.
        </p>
      </article>

      <S.Cube3DContainer
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <S.Cube3D>
          <S.OuterCube
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            }}
          >
            <S.Cube>
              <S.CubeFaceFront>
                <img src={img.cubeAishite} alt="Aishite" />
              </S.CubeFaceFront>
              <S.CubeFaceBack>
                <img src={img.cubeRule} alt="Rule" />
              </S.CubeFaceBack>
              <S.CubeFaceLeft>
                <img src={img.cubeUsseewa} alt="Usseewa" />
              </S.CubeFaceLeft>
              <S.CubeFaceRight>
                <img src={img.cubeElf} alt="Elf" />
              </S.CubeFaceRight>
              <S.CubeFaceTop>
                <img src={img.cubeRebellion} alt="Rebellion" />
              </S.CubeFaceTop>
              <S.CubeFaceBottom>
                <img src={img.cubeRockstar} alt="Rockstar" />
              </S.CubeFaceBottom>
            </S.Cube>
          </S.OuterCube>
        </S.Cube3D>
      </S.Cube3DContainer>
    </S.CarrerContainer>
  );
}
