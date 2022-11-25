import { motion as m } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  setIsSubmitted: (isSubmitted: boolean) => void;
  setName: (name: string) => void;
}

const ContactForm = (props: Props) => {
  const router = useRouter();
  const { setIsSubmitted, setName } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Please enter your name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      message: Yup.string()
        .max(500, "Must be 500 characters or less")
        .required("Please enter your message"),
    }),

    onSubmit: (values, { resetForm }) => {
      setName(values.name);
      setIsSubmitted(true);
      resetForm();
      emailjs
        .send(
          "service_jog5pb8",
          "template_ygihj7i",
          values,
          "_3BT3S745dWC8Drzm"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });

  const handleBlur = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    formik.setFieldTouched(e.target.name);
    setTimeout(() => {
      router.replace("/#contact");
    }, 150);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-3/4 md:w-full mx-auto flex-col space-y-1 md:space-y-4"
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="name"
          className={`text-base md:text-xl ${
            formik.errors.name && formik.touched.name ? "text-red-500" : ""
          }`}
        >
          {formik.errors.name && formik.touched.name
            ? formik.errors.name
            : "Name"}
        </label>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          className={`bg-transparent pr-2 py-2 border-b-2 border-gray-500 focus:outline-none focus:border-white ${
            formik.errors.name && formik.touched.name ? "border-red-500" : ""
          }`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="email"
          className={`text-base md:text-xl ${
            formik.errors.email && formik.touched.email ? "text-red-500" : ""
          }`}
        >
          {formik.errors.email && formik.touched.email
            ? formik.errors.email
            : "Email"}
        </label>
        <input
          type="email"
          name="email"
          autoComplete="off"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          className={`bg-transparent border-b-2 pr-2 py-2 border-gray-500 focus:outline-none focus:border-white ${
            formik.errors.email && formik.touched.email ? "border-red-500" : ""
          }`}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="message"
          className={`text-base md:text-xl ${
            formik.errors.message && formik.touched.message
              ? "text-red-500"
              : ""
          }`}
        >
          {formik.errors.message && formik.touched.message
            ? formik.errors.message
            : "Message"}
        </label>
        <textarea
          name="message"
          rows={5}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={handleBlur}
          className={`bg-transparent border-b-2 pr-2 py-2 border-gray-500 focus:outline-none focus:border-white resize-none ${
            formik.errors.message && formik.touched.message
              ? "border-red-500"
              : ""
          } `}
        />
      </div>
      <m.button
        whileTap={{ scale: 0.85 }}
        transition={{ duration: 0.2 }}
        type="submit"
        className="inline-block self-end py-1 px-2 uppercase font-bold bg-white text-myBlack rounded-lg pb-2"
      >
        Submit
      </m.button>
    </form>
  );
};

export default ContactForm;
