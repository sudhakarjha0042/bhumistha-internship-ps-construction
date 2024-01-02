import HeroSection from "../components/HeroSection";
import AboutUss from "../components/AboutUss";
import VisonSection from "../components/VisonSection";
import Service from "../components/Service";
import VideoSection from "../components/VideoSection";
import TeamMember from "../components/TeamMember";
import Gallerry from "../components/Gallerry";
import Testimonial from "../components/Testimonial";
import RecentNews from "../components/RecentNews";
import RequestQuote from "../components/RequestQuote";
import Footer from "../components/Footer";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <HeroSection />
      <AboutUss />
      <VisonSection />
      <Service />
      <VideoSection />
      <TeamMember />
      <Gallerry />
      <Testimonial />
      <RecentNews />
      <RequestQuote />
      <Footer />
    </div>
  );
};

export default Desktop1;
