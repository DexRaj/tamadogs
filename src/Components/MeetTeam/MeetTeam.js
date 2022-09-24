import './MeetTeam.css';

function MeetTeamComponents() {
    return (
        <>
            <section className="container mtt-section" style={{overflowX: "hidden"}} id="meet-the-team">
			<div className="inner mtt">
				<div className="section-title">
					<h2>Meet the team</h2>
				</div>
				<div className="swiper mySwiperTeam">
					<div className="team swiper-wrapper">

						<div className="team-member swiper-slide">
							<img src="wp-content/uploads/2022/06/team-6.png" loading="lazy" />
							<h6>Top Doge</h6>
							<span></span>
						</div>

						<div className="team-member swiper-slide">
							<img src="wp-content/uploads/2022/09/Team-Doge-Siphamandla-Mioli-.png" loading="lazy" />
							<h6>Senior Blockchain Developer</h6>
							<a href="https://www.linkedin.com/in/siphamandla-mjoli-757084a0/" target="_blank">
								<span>Siphamandla Mjoli</span>
							</a>
						</div>

						<div className="team-member swiper-slide">
							<img src="wp-content/uploads/2022/08/Team-Doge-Carl.png" loading="lazy" />
							<h6>Head Of Growth</h6>
							<a href="https://www.linkedin.com/in/carl-dawkins-945543221/" target="_blank">
								<span>Carl Dawkins</span>
							</a>
						</div>

						<div className="team-member swiper-slide">
							<img src="wp-content/uploads/2022/08/Team-Doge-Thomas.png" loading="lazy" />
							<h6>Lead Game Developer</h6>
							<a href="https://www.linkedin.com/in/thomas-s-21280a248/" target="_blank">
								<span>Thomas Seabrook</span>
							</a>
						</div>

						<div className="team-member swiper-slide">
							<img src="wp-content/uploads/2022/09/eric.png" loading="lazy" />
							<h6>Full-stack Developer</h6>
							<a href="https://www.linkedin.com/in/eric-lamontagne/" target="_blank">
								<span>Éric Lamontagne</span>
							</a>
						</div>

						<div className="team-member swiper-slide">
							<img src="wp-content/uploads/2022/09/neil.png" loading="lazy" />
							<h6>Senior Interaction Designer</h6>
							<a href="https://www.linkedin.com/in/npalethorpe" target="_blank">
								<span>Neil Palethorpe</span>
							</a>
						</div>
					</div>
					<div className="swiper-navigation-wrap">
						<div className="slidePrev-btn bottom-nav__item"><img
								src="wp-content/uploads/2022/07/Yellow-arrow-boarder-prev.png" /></div>
						<div className="slideNext-btn bottom-nav__item"><img
								src="wp-content/uploads/2022/07/Yellow-arrow-boarder.png" /></div>
					</div>
				</div>
			</div>
			<img src="wp-content/uploads/2022/06/Tamadoge-Walk%408x.gif" className="dog-walking" loading="lazy" />
		</section>
        </>
    );
}

export default MeetTeamComponents;
