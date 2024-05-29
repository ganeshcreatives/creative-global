import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import ImageCard from "@/Components/comman/Card/ImageCard";
import InfoCard from "@/Components/comman/Card/InfoCard";
import SliderSection from "@/Components/comman/Card/SliderSection";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerOneApp,
  beyondSlider,
  chooseSellrApp,
  dealerSuccess,
  dominateMarket,
  sekelDealer,
} from "@/static/json/sellrApp";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SellrApp = () => {
  const router = useRouter();

  const renderCard = () => {
    return (
      <div>
        <div className="grid grid-cols-4 lg:grid-cols-3 gap-5">
          {dealerSuccess?.cardDataList?.map((item, index) => {
            return (
              <div
                className={`${
                  index === 1
                    ? "max-lg:order-3 col-span-4 lg:col-span-2"
                    : "max-lg:[&:nth-child(1)]:order-1 max-lg:[&:nth-child(2)]:order-2 max-lg:[&:nth-child(4)]:order-4 max-lg:[&:nth-child(5)]:order-5 col-span-2 lg:col-span-1"
                }`}
              >
                <Card
                  key={index}
                  {...item}
                  headingSty={
                    "mb-3 md:mb-4 lg:mb-8 tracking-tighter leading-[140%] text-[16px]] md:text-[22px] lg:text-[28px] text-black-33 font-medium"
                  }
                  cardSty={`${
                    index === 1 ? "lg:flex gap-10" : ""
                  } rounded-xl p-5 lg:pt-[52px] ${
                    index === 0 || index === 3 ? "bg-yellow-100" : ""
                  }  h-full bg-gray-100`}
                  cardDataSty={`${index === 1 ? "max-lg:mb-6 lg:w-1/2" : ""}`}
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
        {...bannerOneApp}
        containerStyle="container justify-between max-md:flex-wrap"
        sectionSty="max-lg:pt-8 pb-[50px] md:pb-[60px] lg:pb-[100px]"
        imgContainerSty="max-w-full"
        imgGridSty="max-md:w-full"
        renderElement={
          <div className="flex gap-5 lg:gap-8">
            <button
              className="max-w-[160px] lg:w-[188px] rounded-lg overflow-hidden"
              // onClick={() =>
              //   window.open(
              //     "",
              //     "_blank"
              //   )
              // }
            >
              <Image
                src={"/google-store.png"}
                height={57}
                width={188}
                alt="btn"
              />
            </button>
            <button
              className="max-w-[160px] lg:w-[188px] rounded-lg overflow-hidden"
              // onClick={() =>
              //   window.open(
              //     "",
              //     "_blank"
              //   )
              // }
            >
              <Image src={"/app-store.png"} height={57} width={188} alt="btn" />
            </button>
          </div>
        }
        headinWidth="md:max-w-[400px] lg:max-w-[443px] lg:mb-12 max-md:mb-8"
        descriptionSty="lg:mr-[67px] leading-[25px] mt-2 mb-6 lg:my-8 text-yellow-900"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/product", label: "Product" },
          { link: "/product/SellrApp", label: "SellrApp" },
        ]}
      />
      <CardSection
        {...dominateMarket?.sectionData}
        headingSty="flex items-end mx-4 gap-[60px]"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[100px] bg-blue-200"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-4 max-md:gap-3">
            {dominateMarket?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-2 md:col-span-1" key={index}>
                  <Card
                    cardDataSty="mb-0"
                    descriptionSty="text-base font-normal leading-[150%] text-black-33 mb-0"
                    titleIconSty="h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-4 lg:mb-6"
                    {...item}
                    headingSty="text-xl font-medium leading-[30px] mb-5 lg:mb-8 text-black-900"
                    cardSty="bg-blue-200 p-4 md:px-5 md:py-8 rounded-2xl border-[1px] border-white h-full"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <CardSection
        {...dealerSuccess?.sectionData}
        renderElement={renderCard}
        descriptionSty="w-full text-base font-normal leading-[22px] text-black-33"
      />

      <section className="bg-blue-900 py-12 lg:py-20">
        <div className="container">
          <div className="mb-[52px]">
            <h3 className="text-[42px] font-medium mb-5 leading-[52px] tracking-tighter text-white">
              {chooseSellrApp?.sectionData?.title}
            </h3>
            <p className="text-base font-normal leading-[22px] max-w-[722px] text-white">
              {chooseSellrApp?.sectionData?.description}
            </p>
          </div>
          <div className="flex items-center">
            <div className="max-md:mt-auto w-[35%] sm:w-1/3">
              <ul className="pr-2 sm:pr-5 lg:pr-16 xl:pr-24">
                {chooseSellrApp?.list?.leftContent?.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center justify-end gap-2 md:gap-4 ${
                      index === chooseSellrApp?.list?.leftContent.length - 1
                        ? ""
                        : "mb-5 md:mb-9"
                    }  text-base md:text-xl font-medium text-white relative max-lg:after:hidden after:content[''] after:absolute lg:after:-right-[76px] xl:after:-right-[130px] lg:after:w-[75px] xl:after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100`}
                  >
                    {item?.label}
                    <Image
                      className="w-[32px] lg:w-16"
                      src={item?.src}
                      height={64}
                      width={64}
                      alt="img"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-[26%] sm:w-1/3">
              <div className="max-w-[359px] mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={chooseSellrApp?.contanierImage}
                  height={500}
                  width={500}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-[39%] sm:w-1/3 max-md:mb-auto ">
              <ul className="pl-2 sm:pl-5 lg:pl-16 xl:pl-24">
                {chooseSellrApp?.list?.rightContent?.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 md:gap-4 ${
                      index === chooseSellrApp?.list?.rightContent?.length - 1
                        ? ""
                        : "mb-5 md:mb-9"
                    } text-base md:text-xl font-medium text-white relative max-lg:after:hidden after:content[''] after:absolute lg:after:-left-[76px] xl:after:-left-[130px] lg:after:w-[75px] xl:after:w-[115px] after:z-10 after:border-b-[1px] after:border-blue-100`}
                  >
                    <Image
                      className="w-[32px] lg:w-16"
                      src={item?.src}
                      height={64}
                      width={64}
                      alt="img"
                    />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <InfoCard
        {...sekelDealer?.infoCardData}
        sectionStyle="py-[50px] md:py-[65px] lg:py-[100px]"
        containtWidth="max-lg:mb-6 lg:max-w-[490px]"
        titleSty="text-[32px] lg:text-[42px] font-medium leading-[140%] tracking-tighter text-black-33 mb-5 lg:mb-8"
        descriptionSty="mb-8 text-base font-normal leading-[25px]"
        imageContainerSty="max-h-[535px] max-w-[673px] w-full mx-auto"
        imageContentSty="col-span-11 lg:col-span-7 h-full flex items-center"
        textContainerSty="col-span-11 lg:col-span-4 h-full "
        renderElement={
          <>
            <ul className="list-disc pl-6 mb-4 lg:mb-8">
              {sekelDealer?.listData?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-xl font-medium text-black-33 leading-[25px] mb-6"
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
            <Button
              filled
              data={"Book a Demo"}
              action={() => router.push("/company/contact-us")}
            />
          </>
        }
      />
      <SliderSection
        {...beyondSlider?.sectionData}
        textContentSty="col-span-10 lg:col-span-3"
        discriptionSty="w-full"
        cardContentSty="col-span-10 lg:col-span-7 lg:pl-8"
        renderElement={beyondSlider?.listData?.map((item, index) => {
          return (
            <ImageCard
              {...item}
              key={index}
              imgContainerSty="w-[252px] min-w-[252px]"
              containerSty=" h-auto w-[252px] min-w-[252px]"
            />
          );
        })}
      />
      <HyperlocalStrategyForm />
    </div>
  );
};

export default SellrApp;
