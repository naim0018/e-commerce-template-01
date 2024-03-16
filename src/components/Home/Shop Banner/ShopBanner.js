import React from "react";
import BookShopBanner from "./BookShopBanner/BookShopBanner";

import ElectronicsBanner from "./ElectronicsBanner/ElectronicsBanner";
import MacrameCraftsBanner from "./MacrameCraftsBanner/MacrameCraftsBanner";
import StationaryBanner from "./StationaryBanner/StationaryBanner";
import GiftsBanner from "./GiftsBanner/GiftsBanner";
import OrnamentsBanner from "./OrnamentsBanner/OrnamentsBanner";


const ShopBanner = () => {
  return (
    <div className="space-y-10">
      <BookShopBanner />
      <MacrameCraftsBanner />
      <ElectronicsBanner/>
      <StationaryBanner/>
      <GiftsBanner/>
      <OrnamentsBanner/>
    </div>
  );
};

export default ShopBanner;
