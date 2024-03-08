import Banner from "@/components/Home/Banner/Banner";
import Service from "@/components/Home/Service/Service";
import HotDeals from "@/components/shared/HotDeals/HotDeals";
import HotDealsBanner from "@/components/shared/HotDeals/HotDealsBanner";

export default function Home() {
  return (
    <main className="">
      <div className="container mx-auto lg:flex justify-center  gap-5">
        <Banner />
        <div className="space-y-2 sm:space-y-0 sm:flex lg:flex-col items-center justify-evenly gap-5 mt-5 lg:mt-0">
        <HotDealsBanner/>
        <HotDealsBanner/>
        </div>
      </div>
      <Service />
      
    </main>
  );
}
