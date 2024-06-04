import React, { useCallback, useEffect, useState } from "react";
import Button from "../Button";
import DownArrow from "@/assets/DownArrow";
import { useRouter } from "next/router";

const SidebarSection = ({
  sidebarTitle,
  sidebarFilterData,
  renderElement,
  onHandleFilter,
  renderHeaderElement,
  cardContainerSty = "grid grid-cols-12 gap-x-4 lg:gap-x-8",
  sliderColSty = "col-span-12 lg:col-span-4 pt-[50px] lg:pt-[100px]",
  galleryColSty = "col-span-12 lg:col-span-8 pt-[50px] lg:pt-[100px]",
  galleryBoxSty = "",
  sliderBtnSty = "",
  sliderMainRow = "grid grid-cols-12 gap-6",
  sliderTabSty = "mb-3 lg:mb-6",
  sideTitleSty = "text-[42px] font-medium tracking-tighter mb-[52px]",
  sliderActTabSty = "mb-3 lg:mb-6",
}) => {
  const router = useRouter();
  const [currentFilter, setCurrentFilter] = useState("all");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleFilter = useCallback(
    (e) => {
      onHandleFilter && onHandleFilter(e);
    },
    [onHandleFilter]
  );

  useEffect(() => {
    if (router?.query?.id) {
      setCurrentFilter(router.query.id);
    }
  }, [router?.query?.id]);
  return (
    <div className="container">
      <div className={sliderMainRow}>
        <div className={sliderColSty}>
          <div className="flex justify-between items-start">
            <h4 className={sideTitleSty}>{sidebarTitle}</h4>
            {renderHeaderElement && (
              <div className="lg:hidden flex items-center gap-4 mt-3">
                {renderHeaderElement}
              </div>
            )}
          </div>
          {sidebarFilterData?.length > 0 && (
            <div className={sliderBtnSty}>
              {sidebarFilterData?.map((item, index) => (
                <div
                  className={`${
                    item?.value === currentFilter ||
                    item?.attributes?.slug === currentFilter
                      ? `max-lg:order-first max-lg:w-full text-left ${sliderActTabSty}`
                      : `${openDropdown ? "" : "max-lg:hidden"} ${sliderTabSty}`
                  }`}
                  onClick={() => {
                    handleFilter(item?.value || item?.attributes?.slug);
                    if (
                      item?.value === currentFilter ||
                      item?.attributes?.slug === currentFilter
                    ) {
                      setOpenDropdown(!openDropdown);
                    } else {
                      setOpenDropdown(false);
                    }
                    setCurrentFilter(item?.value || item?.attributes?.slug);
                  }}
                >
                  <Button
                    key={index}
                    data={
                      <p
                        className={`${
                          item?.value === currentFilter ||
                          item?.attributes?.slug === currentFilter
                            ? "flex justify-between items-center"
                            : ""
                        }`}
                      >
                        {item?.label || item?.attributes?.name}
                        {(item?.value === currentFilter ||
                          item?.attributes?.slug === currentFilter) && (
                          <span className="hidden max-lg:block">
                            <DownArrow />
                          </span>
                        )}
                      </p>
                    }
                    clsStyle={`max-lg:w-full max-lg:text-left py-2 border-transparent px-4 lg:px-4 text-sm whitespace-nowrap tracking-tight leading-[140%] text-black-3 block ${
                      item?.value === currentFilter ||
                      item?.attributes?.slug === currentFilter
                        ? "bg-yellow-100 max-lg:bg-white max-lg:border-gray-400 max-lg:w-full max-lg:text-start border-yellow-900"
                        : "text-black-33 border border-transparent"
                    }`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={galleryColSty}>
          {renderHeaderElement && (
            <div className="max-lg:hidden flex justify-end mb-8 gap-5">
              {renderHeaderElement}
            </div>
          )}
          <div className={galleryBoxSty}>
            <div className={cardContainerSty}>
              {renderElement && renderElement()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
