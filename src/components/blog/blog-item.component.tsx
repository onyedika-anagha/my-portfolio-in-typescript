import { useSelector } from "react-redux";
import { Blog } from "../../store/data/data.types";
import { hostURL, shareLink } from "../../utils/initial-state/states";
import Image from "../image/image.component";
import { selectInfo } from "../../store/data/data.selector";
import { Link } from "react-router-dom";
import { getTime } from "../../utils/helper/helper";
import {
  ShareIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

function BlogItem({ item }: { item: Blog }) {
  const siteData = useSelector(selectInfo);
  if (siteData.user == null) return <></>;
  const { user } = siteData;

  return (
    <div className="nc-Card11 relative flex flex-col group rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 h-full">
      <div className="block flex-shrink-0 relative w-full rounded-t-3xl overflow-hidden z-10 aspect-w-5 aspect-h-3">
        <Link to={`/blog/${item.slug}`}>
          <div className="nc-PostFeaturedMedia relative w-full h-full">
            <Image
              src={`${hostURL}/uploaded/file/${item.img}`}
              className="object-cover"
              width="100%"
              height={250}
              sizes="(max-width: 600px) 480px, 800px"
              alt={item.title}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }}
            />
          </div>
        </Link>
      </div>
      <span className="absolute top-3 inset-x-3 z-10">
        <div
          className="nc-CategoryBadgeList flex flex-wrap space-x-2"
          data-nc-id="CategoryBadgeList">
          <a
            className="transition-colors hover:text-white duration-300 nc-Badge  inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-pink-800 bg-pink-100 hover:bg-pink-800"
            href="#!">
            {item.category}
          </a>
        </div>
      </span>
      <div className="p-4 flex flex-col space-y-3">
        <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 leading-none text-xs">
          <a
            className="relative flex items-center space-x-2 rtl:space-x-reverse"
            href="#!">
            <div className="wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner rounded-full h-7 w-7 text-sm ring-1 ring-white dark:ring-neutral-900">
              <Image
                src={`${hostURL}/uploads/all/${user.profile_image}`}
                className="absolute inset-0 w-full h-full object-cover"
                sizes="100px"
                alt={"Onyedika Anagha"}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
                }}
              />
              <span className="wil-avatar__name">O</span>
            </div>
            <span className="block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium">
              Onyedika Anagha
            </span>
          </a>
          <span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">
            ·
          </span>
          <span className="text-neutral-500 dark:text-neutral-400 font-normal">
            {getTime(item.created_at)}
          </span>
        </div>
        <h3 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100">
          <Link
            to={`/blog/${item.slug}`}
            className="line-clamp-2"
            title={item.title}>
            {item.title}
          </Link>
        </h3>
        <div className="flex items-end justify-between mt-auto">
          <div className="nc-PostCardLikeAndComment flex items-center space-x-2 rtl:space-x-reverse relative">
            <a
              className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs "
              title="Comments"
              href={`/blog/${item.slug}#comments`}>
              <ChatBubbleBottomCenterTextIcon
                width={24}
                height={24}
              />

              <span className="ml-1 text-neutral-900 dark:text-neutral-200">
                {item.comment_count}
              </span>
            </a>
          </div>
          <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative">
            <button
              className="nc-NcBookmark relative rounded-full flex items-center justify-center h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
              title="Share post"
              onClick={() => shareLink(`/blog/${item.slug}`, item.title)}>
              <ShareIcon className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
