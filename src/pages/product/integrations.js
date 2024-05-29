import Breadcrumb from "@/Components/comman/Breadcrumb";
import Card from "@/Components/comman/Card";
import HyperlocalStrategyForm from "@/Components/comman/Form/hyperlocalStrategyForm";
import SidebarSection from "@/Components/comman/SidebarSection";
import {
  integrationsFilterData,
  intigrationsCardData,
} from "@/static/json/integrations";
const Integrations = () => {
  return (
    <>
      <Breadcrumb
        breadcrumbList={[
          { link: "/", label: "Home" },
          { link: "/product", label: "Product" },
          { link: "/product/integrations", label: "Integrations" },
        ]}
      />

      <SidebarSection
        sidebarTitle="Intigrations"
        sliderMainRow="grid grid-cols-12 gap-6 mb-10"
        sidebarFilterData={integrationsFilterData}
        cardContainerSty="grid grid-cols-12 gap-8"
        cardList={intigrationsCardData}
        renderElement={(item, index) => (
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
        )}
      />
      <HyperlocalStrategyForm />
    </>
  );
};

export default Integrations;
