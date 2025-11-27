"use client"
import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "../Common/Breadcrumb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle, FaStarOfLife } from "react-icons/fa";
import LatestProducts from "../Blog/LatestProducts";
import shopData from "../Shop/shopData";
import { LuBadgeCheck } from "react-icons/lu";

export function WholesalerDetails() {

    const [activeTab, setActiveTab] = useState("tabOne");

    const tabs = [
        {
            id: "tabOne",
            title: "Informations",
        },
        // {
        //   id: "tabTwo",
        //   title: "Informations de l'Agent",
        // },
        {
            id: "tabThree",
            title: "Avis des Clients",
        },
    ];

    const truncate = (text: string, max = 220) =>
        text.length > max ? text.slice(0, max) + "..." : text;


    const description = `
    Nous sommes un fournisseur spécialisé dans la production et l’exportation de marchandises
    de haute qualité. Avec plus de 12 ans d’expérience, notre entreprise est certifiée et reconnue
    pour son professionnalisme, sa rapidité et son engagement envers la satisfaction client.
  `;

    return (
        <>
            <Breadcrumb title={"Wholesaler Details"} pages={["Wholesaler"]} />

            <section className="overflow-hidden py-5" style={{ backgroundColor: "color-mix(in srgb, #0D3442 5%, white)" }}>
                <div className="max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-0 bg-gray-1 text-black">
                    <div className="flex flex-col lg:flex-row gap-10">

                        {/* ========================================= */}
                        {/* ============ LEFT COLUMN ================ */}
                        {/* ========================================= */}

                        <div className="lg:max-w-[750px] w-full space-y-10">

                            {/* ------------------------------------------------ */}
                            {/*  SECTION 1 — Header / Profil (Thème du modèle)   */}
                            {/* ------------------------------------------------ */}

                            <div className="group flex items-center gap-6 bg-gray-1 rounded-xl p-5 border border-white/10 shadow-1 cursor-pointer">
                                {/* Avatar */}
                                <div className="w-24 h-24 rounded-full overflow-hidden bg-white/10 flex items-center justify-center shrink-0">
                                    <Image
                                        src="/images/agents/esther-maffouo.jpeg"
                                        alt="SecureTrade Manufacturing Co."
                                        width={96}
                                        height={96}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Text block */}
                                <div className="flex-1 space-y-1">

                                    {/* Title */}
                                    {/* <h2 className="font-medium text-dark text-sm leading-tight truncate
                                        inline-flex w-fit bg-gradient-to-r from-yellow to-yellow bg-[length:0%_1px]
                                        bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-justify
                                        hover:bg-[length:100%_1px] group-hover:bg-[length:100%_1px] group-hover:text-yellow border">
                                        Esther MAFFUO
                                        <div className="flex items-center border">
                                            <span className="text-yellow-500 text-medium flex items-center border border-green/10 p-1 ms-3 rounded-md bg-green/10">
                                                <LuBadgeCheck />
                                            </span>
                                        </div>
                                    </h2> */}
                                    <h2 className="font-medium text-dark text-sm leading-tight
                                            inline-flex w-fit justify-start items-center gap-2
                                            bg-gradient-to-r from-yellow to-yellow bg-[length:0%_1px]
                                            bg-left-bottom bg-no-repeat transition-[background-size] duration-500
                                            ">
                                        Esther MAFFUO
                                        {/* Badge centré à côté du nom */}
                                        <span className="text-yellow-500 justify-center text-justify text-medium border border-green/10 flex items-center p-1 rounded-md bg-green/10">
                                           Vérifié <LuBadgeCheck className="ms-2" size={15} />
                                        </span>
                                    </h2>

                                    {/* Location  <LuBadgeCheck /> */}
                                    <p className="text-black/70 text-sm">
                                        Paris, France
                                    </p>

                                    {/* Shipping countries */}
                                    <p className="text-xs text-black/70">
                                        Pays d’expédition :{" "}
                                        <span className="text-black">France, Chine, Allemagne, USA</span>
                                    </p>

                                    {/* Rating */}
                                    <p className="text-yellow-400 mt-1">⭐ 4.7 / 5</p>
                                </div>
                            </div>



                            {/* ---------------------------------------------------- */}
                            {/*  SECTION 2 — Statistiques (Look premium du modèle)  */}
                            {/* ---------------------------------------------------- */}
                            <div className="bg-gray-1 rounded-xl p-6 border border-white/10 shadow-1 space-y-6">
                                <h3 className="text-lg font-semibold border-l-4 border-yellow-500 pl-3">
                                    Statistiques & Capacités
                                </h3>

                                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Stat label="Produits Créés" value="154+" />
                                    <Stat label="Production Mensuelle" value="20 000 unités" />
                                    <Stat label="Lead Time" value="7–15 jours" />
                                    <Stat label="Expéditions" value="Air · Mer · Express" />
                                    <Stat label="Pays livrés" value="27+" />
                                    <Stat label="Paiements" value="FOB · CIF · EXW" />
                                </div> */}

                                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                    <Stat label="Pays d'expédition" value="Caméeroun, Senegal et Autres" color="green"/>
                                    <Stat label="Nombres de Clients" value="25" color="blue" />
                                    <Stat label="Nombre de litiges" value="4" color="red" />
                                    <Stat label="Produits Créés" value="154+" color="purple"/>
                                    {/* <Stat label="Production Mensuelle" value="20 000 unités" /> */}
                                    {/* <Stat label="Lead Time" value="7–15 jours" /> */}
                                    {/* <Stat label="Expéditions" value="Air · Mer · Express" /> */}
                                    {/* <Stat label="Paiements" value="FOB · CIF · EXW" /> */}
                                </div>

                            </div>

                            {/* ---------------------------------------------------- */}
                            {/*  SECTION 3 — À propos (style conforme modèle)       */}
                            {/* ---------------------------------------------------- */}
                            {/* <div className="bg-white/5 rounded-xl p-6 border border-white/10 shadow-lg space-y-6">
                                <h3 className="text-lg font-semibold border-l-4 border-yellow-500 pl-3">
                                    À propos du Fournisseur
                                </h3>

                                <p className="text-black/80 leading-relaxed">
                                    SecureTrade Manufacturing Co. est un fournisseur spécialisé dans la
                                    production et l’exportation de marchandises de haute qualité.
                                    Nous travaillons depuis plus de 12 ans avec des entreprises françaises
                                    et internationales pour fournir des produits certifiés, fiables et
                                    livrés dans les délais.
                                </p>

                                <ul className="space-y-2 text-black/80">
                                    <li>🏢 Contact : John Williams</li>
                                    <li>📍 Adresse : 21 Rue Lafayette, Paris</li>
                                    <li>📞 Téléphone : +33 6 45 22 89 10</li>
                                    <li>💬 WhatsApp : +33 6 45 22 89 10</li>
                                    <li>📧 Email : contact@securetrade.co</li>
                                    <li>🏅 Certifications : ISO 9001, CE, SGS</li>
                                    <li>🎯 Années d'activité : 12 ans</li>
                                    <li>🚚 Méthodes d’expédition : Air, Mer, Courrier Express</li>
                                    <li>⏳ Lead Time : 7–15 jours</li>
                                </ul>
                            </div> */}


                        </div>

                        {/* ========================================= */}
                        {/* ============ RIGHT COLUMN =============== */}
                        {/* ========================================= */}

                        <div className="lg:max-w-[370px] w-full space-y-8">

                            {/* Contact Card */}
                            <div className="bg-gray-1 border border-white/10 shadow-1 rounded-xl p-6 space-y-4">
                                <h3 className="text-lg font-medium text-black">Contacter le Fournisseur</h3>

                                <button className="w-full py-3 bg-yellow text-white font-semibold rounded-xl hover:bg-[#ffa726] transition">
                                    Envoyer un Message
                                </button>

                                <button className="w-full py-3 border border-yellow text-yellow rounded-xl hover:bg-yellow hover:text-white transition">
                                    Demander un Devis
                                </button>
                            </div>

                            {/* Latest Products */}
                            <div className="bg-gray-1 border border-white/10 shadow-1 rounded-xl p-3">
                                <h3 className="text-lg font-medium text-black mb-3">Derniers Produits</h3>
                                <p className="text-black/70 text-sm">
                                    Liste des produits récents ici...
                                </p>
                                <LatestProducts products={shopData} showText={false} />
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="overflow-hidden mt-2 bg-white pt-5 pb-10" style={{ backgroundColor: "color-mix(in srgb, #0D3442 5%, white)" }}>
                <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    {/* <!--== tab header start ==--> */}
                    <div className="flex flex-wrap items-center bg-gray-1 rounded-[10px] shadow-1 gap-5 xl:gap-12.5 py-4.5 px-4 sm:px-6">
                        {tabs.map((item, key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(item.id)}
                                className={`font-medium lg:text-lg ease-out duration-200 hover:text-yellow relative before:h-0.5 before:bg-yellow before:absolute before:left-0 before:bottom-0 before:ease-out before:duration-200 hover:before:w-full ${activeTab === item.id
                                    ? "text-yellow before:w-full"
                                    : "text-dark before:w-0"
                                    }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    {/* <!--== tab header end ==--> */}

                    {/* <!--== tab content start ==--> */}
                    {/* <!-- tab content one start --> */}
                    <div>
                        <div
                            className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-5 bg-gray-1 ${activeTab === "tabOne" ? "flex" : "hidden"
                                }`}
                        >
                            <div className="bg-white/5 rounded-xl p-6 border border-white/10 shadow-lg space-y-6">
                                <h3 className="text-lg font-semibold border-l-4 border-yellow-500 pl-3">
                                    À propos du Fournisseur
                                </h3>

                                <p className="text-black/80 leading-relaxed">
                                    SecureTrade Manufacturing Co. est un fournisseur spécialisé dans la
                                    production et l’exportation de marchandises de haute qualité.
                                    Nous travaillons depuis plus de 12 ans avec des entreprises françaises
                                    et internationales pour fournir des produits certifiés, fiables et
                                    livrés dans les délais.
                                </p>

                                <ul className="space-y-2 text-black/80">
                                    <li>🏢 Contact : John Williams</li>
                                    <li>📍 Adresse : 21 Rue Lafayette, Paris</li>
                                    <li>📞 Téléphone : +33 6 45 22 89 10</li>
                                    <li>💬 WhatsApp : +33 6 45 22 89 10</li>
                                    <li>📧 Email : contact@securetrade.co</li>
                                    <li>🏅 Certifications : ISO 9001, CE, SGS</li>
                                    <li>🎯 Années d'activité : 12 ans</li>
                                    <li>🚚 Méthodes d’expédition : Air, Mer, Courrier Express</li>
                                    <li>⏳ Lead Time : 7–15 jours</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- tab content one end --> */}

                    {/* <!-- tab content two start --> */}

                    {/* <!-- tab content two end --> */}

                    {/* <!-- tab content three start --> */}
                    <div>
                        <div
                            className={`flex-col sm:flex-row gap-7.5 xl:gap-12.5 mt-5 bg-gray-1 py-5 px-5 ${activeTab === "tabThree" ? "flex" : "hidden"
                                }`}
                        >
                            <div className="max-w-[570px] w-full">
                                <h2 className="font-medium text-2xl text-dark mb-9">
                                    {/* 03 Review for this product */}
                                    03 Avis des Clients
                                </h2>

                                <div className="flex flex-col gap-6">
                                    {/* <!-- review item --> */}
                                    <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <a href="#" className="flex items-center gap-4">
                                                <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                                                    <Image
                                                        src="/images/users/user-01.jpg"
                                                        alt="author"
                                                        className="w-12.5 h-12.5 rounded-full overflow-hidden"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="font-medium text-dark">
                                                        Davis Dorwart
                                                    </h3>
                                                    <p className="text-custom-sm">
                                                        Serial Entrepreneur
                                                    </p>
                                                </div>
                                            </a>

                                            <div className="flex items-center gap-1">
                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-dark mt-6">
                                            “Lorem ipsum dolor sit amet, adipiscing elit. Donec
                                            malesuada justo vitaeaugue suscipit beautiful
                                            vehicula’’
                                        </p>
                                    </div>

                                    {/* <!-- review item --> */}
                                    <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <a href="#" className="flex items-center gap-4">
                                                <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                                                    <Image
                                                        src="/images/users/user-01.jpg"
                                                        alt="author"
                                                        className="w-12.5 h-12.5 rounded-full overflow-hidden"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="font-medium text-dark">
                                                        Davis Dorwart
                                                    </h3>
                                                    <p className="text-custom-sm">
                                                        Serial Entrepreneur
                                                    </p>
                                                </div>
                                            </a>

                                            <div className="flex items-center gap-1">
                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-dark mt-6">
                                            “Lorem ipsum dolor sit amet, adipiscing elit. Donec
                                            malesuada justo vitaeaugue suscipit beautiful
                                            vehicula’’
                                        </p>
                                    </div>

                                    {/* <!-- review item --> */}
                                    <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                                        <div className="flex items-center justify-between">
                                            <a href="#" className="flex items-center gap-4">
                                                <div className="w-12.5 h-12.5 rounded-full overflow-hidden">
                                                    <Image
                                                        src="/images/users/user-01.jpg"
                                                        alt="author"
                                                        className="w-12.5 h-12.5 rounded-full overflow-hidden"
                                                        width={50}
                                                        height={50}
                                                    />
                                                </div>

                                                <div>
                                                    <h3 className="font-medium text-dark">
                                                        Davis Dorwart
                                                    </h3>
                                                    <p className="text-custom-sm">
                                                        Serial Entrepreneur
                                                    </p>
                                                </div>
                                            </a>

                                            <div className="flex items-center gap-1">
                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>

                                                <span className="cursor-pointer text-[#FBB040]">
                                                    <svg
                                                        className="fill-current"
                                                        width="15"
                                                        height="16"
                                                        viewBox="0 0 15 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                            fill=""
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-dark mt-6">
                                            “Lorem ipsum dolor sit amet, adipiscing elit. Donec
                                            malesuada justo vitaeaugue suscipit beautiful
                                            vehicula’’
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-[550px] w-full">
                                <form>
                                    <h2 className="font-medium text-2xl text-dark mb-3.5">
                                        {/* Add a Review */}
                                        Ajouter un avis
                                    </h2>

                                    <p className="mb-6">
                                        {/* Your email address will not be published. Required
                        fields are marked * */}
                                        Votre adresse e-mail ne sera pas publiée. Les champs
                                        requis sont marqués d'un *
                                    </p>

                                    <div className="flex items-center gap-3 mb-7.5">
                                        <span>Votre avis*</span>

                                        <div className="flex items-center gap-1">
                                            <span className="cursor-pointer text-[#FBB040]">
                                                <svg
                                                    className="fill-current"
                                                    width="15"
                                                    height="16"
                                                    viewBox="0 0 15 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>

                                            <span className="cursor-pointer text-[#FBB040]">
                                                <svg
                                                    className="fill-current"
                                                    width="15"
                                                    height="16"
                                                    viewBox="0 0 15 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>

                                            <span className="cursor-pointer text-[#FBB040]">
                                                <svg
                                                    className="fill-current"
                                                    width="15"
                                                    height="16"
                                                    viewBox="0 0 15 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>

                                            <span className="cursor-pointer text-gray-5">
                                                <svg
                                                    className="fill-current"
                                                    width="15"
                                                    height="16"
                                                    viewBox="0 0 15 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>

                                            <span className="cursor-pointer text-gray-5">
                                                <svg
                                                    className="fill-current"
                                                    width="15"
                                                    height="16"
                                                    viewBox="0 0 15 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M14.6604 5.90785L9.97461 5.18335L7.85178 0.732874C7.69645 0.422375 7.28224 0.422375 7.12691 0.732874L5.00407 5.20923L0.344191 5.90785C0.0076444 5.9596 -0.121797 6.39947 0.137085 6.63235L3.52844 10.1255L2.72591 15.0158C2.67413 15.3522 3.01068 15.6368 3.32134 15.4298L7.54112 13.1269L11.735 15.4298C12.0198 15.5851 12.3822 15.3263 12.3046 15.0158L11.502 10.1255L14.8934 6.63235C15.1005 6.39947 14.9969 5.9596 14.6604 5.90785Z"
                                                        fill=""
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
                                        <div className="mb-5">
                                            <label htmlFor="comments" className="block mb-2.5">
                                                {/* Comments */}
                                                Commentaires
                                            </label>

                                            <textarea
                                                name="comments"
                                                id="comments"
                                                rows={5}
                                                placeholder="Your comments"
                                                className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                                            ></textarea>

                                            <span className="flex items-center justify-between mt-2.5">
                                                <span className="text-custom-sm text-dark-4">
                                                    Maximum
                                                </span>
                                                <span className="text-custom-sm text-dark-4">
                                                    0/250
                                                </span>
                                            </span>
                                        </div>

                                        <div className="flex flex-col lg:flex-row gap-5 sm:gap-7.5 mb-5.5">
                                            <div>
                                                <label htmlFor="name" className="block mb-2.5">
                                                    {/* Name */}
                                                    Nom Complet
                                                </label>

                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your name"
                                                    className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block mb-2.5">
                                                    Email
                                                </label>

                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Your email"
                                                    className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-2.5 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="inline-flex font-medium text-white bg-yellow py-3 px-7 rounded-md ease-out duration-200 hover:bg-dark"
                                        >
                                            {/* Submit Reviews */}
                                            Soumettre l&apos;avis
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="mt-7.5 shadow-1 bg-white p-6 xl:p-10">
                        <h3 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
                            Confiance & Loyauté
                        </h3>
                        <ul className="space-y-2">
                            <li className="grid grid-cols-[12px_25vh_auto] items-center gap-1">
                                <FaCircle size={6} className="text-primary" />
                                <span className="">Vérification d'identité</span>
                                <IoIosCheckmarkCircleOutline className="text-primary w-5 h-5 ml-1" />
                            </li>

                            <li className="grid grid-cols-[12px_25vh_auto] items-center gap-1">
                                <FaCircle size={6} className="text-primary" />
                                <span>Vérification entreprise</span>
                                <IoIosCheckmarkCircleOutline className="text-primary w-5 h-5 ml-1" />
                            </li>

                            <li className="grid grid-cols-[12px_25vh_auto] items-center gap-1">
                                <FaCircle size={6} className="text-primary" />
                                <span>Assurance pro</span>
                                <IoIosCheckmarkCircleOutline className="text-primary w-5 h-5 ml-1" />
                            </li>
                        </ul>

                    </div>

                    <div className="mt-7.5 shadow-1 bg-white p-6 xl:p-10">
                        <h3 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
                            Compétences
                        </h3>
                        <ul className="space-y-2">
                            <li className="grid grid-cols-[12px_auto_auto] items-center gap-1">
                                <FaStarOfLife size={6} className="text-primary" />
                                <span className="">Langues: <span className="text-dark">Fancçais, Anglais</span> </span> 
                            </li>

                            <li className="grid grid-cols-[12px_auto_auto] items-center gap-1">
                                <FaStarOfLife size={6} className="text-primary" />
                                <span className="">Domaine de spécialité: <span className="text-dark">Electronique , Accéssoires, Vếtements</span></span> 
                            </li>

                            <li className="grid grid-cols-[12px_auto_auto] items-center gap-1">
                                <FaStarOfLife size={6} className="text-primary" />
                                <span>Services supplémentaires: <span className="text-dark"> Business Branding, Création de contenus</span>  </span> 
                            </li>
                        </ul>

                    </div>


                    {/* <!-- tab content three end --> */}
                    {/* <!--== tab content end ==--> */}
                </div>


            </section>

        </>
    );

    // Reusable Stat component
    // function Stat({ label, value, color }: { label: string; value: string, color?: string }) {
    //     return (
    //         <div className={`p-4 rounded-xl border shadow-5 ${color ? `bg-${color}` : 'bg-gray/5'}`}>
    //             <p className="text-sm text-black/60">{label}</p>
    //             <p className="text-lg font-bold mt-1 text-black">{value}</p>
    //         </div>
    //     );
    // }

    
}

const Stat = ({ label, value, color = "green" }) => {
    const bgColor = {
        yellow: "bg-yellow-light-5",
        blue: "bg-blue-light-5",
        green: "bg-green/10",
        red: "bg-red-light-5",
        teal: "bg-teal/10",
        purple: "bg-purple-light-5"
    }[color];

    return (
        <div className={`flex flex-col w-fit p-4 rounded-xl ${bgColor}`}>
            <p className="text-sm text-gray-600">{label}</p>
            <p className="text-sm font-semibold">{value}</p>
        </div>
    );
};



export default WholesalerDetails;