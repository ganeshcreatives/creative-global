import Link from "next/link";
import React from "react";

const Breadcrumb = ({ breadcrumbList , sectionSty = 'bg-blue-200 py-2'}) => {
  return (
    <div className={`${sectionSty}`}>
      <div className="container">
        <div className="text-base text-black-33 leading-6">
          {breadcrumbList?.map((breadcrumb, index) => {
            return (
              <Link key={index} href={breadcrumb?.link}>{`${breadcrumb?.label}${
                index < breadcrumbList?.length - 1 ? ">" : ""
              }`}</Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
