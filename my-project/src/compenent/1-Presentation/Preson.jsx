import textPrtion from "../../text/textPresontion/textPrtion";
import "./pstion.css";

export default function Preson() {
  return (
    <>
      <div className="w-full h-lvh relative image-heder  ">
        <div className="titel  absolute    xxl:top-2/4  xl:top-2/4  md:top-2/4 sm:top-60 top-60 uppercase flex   flex-nowrap  whitespace-nowrap -translate-x-2/4 -translate-y-2/4 left-2/4 z-10">
          <h1 className=" font-semibold xxl:text-8xl  xl:text-8xl md:text-5xl sm:text-5xl  text-3xl tracking-widest">
            {textPrtion.welcomePresonTion} <span>{textPrtion.spnprtion}</span>
          </h1>
        </div>

        <div className="absolute Pargraf xl:bottom-44 lg:bottom-44 md:bottom-36  bottom-20   ">
          <p>{textPrtion.pPrsTion}</p>
        </div>
      </div>
    </>
  );
}
