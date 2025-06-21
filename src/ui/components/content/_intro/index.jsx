import * as img from "../../../../assets/images/index";
import * as S from "./style";

import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function Intro() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);
  // Called when the user starts a **touch interaction** (mobile/tablet)
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY); // Pass the X and Y positions to start dragging
  };
  // Called when the user starts a **mouse interaction** (desktop)
  const handleMouseDown = (e) => {
    handleStart(e.clientX, e.clientY); // Pass the X and Y positions to start dragging
  };
  // Handles touch move event
  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastPosition.current.x;
    const deltaY = touch.clientY - lastPosition.current.y;
    updateRotation(deltaX, deltaY);
    lastPosition.current = { x: touch.clientX, y: touch.clientY };
  };
  // Handles mouse move event
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastPosition.current.x;
    const deltaY = e.clientY - lastPosition.current.y;
    updateRotation(deltaX, deltaY);
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  // Starts dragging event
  const handleStart = (x, y) => {
    isDragging.current = true;
    lastPosition.current = { x, y };
    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);
  };

  // Updates rotation based on movement delta
  const updateRotation = (deltaX, deltaY) => {
    setRotation((prev) => ({
      x: prev.x - deltaY * 0.2,
      y: prev.y - deltaX * 0.2,
    }));
    velocity.current = { x: -deltaY * 0.2, y: -deltaX * 0.2 };
  };
  // Ends touch event and applies inertia
  const handleTouchEnd = () => {
    isDragging.current = false;
    applyInertia();
  };
  // Ends mouse event and applies inertia
  const handleMouseUp = () => {
    isDragging.current = false;
    applyInertia();
  };

  // Applies inertia effect after releasing drag
  const applyInertia = () => {
    velocity.current.x *= 0.97;
    velocity.current.y *= 0.97;

    setRotation((prev) => ({
      x: prev.x + velocity.current.x,
      y: prev.y + velocity.current.y,
    }));

    if (
      Math.abs(velocity.current.x) > 0.01 ||
      Math.abs(velocity.current.y) > 0.01
    ) {
      animationFrameId.current = requestAnimationFrame(applyInertia);
    }
  };

  // Adds event listeners for mouse and touch on component mount
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <S.IntroContainer>
      <article>
        <h1>ADO</h1>
        <a href="https://www.youtube.com/@Ado1024" target="_blank">
          VIEW MORE
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </article>
      <S.Cube3DContainer
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
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
    </S.IntroContainer>
  );
}
