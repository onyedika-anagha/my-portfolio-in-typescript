import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "../../store/projects/project.types";

type PaginationProps = {
  handlePaginate: (url: string | null, isActive: boolean) => void;
  links: Link[];
};

const PagePagination = ({ handlePaginate, links }: PaginationProps) => {
  return (
    <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
      <nav className="nc-Pagination inline-flex space-x-1 text-base font-medium ">
        {links.map((item, i) => {
          switch (item.label) {
            case "&laquo; Previous":
              return (
                <span
                  className={
                    item.active
                      ? "inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none"
                      : "inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  }
                  role="button"
                  onClick={() => handlePaginate(item.url, item.active)}
                  key={i}>
                  <ChevronLeftIcon className="w-5 h-5" />
                </span>
              );
            case "Next &raquo;":
              return (
                <span
                  className={
                    item.active
                      ? "inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none"
                      : "inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  }
                  role="button"
                  onClick={() => handlePaginate(item.url, item.active)}
                  key={i}>
                  <ChevronRightIcon className="w-5 h-5" />
                </span>
              );

            default:
              return (
                <span
                  className={
                    item.active
                      ? "inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white focus:outline-none"
                      : "inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 focus:outline-none"
                  }
                  role="button"
                  onClick={() => handlePaginate(item.url, item.active)}
                  key={i}>
                  {item.label}
                </span>
              );
          }
        })}
      </nav>
      {/* <button className="nc-Button flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent bg-primary-700 hover:bg-primary-6000 text-primary-50 text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ">
            Show me more
        </button> */}
    </div>
  );
};
export default PagePagination;
