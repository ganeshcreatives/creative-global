import Image from "next/image";
import React, { useMemo } from "react";
import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import GetStartForm from "@/Components/comman/Form/StartForm";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import {
  advantagesOfSekel,
  bannerDiscovery,
  discoveryFeature,
  investmentFocus,
} from "@/static/json/discovery";
import HeadSection from "@/Components/HeadSection";

const Discovery = () => {
  const renderDiscoveryFeature = () => {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-3 lg:gap-5">
          {discoveryFeature?.cardData?.map((item, index) => {
            return (
              <div className={`col-span-1`}>
                <Card
                  key={index}
                  {...item}
                  // buttonSty="flex gap-1 items-center text-base font-medium text-blue-900"
                />
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
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const itemListSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      url: "https://sekel.tech/discovery",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: discoveryFeature?.cardData?.length,
      name: "Discovery Platform - Building Genuine Digital Connections",
      description:
        "Leverage Sekel Tech's organic and paid discovery for genuine leads, boosting footfalls and establishing trust and authority in your digital landscape with real-time reporting.",
      itemListElement: discoveryFeature?.cardData?.map((item, index) => {
        return {
          "@type": "ListItem",
          position: index + 1,
          name: item?.title,
          description: item?.description,
        };
      }),
    };
  }, []);

  return (
    <div>
      <HeadSection
        {...bannerDiscovery}
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
        {...bannerDiscovery}
        sectionSty="max-lg:pt-8 pb-[50px] md:pb-[60px] lg:pb-[100px] pt-20"
        containerStyle="container grid grid-cols-11 lg:gap-[30px] xl:gap-[60px]"
        descriptionSty="lg:mr-16 mb-8"
        headinWidth="lg:max-w-[500px] w-full mb-12 col-span-11 lg:col-span-6 xl:col-span-5"
        imgGridSty="col-span-11 lg:col-span-5 xl:col-span-6"
        titleSty="text-[36px] lg:text-[42px] xl:text-[54px] font-normal leading-[140%] mb-4 tracking-tighter"
        imgContainerSty="max-w-[643px] max-h-[419px] w-full"
        renderElement={<GetStartForm buttonTitle="Get started" />}
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/how-it-works", label: "how it works" },
          { link: "/discovery", label: "Discovery Platform" },
        ]}
      />
      <CardSection
        {...discoveryFeature?.sectionData}
        renderElement={renderDiscoveryFeature}
      />
      <CardSection
        {...advantagesOfSekel?.sectionData}
        sectionStyle="py-[50px] md:py-[75px] lg:py-[100px] bg-blue-200"
        headingSty="max-w-[803px] mx-auto md:text-center mb-[32px] lg:mb-[52px]"
        renderElement={() => (
          <div className="grid gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-3 lg:mx-10">
            {advantagesOfSekel?.cardData?.map((item, index) => {
              return (
                <div className="col-span-1" key={index}>
                  <Card
                    {...item}
                    headingSty="text-[16px] md:text-[22px] lg:text-[28px] font-medium leading-[140%] mb-8 text-black-900"
                    cardSty="bg-blue-200 p-3 lg:p-5 rounded-2xl border-[1px] border-white h-full"
                    titleIconSty="h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-5"
                    descriptionSty="text-base font-normal leading-[140%] text-black-33"
                  />
                </div>
              );
            })}
          </div>
        )}
      />
      <CardSection
        {...investmentFocus?.sectionData}
        headingSty="max-w-[790px] mb-[35px] lg:mb-[52px]"
        descriptionSty="text-base font-normal leading-[140%] text-black-33"
        renderElement={renderCard}
      />
      <section className="bg-blue-900 py-[45px] md:py-[60px] lg:py-[80px]">
        <div className="container">
          <div className="mb-[52px] ">
            <h3 className="text-[32px] lg:text-[42px] font-medium mb-3 leading-[140%] tracking-tighter text-white">
              Why Sekel Tech is the Ideal Choice
            </h3>
            <p className="text-base font-normal leading-[140%] max-w-[722px] text-yellow-900">
              Empower Your Digital Presence with Sekel Tech. Sekel Tech offers
              advanced features, including
            </p>
          </div>
          <div className="flex flex-wrap items-center relative max-lg:max-w-[345px] max-lg:mx-auto">
            <div className="w-full lg:w-[25%] lg:h-full mt-auto max-lg:absolute max-lg:pl-[90px] max-lg:max-w-[400px] left-0 top-0">
              <ul className="lg:pr-5">
                <li className="ml-auto lg:max-w-[243px] lg:text-end mb-[30px] lg:mb-[87px]">
                  <p className="mb-[14px] text-xl font-medium text-white ">
                    Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white lg:text-end">
                    Automate responses and content delivery for consistent,
                    valuable interactions.
                  </p>
                </li>
                <li className="ml-auto lg:max-w-[243px] lg:text-end max-md:mb-[30px]">
                  <p className="mb-[14px] text-xl font-medium text-white">
                    Comprehensive Educational Resources
                  </p>
                  <p className="text-sm font-light text-white lg:text-end">
                    Access a rich array of FAQs, videos and articles to empower
                    end-users in making informed choices.
                  </p>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-[50%] h-full">
              <div className="max-w-[591px] w-full mx-auto">
                <Image
                  className="h-full w-full object-cover max-lg:hidden"
                  src={"/Choice.png"}
                  height={562}
                  width={591}
                  alt="img"
                />
                <Image
                  className="h-full w-full object-cover lg:hidden"
                  src={"/discover-choice-mobile.svg"}
                  height={562}
                  width={591}
                  alt="img"
                />
              </div>
            </div>
            <div className="w-full lg:w-[25%] lg:h-full max-lg:absolute max-lg:pr-[90px] max-lg:max-w-[400px] right-0 bottom-[20px] top-auto max-md:mt-auto">
              <ul className="lg:pr-5">
                <li className="ml-auto mb-[30px] lg:max-w-[243px] max-lg:text-end lg:mb-[68px]">
                  <p className="mb-[14px] text-xl font-medium text-white">
                    Secure Payment and Consent-Driven Engagement
                  </p>
                  <p className="text-sm font-light text-white ">
                    Prioritize secure payment options and consent-driven
                    engagemen to reinforce trust.
                  </p>
                </li>
                <li className="ml-auto mb-[30px] lg:max-w-[243px] max-lg:text-end lg:mb-[68px]">
                  <p className="mb-[14px] text-xl font-medium text-white">
                    Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white">
                    Automate responses and content delivery for consistent,
                    valuable interactions.
                  </p>
                </li>
                <li className="ml-auto mb-[30px] lg:max-w-[243px] max-lg:text-end">
                  <p className="mb-[14px] text-xl font-medium text-white">
                    Automated and Scaled Engagement
                  </p>
                  <p className="text-sm font-light text-white">
                    Automate responses and content delivery for consistent,
                    valuable interactions.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <HyperlocalStrategyForm />
    </div>
  );
};

export default Discovery;
