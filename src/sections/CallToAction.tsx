import helix2Img from "../assets/images/helix2.png";
import emojiStarImg from "../assets/images/emojistar.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <div className="text-white bg-black py-[72px] sm:py-24 text-center">
      <div className="container relative max-w-xl">
        <Image
          src={helix2Img}
          alt=""
          className="absolute top-6 left-[calc(100%+36px)]"
        />
        <Image
          src={emojiStarImg}
          alt=""
          className="absolute -top-[120px] right-[calc(100%+24px)]"
        />
        <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Get instant access
        </h2>
        <p className="mt-5 text-xl text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <form className="flex flex-col mt-10 gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 px-5 font-medium rounded-lg bg-white/20 placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="h-12 px-5 text-black bg-white rounded-lg">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
