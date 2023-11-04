const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pb-5 flex flex-row justify-center text-lg">
      Copyright © {currentYear} Omar Adel
    </div>
  );
};

export default Footer;
