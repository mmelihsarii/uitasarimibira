import HomeCarousel from '../components/HomeCarousel'
import BraukunstSection from '../components/BraukunstSection'
import BrauweltSection from '../components/BrauweltSection'
import HeritageSection from '../components/HeritageSection'
import QualitySection from '../components/QualitySection'
import BottlesFanOut from '../components/BottlesFanOut'
import NewsSection from '../components/NewsSection'
import B2BSection from '../components/B2BSection'

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <BraukunstSection />
      <BrauweltSection />
      <HeritageSection />
      <QualitySection />
      <BottlesFanOut />
      <NewsSection />
      <B2BSection />
    </div>
  );
};

export default Home;
