import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import DownArrow from "@/assets/DownArrow";
import { oneUltimatePlatform } from "@/static/json/dashboard";
import {
  accelerateAgency,
  demandGeneration,
  expendYourReach,
  questionAnswers,
  retailSuccess,
} from "@/static/json/partnerProgramme";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PartnerProgramme = () => {
  const router = useRouter();
  return (
    <div>
      <Banner
        {...expendYourReach}
        sectionSty="py-[50px] md:py-[60px] lg:pt-20 lg:pb-[100px]"
        containerStyle="container flex-wrap grid grid-cols-2 gap-8"
        subTitleSty="text-[28px] font-medium text-white mb-5 lg:mb-8"
        descriptionSty="mb-0"
        imgContainerSty="md:max-h-[468px] overflow-hidden rounded-3xl w-full"
        headinWidth="col-span-2 md:col-span-1"
        imgGridSty="col-span-2 md:col-span-1"
        aboutHead="md:max-w-[506px]"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/partner-programme", label: "Partnership Programme" },
        ]}
      />
      <CardSection
        {...retailSuccess?.sectionData}
        headingSty="flex items-end justify-center mx-4 gap-[60px] text-center"
        sectionStyle="py-[50px] md:py-[60px] lg:py-[100px] bg-white"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[14px] leading-[140%] tracking-tighter text-black-33"
        descriptionSty="max-w-[456px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-3 gap-8">
            {retailSuccess?.cardDataList?.map((item, index) => {
              return (
                <div className="col-span-3 md:col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[24px] lg:text-[28px] font-medium leading-[140%] mb-4 xl:mb-8 text-black-900"
                    descriptionSty="text-base font-normal leading-[150%] text-black-33"
                    cardSty="bg-gray-100 p-6 xl:px-10 xl:py-8 rounded-2xl border-[1px] border-gray-400 h-full"
                    iconSty="min-w-[55px]"
                    cardDataSty="mb-0"
                    titleIconSty="h-[95px] w-[95px] rounded-full bg-yellow-100 flex items-center justify-center mb-4 xl:mb-8 "
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <section className="max-sm:px-2 pt-[50px] md:py-[75px] lg:pt-[80px] lg:pb-[100px] bg-blue-200">
        <div className="container">
          <h1 className="text-[32px] md:text-[42px] font-medium leading-[140%] mb-4 lg:pb-[20px] lg:max-w-[521px]">
            {accelerateAgency?.sectionData?.title}
          </h1>
          <div className="lg:gap-[60px] grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6 max-lg:mb-10">
              <p className="text-[20px] lg:text-[28px] font-normal leading-[140%] tracking-tight mb-6 lg:mb-20">
                {accelerateAgency?.sectionData?.description}
              </p>
              <div className="lg:max-w-[521px] w-full">
                <Image
                  className="object-cover w-full"
                  {...accelerateAgency?.sectionData?.image}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex justify-between flex-wrap w-full ">
                {accelerateAgency?.growthCardList?.map((item, index) => {
                  return (
                    <Card
                      {...item}
                      headingSty="text-[24px] lg:text-[28px] font-medium leading-[30px] mb-4  "
                      cardSty="mb-8 w-full md:w-[calc(50%_-_10px)] "
                      cardDataSty=""
                      titleIconSty="h-[58px] w-[58px] rounded-full bg-yellow-100 flex items-center justify-center mb-5 "
                      iconNumberSty="text-[28px] font-medium text-black-33"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[50px] md:py-[65px] lg:py-[100px]">
        <div className="container">
          <h3 className="text-[36px] lg:text-[42px] font-medium mb-8 lg:mb-[52px] text-center leading-[140%] tracking-tighter text-black-33">
            {demandGeneration?.sectionData?.title}
          </h3>
          {demandGeneration?.listData?.map((item, index) => {
            return (
              <InfoCard
                key={index}
                {...item}
                sectionStyle="p-4 lg:py-8 lg:px-5 rounded-[16px] bg-blue-200 my-8"
                containtWidth="max-w-[462px] mx-auto"
                containerSty=""
                titleSty="text-[24px] md:text-[32px] lg:text-[42px] font-medium leading-[140%] tracking-tighter text-black-33 mb-[26px]"
                descriptionSty="mb-[26px] text-base font-normal leading-[140%]"
                gridContainerSty="grid grid-cols-12 gap-6"
                renderElement={
                  <>
                    <Button
                      data={
                        <div className="flex justify-between items-center">
                          {item.buttonText}
                          <div className="-rotate-90">
                            <DownArrow ml="ml-0 mt-3 w-3" />
                          </div>
                        </div>
                      }
                      action={() => {
                        if (item.buttonAction) {
                          router.push(item.buttonAction);
                        }
                      }}
                      clsStyle="border-none text-blue-900"
                    />
                  </>
                }
              />
            );
          })}
        </div>
      </section>
      <section className="bg-blue-900 py-[50px] md:py-[65px] lg:py-20">
        <div className="container">
          <div className="mb-10 lg:mb-[52px]">
            <h3 className="text-[32px] lg:text-[42px] font-medium mb-3 leading-[140%] tracking-tighter text-white">
              Our Commitment to DPDP and GDPR Act Standards
            </h3>
            <p className="text-base font-normal leading-[140%] lg:max-w-[722px] text-yellow-900">
              Sekel Tech’s robust compliance measures ensure that your clients'
              data is protected, giving you peace of mind as you grow your
              agency
            </p>
          </div>
          <div className="lg:flex items-center">
            <div className="w-full lg:w-[30%] h-full lg:pr-[67px] pb-[33px] lg:border-b-[1px] lg:border-r-[1px] border-white relative max-lg:after:hidden after:content-[url('/standard-line-icon.png')] after:absolute after:-top-[12px] after:h-24px after:right-0 ">
              <ul className="">
                <li className="ml-auto lg:max-w-[268px] text-start lg:text-end">
                  <h3 className="text-[32px] lg:text-[42px] font-medium leading-[140%] mb-3.5 text-white">
                    DPDP Act
                  </h3>
                  <p className="mb-[14px] font-medium text-white text-[20px] lg:text-[28px]">
                    Committed to User Privacy
                  </p>
                  <p className="text-sm font-light text-white lg:text-end">
                    From initial data collection to storage and sharing, our
                    platform implements industry-leading security measures,
                    ensuring data protection at every step.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[40%] h-full px-3">
              <div className="max-w-[438px] w-full mx-auto">
                <Image
                  className="h-full w-full object-cover"
                  src={"/standards.png"}
                  height={562}
                  width={591}
                  alt="img"
                />
              </div>
            </div>
            <div
              className={`w-full lg:w-[30%] h-full lg:pl-8 lg:pb-[33px] lg:border-l-[1px] lg:border-b-[1px] border-white relative max-lg:after:hidden after:content-[url('/standard-line-icon.png')] after:absolute after:-top-[12px] after:h-[24px] after:left-0 after:rotate-180`}
            >
              <ul className="">
                <li className="lg:max-w-[344px]">
                  <h3 className="text-[32px] lg:text-[42px] font-medium leading-[140%] mb-3.5 text-white">
                    GDPR Compliance
                  </h3>
                  <p className="mb-[14px] text-[20px] lg:text-[28px] font-medium text-white">
                    GDPR Compliance and Assurance
                  </p>
                  <p className="text-sm font-light text-white">
                    Sekel Tech ensures GDPR compliance, transparent opt-out
                    options, robust security measures, and trusted third-party
                    processors for your data privacy confidence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px] md:py-[60px] lg:py-[100px]">
        <div className="container">
          <h3 className="text-[32px] lg:text-[42px] font-medium mb-10 lg:mb-20 leading-[140%] tracking-tighter text-black-33">
            {questionAnswers?.title}
          </h3>
          {questionAnswers?.list?.map((item, index) => (
            <div
              key={index}
              className={`py-6 lg:py-5 border-t-[1px] border-gray-400 flex flex-wrap justify-between items-center ${
                questionAnswers?.list?.length - 1 === index ? "" : "lg:mb-8"
              }`}
            >
              <div className="md:w-[35%] max-md:mb-6">
                <h4 className="text-base font-semibold">{item?.question}</h4>
              </div>
              <div className="md:w-[55%]">
                <p className="text-base font-normal">{item?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <HyperlocalStrategyForm />
    </div>
  );
};

export default PartnerProgramme;
