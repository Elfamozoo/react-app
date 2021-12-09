import React, { useEffect, useState } from "react";
import axios from "axios";

const countries = () => {
  //   eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name,population,region,capital,flag")
      .then((res) => setData(res.data));

    console.log(data);
  }, []);
  
  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default countries;
