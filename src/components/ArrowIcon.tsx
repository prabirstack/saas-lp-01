import { SVGProps } from "react";
const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m13.325 8.425-3.6 3.6a.601.601 0 1 1-.85-.85L11.45 8.6H4.1a.6.6 0 1 1 0-1.2h7.35L8.876 4.824a.601.601 0 1 1 .85-.85l3.6 3.6a.602.602 0 0 1-.002.85Z"
    />
  </svg>
);
export default ArrowIcon;
