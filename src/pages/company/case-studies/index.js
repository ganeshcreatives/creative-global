import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import SidebarSection from "@/Components/comman/SidebarSection";
import { caseFilterData, caseStudyCardData } from "@/static/json/caseStudy";

const CaseStudy = () => {
  return (
      <section>
        <SidebarSection
          sidebarTitle="Case Study"
          sidebarFilterData={caseFilterData}
          cardList={caseStudyCardData}
          cardContainerSty="grid grid-cols-12 gap-x-4 lg:gap-x-8"
          sliderColSty="col-span-12 pb-[25px] xl:pb-[50px] pt-[50px] xl:pt-[100px] lg:flex items-center justify-between"
          galleryColSty="col-span-12 lg:pt-[10px] xl:pt-[100px]"
          galleryBoxSty=""
          sliderTabSty="my-2 lg:mt-0 lg:mb-0 max-lg:w-full text-left"
          sliderActTabSty="my-2 lg:mt-0 lg:mb-0"
          sliderBtnSty="flex max-lg:flex-wrap lg:overflow-x-auto lg:max-w-[calc(100%_-_250px)]"
          sideTitleSty="text-[32px] lg:text-[42px] font-medium tracking-tighter mb-4 lg:mb-0 xl:w-[250px] lg:pr-7"
          sliderMainRow="grid grid-cols-12"
          renderElement={(item, index) => (
            <div
              key={index}
              className="col-span-6 lg:col-span-4 mb-10 xl:mb-[52px]"
            >
              <StoreCard
                {...item}
                slug={`/company/case-studies/${item?.slug}`}
              />
            </div>
          )}
        />
        <LovedThisContent loveDesSty="text-black-33 max-lg:mb-5 text-base lg:max-w-[570px] font-medium" />
      </section>
  );
};

export default CaseStudy;
