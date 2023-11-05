import {name} from '../data/text';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pb-5 flex flex-row justify-center text-lg capitalize">
      Copyright © {currentYear} {name}
    </div>
  );
};

export default Footer;
