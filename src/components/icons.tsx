import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m2 9 3-3 3 3" />
      <path d="M16 20h2a2 2 0 0 0 2-2V8" />
      <path d="M22 12h-4" />
      <path d="M16 12h-2" />
      <path d="M12 12H8" />
      <path d="M2 12h2" />
      <path d="m22 15-3 3-3-3" />
      <path d="M8 4H6a2 2 0 0 0-2 2v8" />
    </svg>
  ),
};
