import downloadAnimation from "../../assets/downloadAnimation.json";
import portfolio from "../../assets/Omar_Adel_Resume.pdf";
import { aboutText } from "../../data/text";
import Button from "../../ui/Button";

const AboutOverview = () => {
  return (
    <>
      <p className="mb-5 text-base md:text-lg lg:text-xl text-gray-300 text-center xl:text-start !leading-8 tracking-wider">
        {aboutText}
      </p>
      <Button
        text="Download Resume"
        href={portfolio}
        download={true}
        lottieAnimation={downloadAnimation}
      />
    </>
  );
};

export default AboutOverview;
