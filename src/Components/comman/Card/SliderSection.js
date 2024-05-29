import Image from "next/image";
import { useEffect, useState } from "react";

const SliderSection = ({
  title,
  description,
  sliderImage = [],
  renderElement,
  profileButton = false,
  textContentSty = "col-span-10 lg:col-span-4",
  cardContentSty = "col-span-10 lg:col-span-6",
  discriptionSty = "max-w-[240px]",
  clickImageAction = () => {},
}) => {
  let [imageIndex, setImageIndex] = useState(0);
  let [prevIndex, setPrevIndex] = useState(0);
  function scrollImage(direction, iconClcik = false) {
    const image = document.getElementById("scrollImage");
    const imageContainer = document.querySelector(".image-container");

    const imageWidth = image.clientWidth;

    const scrollAmount = iconClcik
      ? image.clientWidth
      : direction > prevIndex
      ? direction * imageWidth
      : -(prevIndex * imageWidth - direction * imageWidth);

    imageContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section className="bg-blue-900 py-[54px]">
      <div className="container">
        <div className="grid grid-cols-10 gap-x-5">
          <div className={`${textContentSty} flex items-center`}>
            <div className="w-full text-white max-lg:pb-10">
              <h1 className="text-[36px] leading-[120%] lg:text-[42px] font-medium tracking-tighter lg:leading-[140%] mb-5">
                {title}
              </h1>
              <p
                className={`text-base font-normal leading-[25px] mb-6 lg:mb-[52px] ${discriptionSty}`}
              >
                {description}
              </p>
              {profileButton && (
                <div className="flex gap-10 items-center">
                  <p className="text-base font-semibold leading-[22px]">
                    See all Case studies
                  </p>
                  <div>
                    <div className="flex items-center">
                      <div
                        className="shadow border-[1px] border-blue-900 h-8 w-8 rounded-full relative z-[8] hover:z-[9] transition-all overflow-hidden flex items-center justify-center bg-yellow-900 min-w-8 text-white p-1 text-xs"
                        onClick={() => {
                          if (sliderImage.length - 2 > imageIndex) {
                            setImageIndex(imageIndex + 1);
                          }
                          setPrevIndex(prevIndex + 1);
                          scrollImage(3, true);
                        }}
                      >
                        <Image
                          className="w-6 "
                          src={"/forward-arrow.png"}
                          height={32}
                          width={32}
                          alt="img"
                        />
                      </div>
                      {sliderImage.map((item, index) => {
                        if (index >= imageIndex && index < 2 + imageIndex) {
                          return (
                            <div
                              key={index}
                              className="h-8 w-8 min-w-8 rounded-full -ml-2 relative z-[7] hover:z-[9] transition-all overflow-hidden shadow border-[1px] border-blue-900"
                              onClick={() => {
                                if (
                                  index >= imageIndex &&
                                  index > prevIndex &&
                                  index !== sliderImage.length - 1
                                ) {
                                  setImageIndex(index);
                                  scrollImage(index);
                                  setPrevIndex(index);
                                } else if (index <= prevIndex && index > 0) {
                                  setImageIndex(index === 1 ? 0 : index - 1);
                                  scrollImage(index - 1);
                                  setPrevIndex(index === 1 ? 0 : index);
                                }
                              }}
                            >
                              <Image
                                src={item.src}
                                height={32}
                                width={32}
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={`${cardContentSty}`}>
            <div className="w-full flex gap-5 overflow-x-auto pb-5 image-container">
              {renderElement}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
