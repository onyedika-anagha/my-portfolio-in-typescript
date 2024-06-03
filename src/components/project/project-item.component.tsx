import { Link } from "react-router-dom";
import { Project } from "../../store/projects/project.types";
import { hostURL } from "../../utils/initial-state/states";
import Image from "../image/image.component";
export const getRandomAnimate = () => {
  const animations = [
    "animate__fadeInUp",
    "animate__fadeInLeft",
    "animate__fadeInRight",
  ];
  const rI = Math.floor(Math.random() * animations.length);
  const i = animations[rI];
  return i;
};
const ProjectItem = ({ item }: { item: Project }) => {
  return (
    <div
      className={`project block animate__animated delay6 ${getRandomAnimate()}`}
      data-filter="website">
      <div className="relative rounded-3xl border border-transparent bg-white drop-shadow-[5px_10px_80px_rgba(119,128,161,0.15)] transition duration-500 hover:border-secondary hover:bg-secondary/20 dark:bg-neutral-900 dark:drop-shadow-none">
        <Link
          to={`/project/${item.slug}`}
          className="absolute top-0 h-full w-full ltr:left-0 rtl:right-0"
        />
        <Image
          src={`${hostURL}/uploaded/file/${item.thumbnail}`}
          alt={item.title}
          className="h-52 w-full rounded-t-3xl object-cover"
          wrapperClassName="h-52 w-full rounded-t-3xl object-cover"
        />
        <div className="p-5 text-sm font-bold">
          <h6 className="mb-1 text-black dark:text-white">{item.title}</h6>
          <p>{item.service.name}</p>
          <div className="flex flex-wrap">
            {item.stack.map((stack, i) => (
              <span
                key={i}
                className="bg-blue-100 mt-1 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
