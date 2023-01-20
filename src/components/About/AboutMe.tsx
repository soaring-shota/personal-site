import React from "react";
import styled from "styled-components";

const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${(props) => props.theme.colors.lighter};
  ${(props) => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`;

const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
        I enjoy life and have fun going on adventures, doing software
        development, meeting new people, helping others, learning new things,
        improving myself, trying new foods, visiting new places, opening my
        mind, achieving my goals, and doing sports (running, hiking, and
        boardsports mainly).
      </p>

      <p>
        I built this website with&nbsp;
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React,&nbsp;
        </a>
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby,
        </a>
        &nbsp; and&nbsp;
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        &nbsp;among other technologies. I use it as a place to share what I
        learn and do.
      </p>
      <p>
        <a
          href="../../../files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>
        &nbsp;in case you want to have a look.
      </p>
      <p>
        You can contact me through them or sending an email to&nbsp;
        <a
          rel="noopener"
          href="mailto:pegasusxnwn@gmail.com?subject=Hi%20there!"
        >
          pegasusxnwn@gmail.com
        </a>
      </p>
    </Content>
  );
};

export default AboutMe;
