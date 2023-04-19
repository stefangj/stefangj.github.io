import { FC } from "react";
import { ComponentsData } from "../../types";
import { formatDate } from "../../utils";
import "./WorkExperience.css";

export const WorkExperience: FC<ComponentsData["workExperience"]> = ({
  title,
  data,
}) => {
  return (
    <section className="workExperience">
      <h2 className="uppercase">{title}</h2>
      <div className="items">
        {data.map(({ title, company, startDate, endDate }) => {
          return (
            <div className="item" key={title + startDate}>
              <h5>{title}</h5>
              <a href={company.url} target="_blank" rel="noreferrer">
                {company.name}
              </a>
              <div className="date">{formatDate(startDate, endDate)}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
