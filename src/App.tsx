import { FC, useEffect, useRef, useState } from "react";
import { ComponentsData } from "./types";
import { Header } from "./components/Header/Header";
import { WorkExperience } from "./components/WorkExperience/WorkExperience";
import { Education } from "./components/Education/Education";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects/Projects";
import { Languages } from "./components/Languages/Languages";
import { DownloadPDF } from "./components/DownloadPDF/DownloadPDF";

const JSON_DATA_PATH = "/data.json";

const App: FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [componentsData, setComponentsData] = useState<ComponentsData>();

  useEffect(() => {
    fetch(JSON_DATA_PATH)
      .then((r) => r.json() as Promise<ComponentsData>)
      .then((data) => setComponentsData(data));
  }, []);

  return (
    <div className="container">
      {!componentsData ? (
        "Loading..."
      ) : (
        <>
          <div ref={rootRef}>
            <Header {...componentsData.header} />
            <div className="content">
              <div style={{ pageBreakAfter: "always" }}>
                <div>
                <WorkExperience {...componentsData.workExperience} />
                <Education {...componentsData.education} />
                </div>
                <div>
                  <Skills {...componentsData.skills} />
                  <Languages {...componentsData.languages} />
                </div>

              </div>
              <div>
                <Projects {...componentsData.projects} />
              </div>
            </div>
          </div>
          <DownloadPDF contentRef={rootRef} />
        </>
      )}
    </div>
  );
};

export default App;
