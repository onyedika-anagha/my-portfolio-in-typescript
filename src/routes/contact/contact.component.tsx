import ContactForm from "../../components/contact/contact.component";
import contactImg from "../../assets/img/contact.svg";
import { useSelector } from "react-redux";
import { selectInfo } from "../../store/data/data.selector";
import Preloader from "../../components/preloader/preloader.component";
import SocialSvg from "../../utils/helper/socials";

const Contact = () => {
  const siteData = useSelector(selectInfo);
  if (siteData.user == null) return <Preloader />;
  const { user, socials } = siteData;

  return (
    <div className="section pp-scrollable slide slide-contact slide-light bg-slate-50 dark:bg-neutral-800">
      <div className="slide-container">
        <div className="container">
          <div className="contact-wrap mb-185 rmb-95">
            <div className="flex flex-wrap items-center -mxa-15">
              <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15">
                <div className="contact-content">
                  <div className="section-title mb-55">
                    <span className="sub-title mb-55 animate__animated delay5 animate__fadeInUp">
                      contact me
                    </span>
                    <h2 className="slide-title animate__animated delay6 animate__fadeInUp">
                      What do you need? Let me know here.
                    </h2>
                  </div>
                  {/* <form
                    action="#"
                    className="contact-form animate__animated delay8 animate__fadeInUp">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="What's your name?"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        rows={1}
                        className="form-control"
                        placeholder="Tell me about your project"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <button type="submit">
                      <i className="fas fa-paper-plane" />
                    </button>
                  </form> */}
                  <ContactForm />
                </div>
              </div>
              <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
                <div className="contact-image animate__animated text-center delay7 animate__fadeInLeft p-5">
                  <img
                    src={contactImg}
                    alt="Contact"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-contact text-center mb-35">
            <div className="section-title mb-30 animate__animated delay8 animate__fadeInUp">
              <h2>Contact Info.</h2>
            </div>
            <h3 className="animate__animated delay6 animate__fadeInUp">
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </h3>
            <a
              href={`tel:${user.tel}`}
              className="number list-inline-item animate__animated delay10 animate__fadeInUp">
              {user.tel}
            </a>
            <div className="social-style-two flex flex-wrap mt-25 animate__animated delay11 animate__fadeInUp">
              {socials.map((item, i) => (
                <a
                  href={item.link}
                  key={i}
                  className="flex justify-center items-center"
                  style={{
                    display: "flex",
                  }}
                  target="_blank"
                  rel="noopener noreferrer">
                  <SocialSvg name={item.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom-girl animate__animated delay12 zoomIn"></div>
        <div className="footer-bottom-shape"></div>
      </div>
    </div>
  );
};

export default Contact;
