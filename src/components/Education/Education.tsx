import { FC } from "react";
import { ComponentsData } from "../../types";
import moment from "moment";
import "./Education.css";

export const Education: FC<ComponentsData["education"]> = ({ title, data }) => {
  return (
    <section className="education">
      <h2 className="uppercase">{title}</h2>
      <div className="items">
        {data.map(({ title, startDate, endDate, description }) => {
          return (
            <div className="item" key={title + startDate}>
              <h6>
                {title} (<span>{moment(startDate).format("YYYY")} - {moment(endDate).format("YYYY")})</span>
              </h6>
              <p className="text-secondary">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
