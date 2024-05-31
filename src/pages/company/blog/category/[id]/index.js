import Breadcrumb from "@/Components/comman/Breadcrumb";
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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const baseURLBlog = `${process.env.STRAPI_PATH}/blogs?populate[0]=blog_category&populate[1]=FeaturedImage&sort=publishedAt:desc&pagination[limit]=${PER_PAGE_FIRST}`;

const baseURLCategory = `${process.env.STRAPI_PATH}/blog-categories?fields[0]=name&fields[1]=slug`;
const BlogCategory = () => {
  const router = useRouter();
  const [blogList, setBlogList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loaderStat, setLoader] = useState(false);
  const [pagesCount, setPagesCount] = useState(0);
  const [currentPageNo, setcurrentPageNo] = useState(1);

  const getBlogCategoryData = (slug, start) => {
    setLoader(true);
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    const baseURLUpdated =
      slug !== "all"
        ? baseURLBlog +
          "&filters[blog_category][slug][$eq]=" +
          slug +
          "&pagination[start]=" +
          start
        : baseURLBlog + "&pagination[start]=" + start;
    axios
      .get(baseURLUpdated)
      .then((response) => {
        setBlogList(response.data.data);
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

  const updateParent = (value) => {
    setcurrentPageNo(value);
    const postPerPage = getPageOffset(value) + PER_PAGE_FIRST;
    getBlogCategoryData(router.query.id, postPerPage - PER_PAGE_FIRST);
    window.scrollTo(0, 500);
  };

  const getBlogBySlug = (slug) => {
    if (slug === "all") {
      router.push(`/company/blog`);
    } else {
      router.push(`/company/blog/category/${slug}`);
    }
  };

  // get blog category
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
        setCategoryList([ {
          label: "All Topics",
          value: "all",
        }, ...response.data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // get blog list
  useEffect(() => {
    setcurrentPageNo(1);
    getBlogCategoryData(router.query.id, 0);
  }, [router.query.id]);

  return (
    <>
      {loaderStat && <Loader />}
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company/blog", label: "Blog" },
        ]}
      />
      <section className="pb-[50px]">
        <SidebarSection
          sidebarTitle="Blogs"
          sidebarFilterData={categoryList}
          onHandleFilter={(e) => {
            getBlogBySlug(e);
          }}
          renderElement={() =>
            blogList?.length > 0 ? (
              blogList?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-6 max-md:col-span-6 mb-8"
                  >
                    <StoreCard
                      btnLabel={
                        item?.attributes?.blog_category?.data?.attributes?.name
                      }
                      description={item?.attributes?.title}
                      bgImage={{
                        src: item?.attributes?.FeaturedImage?.data?.attributes
                          ?.url,
                        height: 900,
                        width: 900,
                        alt: "img",
                      }}
                      slug={`/company/blog/${item?.attributes.slug}`}
                    />
                  </div>
                );
              })
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
      <LovedThisContent />
    </>
  );
};

export default BlogCategory;
