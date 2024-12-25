import logoImg from "@/assets/images/logosaas.png";
import MenuIcon from "@/components/MinusIcon";
import Image from "next/image";


export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="flex items-center justify-between py-4">
          <div className="relative">
            <div className="absolute bottom-0 w-full top-2 bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] blur-md"></div>
            <Image src={logoImg} alt="Saas logo" className="relative size-12" />
          </div>
          <div className="inline-flex items-center justify-center w-10 h-10 border border-white rounded-lg border-opacity-30 sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="items-center hidden gap-6 sm:flex">
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              About
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white transition text-opacity-60 hover:text-opacity-100"
            >
              Customers
            </a>
            <button className="px-4 py-2 bg-white rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
