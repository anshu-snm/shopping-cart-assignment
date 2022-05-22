import React, { useEffect, useState } from "react";
import axios from "axios";

import Caraousel from "./Caraousel";
import Category from "./Category";
import Footer from "./Footer";

const Home = () => {
  const [category, setCategory] = useState();
  const fetchData = async () => {
    const { data } = await axios
      .get("http://localhost:3000/categories")
      .catch(() => {
        console.log("data is not available at the moment");
      });

    const filteredData = data
      .filter((categoryData) => categoryData.order > 0)
      .sort((a, b) => a.order - b.order);
    setCategory(filteredData);
    console.log(filteredData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col ml-4 mr-4 mt-4 max-w-screen-xl">
      <Caraousel />

      {category &&
        category.map((item, i) => (
          <Category
            imgUrl={item.imageUrl}
            key={item.id}
            desc={item.description}
            name={item.name}
            bttn={item.key}
            index={i}
          />
        ))}

      <Footer />
    </div>
  );
};

export default Home;
