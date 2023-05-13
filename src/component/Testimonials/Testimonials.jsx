import { Link } from "react-router-dom";

const Testimonials = () => {
    return (
        <div>
            <main className="site-wrapper">
  <div className="pt-table">
    <div className="pt-tablecell page-quotes relative">
      
      <a href="./" className="page-close"><i className="tf-ion-close"></i></a>
    

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div className="page-title text-center">
              <h2>My <span className="primary">clients</span><span className="title-bg">Speech</span></h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat.</p>
            </div>
          </div>
        </div> 

        <div className="row">
          <div className="col-xs-12">
            <div className="testimonials">
              <div className="item">
                <figure className="thumb">
                  <div className="tm-hex">
                    <div className="hexTop"></div>
                    <div className="hexBottom"></div>
                  </div>
                  <figcaption>
                    <h4>Adam Drigan</h4>
                    <span>CEO, Ultra Solution</span>
                  </figcaption>
                </figure>
                <div className="text">
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                    formas humanitatis per seacula quarta decima. </p>
                </div>
              </div>
              <div className="item">
                <figure className="thumb">
                  <div className="tm-hex">
                    <div className="hexTop"></div>
                    <div className="hexBottom"></div>
                  </div>
                  <figcaption>
                    <h4>Adam Drigan</h4>
                    <span>CEO, Ultra Solution</span>
                  </figcaption>
                </figure>
                <div className="text">
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                    formas humanitatis per seacula quarta decima. </p>
                </div>
              </div>
              <div className="item">
                <figure className="thumb">
                  <div className="tm-hex" /* style="background-image: url('images/tm.jpg');" */>
                    <div className="hexTop"></div>
                    <div className="hexBottom"></div>
                  </div>
                  <figcaption>
                    <h4>Adam Drigan</h4>
                    <span>CEO, Ultra Solution</span>
                  </figcaption>
                </figure>
                <div className="text">
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                    formas humanitatis per seacula quarta decima. </p>
                </div>
              </div>
              <div className="item">
                <figure className="thumb">
                  <div className="tm-hex" >
                    <div className="hexTop"></div>
                    <div className="hexBottom"></div>
                  </div>
                  <figcaption>
                    <h4>Adam Drigan</h4>
                    <span>CEO, Ultra Solution</span>
                  </figcaption>
                </figure>
                <div className="text">
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                    formas humanitatis per seacula quarta decima. </p>
                </div>
              </div>
              <div className="item">
                <figure className="thumb">
                  <div className="tm-hex" >
                    <div className="hexTop"></div>
                    <div className="hexBottom"></div>
                  </div>
                  <figcaption>
                    <h4>Adam Drigan</h4>
                    <span>CEO, Ultra Solution</span>
                  </figcaption>
                </figure>
                <div className="text">
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                    formas humanitatis per seacula quarta decima. </p>
                </div>
              </div>
              <div className="item">
                <figure className="thumb">
                  <div className="tm-hex">
                    <div className="hexTop"></div>
                    <div className="hexBottom"></div>
                  </div>
                  <figcaption>
                    <h4>Adam Drigan</h4>
                    <span>CEO, Ultra Solution</span>
                  </figcaption>
                </figure>
                <div className="text">
                  <p>Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum
                    formas humanitatis per seacula quarta decima. </p>
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
    <span className="next-page"><Link to="/contact" className="link">Next Page &rarr;</Link></span>
    </div>
  </div>
 
</nav>
      

    </div>
  </div> 
</main> 
        </div>
    );
};

export default Testimonials;