import React from "react";
import "./App.css";

import Heading from "./components/Heading.js";
import GetData from "./components/GetData.js";

import styled from "styled-components";

const MainWrapper = styled.div`
  text-align: center;
  width: 960px;
  margin: 0 auto;
`;

function App() {
  return (
    <MainWrapper>
      <Heading />
      <GetData />
    </MainWrapper>
  );
}

export default App;
