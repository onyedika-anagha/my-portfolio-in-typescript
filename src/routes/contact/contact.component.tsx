import ContactForm from "../../components/contact/contact.component";

const Contact = () => {
  return (
    <div className="section pp-scrollable slide slide-contact slide-light dark:bg-neutral-800">
      <div className="slide-container">
        <div className="container">
          <div className="contact-wrap mb-185 rmb-95">
            <div className="flex flex-wrap items-end -mxa-15">
              <div className="lg:grow-0 lg:shrink-0 basisa-58 pxa-15">
                <div className="contact-content">
                  <div className="section-title mb-55">
                    <span className="sub-title mb-55 animate__animated delay5 animate__fadeInUp">
                      contact me
                    </span>
                    <h2 className="slide-title animate__animated delay6 animate__fadeInUp">
                      Estimate your project? Let me know here.
                    </h2>
                  </div>
                  <form
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
                  </form>
                  <ContactForm />
                </div>
              </div>
              <div className="lg:grow-0 lg:shrink-0 basisa-41 pxa-15">
                <div className="contact-image animate__animated text-center delay7 fadeInLeft">
                  <img
                    src="assets/images/contact/contact.html"
                    alt="Contact"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-contact text-center mb-35">
            <div className="section-title mb-30 animate__animated delay8 animate__fadeInUp">
              <h2>Stay Connected</h2>
            </div>
            <span className="country list-inline-item animate__animated delay9 animate__fadeInUp">
              Bangladesh
            </span>
            <h3 className="animate__animated delay6 animate__fadeInUp">
              <a href="mailto:hello_niharik@gmail.com">
                hello_niharik@gmail.com
              </a>
            </h3>
            <a
              href="callto:(+778)675-0765"
              className="number list-inline-item animate__animated delay10 animate__fadeInUp">
              (+778) 675-0765
            </a>
            <div className="social-style-two mt-25 animate__animated delay11 animate__fadeInUp">
              <a href="#">
                <img
                  src="assets/images/contact/social-dribbble.png"
                  alt="Social"
                />
              </a>
              <a href="#">
                <img
                  src="assets/images/contact/social-behance.html"
                  alt="Social"
                />
              </a>
              <a href="#">
                <img
                  src="assets/images/contact/social-instagram.png"
                  alt="Social"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-girl animate__animated delay12 zoomIn">
          <img
            src="assets/images/contact/footer-bottom-girl.html"
            alt="footer girl"
          />
        </div>
        <div className="footer-bottom-shape">
          <img
            src="assets/images/contact/footer-bottom-shape.png"
            alt="Shape"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
