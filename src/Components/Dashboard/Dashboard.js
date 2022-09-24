import AboutComponents from '../About/About';
import EcoSystemComponents from '../EcoSystem/EcoSystem';
import FeaturedinComponents from '../Featuredin/Featuredin';
import HeroSectionComponents from '../HeroSection/HeroSection';
import RoadmapComponents from '../Roadmap/Roadmap';
import SiteHeaderComponents from '../SiteHeader/SiteHeader';
import './Dashboard.css';

function DashobardComponent() {
  return (
    <>
      <SiteHeaderComponents />
      <main id="main" class="site-main" role="main">
        <HeroSectionComponents /> 
        <FeaturedinComponents />
        <AboutComponents />
        <EcoSystemComponents />
        <RoadmapComponents />
      </main>  
    </>
  );
}

export default DashobardComponent;
