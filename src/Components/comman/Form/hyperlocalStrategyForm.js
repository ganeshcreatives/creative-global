import Button from "../Button";
import { EMAIL_REGEX_EQUATION } from "@/constants/regex-validations-constants";
import { EMPTY_INPUT, INVALID_EMAIL_ID } from "@/constants/snackbar-error-msg";
import { getQuote } from "@/services/get-quote";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import * as Yup from "yup";

const HyperlocalStrategyForm = ({
  title = "Supercharge Your Hyperlocal Strategy Today!",
  placeholder = "Enter your email",
  buttonTitle = "Get a  FREE Audit",
  containerSty = "container lg:flex lg:gap-8 items-center",
  sectionSty = "py-6 md:py-8 bg-yellow-100 lg:py-[18px] rounded-[14px]",
  showForm = true,
  newsTitle = "text-blue-600",
}) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className={sectionSty}>
      <div className={`${containerSty}`}>
        {title && (
          <p
            className={`${newsTitle} max-lg:mb-5 max-lg:text-center text-[28px] font-medium`}
          >
            {title}
          </p>
        )}
        {showForm && (
          <div className="flex-1">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .matches(EMAIL_REGEX_EQUATION, INVALID_EMAIL_ID)
                  .required(`Email ${EMPTY_INPUT}`),
              })}
              onSubmit={async (values, { resetForm }) => {
                try {
                  setIsLoading(true);
                  const pageList = router.asPath.split("/");
                  const pageName = pageList.pop();
                  const result = await getQuote({ email, remark: pageName });
                  setIsLoading(false);
                  if (result.status === 200 || result.data.success === true) {
                    enqueueSnackbar("Mail sent successfully.", {
                      variant: "success",
                    });
                    resetForm();
                  } else {
                    enqueueSnackbar("Something Went Wrong.", {
                      variant: "error",
                    });
                  }
                } catch (error) {
                  setIsLoading(false);
                  enqueueSnackbar(error.response.data.data, {
                    variant: "error",
                  });
                }
              }}
            >
              {({}) => (
                <Form>
                  <div className="sm:flex gap-4">
                    <Field
                      className="white-input h-[50px] max-sm:mb-3 max-sm:w-full text-black-33 placeholder:text-black-33 flex-grow leading-5 py-2 px-8 border border-1 border-gray-400 rounded-full bg-white focus:ring-0 focus:outline-none focus-visible:ring-0"
                      type="email"
                      placeholder={placeholder}
                      name="email"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      data={buttonTitle}
                      clsStyle="h-[50px] max-sm:w-full py-3 px-10 bg-blue-900 border-yellow-900 text-white"
                    />
                  </div>

                  <ErrorMessage
                    name="email"
                    component="span"
                    className="font-sans pt-4 text-red-600 text-center not-italic text-md"
                  />
                </Form>
              )}
            </Formik>
          </div>
        )}
      </div>
    </div>
  );
};

export default HyperlocalStrategyForm;
