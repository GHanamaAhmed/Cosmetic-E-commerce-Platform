import { memo} from "react";
import Tech from "./tech/tech";
import Project from "./project/project";
export default memo(function Home() {
  return (
    <div className="w-full flex flex-col items-center pt-[75px] ">
      <div className="flex flex-col bg-caderSection relative items-center gap-3 rounded-xl w-[98%] md:flex-row-reverse md:justify-around lg:px-28">
        <img className="md:h-[450px]" src="./img/50353683 1.png" alt="" />
        <div className="top-1/2 -translate-y-1/2 md:translate-y-0 absolute md:static">
          <div className="w-2/3 md:w-fit text-justify relative flex flex-col gap-3  text-solidHeading text-xl font-bold md:text-4xl">
            <p className="inline md:block text-black text-2xl md:text-5xl">
              LET’S 👋,
            </p>
            <p className="inline md:block text-black text-2xl md:text-5xl">
              EXPLORE
            </p>
            <p className="inline md:block text-black text-2xl md:text-5xl">
              {" "}
              UNIQUE{" "}
            </p>
            <p className="inline md:block text-black text-2xl md:text-5xl">
              COSMETICS.
            </p>
            <img className="absolute -z-10 min-w-[130px] w-full" src="./img/Rectangle 3.png" alt="" />
            <img className="absolute -z-10 min-w-[130px] w-full bottom-0" src="./img/Rectangle 7.png" alt="" />
          </div>
        </div>
      </div>
      <Tech />
      <Project widthContainer={"w-10/12"} textAlign={"items-center"} />
    </div>
  );
});
