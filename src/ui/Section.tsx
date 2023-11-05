import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

const Section = forwardRef<HTMLElement, Props>(
  ({ id, className, children }, ref) => {
    return (
      <section
        id={id}
        className={twMerge(
          "px-6 sm:px-10 md:px-16 lg:px-24 xl:px-28 pt-24",
          className
        )}
        ref={ref}
      >
        {children}
      </section>
    );
  }
);

export default Section;
