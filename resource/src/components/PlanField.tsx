import React from "react";
import { Name } from "~/store/index";
interface Filed {
  fileds: string[];
}
const PlanField: React.FC<Filed> = ({ fileds }) => {
  return (
    <div className="content__layout   ">
      {fileds.map((list: string) => (
        <div
          className={`${list === "name" ? "text-4xl font-bold" : "text-3xl"} `}
        >
          {list}
        </div>
      ))}
      <option>option </option>
    </div>
  );
};
export default PlanField;
