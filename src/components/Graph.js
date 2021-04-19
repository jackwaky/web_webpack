import { Container, Row } from "../components/Grid";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

import styled from "styled-components";
import data from "./data.json";
import React from "react";

function Graph() {
  const name = data.name;
  const age = data.age;
  const time = data.time;
  const fre = data.frequency;
  const array = data.data;

  var persentage = array.map(function (v) {
    return v.y;
  });

  var disease = array.map(function (v) {
    return v.x;
  });

  const maxValue = Math.max(...persentage);
  //   const maxDisease = null;
  let temp = 0;
  let x_ = 0;
  array.map((da) => {
    if (da.y > temp) {
      temp = da.y;
      x_ = da.x;
    }
  });

  //   console.log(maxDisease);
  //   const disValue = array(maxValue);

  console.log(array[0]);

  return (
    <Container>
      <GraphContainer>
        <Row flex={40} flexdir="column">
          <Time>
            {time} {fre}차
          </Time>
          <DiseaseName>{x_}</DiseaseName>
          <Percentage>{maxValue}%</Percentage>
        </Row>
        <Row flex={60}>
          <VictoryChart
            width={500}
            height={300}
            // padding={{ top: -100, bottom: 150, right: 30, left: 30 }}
          >
            <VictoryBar
              barRatio={0.8}
              categories={{ x: disease }}
              data={array}
              barWidth={20}
              style={{
                data: {
                  fill: ({ datum }) =>
                    datum.y === maxValue ? "#8c858e" : "#c4c4c4",
                },
              }}
              cornerRadius={{ top: 5, bottom: 5 }}
            />
            <VictoryAxis
              style={{
                axis: { stroke: "none" },
                tickLabels: { fontSize: 10, fill: "#8c858e" },
              }}
            />
          </VictoryChart>
        </Row>
      </GraphContainer>
    </Container>
  );
}

const Time = styled.span`
  width: 6.111vw;
  height: 1.75vh;
  font-size: 0.595vw;

  margin-left: auto;
  text-align: center;
  line-height: 1.75vh;

  color: #c4c4c4;
`;

const DiseaseName = styled.span`
  width: 6.52vw;
  height: 5.625vh;
  font-size: 1.904vw;

  margin-left: auto;
  text-align: center;
  line-height: 5.625vh;

  color: #8c858e;
`;

const Percentage = styled.span`
  width: 2.986vw;
  height: 3.5vh;
  font-size: 1.19vw;

  margin-left: auto;
  text-align: center;
  line-height: 3.5vh;

  color: #8c858e;
`;

const GraphContainer = styled.div`
  display: flex;

  width: 17.778vw;
  height: 29.75vh;
  aspect-ratio: 256/ 238;

  flex-direction: column;
`;

export default Graph;
