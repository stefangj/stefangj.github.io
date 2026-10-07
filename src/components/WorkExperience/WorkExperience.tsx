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
        {data.map(({ title, company, startDate, endDate, projects = [] }) => {
          return (
            <div className="item" key={`${company.name}-${startDate}`}>
              <div className="header-row">
                <span className="job-title">{title}</span>
                <span className="at-sign">at</span>
                <a href={company.url} target="_blank" rel="noreferrer">
                  {company.name}
                </a>
              </div>
              <div className="date">{formatDate(startDate, endDate)}</div>

              <div className="projects-list">
                {projects.map(({ projectDescription, skills = [] }, index) => (
                  <div className="project" key={`${title}-${startDate}-${index}`}>
                    <p className="project-description text-secondary">
                      {projectDescription}
                    </p>

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
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
