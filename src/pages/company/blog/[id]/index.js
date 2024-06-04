import Breadcrumb from "@/Components/comman/Breadcrumb";
import StoreCard from "@/Components/comman/Card/StoreCard";
import ContentDetailsSection from "@/Components/comman/ContentDetailsSection";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import Loader from "@/Components/comman/Loader";
import StoreDetailBanner from "@/Components/comman/StoreDetailBanner";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";

const baseURLBlog = `${process.env.STRAPI_PATH}/blogs?populate[0]=FeaturedImage&populate[1]=blog_category&sort=publishedAt:desc&pagination[limit]=4&fields[0]=title&fields[1]=publishedAt&fields[2]=featuredImage&fields[3]=slug`;

const BlogDetails = () => {
  const router = useRouter();
  const [blogDetails, setBlogDetails] = useState([]);
  const [blogList, setBlogList] = useState([]);
  const [loaderStat, setLoader] = useState(false);
  useEffect(() => {
    if (router.query.id) {
      setLoader(true);
      const baseURL = `${process.env.STRAPI_PATH}/blogs?filters[slug][$eq]=${router.query.id}&populate[0]=blog_category&populate[1]=FeaturedImage`;
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
          setBlogDetails(response.data.data[0] || []);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [router.query.id]);

  // get blog list
  let currentBlog = router?.query?.id;
  useEffect(() => {
    const baseURLUpdated =
      baseURLBlog + "&pagination[start]=0&filters[slug][$ne]=" + currentBlog;
    if (window.location.protocol.indexOf("https") == 0) {
      var el = document.createElement("meta");
      el.setAttribute("http-equiv", "Content-Security-Policy");
      el.setAttribute("content", "upgrade-insecure-requests");
      document.head.append(el);
    }
    axios
      .get(baseURLUpdated)
      .then((response) => {
        setBlogList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentBlog]);

  const jsonLd = useMemo(() => {
    if (blogDetails?.attributes?.json_ld) {
        return blogDetails?.attributes?.json_ld
    }
    return [];
}, [blogDetails]);

function addBlogJsonLd() {
    return {
        __html: `${jsonLd}`
    }
}
  return (
    <>
      <Head>
        <title>{blogDetails?.attributes?.title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:url"
          content={`https://sekel.tech/company/blog/${router.query.id}`}
        ></meta>
        <link
          rel="canonical"
          href={`https://sekel.tech/company/blog/${router.query.id}`}
        />
        <meta
          property="og:title"
          content={blogDetails?.attributes?.meta_title}
        />
        <meta
          property="og:keyword"
          content={blogDetails?.attributes?.meta_keywords}
        />
        <meta
          property="og:description"
          content={blogDetails?.attributes?.meta_description}
        />
        <meta
          property="og:image"
          content={
            blogDetails?.attributes?.featuredImage?.data?.attributes?.url
          }
        />
        <meta name="keyword" content={blogDetails?.attributes?.meta_keywords} />
        <meta
          name="description"
          content={blogDetails?.attributes?.meta_description}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H6YV1LDG7Y"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments)};
                    gtag('js', new Date());
                    gtag('config', 'G-H6YV1LDG7Y');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addBlogJsonLd()}
          key="blog-jsonld"
        />
      </Head>
      {loaderStat && <Loader />}
      <StoreDetailBanner
        label={blogDetails?.attributes?.blog_category?.data?.attributes?.name}
        title={blogDetails?.attributes?.title}
        description={
          blogDetails?.attributes?.publishedAt
            ? new Date(blogDetails?.attributes?.publishedAt).toUTCString()
            : null
        }
        bgImage={{
          src: blogDetails?.attributes?.FeaturedImage?.data
            ? blogDetails?.attributes?.FeaturedImage?.data?.attributes?.url
            : `${"/img/defaultSekelBanner.jpg"}`,
          height: 900,
          width: 900,
          alt: "blog",
        }}
        sectionSty="bg-white py-[50px] md:py-[65px] lg:py-[100px]"
      />
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Company" },
          { link: "/company/blog", label: "Blogs" },
          {
            link: router.asPath,
            label: blogDetails?.attributes?.title,
          },
        ]}
      />

      <ContentDetailsSection
        heading={"Similar Blogs"}
        contentDetails={blogDetails?.attributes?.CKEditor}
        similarContentList={blogList}
        renderElement={(item, index) => (
          <StoreCard
            btnLabel={item?.attributes?.blog_category?.data?.attributes?.name}
            description={item?.attributes?.title}
            bgImage={{
              src: item?.attributes?.FeaturedImage?.data?.attributes?.url,
              height: 900,
              width: 900,
              alt: "img",
            }}
            slug={`/company/blog/${item?.attributes.slug}`}
          />
        )}
      />
      <LovedThisContent />
    </>
  );
};

export default BlogDetails;
