import styled from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `font-size: 50px;
  font-weight: 600;
  `}

  ${(props) =>
    props.as === "h2" &&
    `font-size: 40px;
  font-weight: 600;
  `}

   ${(props) =>
    props.as === "h3" &&
    `font-size: 30px;
  font-weight: 600;
  `}
  background-color: yellow;
`;

export default Heading;
