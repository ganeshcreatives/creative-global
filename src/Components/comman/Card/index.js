import Image from "next/image";
import { useCallback } from "react";

const Card = ({
  titleIcon,
  title,
  description,
  image,
  cardCountNo = null,
  cardCountNoSty = "",
  actionType,
  action,
  buttonIcon,
  learnMore,
  dataDivSty,
  cardDataSty = "mb-6",
  cardImgSty = "",
  cardSty = "p-4 md:p-5 lg:p-10 rounded-2xl h-full bg-gray-100",
  headingSty = "mb-4 leading-[140%] text-[24px] lg:text-[28px] font-medium text-black-33 tracking-tight",
  buttonSty = "flex gap-1 items-center text-base font-medium",
  renderElement = null,
  descriptionSty = "text-base font-normal leading-[140%] text-black-33 mb-4",
  titleIconSty = "h-[60px] w-[60px] rounded-full bg-yellow-100 flex items-center justify-center mb-5 lg:mb-8 ",
  iconSty = "",
  iconNumberSty="text-[28px] font-medium text-blue-900"
}) => {
  const handleAction = useCallback(() => action && action());
  return (
    <div className={`${cardSty}`}>
      {cardCountNo && (
        <p
          className={`text-white text-[54px] font-normal leading-[140%] absolute right-4 top-10 ${cardCountNoSty}`}
        >
          {cardCountNo}
        </p>
      )}
      <div className={`${cardDataSty}`}>
        {titleIcon && (
          <div className={`${titleIconSty}`}>
            {titleIcon?.src && (
              <Image {...titleIcon} className={`${iconSty}`} />
            )}
            {titleIcon?.iconNumber && (
              <p className={iconNumberSty}>
                {titleIcon.iconNumber}
              </p>
            )}
          </div>
        )}
        <div className={`${dataDivSty}`}>
          <h2 className={`${headingSty}`}>{title}</h2>
          <div>
            <p className={`${descriptionSty}`}>{description}</p>
          </div>
        </div>
        {actionType && (
          <button onClick={handleAction} className={`${buttonSty}`}>
            {actionType}
            {buttonIcon && <div>{buttonIcon}</div>}
          </button>
        )}
      </div>
      {image?.src && (
        <div className={`${cardImgSty} `}>
          <Image
            className="mx-auto"
            height={57}
            width={300}
            alt="img"
            {...image}
          />
        </div>
      )}
      {renderElement && renderElement}
    </div>
  );
};

export default Card;
