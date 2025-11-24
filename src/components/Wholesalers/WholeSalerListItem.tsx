import React from "react";
import Image from "next/image";
import { WholeSaler } from "@/types/WholeSaler";

const WholeSalerListItem = ({ item }: { item: WholeSaler }) => {
    return (

        <a
            href="/wholesaler-details"
            className="group flex items-center gap-4 bg-white p-4 rounded-xl hover:bg-gray-50 transition"
        >
            {/* Avatar */}
            <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shrink-0">
                <Image
                    src={item.img}
                    alt="Wholesaler"
                    width={56}
                    height={56}
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Text block */}
            <div className="flex flex-col flex-1 min-w-0">

                {/* Title with responsive underline */}
                <h3
                    className="font-medium text-dark text-sm leading-tight truncate
                    inline-flex w-fit bg-gradient-to-r from-yellow to-yellow bg-[length:0%_1px]
                    bg-left-bottom bg-no-repeat transition-[background-size] duration-500
                    hover:bg-[length:100%_1px] group-hover:bg-[length:100%_1px] group-hover:text-yellow"
                    title={item.title}
                >
                    {item.title}
                </h3>

                {/* Location */}
                <span className="text-xs text-gray-500 truncate">
                    Pékin, Chine
                </span>

                {/* Number of products */}
                <span className="text-xs font-medium text-gray-600">
                    {/* {item.prooductCount} produits créés */}
                    Pays d'expédition: <span className="font-normal">
                        {item.shippingCountries?.join(", ")}
                    </span>
                </span>

                {/* Description (limitée) */}
                <p className="text-xs text-gray-500 mt-1 line-clamp-1 sm:line-clamp-2 lg:line-clamp-3">
                    {item.description?.length > 100
                        ? item.description.slice(0, 100) + "..."
                        : item.description}
                </p>
            </div>
        </a>

        // <a href="#"
        //     className="group flex items-center gap-4 bg-white p-3 rounded-xl hover:bg-gray-50 transition">
        //     {/* Avatar (cercle) */}
        //     <div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shrink-0">
        //         <Image
        //             src={item.img}
        //             alt="Wholesaler"
        //             width={56}
        //             height={56}
        //             className="object-cover w-full h-full"
        //         />
        //     </div>

        //     {/* Text */}
        //     <div className="flex flex-col flex-1 min-w-0">
        //         <h3 className="font-medium text-dark text-sm leading-tight truncate inline-flex w-fit
        //             bg-gradient-to-r from-yellow to-yellow bg-[length:0%_1px] bg-left-bottom bg-no-repeat
        //             transition-[background-size] duration-500 hover:bg-[length:100%_1px]
        //             group-hover:bg-[length:100%_1px] group-hover:text-yellow" title={item.title}
        //         >
        //             {item.title}
        //         </h3>

        //         <span className="text-xs text-gray-500 truncate">Pékin, Chine</span>
        //     </div>
        // </a>

    );
};

export default WholeSalerListItem;
