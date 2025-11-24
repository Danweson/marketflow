import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";

const SingleItem = ({ item }: { item: Category }) => {
  
    const Icon = item.icon;
  return (
    <a href="#" className="group flex flex-col items-center ">
      <div className="max-w-[130px] w-full h-32.5 rounded-full flex items-center justify-center mb-4 shadow-1 hover:shadow-2 transition-shadow duration-300" style={{ backgroundColor: "color-mix(in srgb, #0D3442 30%, white)" }}>
        {/* <Image src={item.img} alt="Category" width={82} height={62} /> */}
        <Icon size={64} className="text-dark hover:text-yellow" />

      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-yellow to-yellow bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-yellow">
          {item.title}
        </h3>
      </div>
    </a>
  );
};

export default SingleItem;
