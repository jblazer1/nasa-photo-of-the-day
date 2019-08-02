import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";
import Title from "./Title";
import Explanation from "./Explanation";

const GetData = () => {
  const [apod, setApod] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setIsLoading(true);
    // setApod([]);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=rE0IpA77McoBIlSqNgE7wRQS3nPpCBVH7MKuId67&date=${date}`
      )
      .then(res => {
        console.log(res);
        setApod(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [date]);

  return (
    <div>
      <h3>input another date for a new picture</h3>
      <p>Be sure to us the following format yyyy-mm-dd</p>
      <input
        type="text"
        placeholder="yyyy-mm-dd"
        onChange={e => setDate(e.target.value)}
      />

      {isLoading && <h2>loading image...</h2>}
      <Title apod={apod} />
      <Photo apod={apod} />
      <Explanation apod={apod} />
      <h4>
        {apod.date} {apod.copyright}
      </h4>
    </div>
  );
};

export default GetData;
