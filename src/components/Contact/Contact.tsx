import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="relative z-40 flex flex-col items-center justify-center lg:gap-10"
    >
      <SectionHeading text="Get In" gradient="Touch" />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-20">
        <ContactForm />
        <ContactImage />
      </div>
    </Section>
  );
};

export default Contact;
