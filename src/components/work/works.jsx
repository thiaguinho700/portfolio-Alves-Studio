import { projectsData } from "./Data";
import React, { useEffect, useState } from "react";
import { projectsNav } from "./Data";
import WorksItems from "./WorksItems";

const Works = () => {
  const language = localStorage.getItem("language");
  const [item, setItem] = useState({ name: "All" });

  const [projects, setProjects] = useState([]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All" || item.name === 'Todos') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          
          return (
            <span
              onClick={(e) => {
                
                handleClick(e, index);
              }}
              className={`${
                active === index ? "active-work" : ""
              } work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item, index) => {
          return <WorksItems item={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Works;
