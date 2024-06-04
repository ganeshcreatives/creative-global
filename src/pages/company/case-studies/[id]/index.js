import HeadSection from "@/Components/HeadSection";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import CardSection from "@/Components/comman/Card/CardSection";
import InfoCard from "@/Components/comman/Card/InfoCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import Loader from "@/Components/comman/Loader";
import StoreDetailBanner from "@/Components/comman/StoreDetailBanner";
import { servicesIntegrated } from "@/static/json/caseStudyDetails";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

const CaseStudyDetails = () => {
  const router = useRouter();
  const [caseStudyDetails, setCaseStudyDetails] = useState({});
  const [loaderStat, setLoader] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      setLoader(true);
      const baseURL = `${process.env.STRAPI_PATH}/case-studies?filters[slug][$eq]=${router.query.id}&populate[0]=case_study_category&populate[1]=featureImage&populate[2]=storeLogo&populate[3]=banner&populate[4]=storeInformation&populate[5]=goals&populate[6]=challenges&populate[7]=growth&populate[8]=applicationInformation.image`;
      if (window.location.protocol.indexOf("https") == 0) {
        var el = document.createElement("meta");
        el.setAttribute("http-equiv", "Content-Security-Policy");
        el.setAttribute("content", "upgrade-insecure-requests");
        document.head.append(el);
      }
      axios
        .get(baseURL)
        .then((response) => {
          setLoader(false);
          setCaseStudyDetails(response.data.data[0]?.attributes || {});
        })
        .catch((error) => {
          setLoader(false);
          console.log(error);
        });
    }
  }, [router.query.id]);

  // const itemListSchema = useMemo(() => {
  //   return {
  //     "@context": "https://schema.org",
  //     "@type": "ItemList",
  //     url: "https://sekel.tech/company/case-studies/kalyan-jewellers",
  //     itemListOrder: "http://schema.org/ItemListOrderAscending",
  //     numberOfItems: "6",
  //     name: "Kalyan Jewellers Case Study - Sekel Tech",
  //     description:
  //       "Explore Kalyan Jewelers' success story with Sekel Tech! Witness a remarkable 31x boost in ROI/ROAS, 9x lead growth, and a 4.5x increase in footfall. ",
  //     itemListElement: caseStudyList?.map((item, index) => {
  //       return {
  //         "@type": "ListItem",
  //         position: 1,
  //         name: "Campaign Management",
  //         description:
  //           "Strategically coordinating and executing marketing initiatives to achieve specific objectives.",
  //       };
  //     }),
  //   };
  // }, []);
  return (
    <>
      <HeadSection
        title={`${caseStudyDetails?.brandName} Case Study | Sekel Tech`}
        description={caseStudyDetails?.meta_description}
        canonical={`https://sekel.tech/company/case-studies/${router.query.id}`}
        img="/logo.svg"
        // renderSchemaContent={() => (
        //   <>
        //     <script
        //       type="application/ld+json"
        //       dangerouslySetInnerHTML={{
        //         __html: JSON.stringify(itemListSchema),
        //       }}
        //       key="list-item"
        //     />
        //   </>
        // )}
      />
      {loaderStat && <Loader />}
      <StoreDetailBanner
        {...caseStudyDetails?.banner}
        label={caseStudyDetails?.case_study_category?.data?.attributes?.name}
        bgImage={{
          src: caseStudyDetails?.featureImage?.data?.attributes?.url,
          height: 900,
          width: 900,
          alt: "img",
        }}
        storeLogo={{
          src: caseStudyDetails?.storeLogo?.data?.attributes?.url,
          height: 900,
          width: 900,
          alt: "img",
        }}
        imageBgColor={
          caseStudyDetails?.brandName === "Kalyan Jewellers" ||
          caseStudyDetails?.brandName === "Aurelia"
            ? ""
            : "bg-white"
        }
      />
      <Breadcrumb
        sectionSty="py-2"
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Company" },
          { link: "/company/case-studies", label: "Case Studies" },
          { link: `/${router.asPath}`, label: caseStudyDetails?.brandName },
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
        {...caseStudyDetails?.storeInformation}
        renderSecondElement={
          <div>
            {caseStudyDetails?.goals?.length > 0 && (
              <div>
                <h6 className="text-[32px] lg:text-[42px] font-medium text-black-33 mb-5">
                  Goals
                </h6>
                {caseStudyDetails?.goals?.map((item, index) => (
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
            {caseStudyDetails?.challenges?.length && (
              <div>
                <h6 className="text-[32px] lg:text-[42px] font-medium text-black-33 mb-5">
                  Challenges
                </h6>
                <div className="flex flex-wrap -mx-3">
                  {caseStudyDetails?.challenges?.map((item, index) => (
                    <div key={index} className="w-1/2 px-4 mb-5">
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
        title="Growth Facts"
        headingSty="flex justify-center"
        sectionStyle="py-[50px] md:py-[65px] lg:py-[100px] bg-white"
        titleSty="text-[32px] lg:text-[42px] font-medium mb-[52px] leading-[140%] tracking-tighter text-black-33"
        descriptionSty="max-w-[686px] text-base font-normal leading-[22px] text-black-33 mb-[52px]"
        renderElement={() => (
          <div className="flex flex-wrap justify-center">
            {caseStudyDetails?.growth?.map((item, index) => {
              return (
                <div className="w-full md:w-1/2 lg:w-1/3 max-md:pb-4 md:p-3">
                  <div className="w-full h-full" key={index}>
                    <Card
                      {...item}
                      title={
                        <span>
                          {item?.title.slice(0, item?.title.indexOf(" "))}{" "}
                          <br /> {item?.title.slice(item?.title.indexOf(" "))}
                        </span>
                      }
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
        {...caseStudyDetails?.applicationInformation}
        image={{
          src: caseStudyDetails?.applicationInformation?.image?.data?.attributes
            ?.url,
          height: 433,
          width: 537,
          alt: "img",
        }}
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
