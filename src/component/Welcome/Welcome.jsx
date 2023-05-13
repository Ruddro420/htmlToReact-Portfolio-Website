import { Link } from "react-router-dom";
const Welcome = () => {
    return (

        <div>
            
            <main className="site-wrapper">
                <div className="pt-table">
                    <div className="pt-tablecell page-welcome relative">

                        <a href="./" className="page-close"><i className="tf-ion-close"></i></a>


                        <div className="author-image-large">
                            <img src="../images/author.png" alt="" />
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-6 col-lg-7">
                                    <div className="page-title">
                                        <h2>David <span className="primary">ramon</span> <span className="title-bg">About</span></h2>
                                        <p>A product designer from England, who focuses on interactive design & A freelance designer focusing on typography & clean interfaces. Also works in dignissimos non quos Google..</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores repellendus corporis, tenetur inventore perferendis reprehenderit autem dignissimos non quos unde eveniet sapiente necessitatibus consequuntur ea ab dolore.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <nav className="page-nav clear">
                            <div className="container">
                                <div className="flex flex-middle space-between">
                                    <span className="prev-page"><Link to="/" className="link">&larr; Prev Page</Link></span>

                                    <span className="next-page"><Link to="/about" className="link">Next Page &rarr;</Link></span>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Welcome;