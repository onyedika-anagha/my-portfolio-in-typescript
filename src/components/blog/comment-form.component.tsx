import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, FormEvent, useState } from "react";
import { hostURL } from "../../utils/initial-state/states";
import { Spinner, Button } from "flowbite-react";
import { alertMessage } from "../../utils/initial-state/initial-state";

type ValuesType = {
  user_name: string;
  email: string;
  comment: string;
};
const defaultValues: ValuesType = {
  user_name: "",
  email: "",
  comment: "",
};

const CommentForm = ({
  blog_id,
  getBlog,
}: {
  blog_id: string | number;
  getBlog: () => void;
}) => {
  const [formData, setFormData] = useState<ValuesType>(defaultValues);
  const [loading, setLoading] = useState(false);
  const { user_name, email, comment } = formData;

  const resetForm = () => {
    setFormData(defaultValues);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      event.preventDefault();
      const result = await fetch(`${hostURL}/api/post/comment`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, blog_id }),
        }),
        res = await result.json();
      if (res.type === "success") {
        resetForm();
        getBlog();
        alertMessage(res.type, res.message);
      } else {
        alertMessage(res.type, res.message);
      }
    } catch (error) {
      const err = error as Error;
      console.log(error as Error);
      alertMessage("error", err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((state) => ({ ...state, [name]: value }));
  };
  return (
    <form
      id="comment-form"
      className="comment-form"
      action="#"
      method="post"
      onSubmit={handleSubmit}>
      <h3 className="comment-title">Leave a Reply</h3>
      <div className="row clearfix">
        <div className="col-sm-6">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="user_name"
              value={user_name}
              onChange={handleChange}
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <textarea
              name="comment"
              id="message"
              rows={5}
              className="form-control"
              placeholder="Write Message"
              onChange={handleChange}
              required
              value={comment}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-0">
            {loading ? (
              <div className="mt-10 flex justify-center ltr:lg:text-right rtl:lg:text-left">
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="flex"
                  outline>
                  <Spinner
                    aria-label="Loading..."
                    color="info"
                  />
                </Button>
              </div>
            ) : (
              <div className="mt-10 flex justify-center ltr:lg:text-right rtl:lg:text-left">
                <button
                  type="submit"
                  className="theme-btn mt-45 rmt-25 animate__animated delay9 animate__fadeInUp">
                  send message
                  <i className="flex items-center">
                    <ArrowLongRightIcon className="w-6 h-6" />
                  </i>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
