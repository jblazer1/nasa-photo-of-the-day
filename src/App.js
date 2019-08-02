import React from "react";
import "./App.css";

import Heading from "./components/Heading.js";
import GetData from "./components/GetData.js";

import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: #5d90e3;
`;

const ContentWrapper = styled.div`
  text-align: center;
  width: 960px;
  margin: 0 auto;
`;

function App() {
  return (
    <MainWrapper>
      <ContentWrapper>
        <Heading />
        <GetData />
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;
