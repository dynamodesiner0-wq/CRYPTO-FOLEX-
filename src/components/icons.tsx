import type { SVGProps } from "react";

export const Icons = {
  logo: (props: SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  twitter: (props: SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-3.3 1.4c-1 .8-2.1 2.8-2.1 2.8s-.1-2.1-2.1-4.4c-2.1-2.2-4.2-3.3-4.2-3.3s1.4-.6 2.8-1.4c1.4-.8 2.8-1.4 2.8-1.4s-2.1 1.4-3.3 2.8c-1.2 1.4-2.1 2.8-2.1 2.8s.1-1.2.8-2.1c.6-.9 1.4-2.1 1.4-2.1s-2.1 1.4-3.3 2.8c-1.2 1.4-2.1 2.8-2.1 2.8s.1-1.2.8-2.1c.6-.9 1.4-2.1 1.4-2.1s-2.1 1.4-3.3 2.8c-1.2 1.4-2.1 2.8-2.1 2.8s.1-1.2.8-2.1c.6-.9 1.4-2.1 1.4-2.1s-2.1 1.4-3.3 2.8c-1.2 1.4-2.1 2.8-2.1 2.8s.1-1.2.8-2.1c.6-.9 1.4-2.1 1.4-2.1S2 10.1 2 12.2s.1 2.1 2.1 2.1 2.1-1.4 2.1-1.4" />
    </svg>
  ),
  github: (props: SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
};
