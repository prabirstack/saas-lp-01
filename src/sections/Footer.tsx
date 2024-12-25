import { InstaIcon, TiktokIcon, XSocial, YoutubeIcon } from "@/components/Socials";


export const Footer = () => {
  return (
    <footer className="py-5 bg-black border-t border-white/20 text-white/60">
      <div className="container">
        <div className="flex flex-col justify-center gap-4 sm:flex-row sm:justify-between">
          <div className="text-sm text-center">
            © 2024 Your Company, Inc. All rights reserved
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XSocial />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
