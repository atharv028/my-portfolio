
import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
          <BentoGridItem
            key={id}
            description={description}
            title={title}
            id={id}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          ></BentoGridItem>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
