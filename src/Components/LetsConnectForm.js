import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./comman/Button";
import {
  EMAIL_REGEX_EQUATION,
  IS_VALID_TEXT,
} from "@/constants/regex-validations-constants";
import {
  CHAR_INPUT,
  EMPTY_INPUT,
  INVALID_EMAIL_ID,
} from "@/constants/snackbar-error-msg";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { getQuote } from "@/services/get-quote";

const LetsConnectForm = ({ buttonLabel = "Get a Free Quote" }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div className="text-center mb-8 lg:mb-[52px]">
        <h4 className="text-[32px] lg:text-[42px] text-white font-medium leading-[140%] mb-1.5">
          Let's Connect
        </h4>
        <p className="text-base font-semibold text-white">
          Understand Our Solution Better!
        </p>
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .matches(IS_VALID_TEXT, CHAR_INPUT)
            .required(`Name ${EMPTY_INPUT}`),
          email: Yup.string()
            .matches(EMAIL_REGEX_EQUATION, INVALID_EMAIL_ID)
            .required(`Email ${EMPTY_INPUT}`),
          message: Yup.string().required(`Message ${EMPTY_INPUT}`),
        })}
        onSubmit={async (values, { resetForm }) => {
          try {
            setIsLoading(true);
            const pageList = router.asPath.split("/");
            const pageName = pageList.pop();
            const result = await getQuote({
              ...values,
              remark: pageName,
            });
            setIsLoading(false);
            if (result.status === 200 || result.data.success === true) {
              enqueueSnackbar("Mail sent successfully.", {
                variant: "success",
              });
              resetForm();
            } else {
              enqueueSnackbar("Something Went Wrong.", { variant: "error" });
            }
          } catch (error) {
            setIsLoading(false);
            enqueueSnackbar(error, { variant: "error" });
          }
        }}
      >
        <Form>
          <div className="mb-2">
            <Field
              className="bg-white text-white focus:outline-none rounded-lg bg-opacity-10 w-full py-3 px-5"
              placeholder="Your name"
              name="name"
              type="text"
            />
            <div className="h-5">
              <ErrorMessage
                name="name"
                component="span"
                className="text-red-600 text-xs"
              />
            </div>
          </div>
          <div className="mb-1">
            <Field
              className="bg-white text-white focus:outline-none rounded-lg bg-opacity-10 w-full py-3 px-5"
              placeholder="Email Adress"
              name="email"
              type="email"
            />
            <div className="h-5">
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-600 text-xs"
              />
            </div>
          </div>
          <div className="mb-1">
            <Field
              component="textArea"
              className="bg-white text-white focus:outline-none rounded-lg bg-opacity-10 w-full py-3 px-5 min-h-[150px] max-h-[181px]"
              placeholder="Message"
              name="message"
              type="text"
            />
            <div className="h-5">
              <ErrorMessage
                name="message"
                component="span"
                className="text-red-600 text-xs"
              />
            </div>
          </div>
          <Button
            data={buttonLabel}
            filled
            type="submit"
            disabled={isLoading}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default LetsConnectForm;
