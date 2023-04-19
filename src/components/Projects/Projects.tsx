import { FC } from "react";
import { ComponentsData } from "../../types";
import { formatDate } from "../../utils";
import "./Projects.css";

export const Projects: FC<ComponentsData["projects"]> = ({ title, data }) => {
  return (
    <section className="projects">
      <h2 className="uppercase">{title}</h2>
      <div className="items">
        {data.map(({ title, description, startDate, endDate }) => {
          return (
            <div className="item" key={title + startDate + endDate}>
              <h6>
                {title} (<span>{formatDate(startDate, endDate)})</span>
              </h6>
              <p className="text-secondary">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
