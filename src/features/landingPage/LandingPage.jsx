import BestDeals from "../Products/HomeProducts";
import CategoryGrid from "./components/CategoryGrid";
import LatestNews from "./components/LatestNews";
import MainSection from "./components/mainSection/MainSection";
import LiveAuctions from "./components/LiveAuctions";
import FeaturedSellers from "./components/FeaturedSellers";
import FAQs from "./components/FAQs";
const LandingPage = () => {
  return (
    <div>
      <MainSection />
      <BestDeals />
      <LiveAuctions />
      <LatestNews />
      <FeaturedSellers />
      <FAQs />
    </div>
  );
};

export default LandingPage;
