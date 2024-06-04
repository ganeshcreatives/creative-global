import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Dropdown from "./Dropdown";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { product, company } from "@/static/json/header";

const Header = () => {
  let { asPath } = useRouter();

  let activeClass = useCallback(
    (activePath) => {
      if (asPath === activePath) {
        return "lg:border lg:border-yellow-900 text-blue-900";
      } else if (
        asPath.includes(activePath) &&
        activePath !== "/" &&
        activePath !== "/how-it-works"
      ) {
        return "lg:border lg:border-yellow-900 text-blue-900";
      } else {
        return "lg:border lg:border-transparent text-black-33";
      }
    },
    [asPath]
  );

  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header className="bg-blue-900 top-0 sticky z-[9999] transition-all">
      <div className="container w-full">
        <div className="flex items-center justify-between py-5 lg:py-8">
          <Link href={'/'} className="lg:w-[190px] md:w-[200px] lg:w-[221px]">
            <Image src={"/logo.svg"} width={221} height={34} alt="logo" />
          </Link>
          <div
            className={` ${
              toggle ? "max-lg:-right-[360px]" : "max-lg:right-0"
            } ml-auto max-lg:fixed max-lg:bg-white max-lg:shadow-[0px_0px_25px_rgba(0,0,0,0.15)] max-lg:max-w-[350px] w-full top-0 max-lg:pt-10 max-lg:pb-20 max-lg:px-5 max-lg:h-full bottom-0 transition-all	duration-300 z-[999]`}
          >
            <button onClick={handleClick} className="lg:hidden absolute right-3 top-3">
              <Image src={'/close.svg'} height={25} width={25} alt="" />
            </button>
            <ul className="justify-end lg:flex items-center gap-x-1 max-lg:max-h-[calc(100vh_-_120px)] max-lg:overflow-y-auto">
              <li>
                <Link
                  href={"/"}
                  className={`max-lg:block text-black-33 lg:text-white leading-[140%] tracking-tight lg:px-3 xl:px-8 py-6 lg:py-2 font-medium lg:rounded-full max-lg:border-b border-[#A3ACB1]/60 ${activeClass(
                    "/"
                  )}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <div className={`${activeClass("product")} rounded-full`}>
                  <Dropdown
                    text="Products"
                    list={product}
                    image={{ src: "/Product.png", height: 176, width: 200 }}
                  />
                </div>
              </li>
              <li>
                <Link
                  href={"/how-it-works"}
                  className={`max-lg:block text-black-33 lg:text-white leading-[140%] tracking-tight lg:px-3 xl:px-8 py-6 lg:py-2 font-medium lg:rounded-full max-lg:border-b border-[#A3ACB1]/60 ${activeClass(
                    "/how-it-works"
                  )}`}
                >
                  How it works
                </Link>
              </li>
              <li>
                <div className={`${activeClass("company")} rounded-full`}>
                  <Dropdown
                    text="Company"
                    list={company}
                    dropdownContainerSty="w-full lg:w-[668px]"
                    image={{ src: "/company-img.png", height: 176, width: 200 }}
                  />
                </div>
              </li>
              <li>
                <Link href={"https://app.sekel.tech/login"} target="_blank" rel="noopener noreferrer" className="max-lg:absolute bottom-5 left-5 flex lg:ml-3">
                  <Button filled data="Log In" />
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="h-[42px] w-[42px] p-1 lg:hidden"
            onClick={handleClick}
          >
            <Image
              src={"/web-menu.svg"}
              width={25}
              height={25}
              alt=""
              className="h-full w-full"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
