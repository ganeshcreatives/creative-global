import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function HeadSection({
  title = "",
  description = "",
  canonical = "https://sekel.tech/",
  img = "/logo.svg",
  renderSchemaContent,
}) {
  const router = useRouter();

  const getBreadcrumbList = () => {
    const path = router.asPath;
    const pathList = path?.split("/");
    const itemList = pathList.map((item, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@id":
            item.trim() !== "product" &&
            item.trim() !== "company" &&
            item?.trim()?.length > 0
              ? `https://sekel.tech${path?.split(`/${item}`)[0]}/${item.trim()}`
              : "https://sekel.tech/",
          name:
            item?.trim()?.length > 0
              ? item
                  .toLowerCase()
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")
              : "Home",
        },
      };
    });
    return JSON.stringify(itemList);
  };

  function addOrganizationJsonLd() {
    return {
      __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sekel Tech",
        "url": "https://sekel.tech",
        "logo": "https://sekel.tech/img/sekel-logo.svg",
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+917942569371",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en","Hindi"]
        },{
          "@type": "ContactPoint",
          "telephone": "+917942569371",
          "contactType": "sales",
          "areaServed": "IN",
          "availableLanguage": ["en-US","Hindi"]
        }],
        "sameAs": [
          "https://facebook.com/SekelTechOfficial",
          "https://twitter.com/SekelTech",
          "https://instagram.com/Sekeltech",
          "https://www.youtube.com/@Niftywindow",
          "https://in.linkedin.com/company/nifty-window"
        ]
      }      
            `,
    };
  }
  function addBreadcrumbJsonLd() {
    return {
      __html: `{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "name": "Sekel Tech",
                "itemListElement": ${getBreadcrumbList()}
            }`,
    };
  }
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link
        rel="shortcut icon"
        href="https://sekel.tech/wp-content/uploads/2022/04/favicon-3.png"
        type="image/x-icon"
      />
      <link
        rel="icon"
        href="https://sekel.tech/wp-content/uploads/2022/04/favicon-3.png"
        type="image/x-icon"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="description" content={description} />
      <meta
        name="robots"
        content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Sekel Tech" />
      <meta property="og:image" content={img} />
      <meta property="og:image:secure_url" content={img} />
      <meta property="og:image:width" content="820" />
      <meta property="og:image:height" content="312" />
      <meta property="og:image:alt" content="sekel-tech-hyperlocal-platform" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@SekelTech" />
      <meta name="twitter:creator" content="@SekelTech" />
      <meta name="twitter:image" content={img} />
      <meta name="twitter:label1" content="Written by" />
      <meta name="twitter:data1" content="admin" />
      <meta name="twitter:label2" content="Time to read" />
      <meta name="twitter:data2" content="1 minute" />
      <meta
        name="facebook-domain-verification"
        content="c8q1fji1lnkhnv8ey7kd2l3zg62th1"
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
        dangerouslySetInnerHTML={addOrganizationJsonLd()}
        key="Organisation-jsonld"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addBreadcrumbJsonLd()}
        key="breadcrumb-jsonld"
      />
      {renderSchemaContent && renderSchemaContent()}
    </Head>
  );
}

export default HeadSection;
