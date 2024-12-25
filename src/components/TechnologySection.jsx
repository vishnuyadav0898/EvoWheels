import React, { useState } from "react";
import ExploreSection from "./ExploreSection";
import{Data} from "../ComponentData/TechnologyData"

function TechnologySection() {
 
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const SelectedComponent = selectedTechnology?.component;

  return (
    <div id="tech&design" className="p-4 2xl:px-16">
      {selectedTechnology ? (
        // Render the selected technology's detail component
        <SelectedComponent
          images={selectedTechnology.images}
          onClose={() => setSelectedTechnology(null)}
        />
      ) : (
        <div className="flex flex-col w-full gap-4 mt-5 p-3">
          <h1 className="text-4xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-medium">Tech, Design & More</h1>
          <p className="text-base md:text-md lg:text-lg  xl:text-2xl 2xl:text-3xl">
            Explore our Software, Cell Tech, Manufacturing, Engineering, and Designing!
          </p>

          <div className="flex gap-6   overflow-x-auto scrollbar-hide w-full">
            {Data.map((tech, index) => (
              <div
                key={index}
                className="relative flex-none  rounded-2xl w-[300px] h-[380px] 2xl:w-[25rem] 2xl:h-[30rem]  xl:w-[25rem] xl:h-[35rem]  lg:w-[20rem] lg:h-[30rem] overflow-hidden shadow-lg"
              >
                <ExploreSection
                  image={tech.images[0]}
                  heading={tech.title}
                  text={tech.description}
                  onClick={() => setSelectedTechnology(tech)} // Pass onClick handler to ExploreSection
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  
 
  

  );
}

export default TechnologySection;

