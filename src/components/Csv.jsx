const UploadCsv = ({ tableShow, tableStatus }) => {

  return (
    <div className="bg-white rounded-md w-[328px] h-[352px] sm:w-[596px] sm:h[367px] m-auto mt-10 p-5 sm:flex sm:flex-col sm:items-center">
      <div className="p-4  flex flex-col items-center justify-center   w-[296px] h-[258px] sm:w-[546px] border-2 border-dotted border-[#9A9AA9] rounded-md">
        <div className="flex flex-col items-center">
          <svg
            width="31"
            height="28"
            viewBox="0 0 31 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_22_1419)">
              <path
                d="M19.2801 13.2997L7.45557 11.1997V26.7166C7.45557 27.4252 8.02638 27.9997 8.73053 27.9997H29.1341C29.8382 27.9997 30.4091 27.4252 30.4091 26.7166V20.9997L19.2801 13.2997Z"
                fill="#185C37"
              />
              <path
                d="M19.2802 0H8.73059C8.02644 0 7.45563 0.57446 7.45563 1.2831V7L19.2802 14L25.5402 16.1L30.4091 14V7L19.2802 0Z"
                fill="#21A366"
              />
              <path d="M7.45563 7H19.2802V14H7.45563V7Z" fill="#107C41" />
              <patha
                opacity="0.1"
                d="M15.9185 5.60059H7.45557V23.1006H15.9185C16.6216 23.0983 17.1911 22.5252 17.1934 21.8175V6.88368C17.1911 6.17601 16.6216 5.60289 15.9185 5.60059Z"
                fill="black"
              />
              <path
                opacity="0.2"
                d="M15.2229 6.30029H7.45557V23.8003H15.2229C15.9261 23.798 16.4956 23.2249 16.4978 22.5172V7.58339C16.4956 6.87571 15.9261 6.30259 15.2229 6.30029Z"
                fill="black"
              />
              <path
                opacity="0.2"
                d="M15.2229 6.30029H7.45557V22.4003H15.2229C15.9261 22.398 16.4956 21.8249 16.4978 21.1172V7.58339C16.4956 6.87571 15.9261 6.30259 15.2229 6.30029Z"
                fill="black"
              />
              <path
                opacity="0.2"
                d="M14.5273 6.30029H7.45557V22.4003H14.5273C15.2305 22.398 15.8 21.8249 15.8023 21.1172V7.58339C15.8 6.87571 15.2305 6.30259 14.5273 6.30029Z"
                fill="black"
              />
              <path
                d="M1.77496 6.30029H14.5274C15.2315 6.30029 15.8023 6.87475 15.8023 7.58339V20.4172C15.8023 21.1258 15.2315 21.7003 14.5274 21.7003H1.77496C1.07082 21.7003 0.5 21.1258 0.5 20.4172V7.58339C0.5 6.87475 1.07082 6.30029 1.77496 6.30029Z"
                fill="url(#paint0_linear_22_1419)"
              />
              <path
                d="M4.44867 18.1705L7.13075 13.988L4.67334 9.82861H6.65011L7.99115 12.4886C8.11497 12.7413 8.19982 12.9289 8.24574 13.0528H8.26312C8.35123 12.8512 8.44397 12.6554 8.54135 12.4655L9.97489 9.83002H11.7896L9.26959 13.9649L11.8536 18.1705H9.92274L8.37372 15.2508C8.30075 15.1266 8.23884 14.9961 8.18871 14.8609H8.16576C8.12038 14.9934 8.06018 15.1202 7.9863 15.2389L6.39138 18.1705H4.44867Z"
                fill="white"
              />
              <path
                d="M29.1342 0H19.2802V7H30.4091V1.2831C30.4091 0.57446 29.8383 0 29.1342 0Z"
                fill="#33C481"
              />
              <path d="M19.2802 14H30.4091V21H19.2802V14Z" fill="#107C41" />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_22_1419"
                x1="3.15832"
                y1="5.2977"
                x2="13.2396"
                y2="22.6473"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#18884F" />
                <stop offset="0.5" stop-color="#117E43" />
                <stop offset="1" stop-color="#0B6631" />
              </linearGradient>
              <clipPath id="clip0_22_1419">
                <rect
                  width="29.9091"
                  height="28"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="text-[#9A9AA9]">
            {tableStatus ? (
              <>
                Update-template.xlsx{" "}
                <p className="text-center text-red-500">Remove</p>
              </>
            ) : (
              <>
                Upload your excel sheet{" "}
                <span className="text-[#605BFF]">here</span>
              </>
            )}
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          tableShow();
        }}
        className={`${
          tableStatus ? "opacity-5" : ""
        } cursor-pointer flex items-center justify-center gap-2 sm:w-[564px] bg-blue-500 w-[296px] h-[46px] text-lg text-white rounded-lg mt-5`}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <button>Upload</button>
      </div>
    </div>
  );
};
export default UploadCsv;
