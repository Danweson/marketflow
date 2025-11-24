import React from "react";
import Image from "next/image";
import Breadcrumb from "../Common/Breadcrumb";
import LatestProducts from "../Blog/LatestProducts";
import shopData from "../Shop/shopData";

const wholesaler = {
  companyName: "Eshter MAFFUO",
  contactPerson: "",
  description:
    "We supply electronics, accessories, smartphones and computer hardware to African wholesalers with fast shipping and dedicated support.",
  country: "China",
  city: "Shenzhen",
  address: "123 Tech Street",
  phone: "+86 123 4567 890",
  whatsapp: "+86 987 6543 210",
  email: "contact@shenzhentech.com",
  logo: "/images/agents/esther-maffouo.jpeg",
  yearsInBusiness: 10,
  certifications: "ISO9001, CE, RoHS",
  productionCapacity: "5000 units/month",
  paymentTerms: "FOB",
  shippingMethods: "Air Freight, Sea Freight, Courier",
  shippingCountries: [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "FR", name: "France" },
  ],
  leadTime: "7-14 days",
  rating: 4.8,
};

const WholesalerDetailsSmall = () => {
  return (
    <>
      {/* <Breadcrumb title={"Wholesaler Details"} pages={["Wholesaler"]} /> */}

      <section className="overflow-hidden bg-gray-2">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col lg:flex-row gap-5 py-2 px-2">

            {/* SECTION 1 — Header / Profil rapide */}
            <div className="lg:max-w-[750px] w-full space-y-6">
              <div className="flex items-center gap-6 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center">
                  {wholesaler.logo && (
                    <Image
                      src={wholesaler.logo}
                      width={80}
                      height={80}
                      alt={wholesaler.companyName}
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-semibold text-dark">
                    {wholesaler.companyName}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {wholesaler.city}, {wholesaler.country}
                  </p>
                  <span className="text-xs font-medium text-gray-600">
                    {/* {item.prooductCount} produits créés */}
                    Pays d'expédition: <span className="font-normal">
                        {wholesaler.shippingCountries?.map(c => c.name).join(", ")}
                    </span>
                </span>
                  {/* <p className="text-gray-600 text-sm mt-1">
                    Contact: {wholesaler.contactPerson}
                  </p> */}
                  {wholesaler.rating && <p className="mt-1 text-yellow-500">⭐ {wholesaler.rating}</p>}
                </div>
              </div>

              {/* SECTION 2 — Informations détaillées */}
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
                <h3 className="text-lg font-medium text-dark">Supplier Information</h3>
                <p className="text-gray-700">{wholesaler.description}</p>

                <ul className="list-disc pl-6 text-gray-600 space-y-1">
                  {wholesaler.yearsInBusiness && <li>Years in Business: {wholesaler.yearsInBusiness}</li>}
                  {wholesaler.certifications && <li>Certifications: {wholesaler.certifications}</li>}
                  {wholesaler.productionCapacity && <li>Production Capacity: {wholesaler.productionCapacity}</li>}
                  {wholesaler.paymentTerms && <li>Payment Terms: {wholesaler.paymentTerms}</li>}
                  {wholesaler.shippingMethods && <li>Shipping Methods: {wholesaler.shippingMethods}</li>}
                  {wholesaler.leadTime && <li>Lead Time: {wholesaler.leadTime}</li>}
                  {wholesaler.shippingCountries && (
                    <li>
                      Shipping Countries:{" "}
                      {wholesaler.shippingCountries.map((c) => c.name).join(", ")}
                    </li>
                  )}
                  {wholesaler.phone && <li>Phone: {wholesaler.phone}</li>}
                  {wholesaler.whatsapp && <li>WhatsApp: {wholesaler.whatsapp}</li>}
                  {wholesaler.email && <li>Email: {wholesaler.email}</li>}
                  {wholesaler.address && <li>Address: {wholesaler.address}</li>}
                </ul>
              </div>
            </div>

            {/* SECTION 3 — Sidebar / Actions */}
            <div className="lg:max-w-[370px] w-full space-y-6">
              <div className="bg-white shadow-1 rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-medium text-dark">Contacter l'Agent</h3>
                <button className="w-full py-3 bg-yellow text-white rounded-xl hover:bg-dark">
                  {/* Send Message */}
                  Envoyer un Message
                </button>
                {/* <button className="w-full py-3 border border-y text-yellow rounded-xl hover:bg-yellow hover:text-white transition">
                  Request Quote
                </button> */}
              </div>

              <div className="bg-white shadow-1 rounded-xl p-4">
                <h3 className="text-lg font-medium text-dark mb-4">Ses Produits</h3>
                {/* <p className="text-gray-600 text-sm">Liste des produits</p> */}
                <LatestProducts products={shopData} />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default WholesalerDetailsSmall;
