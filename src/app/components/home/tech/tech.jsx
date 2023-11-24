import { memo } from "react";
import TitleSection from "../titleSection";
import Skills from "./skills";
export default memo(function Tech() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="w-[90%]">
        <TitleSection
          title={"طرق الدفع"}
          subTitle={"Technologies I’ve been working with recently"}
        />
      </div>
      <Skills
        className={
          "sm:grid flex justify-between flex-wrap w-4/6 grid-cols-6  gap-10 py-7"
        }
      />
    </div>
  );
});
