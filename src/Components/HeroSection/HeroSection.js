import './HeroSection.css';

function HeroSectionComponents() {
  return (
    <>
        <section className="container hero-section" style={{backgroundPosition: "bottom 0px right 0px"}}>
			<div className="inner">
				<div className="hero-container">
					<h1 className="smaller-header">Tamadoge will list on OKX at 12pm BST on Tuesday 27th of September.</h1>
					<p>
						We’re thrilled to announce that you’ll be able to claim your Tamadoge and trade on OKX from
						Tuesday 27th of September. Stay up to date on Telegram and Discord!<br />
						<br />
						Pre-register on OKX so you can trade TAMA as soon as we list!
					</p>
					<div className="cta-button">

						<div className="new-hero-cta-holder" style={{marginTop: "unset", marginBottom: "1rem"}}>
							<a href="https://okx.sjv.io/c/2070067/1387591/15383" target="_blank" rel="noopener"
								className="eightbit-btn">Pre-register on OKX</a>

						</div>
					</div>
					<div className="embed-video" style={{marginBottom: "1rem"}}>

						<iframe title="OKX Exchange - Account set up &amp; Walk-through 🔔 Tamadoge Listing 🔔"
							width={640} height={360} src="https://www.youtube.com/embed/uSBrrWRmBHA?feature=oembed"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
					</div>

					Thanks to our amazing community. Join them on Telegram and Discord!
					<div className="cta-button">

						<div className="new-hero-cta-holder">
							<a href="https://t.me/TamadogeOfficial" target="_blank" rel="noopener"
								className="eightbit-btn">Join Telegram</a>
							<a href="https://discord.com/invite/Z2PqFvsXJa" target="_blank" rel="noopener"
								className="eightbit-btn">Join Discord</a>

						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  );
}

export default HeroSectionComponents;
