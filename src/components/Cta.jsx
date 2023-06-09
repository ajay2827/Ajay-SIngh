import React from "react";

const Cta = () => {
  return (
    <div className="relative flex items-center w-full px-14 justify-items-center bottom-20 h-80 bg-cta">
      {/* left */}
      <span className="relative w-1/2 left-20">
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-left text-white font-DM " >
          {" "}
          Ready to launch
          <br />
          your next website?{" "}
        </h1>
      </span>

      {/* right */}
      <span className="relative flex flex-col items-end w-1/2 right-32">
        <button className="flex items-center px-4 py-3 mb-3 text-sm font-medium bg-white shadow-sm gap-x-2 text-text rounded-3xl hover:bg-opacity-90 shadow-gray-200 font-DM">
        <svg className="w-5 h-5 " viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.6542 4.75906L18.7089 8.22938L26.6689 13.9656V1.25C26.6689 2.68925 25.8968 4.0338 24.6542 4.75906Z" fill="#53C07E"/>
<path d="M7.39034 3.97627L15.1036 8.47854C15.3112 8.59978 15.5484 8.66395 15.7891 8.66395H15.7988C16.0395 8.66395 16.2767 8.59978 16.4838 8.47876L17.6389 7.80452C17.6415 7.80289 17.6441 7.80153 17.6467 7.79998L24.1976 3.97627C25.1631 3.41274 25.7627 2.36821 25.7627 1.25V0.796875H5.8252V1.25C5.8252 2.36821 6.42479 3.41274 7.39034 3.97627Z" fill="#53C07E"/>
<path d="M12.8792 8.22811L6.93422 4.75718C5.69267 4.03219 4.91781 2.69093 4.91781 1.25V6.23438H2.40198C2.15152 6.23438 1.94885 6.43726 1.94885 6.6875C1.94885 6.93774 2.15152 7.14063 2.40198 7.14063H4.91781H6.64648H8.00813C8.75579 7.14063 9.3675 7.75233 9.3675 8.5C9.3675 9.24764 8.75579 9.85938 8.00813 9.85938H7.55273H4.91781H1.94885C1.69839 9.85938 1.49573 10.0623 1.49573 10.3125C1.49573 10.5627 1.69839 10.7656 1.94885 10.7656H4.91781V13.9647L12.8792 8.22811Z" fill="#53C07E"/>
<path d="M16.9409 9.26132C16.5953 9.46332 16.2002 9.57018 15.7988 9.57018C15.7988 9.57018 15.7931 9.57018 15.7926 9.57018C15.3877 9.57018 14.9926 9.46332 14.6465 9.2611L13.7356 8.72937L4.91895 15.0831V15.75C4.91895 16.0002 5.12161 16.2031 5.37207 16.2031H26.2158C26.4663 16.2031 26.6689 16.0002 26.6689 15.75V15.0831L17.8521 8.72943L16.9409 9.26132Z" fill="#53C07E"/>
<path d="M8.45898 8.5C8.45898 8.24976 8.25632 8.04688 8.00586 8.04688H0.78418C0.533722 8.04688 0.331055 8.24976 0.331055 8.5C0.331055 8.75024 0.533722 8.95312 0.78418 8.95312H8.00586C8.25632 8.95312 8.45898 8.75024 8.45898 8.5Z" fill="#53C07E"/>
</svg>
       Get in touch now
        </button>
        <p className="text-sm text-white font-DM" >Or, take a peek inside our <span className=" text-p" > design studio</span></p>
      </span>
    </div>
  );
};

export default Cta;
