import axios from "axios";
import { useEffect, useMemo, useState } from "react";

import {
  PER_PAGE_FIRST,
  totalPagesCount,
  getPageOffset,
} from "@/constants/pagination";
import SidebarSection from "@/Components/comman/SidebarSection";
import Breadcrumb from "@/Components/comman/Breadcrumb";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import VideoCard from "@/Components/comman/Card/VideoCard";
import Loader from "@/Components/comman/Loader";
import { useRouter } from "next/router";
import Button from "@/Components/comman/Button";
import Pagination from "@/Components/comman/Pagination";
import HeadSection from "@/Components/HeadSection";

const baseURLVideo = `${process.env.STRAPI_PATH}/videos?populate[0]=video_category&populate[1]=thumbnail_url&sort=publishedAt%3Adesc&pagination[limit]=${PER_PAGE_FIRST}`;

const baseURLCategory = `${process.env.STRAPI_PATH}/video-categories?fields[0]=category_title&fields[1]=slug`;
const Video = () => {
  const router = useRouter();
  const [activeState, setActiveState] = useState("all");
  const [videoList, setVideoList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loaderStat, setLoader] = useState(false);
  const [start, setStart] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPageNo, setcurrentPageNo] = useState(1);

  const updateParent = (value) => {
    setcurrentPageNo(value);
    const postPerPage = getPageOffset(value) + PER_PAGE_FIRST;
    setStart(postPerPage - PER_PAGE_FIRST);
    window.scrollTo(0, 500);
  };

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
        setCategoryList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let timeout;
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    if (activeState !== "all") {
      setLoader(true);
      const baseURLUpdated =
        baseURLVideo +
        "&filters[video_category][category_title][%24eq]=" +
        activeState +
        "&pagination[start]=" +
        start;
      axios
        .get(baseURLUpdated)
        .then((response) => {
          setVideoList(response.data.data);
          setPagesCount(
            totalPagesCount(+response.data.meta.pagination.total || 0)
          );
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
        });
    } else {
      setLoader(true);
      const baseURLUpdated = baseURLVideo + "&pagination[start]=" + start;
      axios
        .get(baseURLUpdated)
        .then((response) => {
          setVideoList(response.data.data);
          setPagesCount(
            totalPagesCount(+response.data.meta.pagination.total || 0)
          );
          setLoader(false);
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
        });
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [start, activeState]);

  let categoryUpdateList = categoryList?.map((item) => {
    return {
      ...item,
      attributes: {
        ...item?.attributes,
        name: item?.attributes?.category_title,
        slug: item?.attributes?.category_title,
      },
    };
  });

  const itemListSchema = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      url: "https://sekel.tech/company/gallery",
      itemListOrder: "http://schema.org/ItemListOrderAscending",
      numberOfItems: videoList?.length,
      name: "Sekel Tech - Videos",
      description:
        "Engage with the seamless blend of innovation, culture, and technology in our dynamic video content—a captivating showcase designed for search and discovery.",
      itemListElement: videoList?.map((item, index) => {
        return {
          "@type": "ListItem",
          position: index + 1,
          name: item?.attributes?.title,
          url: item?.attributes?.video_url,
        };
      }),
    };
  }, [videoList]);

  return (
    <>
      <HeadSection
        title="Explore Dynamic Video Content | Sekel Tech"
        description="Engage with the seamless blend of innovation, culture, and technology in our dynamic video content—a captivating showcase designed for search and discovery."
        canonical="https://sekel.tech/company/gallery/"
        img="/logo.svg"
        renderSchemaContent={() => (
          <script
            key={`video-list`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
          />
        )}
      />
      {loaderStat && <Loader />}
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Company" },
          { link: "/company/gallery", label: "Gallery" },
        ]}
      />
      <section className="pb-[50px]">
        <SidebarSection
          sidebarTitle="Gallery"
          sidebarFilterData={[
            {
              label: "All Topics",
              value: "all",
            },
            ...categoryUpdateList,
          ]}
          renderHeaderElement={
            <>
              <Button
                data="Video"
                clsStyle={`max-lg:w-full max-lg:text-left py-2 border-transparent px-4 lg:px-4 text-sm whitespace-nowrap tracking-tight leading-[140%] text-black-3 block ${
                  router.asPath.includes("gallery")
                    ? "bg-yellow-100 max-lg:bg-white max-lg:border-gray-400 max-lg:w-full max-lg:text-start border-yellow-900"
                    : "text-black-33 border border-transparent"
                }`}
                action={() => router.push("/company/gallery")}
              />
              <Button
                data="Photos"
                clsStyle={`max-lg:w-full max-lg:text-left py-2 border-transparent px-4 lg:px-4 text-sm whitespace-nowrap tracking-tight leading-[140%] text-black-3 block ${
                  router.asPath.includes("photo")
                    ? "bg-yellow-100 max-lg:bg-white max-lg:border-gray-400 max-lg:w-full max-lg:text-start border-yellow-900"
                    : "text-black-33 border border-transparent"
                }`}
                action={() => router.push("/company/photo")}
              />
            </>
          }
          onHandleFilter={(e) => {
            setActiveState(e);
            setcurrentPageNo(1);
            setStart(0);
          }}
          renderElement={() =>
            videoList.length > 0 ? (
              videoList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-6 max-md:col-span-6 mb-10"
                  >
                    <VideoCard videoData={item} />
                  </div>
                );
              })
            ) : (
              <p className="col-span-12 text-center">No Video Found !!!</p>
            )
          }
        />
      </section>
      <Pagination
        pagesCount={pagesCount}
        handleUpdatePage={updateParent}
        currentPageNo={currentPageNo}
      />
      <LovedThisContent />
    </>
  );
};
export default Video;
