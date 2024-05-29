import React from "react";
import HyperlocalStrategyForm from "./hyperlocalStrategyForm";

const LovedThisContent = ({
  loveDesSty = "text-black-33 max-lg:mb-5 max-lg:text-center text-base max-w-[570px] font-medium",
}) => {
  return (
    <div className="bg-yellow-100 py-6 lg:py-8 rounded-[14px]">
      <div className="container lg:flex lg:gap-8 items-center">
        <div>
          <h4 className="text-[28px] font-medium text-black-33 mb-4 leading-8">
            Loved this content?
          </h4>

          <p className={loveDesSty}>
            Sign up for our newsletter and get the latest tips & updates
            directly in your inbox.
          </p>
        </div>
        <div className="flex-1">
          
          <HyperlocalStrategyForm
            title="There’s more where that came from!"
            newsTitle="text-black-33 mb-4"
            buttonTitle="Subscribe"
            sectionSty=""
            containerSty="flex-col"
          />
        </div>
      </div>
    </div>
  );
};

export default LovedThisContent;
