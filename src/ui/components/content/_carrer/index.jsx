import { useRef, useState, useEffect } from "react";
import * as img from "../../../../assets/images/index";
import * as S from "./style";

export default function Carrer() {
 const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current); // Para a inércia ao começar a arrastar de novo
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - lastPosition.current.x;
    const deltaY = e.clientY - lastPosition.current.y;

    // Atualiza rotação
    setRotation((prev) => ({
      x: prev.x - deltaY * 0.2,
      y: prev.y - deltaX * 0.2,
    }));

    // Guarda a velocidade do movimento para usar na inércia
    velocity.current = { x: -deltaY * 0.2, y: -deltaX * 0.2 };

    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const applyInertia = () => {
    // Aplica um "atrito" que vai reduzindo a velocidade até zero
    velocity.current.x *= 0.95;
    velocity.current.y *= 0.95;

    // Atualiza a rotação somando a velocidade atual
    setRotation((prev) => ({
      x: prev.x + velocity.current.x,
      y: prev.y + velocity.current.y,
    }));

    if (Math.abs(velocity.current.x) > 0.01 || Math.abs(velocity.current.y) > 0.01) {
      animationFrameId.current = requestAnimationFrame(applyInertia);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    // Começa a inércia após o usuário soltar o mouse
    applyInertia();
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, []);


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

      <S.Test>
          <S.Cube3DContainer onMouseDown={handleMouseDown}>
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
      </S.Test>
    
    </S.CarrerContainer>
  );
}
