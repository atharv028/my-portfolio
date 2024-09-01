import { projects } from "../data";
import { PinContainer } from "./ui/card-3d";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-20" id='projects'>
      <h1 className="heading">
        A small selection of {` `}
        <span className="text-primary text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-6 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center  w-[80vw] sm:h-[41rem] sm:w-[570px]"
          >
            <PinContainer href={link} title={title}>
              <div className="relative flex items-center justify-center overflow-hidden lg:h-[30vh] mb-10 sm:w-[570px] w-[80vw] h-[30vh] sm:h-[40vh]">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} className="z-10 absolute bottom-0" alt={title} />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="text-white lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img key={index} src={icon} className="p-2" alt="icon" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
