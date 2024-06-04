import Image from "next/image";
import React, { useEffect } from "react";
import Card from "@/Components/comman/Card";
import { useCallback, useState } from "react";
import DownArrow from "@/assets/DownArrow";
import CardSection from "../comman/Card/CardSection";
import HyperlocalStrategyForm from "../comman/Form/hyperlocalStrategyForm";
import InfoCard from "../comman/Card/InfoCard";
import SliderSection from "../comman/Card/SliderSection";
import ImageCard from "../comman/Card/ImageCard";
import {
  discovery,
  beyondTech,
  discoveryCardData,
  competitionComparison,
  chanllenges,
  chanllengesSection,
  sliderSection,
  competitionData,
  sliderImage,
  sliderData,
} from "@/static/json/home";
import Button from "../comman/Button";
import { useRouter } from "next/router";

const HomeComponent = () => {
  const [learnMore, setLearnMore] = useState(false);
  let [offset, setOffset] = useState(4);
  const router = useRouter();

  const handleLearnMore = useCallback((index) => {
    if (learnMore[index]) {
      setLearnMore({ [index]: false });
    } else {
      setLearnMore({ [index]: true });
    }
  });

  const renderDiscoveryCard = () => {
    return (
      <div>
        <div className="grid grid-cols-3 gap-y-6 md:gap-x-2 lg:gap-x-8">
          {discoveryCardData?.map((item, index) => {
            return (
              <div className="col-span-3 md:col-span-1">
                <Card
                  key={index}
                  {...item}
                  headingSty="mb-4 leading-[30px] text-[24px] md:text-[22px] lg:text-[28px] font-medium text-black-33 tracking-tight"
                  cardSty="p-5 md:p-4 lg:p-6 xl:p-10 rounded-2xl h-full bg-gray-100"
                  actionType="Learn more"
                  action={() => router.push(item?.slug)}
                  buttonIcon={<DownArrow />}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  let chanllengesCard = ({ question, answer, gridColSize, list }) => {
    return (
      <div className={`${gridColSize}`}>
        <div className="h-full p-6 lg:p-8 xl:py-8 xl:px-[52px] rounded-xl bg-gray-100 border-[1px] border-gray-400">
          <div className="flex gap-4 mb-10">
            <div className="h-9 w-9 rounded-full border-[1px] border-black-33 flex items-center justify-center">
              <p className="text-xl font-medium text-black-33">?</p>
            </div>
            <div className="w-[calc(100%_-_50px)] ">
              <p className=" text-base font-semibold text-black-33  tracking-tight">
                {question}
              </p>
            </div>
          </div>
          <div>
            <p className="text-base font-normal leading-[25px] text-black-33 mb-4">
              {answer}
            </p>
            <ul className="list-['-_'] pl-4 text-base font-normal text-black-33 mb-4">
              {list?.map((listItem, listIndex) => {
                return <li key={listIndex}>{listItem.title}</li>;
              })}
            </ul>
            <button
              className="flex gap-2 items-center text-base text-blue-900 font-medium "
              onClick={() => router.push("/data")}
            >
              Explore our Data Platform
              <div className="h-6 w-6">
                <Image
                  src={"/blue-arrow.svg"}
                  height={24}
                  width={24}
                  alt="img"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const challengesElement = () => {
    return (
      <>
        <div className="max-md:flex max-md:gap-x-7 max-md:overflow-x-auto md:grid md:grid-cols-16 md:gap-5 mb-5 md:mb-8">
          {chanllenges?.map((item, index) => {
            return chanllengesCard({
              ...item,
              gridColSize:
                "max-md:min-w-[385px] max-md:mb-6 md:[&:nth-child(4n+1)]:col-span-9 md:[&:nth-child(4n+2)]:col-span-7 md:[&:nth-child(4n+3)]:col-span-7 md:[&:nth-child(4n+4)]:col-span-9",
            });
          })}
        </div>
        <div className="flex items-center justify-end gap-x-5">
          <h3 className="font-semibold text-base">Need more info?</h3>
          <Button data={"View more"} filled action={() => {}}></Button>
        </div>
      </>
    );
  };

  const renderCompetition = () => {
    return (
      <section className="pt-[40px]">
        <div className="bg-blue-900 pl-6 rounded-t-2xl">
          <div className="grid grid-cols-3">
            <div className="col-span-1">
              <div className="bg-yellow-900 px-[2px] pt-[40px] rounded-t-xl -mt-[40px]">
                <div className="p-8 bg-blue-100 rounded-t-2xl">
                  <div className="pb-8 h-[68px]">
                    <Image
                      src={"/logo-blue.svg"}
                      height={34}
                      width={222}
                      alt="logo"
                      className="w-full max-w-[222px]"
                    />
                  </div>
                  <div className="py-4 border-t-[2px] border-white">
                    {competitionData?.sidebar?.map((sidebar, index) => (
                      <div
                        key={index}
                        className="relative py-2 px-3 flex items-center text-black-33 font-medium mb-4 tracking-tighter border-b border-white"
                      >
                        <Image
                          src={"/arrow.svg"}
                          height={24}
                          width={24}
                          alt="arrow"
                        />
                        <div className="text-[14px] lg:text-[16px] w-[calc(100%_-_24px)] pl-3 text-ellipsis overflow-hidden">
                          {sidebar?.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 border-b border-blue-100">
              <div className="px-8 py-8 lg:px-[60px] lg:py-[34px]">
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="pb-8 h-[68px]">
                      <h2 className="text-white font-medium text-[20px]">
                        Typicaly Agency
                      </h2>
                    </div>
                    <div className="pt-4 border-t-[2px] border-white">
                      {competitionData?.typicalyAgency?.map((item, index) => (
                        <div
                          key={index}
                          className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-4 tracking-tighter line-clamp-1 border-b border-white"
                        >
                          <Image
                            src={item?.active ? "/check.svg" : "/close.svg"}
                            height={24}
                            width={24}
                            alt="check"
                          />
                          <div className="text-[14px] lg:text-[16px] w-[calc(100%_-_24px)] pl-3 text-ellipsis overflow-hidden">
                            {item?.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="pb-8 h-[68px]">
                      <h2 className="text-white font-medium text-[20px]">
                        Other Softwares
                      </h2>
                    </div>
                    <div className="pt-4 border-t-[2px] border-white">
                      {competitionData?.otherSoftwares?.map((item, index) => (
                        <div
                          key={index}
                          className="relative py-2 px-3 flex items-center gap-x-[16px] text-white font-medium text-[16px] mb-4 tracking-tighter line-clamp-1 border-b border-white"
                        >
                          <Image
                            src={item?.active ? "/check.svg" : "/close.svg"}
                            height={24}
                            width={24}
                            alt="check"
                          />
                          <div className="text-[14px] lg:text-[16px] w-[calc(100%_-_24px)] pl-3 text-ellipsis overflow-hidden">
                            {item?.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-6">
          <div className="bg-black-33 px-[43px] py-[20px] w-full rounded-b-xl">
            <div className="grid grid-cols-2 items-center">
              <div className="col-span-1">
                <h4 className="text-white text-[16px] font-medium">
                  Hyperlocal without all these?
                </h4>
              </div>
              <div className="col-span-1">
                <div className="flex items-center justify-between">
                  <div>
                    <button className="bg-yellow-900 h-[60px] w-[60px] min-w-[60px] border border-yellow-900 rounded-full flex items-center justify-center">
                      <Image
                        src={"forword-arrow.svg"}
                        height={35}
                        width={35}
                        alt="arrow"
                      />
                    </button>
                  </div>
                  <h4 className="pl-8 w-[calc(100%_-_60px)] text-white text-[20px] font-medium">
                    If you don't have all these you don't truly have hyperlocal.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <CardSection {...discovery} renderElement={renderDiscoveryCard} />
      <InfoCard
        sectionStyle="pt-[50px] md:pt-[75px] lg:pt-[100px] bg-gray-100"
        titleSty="text-[36px] font-medium leading-[140%] tracking-tighter text-black-33 mb-4"
        {...beyondTech}
        bordershow
        renderElement={
          <div className="flex gap-8 pt-6">
            <button
              className="max-h-[57px] max-w-[188px] rounded-lg overflow-hidden"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.sekeltech.sellrapp",
                  "_blank"
                )
              }
            >
              <Image
                src={"/google-store.png"}
                height={57}
                width={188}
                alt="btn"
              />
            </button>
            <button
              className="max-h-[57px] max-w-[188px] rounded-lg overflow-hidden"
               onClick={() =>
                window.open(
                  "https://apps.apple.com/in/app/sellrapp/id6447759345",
                  "_blank"
                )
              }
            >
              <Image src={"/app-store.png"} height={57} width={188} alt="btn" />
            </button>
          </div>
        }
      />
      <CardSection
        {...competitionComparison}
        containerSty="border-b border-gray-400"
        renderElement={renderCompetition}
      />
      <CardSection
        {...chanllengesSection}
        headingSty=""
        descriptionSty="text-base font-normal leading-[25px] mb-[52px]"
        renderElement={challengesElement}
      />
      <SliderSection
        {...sliderSection}
        sliderImage={sliderImage}
        profileButton
        renderElement={sliderData?.map((item, index) => {
          return <ImageCard {...item} key={index} />;
        })}
      />
      <section className="py-[50px] md:py-[75px] lg:py-[100px] bg-white">
        <div className="container">
          <div className="grid grid-cols-10 gap-6 mb-5">
            <div className="col-span-12 lg:col-span-5 xl:col-span-4">
              <div className="lg:max-w-[479px] h-full flex flex-col justify-center">
                <h3 className="text-[42px] font-medium mb-[44px] leading-[52px] tracking-tighter text-black-33">
                  About Sekel
                </h3>
                <p className="text-base font-normal leading-[25px] mb-5 mx-auto text-black-33 ">
                  Sekel Tech’s all-in-one software helps multi-location
                  businesses unlock their full potential with one centralised
                  tool. Designed to help retail businesses, Sekel Tech platform
                  helps manage brands’ online presence, store orders, and
                  consumers’ online to offline journey.
                  <br /> <br /> Embarking on our journey in 2016, Sekel Tech has
                  been at the forefront of revolutionizing omni-channel commerce
                  for retail brands. With a vision for improved customer
                  experiences, we have continuously innovated to provide
                  cutting-edge solutions that empower businesses to thrive in
                  the digital landscape.
                </p>
                <p className="text-base font-semibold leading-[21px]  mx-auto text-black-33 mr-6">
                  Join us as we redefine commerce, creating an enduring,
                  transparent, and innovative ecosystem.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 xl:col-span-6">
              <div className="max-lg:mx-auto lg:ml-auto lg:max-h-[476px] lg:max-w-[600px] rounded-[20px] overflow-hidden">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={"/about.png"}
                  height={476}
                  width={600}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <HyperlocalStrategyForm buttonTitle="Submit" placeholder="Email" />
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
