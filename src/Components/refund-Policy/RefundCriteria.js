import React from "react";

function RefundCriteria() {
  const data = [
    {
      title: "Technical Issues:",
      desc: "If you encounter technical issues, including those arising during downtime and maintenance, that significantly impact the functionality of our premium tools and we are unable to resolve them promptly, you are eligible for a refund.",
    },
    {
      title: "Pay as you Go:",
      desc: "Please note that premium tools may come with additional usage-based charges, which will be applied based on your usage beyond the fixed monthly subscription charges.",
    },
    {
      title: "Cancellation Process:",
      desc: "There is no provision for cancelling subscription plans once they are initiated.",
    },
    {
      title: "Prorated Refunds:",
      desc: "We do not offer prorated refunds for partial usage of a subscription plan.",
    },
    {
      title: "Refund Method:",
      desc: "Approved refunds will be processed back to the original payment method used for the purchase, and your account will be adjusted accordingly.",
    },
    {
      title: "Cancellation Effect:",
      desc: "Cancellation of subscription plans is not available.",
    },
    {
      title: "Communication:",
      desc: "Our accounts team will communicate refund-related matters through email. Kindly ensure that you monitor your registered email address for correspondence from Sekel Tech.",
    },
    {
      title: "Terms and Conditions:",
      desc: "The terms and conditions related to our refund and cancellation policy can be found on our website. By using our services, you agree to adhere to these policies.",
    },
  ];
  return (
    <>
      <section className="font-mulish max-w-screen-2xl mx-auto w-screen py-8 lg:py-20 lg:pb-24">
        <div className="container mx-auto">
          <h3 className="text-left font-semibold text-[32px] py-4">
            Refund Criteria:
          </h3>
          <ul className="flex flex-wrap gap-5">
            {data.map((item, index) => {
              return (
                <li className="" key={index}>
                  <p className="text-left font-normal text-lg">
                    <span className="text-left font-semibold text-xl">
                      {item.title}
                    </span>
                    {item.desc}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <div className="font-mulish px-4 bg-secondPrimary bg-cover bg-no-repeat py-14">
        <div className="container mx-auto text-white">
          <p className="text-center font-semibold text-[26px] max-sm:text-xl">
            Support Contacts:
          </p>
          <p className="text-center font-semibold mt-3 text-2xl max-sm:text-base">
            <span className="text-center font-normal text-lg max-sm:text-base">
              For technical issues:
            </span>
            Email- support@sekel.tech
          </p>
          <p className="text-center font-semibold mt-3 text-2xl max-sm:text-base">
            <span className="text-center font-normal text-lg max-sm:text-base">
              For finance-related issues:
            </span>
            Email- accounts@sekel.tech
          </p>
        </div>
      </div>
    </>
  );
}

export default RefundCriteria;
