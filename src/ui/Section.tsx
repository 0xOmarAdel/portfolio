import { twMerge } from "tailwind-merge";

type Props = {
  id: string;
  className: string;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={twMerge(
        "px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-24",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
