import { workExperience } from "../data";
import { Timeline } from "./ui/timeline";

const Experience = () => {
  return workExperience && workExperience.length === 0 ? null : (
    <div className="py-20" id="experience">
      <h1 className="heading">
        My {` `}
        <span className="text-primary text-purple">work experience</span>
      </h1>
      <div className="w-full max-lg:mt-10">
        <Timeline data={workExperience} />
      </div>
    </div>
  );
};

export default Experience;
