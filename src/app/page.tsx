// pages/shirt.js
// "use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const colors = ["red", "white", "black"];
const sizes = ["xs", "s", "md", "l", "xl"];

export default function Shirt({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // const searchParams = useSearchParams();
  const selectColor = (searchParams.color || "black") as string;
  const selectSize = (searchParams.size || "md") as string;

  // const selectColor = "red";
  // const selectSize = "l";

  // const [selectColor, setSelectColor] = useState("red");
  // const [selectSize, setSelectSize] = useState("l");

  // useEffect(() => {
  //   window.history.pushState(null,"",`?color=${selectColor}&size=${selectSize}`)
  // },[selectColor,selectSize])

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-3/4 h-2/3 flex items-center justify-center bg-white shadow-xl drop-shadow-xl rounded-xl">
        <div className="w-full h-full">
          <Image
            // src="/Img/Img - black.jpeg"
            src={`/Img/${selectColor}.jpeg`}
            alt="img"
            width={1024 / 2}
            height={1024 / 2}
            className="w-full h-full object-contain overflow-hidden"
          />
        </div>
        <div className="w-full p-4 h-full pl-[4rem] flex flex-col justify-center">
          <h1 className="text-3xl font-semibold">Stylish Shirt</h1>
          <p className="text-gray-600 my-2">Price: $19.99</p>
          <div className="my-4">
            <p className="text-gray-600">Available Sizes:</p>
            <div className="flex space-x-2">
              {sizes.map((size, index) => (
                <Link
                  key={index}
                  href={`?${new URLSearchParams({
                    color:selectColor,
                    size,
                  })}`}
                  className={` px-3 py-1 rounded  uppercase ${
                    selectSize === size
                      ? "bg-white drop-shadow border-[2px] border-black"
                      : "bg-gray-200 border-[2px] border-gray-200"
                  }`}
                  // onClick={() => setSelectSize(size)}>
                >
                  {size}
                </Link>
              ))}
            </div>
          </div>
          <div className="my-4">
            <p className="text-gray-600">Available Colors:</p>
            <div className="flex space-x-2">
              {colors.map((color, index) => (
                <Link
                  key={index}
                  // href={`?color=${color}&size=${selectSize}`}
                  href={`?${new URLSearchParams({
                    color,
                    size: selectSize,
                  })}`}
                  className={`w-6 h-6 rounded-full cursor-pointer drop-shadow flex items-center justify-center  ${
                    color === "red" ? "bg-red-500" : `bg-${color}`
                  }
                  `}
                  // onClick={() => setSelectColor(color)}
                >
                  {selectColor === color ? (
                    <span
                      className={`${
                        color === "white" ? "text-black" : "text-white"
                      }`}>
                      &#10003;
                    </span>
                  ) : (
                    <></>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="py-3">
            <span className="select">Select</span> :
            <div className="flex gap-4 capitalize">
              Size:<span className="select uppercase">{selectSize}</span> ,
              Color:
              <span className="select">{selectColor}</span>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 w-max">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


