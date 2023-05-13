import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <main className="site-wrapper">
    <div className="pt-table">
      <div className="pt-tablecell page-contact relative">
        
        <a href="./" className="page-close"><i className="tf-ion-close"></i></a>
     

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
              <div className="page-title text-center">
                <h2>Get in <span className="primary">touch</span> <span className="title-bg">Contact</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-5 col-md-4 col-lg-3">
              <div className="contact-block">
                <div className="media">
                  <div className="media-left">
                    <i className="tf-envelope2"></i>
                  </div>
                  <div className="media-body">
                    <h4>Email</h4>
                    <p><a href="mailto:my_name@gmail.com">my_name@gmail.com</a></p>
                  </div>
                </div>
              </div>
             
              <div className="contact-block">
                <div className="media">
                  <div className="media-left">
                    <i className="tf-phone2"></i>
                  </div>
                  <div className="media-body">
                    <h4>Phone</h4>
                    <p><a href="tel:+000-1111-2222">+000-1111-2222</a></p>
                  </div>
                </div>
              </div>
             
              <div className="contact-block">
                <div className="media">
                  <div className="media-left">
                    <i className="tf-mobile"></i>
                  </div>
                  <div className="media-body">
                    <h4>Skype</h4>
                    <p><a href="skype:my_name">my_name</a></p>
                  </div>
                </div>
              </div>
             

              <ul className="contact-social">
                <li>
                  <span className="contact-social-hex"></span>
                  <a href="www.fb.com/themefisher"><i className="tf-ion-social-facebook"></i></a>
                </li>
                <li>
                  <span className="contact-social-hex"></span>
                  <a href="www.twitter.com/themefisher"><i className="tf-ion-social-twitter"></i></a>
                </li>
                <li>
                  <span className="contact-social-hex"></span>
                  <a href="#"><i className="tf-ion-social-google"></i></a>
                </li>
                <li>
                  <span className="contact-social-hex"></span>
                  <a href="www.dribbble.com/themefisher"><i className="tf-ion-social-dribbble"></i></a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-7 col-md-7 col-md-offset-1 col-lg-offset-2">
              <div className="section-title clear">
                <h3>Send me a meesage</h3>
                <span className="bar-dark"></span>
                <span className="bar-primary"></span>
              </div>

              <form id="contact-form" className="row contact-form no-gutter" action="#" method="post">
                <div className="col-xs-12 col-sm-6">
                  <div className="input-field name">
                    <span className="input-icon" id="name"><i className="tf-profile-male"></i></span>
                    <input type="text" className="form-control" placeholder="Enter your name" required/>
                  </div>
                </div> 
                <div className="col-xs-12 col-sm-6">
                  <div className="input-field email">
                    <span className="input-icon" id="email"><i className="tf-envelope2"></i></span>
                    <input type="email" className="form-control" name="email" placeholder="Your email address" required/>
                  </div>
                </div> 
                <div className="col-xs-12 col-sm-12">
                  <div className="input-field">
                    <span className="input-icon" id="subject"><i className="tf-pricetags"></i></span>
                    <input type="text" className="form-control" name="subject" placeholder="Enter the discussion title" required/>
                  </div>
                </div> 
                <div className="col-xs-12 col-sm-12">
                  <div className="input-field message">
                    <span className="input-icon"><i className="tf-pencil2"></i></span>
                    <textarea name="message" id="message" className="form-control"
                      placeholder="Write your message" required></textarea>
                  </div>
                </div> 
                <div className="col-xs-12 col-sm-12">
                  <div className="input-field">
                    <span className="btn-border">
                      <button type="submit" className="btn btn-primary btn-custom-border text-uppercase">Send Message
                        now</button>
                    </span>
                  </div>
                  <div className="msg-success">Your Message was sent successfully</div>
                  <div className="msg-failed">Something went wrong, please try again later</div>
                </div> 
              </form> 
            </div> 
          </div> 
        </div> 

        <nav className="page-nav clear">
          <div className="container">
            <div className="flex flex-middle space-between">
            <span className="prev-page"><Link to="/" className="link">&larr; Prev Page</Link></span>
            </div>
          </div>
        
        </nav>
        
      

      </div> 
    </div> 
  </main> 
        </div>
    );
};

export default Contact;