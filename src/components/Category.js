import React from "react";

const Category = ({ imgUrl, name, desc, bttn, index }) => {
  return (
    //<div className="flex justify-around p-6">
    <div className="grid grid-cols-3 gap-4 m-4 shadow-lg">
      {/* image */}
      {index % 2 == 0 ? (
        <>
          <div>
            <img src={imgUrl} className="w-3/5" alt={name} />
          </div>

          {/* decription name button */}
          <div className="col-span-2 text-center ">
            <p className="font-bold text-xs md:text-base">{name}</p>
            <p className="text-xs md:text-base text-center">{desc}</p>
            {/* <button className="btn btn-blue">Explore{bttn}</button> */}
            <button className="btn hover:btn text-white py-2 px-4 mt-2">
              {bttn}
            </button>
          </div>
        </>
      ) : (
        <>
          {/* decription name button */}
          <div className="col-span-2 text-center">
            <p className="font-bold text-s md:text-base">{name}</p>
            <p className="text-xs md:text-base text-center">{desc}</p>
            {/* <button className="btn btn-blue">Explore{bttn}</button> */}
            <button className="btn hover:btn text-white py-2 px-4 mt-2">
              {bttn}
            </button>
          </div>
          <div>
            <img src={imgUrl} className="w-3/5 mr-[0] ml-auto" alt={name} />
          </div>
        </>
      )}
    </div>
  );
};

export default Category;
