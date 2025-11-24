import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";

const WholeSalerItem = ({ item }: { item: Category }) => {
    return (

        <a href="/wholesaler-details" className="group flex flex-col items-center bg-white p-4 me-3 rounded-lg"
        >
            {/* <div className="w-32 h-32 flex items-center justify-center mb-4 rounded-lg p-0 overflow-hidden">
                <Image
                    src={item.img}
                    alt="Wholesaler"
                    width={100}
                    height={80}
                    className="object-contain"
                />
            </div> */}

            <div className="w-32 h-32 flex items-center justify-center mb-4 rounded-full overflow-hidden bg-white">
                <Image
                    src={item.img}
                    alt="Wholesaler"
                    width={128}
                    height={128}
                    className="object-cover"
                />
            </div>


            <div className="flex justify-center w-36 text-center">
                <h3 className="font-medium text-dark text-sm leading-tight line-clamp-2
                    bg-gradient-to-r from-yellow to-yellow bg-[length:0px_1px] 
                    bg-left-bottom bg-no-repeat transition-[background-size] 
                    duration-500 hover:bg-[length:100%_3px] 
                    group-hover:bg-[length:100%_1px] group-hover:text-yellow"
                    title={item.title}
                >
                    {item.title.length > 15
                        ? `${item.title.slice(0, 15)}...`
                        : item.title}
                </h3>
            </div>
            <div className="flex justify-center">
                <span> Pékin, Chine </span>
            </div>
        </a>

        // <a href="#" className="group flex flex-col items-center bg-white p-4 me-3 rounded-lg ">
        //   <div className="max-w-[140px] w-full h-32 flex items-center justify-center mb-4">
        //     <Image src={item.img} alt="Wholesaler" width={100} height={40} />
        //   </div>

        //   <div className="flex justify-center">
        //     <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-yellow to-yellow bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-yellow">
        //       {item.title}
        //     </h3>
        //   </div>
        // </a>
    );
};

export default WholeSalerItem;
