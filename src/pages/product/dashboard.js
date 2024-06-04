import HeadSection from "@/Components/HeadSection";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerData,
  importantFeatures,
  keyFeatureSchema,
  keyProductSectionData,
  manageInfoCard,
  oneUltimatePlatform,
  seamlessIntegration,
} from "@/static/json/dashboard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("hyperLocations");
  const getItemListSchemaData = () => {
    if (keyFeatureSchema.length !== 0) {
      const itemListData = keyFeatureSchema.map((item, index) => {
        return {
          "@type": "ListItem",
          name: item?.name,
          description: item?.description,
        };
      });
      const itemSchemaData = `
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "url": "https://sekel.tech/product/dashboard",
          "itemListOrder": "http://schema.org/ItemListOrderAscending",
          "numberOfItems": ${keyFeatureSchema.length},
          "name": "Key product features",
          "description": "Explore limitless possibilities with our unified dashboard – Discovery, Data & Demand. In 360 (Degree Sign) approach.",
          "itemListElement": ${JSON.stringify(itemListData)}
          }
          `;
      return itemSchemaData;
    }
    return null;
  };

  function addKeyFeatureSchema() {
    return {
      __html: getItemListSchemaData(),
    };
  }
  return (
    <>
      <HeadSection
        title={bannerData?.title}
        renderSchemaContent={() => {
          return (
            <>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={addKeyFeatureSchema()}
                key="key-feature"
              />
            </>
          );
        }}
      />
      <Banner
        {...bannerData}
        containerStyle="container flex-col mx:w-full items-center text-center pt-[56px]"
        descriptionSty
        sectionSty="pt-[50px] md:pt-[60px] lg:pt-[88px]"
        imgContainerSty="max-w-[1080px] mx-auto"
        imgGridSty="max-xl:px-6 w-full"
        headinWidth="max-w-[936px] mx-auto text-center mb-12"
        renderElement={
          <div>
            <div className="flex justify-center gap-4">
              <Button
                filled
                data="Request Demo"
                action={() => router.push("/company/contact-us")}
              />
              <Button
                data="Know More"
                clsStyle="py-2 px-8 text-white border-yellow-900"
                action={() => router.push("/company/contact-us")}
              />
            </div>
          </div>
        }
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Product" },
          { link: "/product/dashboard", label: "Dashboard" },
        ]}
      />
      <CardSection
        {...keyProductSectionData}
        headingSty="flex items-end gap-[60px] mb-[52px] max-w-[600px]"
        descriptionSty="text-base font-normal leading-[22px] text-black-33 "
        renderElement={() => (
          <InfoCard
            {...manageInfoCard?.sectionData[activeTab]}
            renderFilterElement={
              <div className="flex justify-between gap-2 mb-7 xl:-mx-6 overflow-x-auto">
                {manageInfoCard?.renderFilterData?.map((item, index) => (
                  <div className="mb-2">
                    <Button
                      key={index}
                      data={item?.label}
                      filled={item?.value === activeTab ? true : false}
                      action={() => {
                        setActiveTab(item.value);
                      }}
                      clsStyle={`py-2 px-5 text-sm whitespace-nowrap border-yellow-900 ${
                        item?.value === activeTab
                          ? ""
                          : "bg-[#FCFBB3] text-black-33 "
                      }`}
                    />
                  </div>
                ))}
              </div>
            }
            subheadTitleSty="mx-auto lg:mr-6 text-base font-normal leading-[25px] mb-8"
            descriptionSty="mx-auto lg:mr-6 text-base font-normal leading-[25px] "
            sectionStyle="p-4 md:p-8 lg:py-[52px] lg:px-[42px] rounded-[24px] bg-gray-100"
            containerSty="p-0"
            containtWidth="max-w-[490px] h-full flex flex-col justify-center"
          />
        )}
      />

      <InfoCard
        {...importantFeatures?.sectionData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-gray-100"
        containerSty="container"
        containtWidth="max-w-[490px] h-full flex flex-col justify-center"
        descriptionSty="max-lg:text-center mx-auto lg:mr-6 text-base font-normal leading-[25px] mb-8"
        imageContainerSty=" w-full max-w-[580px] mx-auto"
        textContainerSty="order-2 col-span-11 lg:col-span-5"
        imageContentSty="order-1 col-span-11 lg:col-span-6 max-lg:mb-6"
        titleSty="max-lg:text-center text-[32px] lg:text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-4"
        renderElement={
          <div className="">
            {importantFeatures?.list.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-x-[13px] mb-1.5"
              >
                <span className="h-[15px] w-[15px] rounded-full min-w-[15px] bg-[#FCFBB3]"></span>
                <Link
                  href={item?.link}
                  className="text-[16px] text-blue-600 w-[calc(100%_-_30px)]"
                >
                  {item?.label}
                </Link>
              </div>
            ))}
            <div className="mt-8 bg-yellow-100 text-blue-600 p-4">
              {importantFeatures?.footerText}
            </div>
          </div>
        }
      />
      <InfoCard
        {...seamlessIntegration}
        sectionStyle="py-10 px-1 lg:py-[52px] lg:px-[42px] rounded-[24px]"
        containtWidth="max-w-[490px]"
        textContainerSty="col-span-11 lg:col-span-5 max-lg:mb-8 flex items-center"
        imageContentSty="col-span-11 lg:col-span-6"
        descriptionSty="mb-3 md:mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[504px] w-full max-w-[624px] rounded-[20px] overflow-hidden mx-auto"
        renderElement={
          <Button
            data="View all integrations"
            clsStyle="py-3 px-8 border-yellow-900"
            filled
            action={() => {
              router.push("/product/integrations");
            }}
          />
        }
      />
      <InfoCard
        {...oneUltimatePlatform}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth=""
        titleSty="text-white text-[36px] lg:text-[54px] font-normal mb-3 lg:mb-8 leading-[140%] tracking-tighter"
        descriptionSty="text-white lg:max-w-[542px] mb-5 lg:mb-8 mr-auto text-base font-normal leading-[25px]"
        gridContainerSty="gap-0 grid grid-cols-11"
        imageContainerSty=" w-full max-w-[497px] ml-0 mx-auto"
        textContainerSty="col-span-11 lg:col-span-6 max-lg:mb-10"
        imageContentSty="col-span-11 lg:col-span-5 flex items-center"
        dashImageSty="col-span-11 lg:hidden pt-10 col-span-11 lg:hidden pt-10"
        renderElement={
          <>
            <Button
              filled
              data="Request Demo"
              clsStyle="py-3 px-8 border-yellow-900"
              action={() => router.push("/company/contact-us")}
            />
            <div className="max-lg:hidden">
              <div className="ml-auto w-full max-w-[369px] max-lg:-mr-[30px] rounded-2xl overflow-hidden">
                <Image
                  className="w-full h-full"
                  src={"/ultimate-platform2.png"}
                  height={500}
                  width={500}
                  alt="img"
                />
              </div>
            </div>
          </>
        }
      />
      <HyperlocalStrategyForm />
    </>
  );
}
