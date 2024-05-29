import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import DownArrow from "@/assets/DownArrow";
import {
  bannerUnifiedData,
  dataPlatformFeatures,
  systematicGathering,
  investmentFocus,
  sekelCDP,
} from "@/static/json/data";
import Image from "next/image";
import React, { useState, useCallback } from "react";

const Data = () => {
  const [knowMore, setKnowMore] = useState(false);

  const handleKnowMore = useCallback((index) => {
    if (knowMore[index]) {
      setKnowMore({ [index]: false });
    } else {
      setKnowMore({ [index]: true });
    }
  });

  const renderDiscoveryFeature = () => {
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {dataPlatformFeatures?.cardData?.map((item, index) => {
            return (
              <div className={`col-span-1`}>
                <Card key={index} {...item} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-8">
          {investmentFocus?.cardData?.map((item, index) => {
            return (
              <div
                className={`${
                  index === 0 || index === 3
                    ? "col-span-3 lg:col-span-2"
                    : "col-span-3 lg:col-span-1"
                }`}
              >
                <Card
                  key={index}
                  {...item}
                  image={{
                    ...item.image,
                    className: "h-full w-full object-cover object-center",
                  }}
                  cardSty={item.cardSty + " h-full bg-gray-100"}
                  headingSty={
                    "max-md:font-medium mb-3 lg:mb-8 tracking-tighter leading-[120%] text-[18px] md:text-[28px]"
                  }
                  cardCountNo={index < 9 ? "0" + (index + 1) : index + 1}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Banner
        {...bannerUnifiedData}
        sectionSty="max-lg:pt-8 pb-[50px] md:pb-[60px] lg:pb-[100px] pt-20"
        containerStyle="container justify-between grid grid-cols-11 lg:gap-[30px] xl:gap-[60px]"
        descriptionSty="mr-16 mb-8"
        imgContainerSty="max-w-[643px] max-h-[419px] w-full"
        renderElement={<GetStartForm buttonTitle="Get started" />}
        imgGridSty="col-span-11 lg:col-span-5 xl:col-span-6"
        headinWidth="lg:max-w-[500px] w-full mb-12 col-span-11 lg:col-span-6 xl:col-span-5"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "how it works" },
          { link: "/data", label: "Unified Data Platform" },
        ]}
      />
      <CardSection
        {...dataPlatformFeatures?.sectionData}
        headingSty="text-center mb-[36px] lg:mb-[52px]"
        renderElement={renderDiscoveryFeature}
      />
      <section className="bg-blue-900 py-[50px] md:py-[60px] lg:py-[100px]">
        <div className="container">
          <div className="mb-[52px]">
            <h3 className="text-[42px] font-medium mb-5 leading-[52px] tracking-tighter text-white">
              Core Functions of Sekel CDP
            </h3>
            <p className="text-base font-normal leading-[22px] max-w-[722px] text-white">
              Systematic gathering of information from various sources, ensuring
              accuracy and relevance for analysis and decision-making.
            </p>
          </div>
          <div className="flex items-center max-md:justify-between relative">
            <div className="w-[40%] max-md:-ml-auto md:w-[30%] h-full mt-8 lg:mt-auto lg:mb-5 relative z-[5]">
              <ul className="pr-6 xl:pr-20">
                <li className="flex items-center justify-end gap-4 mb-4 lg:mb-5 xl:mb-9 text-sm md:text-md lg:text-xl font-medium text-white relative after:content[''] after:absolute lg:after:-right-[40px] lg:after:w-[30px] xl:right:-left-[90px] xl:after:w-[80px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Marketing
                  <Image
                    className="w-8 md:w-10 lg:w-12 xl:w-16"
                    src={"/marketing-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
                <li className="flex items-center justify-end gap-4 mb-4 lg:mb-5 xl:mb-9 text-sm md:text-md lg:text-xl font-medium text-white relative after:content[''] after:absolute  lg:after:-right-[60px] lg:after:w-[50px] xl:after:-right-[130px] xl:after:w-[120px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Sales
                  <Image
                    className="w-8 md:w-10 lg:w-12 xl:w-16"
                    src={"/sales-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
                <li className="flex items-center justify-end gap-4 text-sm md:text-md lg:text-xl font-medium text-white relative after:content[''] max-md:after:hidden after:absolute lg:after:-right-[110px] lg:after:w-[100px] xl:after:-right-[190px] xl:after:w-[180px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  Service
                  <Image
                    className="w-8 md:w-10 lg:w-12 xl:w-16"
                    src={"/service-li.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                </li>
              </ul>
            </div>
            <div className="max-md:absolute left-0 right-0 mx-auto w-[40%] md:w-[40%] h-full">
              <div className="max-w-[591px] w-full mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={"/core-function.svg"}
                  height={562}
                  width={591}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-[40%] max-md:-mr-auto md:w-[30%] h-full mb-8 lg:mb-auto lg:mt-5 relative z-[5]">
              <ul className="pl-6 xl:pl-20">
                <li className="flex items-center gap-4 mb-4 lg:mb-5 xl:mb-9 text-sm md:text-md lg:text-xl font-medium text-white relative after:content[''] max-lg:after:hidden after:absolute lg:after:-left-[110px] lg:after:w-[100px] xl:after:-left-[190px] xl:after:w-[180px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className="w-8 md:w-10 lg:w-12 xl:w-16"
                    src={"/retargeting-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Retargeting Tools
                </li>
                <li className="flex items-center gap-4 mb-4 lg:mb-5 xl:mb-9 text-sm md:text-md lg:text-xl font-medium text-white relative after:content[''] max-lg:after:hidden after:absolute lg:after:-left-[60px] lg:after:w-[50px] xl:after:-left-[130px] xl:after:w-[120px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className="w-8 md:w-10 lg:w-12 xl:w-16"
                    src={"/automation-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Automation Tools
                </li>
                <li className="flex items-center gap-4 text-sm md:text-md lg:text-xl font-medium text-white relative after:content[''] max-lg:after:hidden after:absolute lg:after:-left-[40px] lg:after:w-[30px] xl:after:-left-[90px] xl:after:w-[80px] after:z-10 after:border-b-[1px] after:border-blue-100">
                  <Image
                    className="w-8 md:w-10 lg:w-12 xl:w-16"
                    src={"/analytics-tools.svg"}
                    height={64}
                    width={64}
                    alt="img"
                  />
                  Analytics Tools
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CardSection
        {...systematicGathering?.sectionData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-200 asdads"
        headingSty=""
        titleSty="text-[20px] md:text-[28px] font-medium mb-8 lg:mb-20 leading-[140%] tracking-tighter text-black-33 max-w-[900px]"
        renderElement={() => (
          <div className="grid grid-cols-2 gap-4 lg:gap-0 md:grid-cols-3 lg:grid-cols-4">
            {systematicGathering?.cardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    titleIconSty="h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-4"
                    headingSty="text-[18px] lg:text-[28px] font-medium leading-[140%] mb-4 text-black-900"
                    cardSty="bg-blue-200 p-4 lg:p-6 rounded-2xl border border-white h-full"
                    descriptionSty="text-base font-normal leading-[22px] text-black-33"
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <CardSection
        {...investmentFocus?.sectionData}
        headingSty="max-w-[803px]"
        descriptionSty=""
        renderElement={renderCard}
      />

      <InfoCard
        {...sekelCDP}
        containtWidth="max-lg:mb-6 lg:max-w-[479px]"
        sectionStyle="bg-blue-900 pt-[50px] md:pt-[65px] lg:pt-[100px]"
        titleSty="text-[28px] font-medium leading-[39px] tracking-tight text-white mb-8"
        descriptionSty="text-yellow-900 text-base font-normal leading-[25px]"
        imageContainerSty="lg:max-h-[448px] lg:max-w-[692px] md:mx-auto ml-auto -mr-5"
      />

      <HyperlocalStrategyForm/>
    </div>
  );
};

export default Data;
