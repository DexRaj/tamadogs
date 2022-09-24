import React, { useEffect } from "react";
import AboutComponents from '../../../Components/About/About';
import EcoSystemComponents from '../../../Components/EcoSystem/EcoSystem';
import FeaturedinComponents from '../../../Components/Featuredin/Featuredin';
import HeroSectionComponents from '../../../Components/HeroSection/HeroSection';
import MeetTeamComponents from '../../../Components/MeetTeam/MeetTeam';
import NewsComponents from '../../../Layouts/News/News';
import RoadmapComponents from '../../../Components/Roadmap/Roadmap';
import UnderSandComponents from '../../../Components/UnderSand/UnderSand';
import WhitePaperComponents from '../../../Components/WhitePaper/WhitePaper';
import './Dashboard.css';

function DashobardComponent() {

  useEffect(() => {
    document.title = "Tamagode | Best Meme Play to Earn Platform 2022";
  }, []);

  return (
    <>
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
      </main>
    </>
  );
}

export default DashobardComponent;
