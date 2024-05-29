import Image from "next/image";

const { createPaginationLinks } = require("@/constants/pagination");
const { useState } = require("react");

const Pagination = ({
  pagesCount,
  postName,
  handleUpdatePage,
  paginationStatus = false,
}) => {
  const [currentPageNo, setcurrentPageNo] = useState(1);
  // if (!pagesCount || !postName) {
  // 	return null;
  // }
  let paginationLinks = createPaginationLinks(currentPageNo, pagesCount);
  const updatePage = (value) => {
    setcurrentPageNo(value);
    paginationLinks = createPaginationLinks(currentPageNo, pagesCount);
    handleUpdatePage && handleUpdatePage(value);
  };
  if (paginationStatus) {
    paginationLinks = createPaginationLinks(1, pagesCount);
  }
  return (
    <section className="py-[30px]">
      <div className="container">
        <nav aria-label="Page navigation example" className="justify-end flex">
          <div class="flex items-center text-base h-10">
            <button
              onClick={() => updatePage(currentPageNo - 1)}
              disabled={currentPageNo === 1}
              class="flex items-center p-1.5 justify-center w-[32px] h-[32px] rounded-full text-black-33/60 border border-black-33/30 bg-white mr-5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Image
                src={"/arrow.svg"}
                width={35}
                height={35}
                alt=""
                className="rotate-180"
              />
            </button>
            {paginationLinks?.map((item, index) =>
              typeof item === "number" ? (
                <button
                  onClick={() => updatePage(item)}
                  className={`flex items-center justify-center p-2 mx-1.5 text-[16px] font-semibold rounded-full ${
                    currentPageNo === item
                      ? "w-[45px] h-[45px] text-white border border-blue-900 bg-blue-900"
                      : "w-[36px] h-[36px] text-black-33/60 border border-black-33/30 bg-white"
                  }`}
                >
                  {item}
                </button>
              ) : (
                <button className="flex items-center justify-center p-2 w-[36px] h-[36px] mx-1.5 text-[16px] font-semibold text-black-33/60 bg-white">
                  ...
                </button>
              )
            )}

            <button
              onClick={() => updatePage(currentPageNo + 1)}
              disabled={currentPageNo === pagesCount}
              class="flex items-center p-1.5 justify-center w-[32px] h-[32px] rounded-full text-black-33/60 border border-black-33/30 bg-white ml-5 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Image src={"/arrow.svg"} width={35} height={35} alt="" />
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Pagination;
