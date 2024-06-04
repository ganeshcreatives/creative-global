import { useCallback } from "react";
import Button from "../Button";
import { EMAIL_REGEX_EQUATION } from "@/constants/regex-validations-constants";
import { EMPTY_INPUT, INVALID_EMAIL_ID } from "@/constants/snackbar-error-msg";
import { getQuote } from "@/services/get-quote";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import * as Yup from "yup";
import { useRouter } from "next/router";
const GetStartForm = ({
  buttonTitle,
  onChangeHandler,
  onFocusHandler,
  onHandleClick,
  placeholder = "enter your email",
  type = "email",
  name = "email",
  value = "",
  filled = true,
  buttonActionType = "submit",
  clsStyle = "py-3 px-8 border-yellow-900",
  inputSty = "text-white placeholder:text-white border-white bg-gray-100 bg-opacity-10",
  formMainDiv = "max-md:flex-wrap",
}) => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const handlerChange = useCallback(
    (e) => {
      onChangeHandler && onChangeHandler(e);
    },
    [onChangeHandler]
  );

  const handlerFocus = useCallback(
    (e) => {
      onFocusHandler && onFocusHandler(e);
    },
    [onFocusHandler]
  );

  const handlerClick = useCallback(
    (e) => {
      onHandleClick && onHandleClick(e);
    },
    [onHandleClick]
  );
  return (
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
          const result = await getQuote({...values.email});
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
      {({ values, setFieldValue }) => (
        <Form>
          <div className={`flex gap-2 xl:gap-4 ${formMainDiv}`}>
            <Field
              type={type}
              name={name}
              placeholder={placeholder}
              value={value || values[name]}
              onChange={(e) => {
                handlerChange(e);
                type === "email" && setFieldValue(name, e.target.value);
              }}
              onFocus={handlerFocus}
              className={`max-md:w-full h-[50px] leading-5 py-2 px-8 border border-1 rounded-full focus:ring-0 focus:outline-none focus-visible:ring-0 ${inputSty}`}
            />

            <Button
              filled={filled}
              data={buttonTitle}
              clsStyle={clsStyle}
              action={handlerClick}
              type={buttonActionType}
            />
          </div>

          <ErrorMessage
            name={name}
            component="span"
            className="pt-4 text-red-600 text-center not-italic text-md"
          />
        </Form>
      )}
    </Formik>
  );
};

export default GetStartForm;
