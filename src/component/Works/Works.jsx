import { Link } from "react-router-dom";

const Works = () => {
    return (
        <div>
            <main className="site-wrapper">
  <div className="pt-table">
    <div className="pt-tablecell page-works relative">
      
      <a href="./" className="page-close"><i className="tf-ion-close"></i></a>
      

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div className="page-title text-center">
              <h2>My <span className="primary">works</span> <span className="title-bg">works</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </div>
        </div> 

        <div className="row">
          <div className="col-xs-12">
            <ul className="filter list-inline">
              <li><a href="#" className="active" data-filter="*">All</a></li>
              <li><a href="#" data-filter=".Photoshop">Photoshop</a></li>
              <li><a href="#" data-filter=".Illustrator">Illustrator</a></li>
              <li><a href="#" data-filter=".Indesign">Indesign</a></li>
              <li><a href="#" data-filter=".Artworks">Artworks</a></li>
            </ul>
          </div>
        </div>

        <div className="row isotope-gutter">
          <div className="col-xs-12 col-sm-6 col-md-4 Photoshop Illustrator">
            <figure className="works-item">
              <img src="images/works/1.jpg" alt=""/>
              <div className="overlay"></div>
              <figcaption className="works-inner">
                <h4>Project Name</h4>
                <p>Illustration, Digital Art</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 Illustrator">
            <figure className="works-item">
              <img src="images/works/2.jpg" alt=""/>
              <div className="overlay"></div>
              <figcaption className="works-inner">
                <h4>Project Name</h4>
                <p>Illustration, Digital Art</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 Indesign Photoshop">
            <figure className="works-item">
              <img src="images/works/3.jpg" alt=""/>
              <div className="overlay"></div>
              <figcaption className="works-inner">
                <h4>Project Name</h4>
                <p>Illustration, Digital Art</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 Artworks Illustrator">
            <figure className="works-item">
              <img src="images/works/4.jpg" alt=""/>
              <div className="overlay"></div>
              <figcaption className="works-inner">
                <h4>Project Name</h4>
                <p>Illustration, Digital Art</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 Photoshop">
            <figure className="works-item">
              <img src="images/works/5.jpg" alt=""/>
              <div className="overlay"></div>
              <figcaption className="works-inner">
                <h4>Project Name</h4>
                <p>Illustration, Digital Art</p>
              </figcaption>
            </figure>
          </div>
        </div> 
      </div> 

      <nav className="page-nav clear">
  <div className="container">
    <div className="flex flex-middle space-between">
    <span className="prev-page"><Link to="/" className="link">&larr; Prev Page</Link></span>
    <span className="next-page"><Link to="/testimonials" className="link">Next Page &rarr;</Link></span>
    </div>
  </div>
 
</nav>
     

    </div> 
  </div> 
</main>
        </div>
    );
};

export default Works;