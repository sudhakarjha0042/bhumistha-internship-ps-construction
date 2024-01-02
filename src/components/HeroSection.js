import "./Hero Sectiom.css";

const HeroSection = () => {
  return (
    <div className="hero-sectiom2">
      <div className="navbar6">
        <img className="builders-jpeg18" alt="" src="/builders--jpeg@2x.png" />
        <div className="nav-fill7">
          <div className="nav-and-search7">
            <div className="navlinks7">
              <div className="nav-link35">
                <div className="home8">{`Home `}</div>
              </div>
              <div className="nav-link36">
                <div className="about8">{`About  `}</div>
              </div>
              <div className="nav-link36">
                <div className="home8">Projects</div>
              </div>
              <div className="nav-link36">
                <div className="home8">Blog</div>
              </div>
              <div className="nav-link36">
                <div className="home8">Contact</div>
              </div>
            </div>
            <img className="search-icon5" alt="" src="/search@2x.png" />
          </div>
        </div>
      </div>
      <div className="text-header3">
        <div className="innovation6">
          <b className="innovation7">Innovation</b>
        </div>
        <div className="text-and-title3">
          <div className="constructure-and-stroke3">
            <img
              className="constructure-and-stroke-child1"
              alt=""
              src="/vector-4@2x.png"
            />
            <div className="constructure6">
              <div className="constructure7">Constructure</div>
            </div>
          </div>
          <div className="text-content29">
            <div className="lorem-ipsum-dolor91">
              Lorem ipsum dolor sit amet consectetur. Id lectus nunc ipsum amet
              pellentesque quam dolor nec. Nec leo massa fringilla arcu eget
              egestas ut at ultricies. Orci dictum lectus.
            </div>
          </div>
        </div>
        <div className="button-common3">
          <div className="button4">Read More</div>
        </div>
      </div>
      <div className="image-container-header2">
        <div className="image-container-header-inner" />
        <img className="engineer-icon2" alt="" src="/engineer@2x.png" />
      </div>
    </div>
  );
};

export default HeroSection;
