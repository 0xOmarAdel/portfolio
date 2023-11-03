import { useInView } from "react-intersection-observer";
import Section from "../../ui/Section";
import SectionHeading from "../../ui/SectionHeading";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Section
      id="contact"
      className="flex flex-col items-center justify-center lg:gap-10"
      ref={ref}
    >
      <SectionHeading text="Get In" gradient="Touch" />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-20">
        <ContactForm inView={inView} />
        <ContactImage inView={inView} />
      </div>
    </Section>
  );
};

export default Contact;
