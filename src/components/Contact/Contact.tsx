import mail from "../../assets/mail.svg";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-20 flex flex-col items-center justify-center lg:gap-10"
    >
      <div className="text-5xl text-white font-bold text-center">
        Get In{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-700">
          Touch
        </span>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-20">
        <ContactForm />
        <img src={mail} alt="" className="order-1 lg:order-2 z-50" />
      </div>
    </section>
  );
};

export default Contact;
