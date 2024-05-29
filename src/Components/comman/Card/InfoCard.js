import Image from "next/image";
import { useCallback } from "react";

const InfoCard = ({
  title,
  description,
  image,
  leadText,
  subTitle,
  subheadTitle,
  renderElement,
  renderSecondElement,
  renderFilterElement,
  bordershow = false,
  sectionStyle = "py-[50px] md:py-[75px] lg:py-[100px] bg-gray-100",
  containerSty = "container",
  containtWidth = "lg:max-w-[479px]",
  titleSty = "text-[32px] lg:text-[42px] font-medium leading-[52px] tracking-tighter text-black-33 mb-4",
  descriptionSty = "mx-auto md:mr-6 text-base font-normal leading-[25px]",
  imageContainerSty = "lg:max-h-[448px] lg:max-w-[692px] mx-auto",
  textContainerSty = "col-span-11 lg:col-span-5",
  imageContentSty = "col-span-11 lg:col-span-6",
  gridContainerSty = "grid grid-cols-11 md:gap-6",
  subTitleSty = "hidden",
  subheadTitleSty = "hidden",
  leadTextSty = "hidden",
  dashImageSty="hidden",
  mobileImageSty='ml-auto w-full max-w-[369px] max-lg:-mr-[30px] rounded-2xl overflow-hidden',
  mobileImage
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <section className={`${sectionStyle}`}>
        {renderFilterElement && renderFilterElement}
      <div className={`${containerSty}`}>
        <div className={` ${gridContainerSty}`}>
          <div className={`${textContainerSty}`}>
            <div className={`${containtWidth}`}>
              <h5 className={` ${subTitleSty}`}> {subTitle}</h5>
              <h3 className={` ${titleSty}`}>{title}</h3>
              <h4 className={` ${subheadTitleSty}`}>{subheadTitle}</h4>
              <p className={` ${descriptionSty}`}>{description}</p>
              <p className={` ${leadTextSty}`}>{leadText}</p>
              {renderElement}
            </div>
          </div>
          {image && (
            <>
              <div className={`${imageContentSty}`}>
                <div className={`${imageContainerSty} `}>
                  <Image
                    className="w-full h-full object-cover object-center"
                    {...image}
                  />
                </div>
              </div>
              {mobileImage && 
              
              <div className={`${dashImageSty}`}>
                <div className={`${mobileImageSty}`}>
                  <Image
                    className="w-full h-full"
                    {...mobileImage}
                  />
                </div>
              </div>
              }

            </>
          )}

          {renderSecondElement && <div className={imageContentSty}>{renderSecondElement}</div>}
        </div>
      </div>
      {bordershow && (
        <div className="bg-yellow-100 h-[46px] border-b border-yellow-900"></div>
      )}
    </section>
  );
};

export default InfoCard;
