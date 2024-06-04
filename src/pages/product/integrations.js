import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import Loader from "@/Components/comman/Loader";
import SidebarSection from "@/Components/comman/SidebarSection";
import {
  integrationsFilterData,
  intigrationsCardData,
} from "@/static/json/integrations";
import { useEffect, useState } from "react";
const Integrations = () => {
  const [integrationList, setIntegrationList] = useState([]);
  const [loaderStat, setLoader] = useState(false);
  const getIntergationByCategory = (category) => {
    setLoader(true);
    let data = category === 'all'?intigrationsCardData:intigrationsCardData?.filter((item, index) =>
      item.slug.includes(category)
    );
    setIntegrationList(data);
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    setIntegrationList(intigrationsCardData);
    setLoader(false);
  }, []);
  return (
    <>
      {loaderStat && <Loader />}
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/", label: "Product" },
          { link: "/product/integrations", label: "Integrations" },
        ]}
      />

      <SidebarSection
        sidebarTitle="Intigrations"
        sliderMainRow="grid grid-cols-12 gap-6 mb-10"
        sidebarFilterData={integrationsFilterData}
        onHandleFilter={(e) => getIntergationByCategory(e)}
        cardContainerSty="grid grid-cols-12 gap-8"
        renderElement={() =>
          integrationList?.length > 0 ? (
            integrationList?.map((item, index) => (
              <div key={index} className="col-span-6 max-md:col-span-6">
                <Card
                  {...item}
                  headingSty="text-[24px] font-medium leading-[140%] text-black-900 mb-4"
                  cardSty="border border-gray-400 bg-gray-100 p-6 rounded-2xl h-full"
                  cardDataSty=""
                  titleIconSty="h-[80px] w-full mb-4 max-w-[172px]"
                  iconSty="max-h-full h-full max-w-full w-auto object-contain object-left"
                  descriptionSty="mb-0 line-clamp-2 text-base font-normal text-black-33"
                />
              </div>
            ))
          ) : (
            <p className="col-span-12 text-center pb-[80px]">Not Found !!!</p>
          )
        }
      />
      <HyperlocalStrategyForm />
    </>
  );
};

export default Integrations;
