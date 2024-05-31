import StoreCard from "@/Components/comman/Card/StoreCard";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import Loader from "@/Components/comman/Loader";
import Pagination from "@/Components/comman/Pagination";
import SidebarSection from "@/Components/comman/SidebarSection";
import {
  PER_PAGE_FIRST,
  getPageOffset,
  totalPagesCount,
} from "@/constants/pagination";
import axios from "axios";
import { useEffect, useState } from "react";

const baseURLCaseStudy = `${process.env.STRAPI_PATH}/case-studies?populate[0]=case_study_category&populate[1]=featureImage&populate[2]=storeLogo&sort=publishedAt:desc&pagination[limit]=${PER_PAGE_FIRST}`;

const baseURLCategory = `${process.env.STRAPI_PATH}/case-study-categories?popular[0]=name&popular[1]=slug`;

const CaseStudy = () => {
  const [caseStudyList, setCaseStudyList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loaderStat, setLoader] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);
  const [activeState, setActiveState] = useState("all");
  const [currentPageNo, setcurrentPageNo] = useState(1);

  const updateParent = (value) => {
    setcurrentPageNo(value);
    const postPerPage = getPageOffset(value) + PER_PAGE_FIRST;
    getCaseStudyByCategory(activeState, postPerPage - PER_PAGE_FIRST);
    window.scrollTo(0, 500);
  };

  const getCaseStudyByCategory = (slug, start) => {
    setLoader(true);
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    const baseURLUpdated =
      slug !== "all"
        ? baseURLCaseStudy +
          "&filters[case_study_category][slug][$eq]=" +
          slug +
          "&pagination[start]=" +
          start
        : baseURLCaseStudy + "&pagination[start]=" + start;
    axios
      .get(baseURLUpdated)
      .then((response) => {
        setCaseStudyList(response.data.data);
        setPagesCount(
          totalPagesCount(+response.data.meta.pagination.total || 0)
        );
        setLoader(false);
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  // get case study category
  useEffect(() => {
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    axios
      .get(baseURLCategory)
      .then((response) => {
        setCategoryList([
          {
            label: "All Industries",
            value: "all",
          },
          ...response.data.data,
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // get case study list
  useEffect(() => {
    setcurrentPageNo(1);
    getCaseStudyByCategory(activeState, 0);
  }, [activeState]);
  return (
    <>
      {loaderStat && <Loader />}
      <section>
        <SidebarSection
          sidebarTitle="Case Study"
          sidebarFilterData={categoryList}
          onHandleFilter={(e) => {
            setActiveState(e);
          }}
          cardContainerSty="grid grid-cols-12 gap-x-4 lg:gap-x-8"
          sliderColSty="col-span-12 pb-[25px] xl:pb-[50px] pt-[50px] xl:pt-[100px] lg:flex items-center justify-between"
          galleryColSty="col-span-12 lg:pt-[10px] xl:pt-[100px]"
          galleryBoxSty=""
          sliderTabSty="my-2 lg:mt-0 lg:mb-0 max-lg:w-full text-left"
          sliderActTabSty="my-2 lg:mt-0 lg:mb-0"
          sliderBtnSty="flex max-lg:flex-wrap lg:overflow-x-auto lg:max-w-[calc(100%_-_250px)]"
          sideTitleSty="text-[32px] lg:text-[42px] font-medium tracking-tighter mb-4 lg:mb-0 xl:w-[250px] lg:pr-7"
          sliderMainRow="grid grid-cols-12"
          renderElement={() =>
            caseStudyList?.length > 0 ? (
              caseStudyList?.map((item, index) => (
                <div
                  key={index}
                  className="col-span-6 lg:col-span-4 mb-10 xl:mb-[52px]"
                >
                  <StoreCard
                    btnLabel={
                      item?.attributes?.case_study_category?.data?.attributes
                        ?.name
                    }
                    description={item?.attributes?.description}
                    bgImage={{
                      src: item?.attributes?.featureImage?.data?.attributes
                        ?.url,
                      height: 900,
                      width: 900,
                      alt: "img",
                    }}
                    logoImage={{
                      src: item?.attributes?.storeLogo?.data?.attributes?.url,
                      height: 900,
                      width: 900,
                      alt: "img",
                    }}
                    slug={`/company/case-studies/${item?.attributes?.slug}`}
                    imageBgColor={
                      item?.attributes?.brandName === "Kalyan Jewellers"
                        ? ""
                        : "bg-white"
                    }
                  />
                </div>
              ))
            ) : (
              <p className="col-span-12 text-center pb-[80px]">Not Found !!!</p>
            )
          }
        />
      </section>
      <Pagination
        pagesCount={pagesCount}
        handleUpdatePage={updateParent}
        currentPageNo={currentPageNo}
      />
      <LovedThisContent loveDesSty="text-black-33 max-lg:mb-5 text-base lg:max-w-[570px] font-medium" />
    </>
  );
};

export default CaseStudy;
