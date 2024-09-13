import React from "react";

function Footer() {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          
            <span className="ml-3 text-xl text-[#2563eb]">ACONEWS</span>
          </a>
          <p className="text-md text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            Made with ❤️ — By Kaif Zaffer
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              className="ml-3 text-gray-400"
              href="https://github.com/Kaifzaffer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="25"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#cbd5e0"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                  style={{ mixBlendMode: "normal" }}
                >
                  <g transform="scale(16,16)">
                    <path d="M7.5,1c-3.58984,0 -6.5,2.90625 -6.5,6.48828c0,2.86719 1.86328,5.30078 4.44531,6.16016c0.32422,0.05859 0.55469,-0.27344 0.55469,-0.52344c0,-0.15234 0.00391,-0.33594 0,-0.875c-1.80859,0.39063 -2.375,-0.875 -2.375,-0.875c-0.29687,-0.75 -0.65625,-0.96484 -0.65625,-0.96484c-0.58984,-0.40234 0.04297,-0.39062 0.04297,-0.39062c0.65234,0.04297 0.98828,0.60547 0.98828,0.60547c0.5,0.875 1.62891,0.78906 2,0.625c0,-0.39844 0.04297,-0.6875 0.15234,-0.87109c-2.04297,-0.35937 -3.15625,-1.53906 -3.15234,-3.17188c0.00391,-0.96484 0.33594,-1.71484 0.875,-2.26953c-0.23437,-0.29687 -0.39453,-1.3125 0.08594,-1.9375c1.20703,0 1.92578,0.87109 1.92578,0.87109c0,0 0.56641,-0.24609 1.60938,-0.24609c1.04687,0 1.60937,0.23438 1.60937,0.23438c0,0 0.72266,-0.85937 1.92969,-0.85937c0.48047,0.625 0.32031,1.64063 0.13281,1.91797c0.51563,0.54297 0.83203,1.29297 0.83203,2.28906c0,1.63281 -1.10937,2.8125 -3.14844,3.16797c0.12891,0.19531 0.14844,0.46875 0.14844,0.875c0,0.86719 0,1.66016 0,1.875c0,0.25 0.22656,0.58594 0.55859,0.52344c2.58203,-0.86328 4.44141,-3.29297 4.44141,-6.16016c0,-3.58203 -2.91016,-6.48828 -6.5,-6.48828z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400"
              href="https://www.linkedin.com/in/kaif-zaffer-812198225/"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
