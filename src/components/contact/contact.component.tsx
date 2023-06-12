"use client";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, FormEvent, useState } from "react";
import { hostURL } from "../../utils/initial-state/states";
import { Spinner, Button } from "flowbite-react";

const defaultValues = {
  name: "",
  email: "",
  tel: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const { name, email, tel, message } = formData;

  const resetForm = () => {
    setFormData(defaultValues);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      event.preventDefault();
      const result = await fetch(`${hostURL}/api/post/message`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }),
        res = await result.json();
      if (res.type === "success") {
        resetForm();
      }
    } catch (error) {
      console.log(error as Error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((state) => ({ ...state, [name]: value }));
  };
  const handleChangeText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((state) => ({ ...state, [name]: value }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl dark:bg-neutral-800 px-4 py-12  ">
      <div className="grid gap-10 ">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
            className="w-full rounded-2xl border-1 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
          />
          <label
            htmlFor=""
            className="absolute -top-3 bg-slate-50 px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-neutral-800 dark:text-slate-50">
            What's your name?
          </label>
          <svg
            width={20}
            height={22}
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-slate-50">
            <path
              d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
              stroke="currentColor"
              strokeWidth="1.8"
            />
          </svg>
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            className="w-full rounded-2xl border-1 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
          />
          <label
            htmlFor=""
            className="absolute -top-3 bg-slate-50 px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-neutral-800 dark:text-slate-50">
            Email Address
          </label>
          <svg
            width={22}
            height={21}
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-slate-50">
            <path
              d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="relative">
          <input
            type="text"
            name="tel"
            value={tel}
            required
            onChange={handleChange}
            className="w-full rounded-2xl border-1 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
          />
          <label
            htmlFor=""
            className="absolute -top-3 bg-slate-50 px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-neutral-800 dark:text-slate-50">
            Mobile Number
          </label>
          <svg
            width={22}
            height={22}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-slate-50">
            <path
              d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className="relative mt-10">
        <textarea
          name="message"
          defaultValue={message}
          onChange={handleChangeText}
          required
          className="w-full rounded-2xl border-1 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
        />
        <label
          htmlFor=""
          className="absolute -top-3 bg-slate-50 px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-neutral-800 dark:text-slate-50">
          Tell me about your project
        </label>
        <svg
          width={22}
          height={22}
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-slate-50">
          <path
            d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle
            cx="6.05005"
            cy="9.05713"
            r="1.25"
            fill="currentColor"
          />
          <circle
            cx="11.05"
            cy="9.05713"
            r="1.25"
            fill="currentColor"
          />
          <circle
            cx="16.05"
            cy="9.05713"
            r="1.25"
            fill="currentColor"
          />
        </svg>
      </div>

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
            Submit
            <i className="flex items-center">
              <ArrowLongRightIcon className="w-6 h-6" />
            </i>
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
