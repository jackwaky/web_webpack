import React, { useState } from "react";
import styled from "styled-components";
import {
  Container,
  Contents,
  Column,
  ColumnRev,
  Row,
} from "../components/Grid";

//image references
import bg from "../images/background.png";
import logo from "../images/logo.png";
import whatwedo from "../images/whatwedo.png";
import weebut from "../images/weebut.png";
import help from "../images/Help.png";

function Intro() {
  const [color, setcolor] = useState("white");

  const changeColor = (e) => {
    setcolor(color === "white" ? "blue" : "white");
  };

  return (
    <Container imgUrl={bg}>
      <Contents>
        <Row flex={100}></Row>
        <Column flex={740}>
          <Row flex={50}>
            <Row flex={570}>
              <Logo src={logo}></Logo>
            </Row>
            <Row flex={750} color={color}>
              <Whatwedo onClick={changeColor}>What we do</Whatwedo>
              <Who>who we are</Who>
              <Contact>contact</Contact>
              <Ending>ending</Ending>
            </Row>
          </Row>
          <ColumnRev flex={690}>
            <Weebut src={weebut} alt="Weebut"></Weebut>
          </ColumnRev>
        </Column>
        <Column flex={240}>
          <Help src={help} alt="Help Lung cancer"></Help>
        </Column>
      </Contents>
    </Container>
  );
}

const Weebut = styled.img`
  width: 26.5625vw;
  /* height: 13.889vh; */
  aspect-ratio: 510 / 150;

  padding-left: 1.04vw;
  /* aspect-ratio: 510 / 150; */
`;

const Logo = styled.img`
  width: 3.645vw;
  /* height: 4.26vh; */
  aspect-ratio: 70 / 46;

  padding-left: 1.04vw;
  margin: auto 0;
`;

const Whatwedo = styled.span`
  /* width: 6.09vw; */
  aspect-ratio: 139 / 26;

  /* text-align: center;

  margin: auto 0;

  color: white;
  font-size: 1.041vw;
  font-family: "Mont";
  white-space: normal; */
`;

const Who = styled.span`
  /* width: 6.09vw; */
  aspect-ratio: 117 / 26;
`;

const Contact = styled.span`
  /* width: 4.375vw; */
  aspect-ratio: 84 / 26;

  /* text-align: center;
  margin: auto 0;

  color: white;
  font-size: 1.041vw;
  font-family: "Mont";
  white-space: normal; */
`;

const Ending = styled.span`
  /* width: 3.75vw; */
  aspect-ratio: 72 / 26;

  /* text-align: center;
  margin: auto 0;

  color: white;
  font-size: 1.041vw;
  font-family: "Mont";
  white-space: normal; */
`;

const Help = styled.img`
  width: 52.97vw;
  aspect-ratio: 1017 / 51;

  margin-top: 1.852vh;
  padding-left: 1.04vw;
`;

export default Intro;
