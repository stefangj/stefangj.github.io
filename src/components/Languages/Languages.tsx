import { FC } from "react";
import { ComponentsData } from "../../types";
import "./Languages.css";

export const Languages: FC<ComponentsData["languages"]> = ({ title, data }) => {
  return (
    <section className="languages">
      <h2 className="uppercase">{title}</h2>
      <div className="items">
        {data.map(({ language, proficiency }) => {
          return (
            <div className="item" key={language}>
              <h6>{language}</h6>
              <p className="text-primary">{proficiency}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
