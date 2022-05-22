import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Caraousel = () => {
  const [banners, setBanners] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3000/banners");

    const filteredData = data
      .filter((categoryData) => categoryData.isActive)
      .sort((a, b) => a.order - b.order);
    setBanners(filteredData);
    console.log(filteredData);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="relative custom-shadow">
      <Carousel infiniteLoop showStatus={false} showThumbs={false}>
        {banners.map((item) => (
          <div key={item.id}>
            <img
              loading="lazy"
              src={item.bannerImageUrl}
              alt={item.bannerImageAlt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Caraousel;
