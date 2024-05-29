import Image from "next/image";

const ImageCard = ({
  image,
  footer,
  containerSty = "p-5 min-w-[350px] max-w-[350px]",
  imgContainerSty = "mb-5 h-[280px]",
}) => {
  return (
    <div id="scrollImage" 
      className={`${containerSty} bg-blue-100 bg-opacity-10 rounded-xl`}
    >
      <div className={` ${imgContainerSty} w-full rounded-xl overflow-hidden`}>
        <Image
          className="w-full h-full object-cover object-center"
          {...image}
        />
      </div>
      {footer && (
        <div className="flex gap-2 justify-between items-center">
          <div className="w-[110px]">
            <Image className="w-full h-full" {...footer.image} />
          </div>
          <div className="flex items-center gap-4">
            {footer.title && (
              <p className="text-base font-normal text-white w-16">
                {footer.title}
              </p>
            )}
            {footer.size && (
              <p className="text-[54px] font-normal leading-[60px] text-white">
                {footer.size}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
