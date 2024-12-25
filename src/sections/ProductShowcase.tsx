import appScreen from "@/assets/images/app-screen.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <div className="text-white bg-black bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-5xl font-bold tracking-tight text-center sm:text-6xl">
          Intutive interface
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="mt-5 text-xl text-center text-white/70">
            Celebrate the joy of accomplishment with an app disigned to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>

        <Image
          src={appScreen}
          alt="The product screenshot"
          className="mx-auto mt-14"
        />
      </div>
    </div>
  );
};
