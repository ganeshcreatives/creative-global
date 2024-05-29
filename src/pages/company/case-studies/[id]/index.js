import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import StoreDetailBanner from "@/Components/comman/StoreDetailBanner";
import {
  caseStudyDetails,
  servicesIntegrated,
} from "@/static/json/caseStudyDetails";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CaseStudyDetails = () => {
  const router = useRouter();
  let studyDetails = caseStudyDetails[router.query.id];
  return (
    <>
      <StoreDetailBanner {...studyDetails?.banner} />
      <Breadcrumb
        sectionSty="py-2"
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/Company", label: "Company" },
          { link: "/case-studies", label: "Case Studies" },
          { link: `/${router.query.id}`, label: studyDetails?.brandName },
        ]}
      />

      <InfoCard
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-gray-100"
        containtWidth="lg:max-w-[481px]"
        titleSty="text-[32px] lg:text-[42px] font-medium leading-[140%] tracking-tighter text-black-33 mb-5"
        descriptionSty="mx-auto text-base font-normal leading-[25px] "
        textContainerSty="col-span-12 lg:col-span-6"
        imageContentSty="col-span-12 lg:col-span-6"
        gridContainerSty="grid grid-cols-12 md:gap-6"
        {...studyDetails?.about?.sectionData}
        renderSecondElement={
          <div>
            {studyDetails?.about?.goals?.title && (
              <div>
                <h6 className="text-[32px] lg:text-[42px] font-medium text-black-33 mb-5">
                  {studyDetails?.about?.goals?.title}
                </h6>
                {studyDetails?.about?.goals?.list?.map((item, index) => (
                  <div key={index} className="flex gap-5 items-center mb-5">
                    <div className="w-8 h-8 min-w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <p>{index + 1}</p>
                    </div>
                    <p className="flex-1 text-base text-black-33">
                      {item?.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {studyDetails?.about?.challenges?.title && (
              <div>
                <h6 className="text-[32px] lg:text-[42px] font-medium text-black-33 mb-5">
                  {studyDetails?.about?.challenges?.title}
                </h6>
                <div className="flex gap-8">
                  {studyDetails?.about?.challenges?.list?.map((item, index) => (
                    <div key={index} className="w-1/2 mb-5">
                      <div className="w-8 h-8 min-w-8 bg-yellow-100 rounded-full flex items-center justify-center mb-5">
                        <p>{index + 1}</p>
                      </div>
                      <p className="flex-1 text-base text-black-33">
                        {item?.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        }
      />
      <CardSection
        {...studyDetails?.growthFacts?.sectionData}
        headingSty="flex justify-center"
        sectionStyle="py-[50px] md:py-[65px] lg:py-[100px] bg-white"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[52px] leading-[140%]  tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="flex flex-wrap justify-center">
            {studyDetails?.growthFacts?.cardDataList?.map((item, index) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 max-md:pb-4 md:p-3">
                  <div className="w-full h-full" key={index}>
                    <Card
                      {...item}
                      headingSty="text-[24px] lg:text-[28px] font-medium leading-[140%] mb-4 lg:mb-8 text-black-900"
                      descriptionSty="text-base font-normal leading-[140%] text-black-33"
                      cardSty="bg-gray-100 border border-gray-400 py-6 px-3 lg:px-10 lg:py-8 rounded-2xl h-full"
                      iconSty="min-w-[55px]"
                      cardDataSty="mb-0"
                      titleIconSty="h-[95px] w-[95px] rounded-full bg-yellow-100 flex items-center justify-center mb-4 lg:mb-8"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      />
      <InfoCard
        {...studyDetails?.aboutInfo}
        sectionStyle="py-[50px] md:py-[65px] lg:py-[100px] bg-blue-900"
        containerSty="container "
        containtWidth="lg:max-w-[503px]"
        leadTextSty="text-white lg:max-w-[542px] mb-4 lg:mb-8 mr-auto text-base font-normal leading-[25px]"
        titleSty="text-white text-[36px] lg:text-[42px] xl:text-[54px] font-normal mb-4 lg:mb-8 leading-[140%] "
        descriptionSty="text-white mb-3 mr-auto text-base font-normal leading-[25px]"
        imageContainerSty="w-full lg:max-w-[537px] mx-auto"
        textContainerSty="col-span-11 lg:col-span-6 flex items-center"
        imageContentSty="col-span-11 lg:col-span-5 flex items-center"
        gridContainerSty="grid grid-cols-11 gap-6"
      />

      <CardSection
        {...servicesIntegrated?.sectionData}
        headingSty=""
        sectionStyle="py-[50px] md:py-[65px] lg:py-[100px] bg-white"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[40px] lg:mb-[52px] leading-[140%] tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="grid grid-cols-6 gap-5 lg:gap-8">
            {servicesIntegrated?.cardDataList?.map((item, index) => {
              return (
                <div
                  className="col-span-6 md:col-span-3 md:col-span-2"
                  key={index}
                >
                  <Card
                    {...item}
                    headingSty="text-[24px] lg:text-[28px] font-medium leading-[140%] mb-3 lg:mb-8 text-black-900"
                    descriptionSty="text-base font-normal leading-[150%] text-black-33"
                    cardSty="bg-gray-100 p-4 md:p-6 lg:px-10 lg:py-8 rounded-2xl border-[1px] border-gray-400 h-full"
                    iconSty="w-full max-lg:max-w-[40px] lg:min-w-[55px]"
                    cardDataSty="mb-0"
                    titleIconSty="p-3 lg:p-6 h-[70px] lg:h-[95px] w-[70px] lg:w-[95px] rounded-full bg-yellow-100 flex items-center justify-center mb-4 lg:mb-8 "
                  />
                </div>
              );
            })}
          </div>
        )}
      />

      <section className="py-[50px] md:py-[65px] lg:py-[100px] bg-blue-200">
        <div className="container">
          <div className="relative">
            <div className="overflow-hidden absolute w-[70px] top-0 left-0 md:right-0 md:mx-auto">
              <div className="w-[70px] relative z-[5]">
                <div className="h-[70px] w-[70px] rounded-full relative bg-blue-900 border-[25px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full relative bg-blue-900 border-[17px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full relative bg-blue-900 border-[10px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full relative bg-blue-900 border-[25px] border-blue-200 mb-[50px]"></div>
                <div className="h-[70px] w-[70px] rounded-full relative bg-blue-900 border-[17px] border-blue-200 "></div>
              </div>
              <div className="z-[1] absolute top-8 right-0 left-0 h-full w-[10px] bg-yellow-100 mx-auto"></div>
            </div>
            <ul className="max-md:pl-[80px] max-md:pt-[20px] flex flex-wrap relative">
              <li className="max-md:pb-[45px] md:w-1/2 md:pr-[113px] md:pb-[130px]">
                <div className="max-w-[255px] md:max-w-[350px] md:text-right md:ml-auto">
                  <p className="text-[16px] md:text-2xl font-normal">
                    Call leads, cookies ,Pixel ID
                    <b className="font-medium">Reduces Customer Acquisition </b>
                    and Retargeting Cost
                  </p>
                </div>
              </li>
              <li className="max-md:pb-[45px] md:w-1/2 md:pl-[113px] md:pt-[80px]">
                <div className="max-w-[255px] md:max-w-[350px] ">
                  <p className="text-[16px] md:text-2xl font-normal">
                    <b className="font-medium">Omnichannel</b> Engagement and
                    Presence for
                    <b className="font-medium">Increased Commerce</b>
                  </p>
                </div>
              </li>
              <li className="max-md:pb-[45px] md:w-1/2 md:pr-[113px] md:pb-[130px]">
                <div className="max-w-[255px] md:max-w-[350px] md:text-right md:ml-auto">
                  <p className="text-[16px] md:text-2xl font-normal ">
                    A Unified Platform for Full
                    <b className="font-medium">Hyperlocal Automation</b>
                  </p>
                </div>
              </li>
              <li className="max-md:pb-[45px] md:w-1/2 md:pl-[113px] md:pt-[80px]">
                <div className="max-w-[255px] md:max-w-[350px] ">
                  <p className="text-[16px] md:text-2xl font-normal ">
                    Automated Seo Helps in
                    <b className="font-medium">Higher Ranking on Search </b>
                    Results
                  </p>
                </div>
              </li>
              <li className="md:w-1/2 md:pr-[113px]">
                <div className="max-w-[255px] md:max-w-[350px] md:text-right md:ml-auto">
                  <p className="text-[16px] md:text-2xl font-normal ">
                    Interested
                    <b className="font-medium">
                      Brand Visibility & Standardisation
                    </b>
                    Across all Platforms
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <LovedThisContent loveDesSty="text-black-33 text-base lg:max-w-[570px] font-medium" />
    </>
  );
};

export default CaseStudyDetails;
