import React, { useState, useEffect } from "react";
import axios from "axios";

import DataCard from "./DataCard.js";

const GetData = () => {
  const [apod, setApod] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=rE0IpA77McoBIlSqNgE7wRQS3nPpCBVH7MKuId67"
      )
      .then(res => {
        console.log(res);
        setApod(res.data);
        console.log("apod:", apod);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
    setIsLoading(false);
  });

  return (
    <div>
      <h1>NASA Astronomy Picture of the Day.</h1>
      {isLoading && <h2>loading images</h2>}
      {/* {apod.map(stuff => (
        <DataCard stuff={stuff} />
      ))} */}
    </div>
  );
};

export default GetData;
