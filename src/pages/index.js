import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import HomeComponent from "@/Components/Home";
import { bannerData } from "@/static/json/home";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-blue-900 pt-8 md:pt-[56px]">
      <Banner
        {...bannerData}
        subTitleSty="text-base font-medium leading-[140%] text-yellow-900"
        descriptionSty="text-base font-medium leading-[140%] text-yellow-900"
        containerStyle="flex-col mx:w-full items-center"
        headinWidth="max-w-[700px] mx-auto mb-6 md:mb-12"
        aboutHead="container"
        sectionSty="md:text-center"
        renderElement={
          <div className="pt-4">
            <Button
              data="Request Demo"
              clsStyle="py-2 px-8 border-yellow-900"
              action={() => router.push("/company/contact-us")}
              filled
            ></Button>
          </div>
        }
      />
      <Breadcrumb breadcrumbList={[{ link: "/", label: "Home" }]} />
      <HomeComponent />
    </div>
  );
}
