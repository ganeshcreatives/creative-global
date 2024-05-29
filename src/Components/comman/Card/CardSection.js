const CardSection = ({
  title,
  description = null,
  subTitle = null,
  subTitleSty = '',
  renderElement,
  headerSection,
  headingSty = "text-center mb-[36px] lg:mb-[52px]",
  descriptionSty = "text-base font-normal leading-[140%] text-black-33 max-w-[456px] mx-auto",
  sectionStyle = "py-[50px] md:py-[75px] lg:py-[100px] bg-white",
  titleSty = 'text-[32px] lg:text-[42px] font-medium mb-3 leading-[140%] tracking-tighter text-black-33'
}) => {
  return (
    <section className={`${sectionStyle}`}>
      <div className="container">
        <div className={`${headingSty}`}>
          <div>
            <h3 className={`${titleSty}`}>
              {title}
            </h3>
            {subTitle && (
              <p
                className={`text-[28px] font-medium leading-[140%] mb-8 tracking-tight ${
                  subTitleSty 
                }`}
              >
                {subTitle}
              </p>
            )}
            {description && (
              <p
              className={`${descriptionSty}`}
              >
                {description}
              </p>
            )}
          </div>
          {headerSection}
        </div>
        {renderElement()}
      </div>
    </section>
  );
};

export default CardSection;
