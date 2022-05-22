import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [category, setCategory] = useState();
  const [productList, setProduct] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filteredEnabled, setEnabledFilter] = useState(false);
  const fetchData = async () => {
    const { data } = await axios
      .get("http://localhost:3000/categories")
      .catch(() => {
        console.log("data is not available at the moment");
      });
    const productData = await axios
      .get("http://localhost:3000/products")
      .catch(() => {
        console.log("data is not available at the moment");
      });

    setProduct(productData.data);
    setFilteredList(productData.data);

    const filteredData = data
      .filter((categoryData) => categoryData.order > 0)
      .sort((a, b) => a.order - b.order);
    setCategory(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchFilteredList = (id) => {
    let result = [];
    if (filteredEnabled) {
      result = productList;
      setEnabledFilter(false);
    } else {
      result = productList.filter((curData) => {
        return curData.category === id;
      });
      setEnabledFilter(true);
    }

    setFilteredList(result);
  };

  return (
    <div className="grid grid-cols-6 w-3/4 gap-2">
      <div className="col-span-2 bg-[#eaeaea]">
        {category &&
          category.map(({ id, name }) => {
            return (
              <>
                <button
                  className="w-full bg-[#eaeaea] border-y-4"
                  onClick={() => {
                    fetchFilteredList(id);
                  }}
                >
                  {name}
                </button>
              </>
            );
          })}
      </div>

      <div className="col-span-4 grid grid-cols-4 gap-2">
        {filteredList &&
          filteredList.map((values) => {
            return (
              <div class="flex flex-col justify-center" key={values.id}>
                <h5 class="text-gray-900 text-l font-black mb-2 h-12">
                  {values.name}
                </h5>
                <div class=" shadow-lg bg-white max-w-sm mt-10">
                  <img
                    class="rounded-t-lg"
                    src={values.imageURL}
                    alt=""
                    height={17}
                  />

                  <div className="p-1">
                    <p class="text-gray-700 text-xs bg-[#eaeaea] mb-2 h-[13rem] ">
                      {values.description}
                    </p>
                    <button className=" inline-block px-6 py-2.5 btn text-white font-medium text-xs leading-tight hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
