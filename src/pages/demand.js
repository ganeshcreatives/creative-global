import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import InfoCard from "@/Components/comman/Card/InfoCard";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  bannerDemand,
  demandGenerationFeature,
  demandGenerationReimagined,
  masterLocalAdvertising,
  mediaPlanning,
  sekelsWayToMaster,
} from "@/static/json/demand";
import Image from "next/image";

const { default: Card } = require("@/Components/comman/Card");
const {
  default: CardSection,
} = require("@/Components/comman/Card/CardSection");

const Demand = () => {
  let renderDemandGenerationCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-8 lg:gap-5">
          {demandGenerationFeature?.cardData?.map((item, index) => {
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
                  cardSty={item.cardSty + " h-full"}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <Banner
        {...bannerDemand}
        sectionSty="py-[50px] lg:py-[65px] xl:pb-[100px] lg:pt-[52px]"
        containerStyle="container grid grid-cols-11 gap-4 justify-between"
        descriptionSty="lg:mr-16 mb-10"
        imgContainerSty="lg:max-w-[650px] lg:max-h-[418px] w-full"
        renderElement={<GetStartForm buttonTitle="Get started" />}
        headinWidth="lg:max-w-[500px] max-lg:order-2 col-span-11 lg:col-span-5 w-full lg:mb-12"
        imgGridSty="max-lg:order-1 lg:col-span-6 col-span-11 max-lg:mb-10"
        titleSty="text-[36px] lg:text-[42px] xl:text-[54px] font-normal leading-[140%] mb-4 tracking-tighter"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "How it works" },
          { link: "/demand", label: "Demand Generation" },
        ]}
      />
      <CardSection
        {...demandGenerationFeature?.sectionData}
        renderElement={renderDemandGenerationCard}
      />
      <CardSection
        {...demandGenerationReimagined?.sectionData}
        headingSty="flex items-end lg:mx-4 gap-[60px]"
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-200"
        titleSty="text-[24px] lg:text-[28px] font-medium mb-3 leading-[140%] tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-[16px] xl:text-[28px] font-normal leading-[140%] text-black-33 mb-8 lg:mb-20"
        renderElement={() => (
          <div className="grid grid-cols-4 gap-5 lg:gap-0">
            {demandGenerationReimagined?.cardData?.map((item, index) => {
              return (
                <div className="col-span-2 lg:col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[16px] lg:text-[28px] font-medium leading-[130%] mb-3 lg:mb-8 text-black-900"
                    cardSty="bg-blue-200 px-5 py-5 rounded-2xl border-[1px] border-white h-full"
                    cardDataSty=""
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <InfoCard
        {...masterLocalAdvertising?.sectionData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-900"
        containerSty="container"
        containtWidth=""
        titleSty="text-white text-[34px] lg:text-[42px] font-medium mb-2 leading-[140%] tracking-tighter"
        descriptionSty="text-white text-[16px] lg:text-[28px] font-medium mb-5 lg:mb-8"
        gridContainerSty="gap-0 grid grid-cols-11"
        imageContainerSty="w-full max-w-[497px] ml-0 mx-auto"
        textContainerSty="col-span-11"
        imageContentSty="col-span-0"
        renderElement={
          <>
            <div>
              <div className="mx-auto w-full max-w-[930px] rounded-2xl overflow-hidden mb-8">
                <Image
                  className="w-full h-full"
                  {...masterLocalAdvertising?.renderElementContent?.image}
                />
              </div>
            </div>
            <div className="max-w-[455px]">
              <p className="text-white text-base font-normal mb-5">
                {...masterLocalAdvertising?.renderElementContent?.contentText}
              </p>
              <Button filled data="Get Started" clsStyle="py-3 px-8 border-yellow-900" />
            </div>
          </>
        }
      />
      <CardSection
        {...sekelsWayToMaster?.sectionData}
        sectionStyle="pt-[50px] md:pt-[75px] lg:pt-[100px] pb-[50px]"
        titleSty="text-start text-[32px] lg:text-[42px] font-medium mb-[52px] leading-[140%] tracking-tighter text-black-33"
        renderElement={() =>
          sekelsWayToMaster?.infoCardData?.map((item, index) => {
            return (
              <InfoCard
                key={index}
                {...item}
                sectionStyle="rounded-[16px] mb-[20px]"
                containtWidth="lg:max-w-[536px] lg:mx-auto w-full"
                containerSty=""
                titleSty="text-[32px] lg:text-[42px] font-medium leading-[140%] tracking-tighter text-black-33 mb-[26px]"
                descriptionSty="mb-8 leading-[20px] text-base font-normal text-black-33"
                gridContainerSty="grid grid-cols-12 gap-6"
                renderElement={
                  <>
                    <div
                      className={`${
                        index === 1 ? "ml-auto rotate-[135deg]" : "rotate-45"
                      } h-[66px] w-[66px] rounded-full bg-yellow-900 flex items-center justify-center mb-8`}
                    >
                      <Image {...sekelsWayToMaster?.renderElementContantImg} />
                    </div>
                  </>
                }
              />
            );
          })
        }
      />
      <HyperlocalStrategyForm
        showForm={false}
        title="All of the above flows into generating a suggestive media"
        containerSty="container justify-center lg:flex lg:gap-8 items-center"
      />
      <CardSection
        {...mediaPlanning?.sectionData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-900 "
        titleSty="text-[42px] font-medium mb-3 leading-[52px] tracking-tighter text-white"
        descriptionSty="w-[456px] mx-auto text-white leading-[22px] text-black-33"
        renderElement={() => (
          <div className="flex max-lg:flex-wrap items-center">
            <div className="w-full max-lg:order-2 lg:w-[42%]">
              {mediaPlanning?.renderElement?.cardData?.map((item, index) => {
                return (
                  <Card
                    {...item}
                    headingSty="text-[28px] font-medium leading-[30px] mb-[26px] mt-4 text-white"
                    cardSty="rounded-2xl mb-8 text-white "
                    dataDivSty="w-[calc(100%_-_90px)]"
                    cardDataSty="flex gap-8"
                  />
                );
              })}
            </div>
            <div className="w-full max-lg:order-1 lg:w-[55%] pl-[40px] h-full flex flex-col justify-end mb-12 lg:mb-0">
              <div className="max-w-[599px] max-h-[489px] w-full ml-auto">
                <Image {...mediaPlanning?.renderElement?.image} />
              </div>
              <div className="max-w-[438px] ml-auto mt-8 p-4 rounded-[8px] bg-white bg-opacity-10 border-[1px] border-white">
                <p className="text-base text-yellow-900 font-normal">
                  {mediaPlanning?.renderElement.text}
                </p>
              </div>
            </div>
          </div>
        )}
      />

      <HyperlocalStrategyForm />
    </>
  );
};

export default Demand;
