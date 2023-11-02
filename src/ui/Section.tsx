import { twMerge } from "tailwind-merge";

const Section = ({ id, className, children }) => {
  return (
    <section id={id} className={twMerge("px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-20", className)}>
      {children}
    </section>
  );
};

export default Section;
