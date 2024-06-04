import HeadSection from "@/Components/HeadSection";
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
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const baseURLBlog = `${process.env.STRAPI_PATH}/blogs?populate[0]=blog_category&populate[1]=FeaturedImage&sort=publishedAt:desc&pagination[limit]=${PER_PAGE_FIRST}`;

const baseURLCategory = `${process.env.STRAPI_PATH}/blog-categories?fields[0]=name&fields[1]=slug`;

const Blog = () => {
  const router = useRouter();
  const [blogList, setBlogList] = useState([]);
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

  const getBlogBySlug = (slug) => {
    setLoader(true);
    setcurrentPageNo(1);
    router.push(`/company/blog/category/${slug}`);
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
        setCategoryList([
          {
            label: "All Topics",
            value: "all",
          },
          ...response.data.data,
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // get blog list
  useEffect(() => {
    setLoader(true);
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    const baseURLUpdated = baseURLBlog + "&pagination[start]=" + start;
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
  }, [start]);

  const getItemListSchemaData = () => {
    if (blogList.length !== 0) {
      const cardData = blogList;
      const itemListData = cardData.map((item, index) => {
        return {
          "@type": "ListItem",
          position: index + 1,
          name: item?.attributes?.title,
          url: `https://sekel.tech/company/blog/${item?.attributes?.slug}`,
        };
      });
      const itemSchemaData = `
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "url": "https://sekel.tech/blog",
          "itemListOrder": "http://schema.org/ItemListOrderAscending",
          "numberOfItems":${blogList.length},
          "name": "Blog - Sekel Tech",
          "itemListElement": ${JSON.stringify(itemListData)}
          }
          `;
      return itemSchemaData;
    }
    return null;
  };

  function addBlogJsonLd() {
    return {
      __html: getItemListSchemaData(),
    };
  }

  return (
    <>
      <HeadSection
        title="Blog | Sekel Tech"
        description="Navigate the complexities of growing your business online with Sekel Tech. Dive into our informative blogs for valuable insights into the digital realm."
        canonical="https://sekel.tech/company/blog/"
        img="/logo.svg"
        renderSchemaContent={() => (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addBlogJsonLd()}
            key="blog-jsonld"
          />
        )}
      />

      {loaderStat && <Loader />}
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Company" },
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
                    className="col-span-6 max-md:col-span-6 mb-12"
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

export default Blog;
