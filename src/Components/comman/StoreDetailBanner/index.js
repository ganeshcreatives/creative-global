import Image from "next/image";
import React from "react";

const StoreDetailBanner = ({
  label,
  title,
  description,
  bgImage,
  storeLogo,
  sectionSty = "bg-blue-200 py-[50px]",
  imageBgColor = "",
}) => {
  return (
    <section className={sectionSty}>
      <div className="container">
        <div className="grid grid-cols-11 md:gap-8 gap-5 items-center">
          <div className="col-span-12 md:col-span-6">
            <div className="lg:max-w-[479px] lg:my-[20px] mb-[30px]">
              {label && (
                <p className="text-base border-[1px] border-yellow-900 font-medium tracking-tight leading-[22px] text-black-33 py-2 px-8 bg-yellow-100 rounded-full inline-block mb-4">
                  {label}
                </p>
              )}
              <h2 className="text-[32px] lg:text-[42px] font-medium leading-[140%] mb-4 tracking-tight">
                {title}
              </h2>
              <p className="text-2xl font-normal text-black-33">
                {description}
              </p>
            </div>
          </div>
          {(bgImage || storeLogo) && (
            <div className="col-span-12 md:col-span-5">
              <div className="ml-auto relative w-full lg:max-w-[379px] lg:max-h-[383px] w-full h-full border-[1px] border-blue-200 rounded-2xl overflow-hidden flex items-center justify-center">
                {bgImage && <Image {...bgImage} />}

                {storeLogo && (
                  <div
                    className={`absolute flex items-center justify-center p-2 w-[130px] h-[130px] m-auto ${imageBgColor}`}
                  >
                    <Image {...storeLogo} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StoreDetailBanner;
