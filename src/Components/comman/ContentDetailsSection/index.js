import Image from "next/image";
import Link from "next/link";
import StoreCard from "../Card/StoreCard";

const ContentDetailsSection = ({
  contentDetails,
  similarContentList,
  heading,
  renderElement,
}) => {
  return (
    <>
      <section className="py-[50px] md:py-[65px] lg:py-[100px]">
        <div className="container">
          <div className="grid grid-cols-12 md:gap-8 gap-5">
            <div className="col-span-12 lg:col-span-8 max-md:mb-10">
              <div className="lg:pr-[60px]">
                <div
                  className="blogContent"
                  dangerouslySetInnerHTML={{
                    __html: contentDetails,
                  }}
                />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <h6 className="text-base font-normal mb-3"> Share</h6>
              <div className="flex items-center gap-3 mb-8">
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  {/* <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/SekelTech"
                  > */}
                  <Image
                    className="h-full w-full"
                    src={"/x-icon.png"}
                    height={32}
                    width={32}
                    alt="footer-logo"
                  />
                  {/* </Link> */}
                </div>
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/nifty-window/"
                  >
                    <Image
                      className="h-full w-full"
                      src={"/linkedin-icon.png"}
                      height={32}
                      width={32}
                      alt="footer-logo"
                    />
                  </Link>
                </div>
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/SekelTech/"
                  >
                    <Image
                      className="h-full w-full"
                      src={"/facebook-icon.png"}
                      height={32}
                      width={32}
                      alt="footer-logo"
                    />
                  </Link>
                </div>
                <div className="rounded-full overflow-hidden h-8 w-8 min-w-8">
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/sekeltech/"
                  >
                    <Image
                      className="h-full w-full"
                      src={"/instagram-icon.png"}
                      height={32}
                      width={32}
                      alt="footer-logo"
                    />
                  </Link>
                </div>
              </div>
              {similarContentList && (
                <>
                  <h4 className="text-[28px] font-medium text-black-33 max-md:mb-10 mb-3">
                    {heading}
                  </h4>
                  <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-2">
                    {similarContentList &&
                      similarContentList.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="col-span-6 lg:col-span-12 mb-[52px]"
                          >
                            {renderElement && renderElement(item, index)}
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContentDetailsSection;
