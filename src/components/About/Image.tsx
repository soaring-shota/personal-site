import React from "react";
import styled from "styled-components";

const StyledPicture = styled.picture`
  grid-area: 1 / 3 / last-line / end;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    padding-top: 150%;
    display: block;
    ${(props) => props.theme.media.max.sm`
      padding-top: 100%;
    `}
  }

  ${(props) => props.theme.media.max.sm`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`;

const StyledImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;
  top: -100%;
  right: -100%;
  bottom: -100%;
  left: -100%;
  mix-blend-mode: lighten;
  opacity: 0.6;
  display: block;
  object-fit: cover;
  transition: opacity 0.3s ease;
  
  ${(props) => props.theme.media.max.sm`
    opacity: 0.8;
  `}
  
  &:hover {
    opacity: 0.8;
  }
`;

const Image: React.FC = () => {
  return (
    <StyledPicture>
      <StyledImage 
        src="../../../images/33.png" 
        alt="Profile" 
        loading="lazy"
      />
    </StyledPicture>
  );
};

export default Image;
