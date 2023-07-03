import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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

type BlogType = null | Blog;
const defaultBlog: BlogType = null;
const BlogDetail = () => {
  const [blog, setBlog] = useState<BlogType>(defaultBlog);
  const { slug } = useParams();
  const siteData = useSelector(selectInfo);
  const getBlog = async () => {
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
  console.log(blog);

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
                <div className="comment-item wow fadeInUp delay-0-2s">
                  <div className="author-image">
                    <img
                      src="assets/images/blog/comment-author-3.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="comment-details">
                    <div className="name-date">
                      <h5>John F. Medina</h5>
                      <span className="date">25 Feb 2022</span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae abillo inventore veritatis
                    </p>
                    <a
                      href="blog-details.html"
                      className="reply">
                      Reply <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
                <div className="comment-item child-comment wow fadeInUp delay-0-4s">
                  <div className="author-image">
                    <img
                      src="assets/images/blog/comment-author-2.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="comment-details">
                    <div className="name-date">
                      <h5>Grace L. Freeman</h5>
                      <span className="date">25 Feb 2022</span>
                    </div>
                    <p>
                      Perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremq totam rem aperiam, eaque ipsa quae
                      abillo inventore veritatis
                    </p>
                    <a
                      href="blog-details.html"
                      className="reply">
                      Reply <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
                <div className="comment-item wow fadeInUp delay-0-6s">
                  <div className="author-image">
                    <img
                      src="assets/images/blog/comment-author-1.jpg"
                      alt="Author"
                    />
                  </div>
                  <div className="comment-details">
                    <div className="name-date">
                      <h5>Alexzeder Alex</h5>
                      <span className="date">25 Feb 2022</span>
                    </div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae abillo inventore veritatis
                    </p>
                    <a
                      href="blog-details.html"
                      className="reply">
                      Reply <i className="fas fa-long-arrow-alt-right" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-md shadow dark:shadow-gray-800 mt-8">
                <h5 className="text-lg font-semibold">Leave A Comment:</h5>
                <CommentForm
                  blog_id={blog.id}
                  getBlog={getBlog}
                />
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6">
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
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: 0,
                      color: "transparent",
                    }}
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
                  Tagscloud
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
        {/*end container*/}
        <div className="container md:mt-24 mt-16">
          <div className="md:flex justify-center">
            <div className="lg:w-2/3 text-center">
              <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">
                Subscribe our weekly subscription
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                Add some text to explain benefits of subscripton on your
                services. We'll send you the best of our blog just once a
                weekly.
              </p>
              <div className="mt-8">
                <div className="text-center subcribe-form">
                  <form className="relative mx-auto max-w-xl">
                    <input
                      type="email"
                      id="subemail"
                      name="name"
                      className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700"
                      placeholder="Enter your email id.."
                    />
                    <button
                      type="submit"
                      className="btn absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full">
                      Subcribe Now
                    </button>
                  </form>
                  {/*end form*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end container*/}
      </section>
    </>
  );
};

export default BlogDetail;
