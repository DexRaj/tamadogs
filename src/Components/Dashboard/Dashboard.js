import AboutComponents from '../About/About';
import EcoSystemComponents from '../EcoSystem/EcoSystem';
import FeaturedinComponents from '../Featuredin/Featuredin';
import FooterComponents from '../Footer/Footer';
import HeroSectionComponents from '../HeroSection/HeroSection';
import MeetTeamComponents from '../MeetTeam/MeetTeam';
import NewsComponents from '../News/News';
import RoadmapComponents from '../Roadmap/Roadmap';
import SiteHeaderComponents from '../SiteHeader/SiteHeader';
import UnderSandComponents from '../UnderSand/UnderSand';
import WhitePaperComponents from '../WhitePaper/WhitePaper';
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
        <MeetTeamComponents />
        <UnderSandComponents />
        <WhitePaperComponents />
        <NewsComponents />
        <FooterComponents />
      </main>  
    </>
  );
}

export default DashobardComponent;
