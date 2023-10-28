import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

const ContactForm = () => {
  return (
    <div className="glass order-2 lg:order-1 z-50 h-fit px-10 py-12 flex flex-col gap-6 text-white">
      <h2 className="text-3xl text-gray-300 font-semibold tracking-tight">
        Contact Me
      </h2>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8">
            <Field
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className="input"
            />
            <Field
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="input"
            />
          </div>
          <Field
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="input"
          />
          <Field
            as="textarea"
            id="email"
            name="message"
            placeholder="Message.."
            type="email"
            className="input h-[250px] resize-none"
          />

          <button
            type="submit"
            className="mt-3 py-2 bg-violet-800 rounded-sm text-lg text-gray-200 font-semibold transition duration-200 hover:bg-violet-900 hover:text-white active:scale-95"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
