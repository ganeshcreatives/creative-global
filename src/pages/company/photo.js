import Breadcrumb from "@/Components/comman/Breadcrumb";
import Button from "@/Components/comman/Button";
import LovedThisContent from "@/Components/comman/Form/LovedThisContent";
import Loader from "@/Components/comman/Loader";
import Pagination from "@/Components/comman/Pagination";
import {
  PER_PAGE_FIRST,
  getPageOffset,
  totalPagesCount,
} from "@/constants/pagination";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const baseURLPhoto = `${process.env.STRAPI_PATH}/photos?populate[0]=photo_category&populate[1]=photo&sort=publishedAt%3Adesc&pagination[limit]=${PER_PAGE_FIRST}`;

function Photo() {
  const router = useRouter();
  const [loaderStat, setLoader] = useState(false);
  const [start, setStart] = useState(0);
  const [pagesCount, setPagesCount] = useState(0);
  const [photoList, setPhotoList] = useState([]);
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
    setLoader(true);
    const baseURLUpdated = baseURLPhoto + "&pagination[start]=" + start;
    axios
      .get(baseURLUpdated)
      .then((response) => {
        setPhotoList(response.data.data);
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
  return (
    <>
      {loaderStat && <Loader />}
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/company", label: "Company" },
          { link: "/company/gallery", label: "Gallery" },
        ]}
      />
      <section className="py-[50px] lg:py-[100px]">
        <div className="container">
          <div className="flex justify-between items-start mb-8 lg:mb-[50px] gap-5">
            <h4 className="text-[42px] font-medium tracking-tighter">
              Gallery
            </h4>
            <div className="flex items-center gap-4 mt-3">
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
                data="Gallery"
                clsStyle={`max-lg:w-full max-lg:text-left py-2 border-transparent px-4 lg:px-4 text-sm whitespace-nowrap tracking-tight leading-[140%] text-black-3 block ${
                  router.asPath.includes("photo")
                    ? "bg-yellow-100 max-lg:bg-white max-lg:border-gray-400 max-lg:w-full max-lg:text-start border-yellow-900"
                    : "text-black-33 border border-transparent"
                }`}
                action={() => router.push("/company/photo")}
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4 lg:gap-x-8">
            {photoList?.length > 0 ? (
              photoList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-span-6 md:col-span-4 lg:col-span-3 mb-10"
                  >
                    <div className="rounded-[20px] overflow-hidden h-[158px] md:h-[175px] lg:h-[200px] xl:h-[260px]">
                      <Image
                        src={item?.attributes?.photo?.data?.attributes?.url}
                        alt="img"
                        height="390"
                        width="400"
                        className="object-cover rounded-[8px] object-center cursor-pointer w-full h-full"
                      />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="col-span-12 text-center">No Photo Found !!!</p>
            )}
          </div>
        </div>
      </section>
      <Pagination
        pagesCount={pagesCount}
        handleUpdatePage={updateParent}
        currentPageNo={currentPageNo}
      />
      <LovedThisContent />
    </>
  );
}
export default Photo;
