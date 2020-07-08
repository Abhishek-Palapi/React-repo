import React from "react";

const Expertise = () => {
  const skills = [
    "javascript",
    "React",
    "Node",
    "Express",
    "mongodb",
    "Java",
    "git",
    "jemkins",
    "spring boot",
    "sql",
    "mongodb",
    "python",
    "django",
  ];
  return <div>
      {skills.map(skill =>{
          return(
              <div>
                  {
                      skill
                  }
              </div>
          )
      })}
  </div>;
};

export default Expertise;
