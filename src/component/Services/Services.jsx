/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div>
            <section className="site-wrapper">
  <div className="pt-table">
    <div className="pt-tablecell page-services relative">
      <a href="./" className="page-close"><i className="tf-ion-close"></i></a>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-offset-1 col-lg-10">
            <div className="page-title text-center">
              <h2>Awesome <span className="primary">Services</span> <span className="title-bg">Services</span></h2>
              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                notare quam littera gothica,quam nunc putamus parum claram anteposuerit.</p>
            </div>

            <div className="hexagon-menu services clear">
              <div className="service-hex">
             

                <div className="content">
                  <div className="icon">
                    <i className="et-line icon-lightbulb"></i>
                  </div>
                  <h4>Creative <br/> Design</h4>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                </div>
              </div>
              <div className="service-hex">

             
                <div className="content">
                  <div className="icon">
                    <i className="et-line icon-mobile"></i>
                  </div>
                  <h4>Responsive <br/> Layout</h4>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                </div>
              </div>
              <div className="service-hex">

            
                <div className="content">
                  <div className="icon">
                    <i className="et-line icon-profile-male"></i>
                  </div>
                  <h4>User <br/> Friendly</h4>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                </div>
              </div>
              <div className="service-hex">

                <div className="content">
                  <div className="icon">
                    <i className="et-line icon-heart"></i>
                  </div>
                  <h4>Lovely <br/> Animation</h4>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                </div>
              </div>
              <div className="service-hex">

                <div className="content">
                  <div className="icon">
                    <i className="et-line icon-hotairballoon"></i>
                  </div>
                  <h4>Ready to <br/> launch</h4>
                  <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consue.</p>
                </div>
              </div>
            </div>

          </div>

        </div> 
      </div> 

      <nav className="page-nav clear">
  <div className="container">
    <div className="flex flex-middle space-between">
    <span className="prev-page"><Link to="/" className="link">&larr; Prev Page</Link></span>
    <span className="next-page"><Link to="/resume" className="link">Next Page &rarr;</Link></span>
    </div>
  </div>
 
</nav>
      

    </div> 
  </div> 
</section>
        </div>
    );
};

export default Services;