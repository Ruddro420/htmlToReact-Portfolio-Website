/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <main className="site-wrapper">
  <div className="pt-table">
    <div className="pt-tablecell page-about relative">
      <a href="./" className="page-close"><i className="tf-ion-close"></i></a>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div className="page-title text-center">
              <h2>About <span className="primary">me</span> <span className="title-bg">Name</span></h2>
              <p>I am working as a professional UI/UX Designer since 2007. Worked in more than 200 live projects and
                also with more than 120 different clients!</p>
            </div>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="about-author">
              <figure className="author-thumb">
                <img src="../images/author.jpg" alt=""/>
              </figure> 
              <div className="author-desc">
                <p><b>Date of birth:</b> 29th july, 1984</p>
                <p><b>Language:</b> English, Spanish</p>
                <p><b>Expert in:</b> UI/UX, Web development</p>
                <p><b>Freelance:</b> Available</p>
              </div>
              
            </div> 
            <p>I'm a multi-award winning designer that has been specialising in web design for the past three years
              although I have experience in branding and print.Projects.</p>
          </div> 

          <div className="col-xs-12 col-md-6">
            <div className="section-title clear">
              <h3>Skills</h3>
            </div>
            <div className="skill-wrapper">
              <div className="progress clear">
                <div className="skill-name">Photoshop</div>
                <div className="skill-bar">
                  <div className="bar"></div>
                </div>
                <div className="skill-lavel" data-skill-value="90%"></div>
              </div> 
              <div className="progress clear">
                <div className="skill-name">Illustrator</div>
                <div className="skill-bar">
                  <div className="bar"></div>
                </div>
                <div className="skill-lavel" data-skill-value="78%"></div>
              </div> 
              <div className="progress clear">
                <div className="skill-name">After Fffects</div>
                <div className="skill-bar">
                  <div className="bar"></div>
                </div>
                <div className="skill-lavel" data-skill-value="85%"></div>
              </div> 
              <div className="progress clear">
                <div className="skill-name">HTML5</div>
                <div className="skill-bar">
                  <div className="bar"></div>
                </div>
                <div className="skill-lavel" data-skill-value="95%"></div>
              </div> 
              <div className="progress clear">
                <div className="skill-name">WordPress</div>
                <div className="skill-bar">
                  <div className="bar"></div>
                </div>
                <div className="skill-lavel" data-skill-value="70%"></div>
              </div> 
              <div className="progress clear">
                <div className="skill-name">jQuery</div>
                <div className="skill-bar">
                  <div className="bar"></div>
                </div>
                <div className="skill-lavel" data-skill-value="75%"></div>
              </div> 
            </div>
          </div> 
        </div> 
      </div> 

      <nav className="page-nav clear">
  <div className="container">
    <div className="flex flex-middle space-between">
      <span className="prev-page"><Link to="/" className="link">&larr; Prev Page</Link></span>
      <span className="next-page"><Link to="/services" className="link">Next Page &rarr;</Link></span>
    </div>
  </div>
  
</nav>
      
    </div> 
  </div> 
</main>
        </div>
    );
};

export default About;