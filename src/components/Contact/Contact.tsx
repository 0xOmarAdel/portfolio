import mail from "../../assets/mail.svg";
import Section from "../../ui/Section";
import SectionHeading from '../../ui/SectionHeading';
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Section
      id="contact"
      className="flex flex-col items-center justify-center lg:gap-10"
    >
      <SectionHeading text="Get In" gradient="Touch" />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-20">
        <ContactForm />
        <img src={mail} alt="" className="order-1 lg:order-2 z-50" />
      </div>
    </Section>
  );
};

export default Contact;
