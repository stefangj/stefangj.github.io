import { FC } from "react";
import { ComponentsData } from "../../types";
import { formatDate } from "../../utils";
import "./Projects.css";

export const Projects: FC<ComponentsData["projects"]> = ({ title, data }) => {
  return (
    <section className="projects">
      <h2 className="uppercase">{title}</h2>
      <div className="items">
        {data.map(({ title, description, projectDescription, startDate, endDate, skills = [] }) => {
          const resolvedDescription = description ?? projectDescription ?? "";

          return (
            <div className="item" key={title + startDate + endDate}>
              <h6>
                {title} (<span>{formatDate(startDate, endDate)})</span>
              </h6>
              {resolvedDescription && (
                <p className="text-secondary">{resolvedDescription}</p>
              )}

              {skills.length > 0 && (
                <div className="skill-list">
                  {skills.map((skill) => (
                    <span className="skill" key={`${title}-${skill}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
