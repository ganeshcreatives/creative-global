import HeadSection from "@/Components/HeadSection";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerHowItworks,
  hyperlocalDiscovery,
  seamlessIntegrationHowItworks,
} from "@/static/json/howItWorks";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

export default function HowItWorks() {
  const router = useRouter();

  const itemListSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      url: "https://sekel.tech/how-it-works",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: hyperlocalDiscovery?.length,
      name: "360º Consumer Journey from Discovery to Delivery",
      description:
        "Explore Sekel Tech's transformative journey, from forming connections to supercharging data and unleashing demand. Discover the power of Retail AI",
      itemListElement: hyperlocalDiscovery?.map((item, index) => {
        return {
          "@type": "ListItem",
          position: index + 1,
          name: item?.title,
          description:
            item?.description +
            " " +
            item?.list[0].title +
            " " +
            item?.list[1].title,
        };
      }),
    };
  }, []);

  return (
    <>
      <HeadSection
        {...bannerHowItworks}
        renderSchemaContent={() => {
          return (
            <>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(itemListSchema),
                }}
                key="list-item"
              />
            </>
          );
        }}
      />
      <Banner
        {...bannerHowItworks}
        sectionSty="max-lg:py-10 max-sm:py-8"
        containerStyle="max-lg:flex-wrap container justify-between relative"
        renderElement={
          <>
            <GetStartForm buttonTitle="Get started" />
            <div className="absolute bottom-0 max-lg:hidden">
              <Image
                className="w-full object-cover object-center"
                src={"/how-it-work-banner.png"}
                height={792}
                width={1000}
                alt="img"
              />
            </div>
          </>
        }
        imgGridSty="max-lg:max-w-[450px] max-lg:mx-auto max-lg:w-full max-lg:order-1 max-lg:mb-10"
        headinWidth="max-lg:order-2 w-full lg:max-w-[491px] mb-8 lg:mb-[400px]"
        descriptionSty="text-base font-normal leading-[140%] mb-8 text-white"
        imgContainerSty="lg:max-w-[564px] lg:h-[631px] w-full lg:rounded-[20px] overflow-hidden lg:mt-[161px] max-lg:hidden"
        imgMobileContainerSty="lg:max-w-[564px] lg:h-[631px] w-full lg:rounded-[20px] overflow-hidden lg:mt-[161px] lg:hidden"
        titleSty="text-[36px] leading-[140%] md:text-[42px] font-medium md:leading-[140%] mb-4 tracking-tight"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "how it works" },
        ]}
      />
      <div className="container">
        {hyperlocalDiscovery?.map((item, index) => {
          return (
            <InfoCard
              key={index}
              {...item}
              sectionStyle="p-6 md:py-8 md:px-5 rounded-[16px] bg-gray-100 my-8"
              containtWidth="max-w-[536px] mx-auto"
              containerSty=""
              titleSty="text-[36px] md:text-[42px] font-medium leading-[140%] tracking-tighter text-black-33 mb-[26px]"
              descriptionSty="mb-4 text-base font-normal leading-[140%]"
              gridContainerSty="grid grid-cols-12 gap-6"
              renderElement={
                <>
                  <ul className="list-disc pl-6 mb-[26px]">
                    {item?.list?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-base font-normal text-black-33 leading-[140%]"
                        >
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                  <Button
                    filled
                    data={item?.buttonText}
                    action={() => {
                      if (item.buttonAction) {
                        router.push(item.buttonAction);
                      }
                    }}
                    clsStyle="py-3 px-8 border-yellow-900"
                  />
                </>
              }
            />
          );
        })}
      </div>
      <InfoCard
        {...seamlessIntegrationHowItworks}
        sectionStyle="max-sm:px-2.5 py-[50px] md:py-[75px] lg:py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth="max-md:mb-10"
        titleSty="text-white text-[34px] md:text-[40px] lg:text-[50px] xl:text-[54px] font-medium mb-4 lg:mb-8 leading-[140%] tracking-tighter"
        descriptionSty="text-white lg:max-w-[542px] mb-8 mr-auto text-base font-normal leading-[140%]"
        imageContainerSty="w-full max-w-[497px] mx-auto"
        textContainerSty="col-span-11 md:col-span-5 lg:col-span-6 flex items-center"
        imageContentSty="col-span-11 md:col-span-6 lg:col-span-5 flex items-center"
        renderElement={
          <>
            <Button
              filled
              data="View all integrations"
              clsStyle="py-3 px-8 border-yellow-900"
              action={() => router.push("/product/integrations")}
            />
          </>
        }
      />
      <HyperlocalStrategyForm />
    </>
  );
}
