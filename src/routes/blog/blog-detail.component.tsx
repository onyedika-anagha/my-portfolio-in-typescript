import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { selectProject } from "../../store/projects/project.selector";
// import { Project } from "../../store/projects/project.types";
import { hostURL } from "../../utils/initial-state/states";
import Preloader from "../../components/preloader/preloader.component";
import { Blog } from "../../store/data/data.types";
import Image from "../../components/image/image.component";
import { selectInfo } from "../../store/data/data.selector";
import { useSelector } from "react-redux";
import SocialSvg from "../../utils/helper/socials";
import CommentForm from "../../components/blog/comment-form.component";
import { getTime } from "../../utils/helper/helper";
import ReplyForm from "../../components/blog/reply-form.component";

type BlogType = null | Blog;
const defaultBlog: BlogType = null;
const BlogDetail = () => {
  const [blog, setBlog] = useState<BlogType>(defaultBlog);
  const [comment_id, setComment] = useState(0);
  const [reply_id, setReply] = useState(0);
  const { slug } = useParams();
  const siteData = useSelector(selectInfo);
  const getBlog = async () => {
    setComment(0);
    setReply(0);
    try {
      const result = await fetch(`${hostURL}/api/get/blog/${slug}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }),
        res = await result.json();
      if (res.data != null) {
        const data: Blog = res.data[0];
        setBlog(data);
      }
    } catch (error) {
      console.log(error as Error);
    }
  };
  //   console.log("project: ", project);

  useEffect(() => {
    if (slug != null) {
      getBlog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (blog == null) return <Preloader />;
  if (siteData.user == null) return <Preloader />;
  return (
    <>
      <section className="relative md:pb-24 md:pt-40 pb-16 pt-36">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8 md:col-span-6">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <Image
                  src={`${hostURL}/uploaded/file/${blog.img}`}
                  className="rounded-md"
                  alt={blog.title}
                />
                <div className="text-center mt-12">
                  <span className="bg-indigo-600 inline-block text-white text-xs font-semibold px-2.5 py-0.5 rounded-full h-5">
                    {blog.category}
                  </span>
                  <h3 className="my-3 text-[26px] font-semibold">
                    {blog.title}
                  </h3>
                </div>
                <div
                  className="mt-6"
                  dangerouslySetInnerHTML={{ __html: blog.body }}
                />
              </div>
              <div className="comments pb-15 mt-8">
                <h3 className="comment-title mb-55">Comments:</h3>
                {blog.comments.map((comment) => (
                  <div key={comment.id}>
                    <div className="comment-item animate__animated animate__fadeInUp delay-0-2s">
                      <div className="author-image flex h-16 w-16 rounded-full shadow items-center justify-center bg-gray-50 dark:bg-gray-100">
                        <span className="wil-avatar__name">
                          {comment.user_name.charAt(0)}
                        </span>
                      </div>
                      <div className="comment-details">
                        <div className="name-date">
                          <h5>{comment.user_name}</h5>
                          <span className="date">
                            {getTime(comment.created_at)}
                          </span>
                        </div>
                        <p>{comment.comment}</p>
                        <a
                          href="#!"
                          onClick={() => {
                            setComment((state) =>
                              state !== 0 ? 0 : comment.id
                            );
                            setReply(0);
                          }}
                          className="reply">
                          Reply <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </div>
                    </div>
                    {comment_id === comment.id && reply_id === 0 && (
                      <ReplyForm
                        comment_id={comment.id}
                        getBlog={getBlog}
                        comment_user_name={comment.user_name}
                      />
                    )}
                    {comment.replies.map((reply, i) => (
                      <div key={i}>
                        <div className="comment-item child-comment animate__animated animate__fadeInUp delay-0-4s">
                          <div className="author-image flex h-16 w-16 rounded-full shadow items-center justify-center bg-gray-50 dark:bg-gray-100">
                            <span className="wil-avatar__name">
                              {reply.user_name.charAt(0)}
                            </span>
                          </div>
                          <div className="comment-details">
                            <div className="name-date">
                              <h5>{reply.user_name}</h5>
                              <span className="date">
                                {getTime(reply.created_at)}
                              </span>
                            </div>
                            <p>{reply.reply}</p>
                            <a
                              href="#!"
                              onClick={() => {
                                setComment((state) =>
                                  state !== 0 ? 0 : comment.id
                                );
                                setReply((state) =>
                                  state !== 0 ? 0 : reply.id
                                );
                              }}
                              className="reply">
                              Reply{" "}
                              <i className="fas fa-long-arrow-alt-right" />
                            </a>
                          </div>
                        </div>
                        {reply_id === reply.id && (
                          <ReplyForm
                            comment_id={comment.id}
                            getBlog={getBlog}
                            comment_user_name={comment.user_name}
                          />
                        )}
                      </div>
                      // {reply_id}
                    ))}
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                <h5 className="text-lg font-semibold">Leave A Comment:</h5>
                <CommentForm
                  blog_id={blog.id}
                  getBlog={getBlog}
                />
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 mb-10">
              <div className="sticky top-20">
                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center">
                  Author
                </h5>
                <div className="flex flex-col items-center mt-8">
                  <Image
                    src={`${hostURL}/uploads/all/${siteData.user.profile_image}`}
                    className="h-24 w-24 mx-auto rounded-full shadow mb-4"
                    sizes="100px"
                    alt={"Onyedika Anagha"}
                    wrapperClassName="h-24 w-24 mx-auto rounded-full shadow mb-4"
                  />
                  <a
                    href="#!"
                    className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">
                    {siteData.user.name}
                  </a>
                  <p className="text-slate-400">Software Developer</p>
                </div>

                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                  Social sites
                </h5>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                  }}>
                  {siteData.socials?.map((item, i) => (
                    <a
                      key={i}
                      className="btn btn-icon btn-sm border border-gray-100 dark:border-gray-800 rounded-md text-slate-400 hover:border-indigo-600 hover:text-white hover:bg-indigo-600"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}>
                      <div>
                        <SocialSvg
                          name={item.name}
                          className="w-4 h-4"
                        />
                      </div>
                    </a>
                  ))}
                </div>
                {/*end icon*/}
                <h5 className="text-lg font-semibold bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 rounded-md p-2 text-center mt-8">
                  Tags
                </h5>
                <ul className="list-none text-center mt-8">
                  {blog.tags.split(",").map((item: string, i: number) => (
                    <li
                      className="inline-block m-2"
                      key={i}>
                      <a
                        href="#!"
                        className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-indigo-600 dark:hover:bg-indigo-600 rounded-md shadow dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/*end grid*/}
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
