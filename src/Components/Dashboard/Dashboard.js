import FeaturedinComponents from '../Featuredin/Featuredin';
import HeroSectionComponents from '../HeroSection/HeroSection';
import SiteHeaderComponents from '../SiteHeader/SiteHeader';
import './Dashboard.css';

function DashobardComponent() {
  return (
    <>
      <SiteHeaderComponents />
      <main id="main" class="site-main" role="main">
        <HeroSectionComponents /> 
        <FeaturedinComponents />
      </main>  
    </>
  );
}

export default DashobardComponent;
