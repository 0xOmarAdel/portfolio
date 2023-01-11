import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import FormError from "./ContactFormError";
import {
  opacityVariants,
  slideInFromBottomVariants,
  scaleOpacityVariants,
} from "../../utils/motion";
import { useInView } from "react-intersection-observer";

const ContactForm: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [submissionState, setSubmissionState] = useState<
    "success" | "error" | null
  >();

  const formRef = useRef<HTMLFormElement>(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "First name must be 15 characters or less.")
        .required("First name is required."),
      lastName: Yup.string()
        .max(15, "Last name must be 15 characters or less.")
        .required("Last name is required."),
      email: Yup.string()
        .email("Invalid email address.")
        .required("Email is required."),
      message: Yup.string()
        .min(20, "Message must be 20 at least characters.")
        .required("Message is required."),
    }),
    onSubmit: async () => {
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current!,
          import.meta.env.VITE_PUBLIC_KEY
        );

        setSubmissionState("success");
      } catch (error) {
        setSubmissionState("error");
      }
    },
  });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={slideInFromBottomVariants(50)}
      className="glass shadow order-2 lg:order-1 h-fit px-10 py-12 flex flex-col gap-6 text-white"
      ref={ref}
    >
      <h2 className="text-3xl text-gray-300 font-semibold tracking-tight">
        Contact Me
      </h2>
      <form
        ref={formRef}
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
            <div className="flex flex-col gap-2">
              <motion.input
                variants={opacityVariants(0.5, 0.5)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <FormError error={formik.errors.firstName} />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <motion.input
                variants={opacityVariants(0.5, 0.75)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="input"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <FormError error={formik.errors.lastName} />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <motion.input
            variants={opacityVariants(0.5, 1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <FormError error={formik.errors.email} />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <motion.textarea
            variants={opacityVariants(0.5, 1.25)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            id="message"
            name="message"
            placeholder="Message.."
            className="input !h-[250px] resize-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <FormError error={formik.errors.message} />
          )}
        </div>
        <motion.button
          variants={scaleOpacityVariants(0.5, 0.2, 1.5)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          type="submit"
          className="mt-3 py-2 bg-violet-800 rounded-sm text-lg text-gray-200 font-semibold transition duration-200 hover:bg-violet-900 hover:text-white active:scale-95"
        >
          Submit
        </motion.button>
      </form>
      {submissionState === "success"
        ? "Your message has been sent successfully"
        : submissionState === "error"
        ? "An error occurred."
        : ""}
    </motion.div>
  );
};

export default ContactForm;
