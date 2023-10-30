import { socials } from "../data/socials";
import { navLinks } from "../data/navLinks";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 w-full px-20 py-4 bg-[#03001417] shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md">
      <div className="w-full h-full m-auto px-[10px] flex flex-row items-center justify-between">
        <a href="#home" className="h-auto w-auto flex flex-row items-center">
          <span className="hidden md:block text-3xl text-gray-300 font-bold">
            Omar Adel
          </span>
        </a>

        <div className="md:mr-24 flex flex-row items-center justify-between">
          <div className="mr-[15px] px-12 py-2 flex items-center justify-between gap-10 bg-[#0300145e] border border-[#7042f861] rounded-full text-gray-200">
            {navLinks.map((navLink) => (
              <a key={navLink.id} href={`#${navLink.id}`}>
                {navLink.text}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5 text-xl text-white">
          {socials.map((social) => (
            <a key={social.title} href={social.path} target="_blank">
              <social.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
