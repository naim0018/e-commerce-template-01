import Banner from "@/components/Home/Banner/Banner";
import DealsandExclusive from "@/components/Home/DealsandExclusive/DealsandExclusive";
import Service from "@/components/Home/Service/Service";
import SuperSale from "@/components/Home/SuperSale/SuperSale";
import HotDealsBanner from "@/components/Home/HotDeals/HotDealsBanner";
import ProductsTab from "@/components/Home/ProductsTab/ProductsTab";

export default function Home() {
  return (
    <main className=" space-y-24 mb-24">
      <div className="container mx-auto lg:flex justify-center  gap-5">
        <Banner />
        <div className="space-y-2  md:space-y-0 md:flex lg:flex-col items-center justify-evenly gap-5 mt-5 lg:mt-0">
        <HotDealsBanner/>
        <HotDealsBanner/>
        </div>
      </div>
      <Service />
      <DealsandExclusive/>
      <SuperSale/>
      <ProductsTab/>
    </main>
  );
}
