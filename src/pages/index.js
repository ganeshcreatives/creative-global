import Banner from "@/Components/comman/Banner";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import HeadSection from "@/Components/HeadSection";
import HomeComponent from "@/Components/Home";
import { bannerData, chanllenges, discoveryCardData } from "@/static/json/home";
import Head from "next/head";
import { useRouter } from "next/router";
import { list } from "postcss";
import { useMemo } from "react";

export default function Home() {
  const router = useRouter();
  const itemListSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      url: "https://sekel.tech/",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: discoveryCardData?.length,
      name: "Customer a Power for Customer 360 Strategy",
      description:
        "Using data to create strategies for effective marketing campaigns? We're here to assist you in becoming a data-driven marketer.",
      itemListElement: discoveryCardData?.map((item, index) => {
        return {
          "@type": "ListItem",
          position: index + 1,
          name: item?.title,
          description: item?.description,
        };
      }),
    };
  }, []);

  const faqListSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: chanllenges?.map((item, index) => {
        return {
          "@type": "Question",
          name: item?.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item?.answer,
          },
        };
      }),
    };
  }, []);

  return (
    <>
      <HeadSection
        title={bannerData?.title}
        description={bannerData?.subTitle + bannerData?.description}
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
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(faqListSchema),
                }}
                key="faq-list"
              />
            </>
          );
        }}
      />
      <div className="bg-blue-900 pt-8 md:pt-[56px]">
        <Banner
          {...bannerData}
          subTitleSty="text-base font-medium leading-[140%] text-yellow-900"
          descriptionSty="text-base font-medium leading-[140%] text-yellow-900"
          containerStyle="flex-col mx:w-full items-center"
          headinWidth="max-w-[700px] mx-auto mb-6 md:mb-12"
          aboutHead="container"
          sectionSty="md:text-center"
          renderElement={
            <div className="pt-4">
              <Button
                data="Request Demo"
                clsStyle="py-2 px-8 border-yellow-900"
                action={() => router.push("/company/contact-us")}
                filled
              ></Button>
            </div>
          }
        />
        <Breadcrumb breadcrumbList={[{ link: "/", label: "Home" }]} />
        <HomeComponent />
      </div>
    </>
  );
}
