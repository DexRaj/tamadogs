import './News.css';

function NewsComponents() {
    return (
        <>
            <section className="container news-section" style={{backgroundColor: "#5fabeb", minHeight: "auto"}} id="news">
                <div className="inner" style={{minHeight: "auto"}}>
                    {/* <div className="section-title">
                        <h2>Latest news</h2>
                        <a href="/news/" className="eightbit-btn small">View all news</a>
                    </div>
                    <div className="swiper mySwiperNews">
                        <div className="posts swiper-wrapper">
                        </div>
                        <div className="swiper-navigation-wrap">
                            <div className="slidePrev-btn bottom-nav__item"><img src="/wp-content/uploads/2022/07/Yellow-arrow-boarder-prev.png" /></div>
                            <div className="slideNext-btn bottom-nav__item"><img src="/wp-content/uploads/2022/07/Yellow-arrow-boarder.png" /></div>
                        </div>
                    </div> */}

                    <div className="cta">
                        <div className="sitelogo">
                            <img src="wp-content/uploads/2022/02/tamadoge-logo.svg" className="logo" loading="lazy" />
                        </div>
                        <div className="socials">
                            <a href="https://www.instagram.com/tamadogecoin/" target="_blank" rel="noopener"><img
                                src="wp-content/uploads/2022/08/instagram.png" alt="Instagram" title="Instagram"
                                loading="lazy" /></a>
                            <a href="https://twitter.com/Tamadogecoin" target="_blank" rel="noopener"><img
                                src="wp-content/uploads/2022/08/twitter-1.png" alt="Twitter" title="Twitter"
                                loading="lazy" /></a>

                            <a href="https://discord.com/invite/Z2PqFvsXJa" target="_blank" rel="noopener"><img
                                src="wp-content/uploads/2022/08/discord.png" alt="Discord" title="Discord"
                                loading="lazy" /></a>

                            <a href="https://t.me/TamadogeOfficial" target="_blank" rel="noopener"><img
                                src="wp-content/uploads/2022/08/telegram.png" alt="Telegram" title="Telegram"
                                loading="lazy" /></a>

                            <a href="https://www.youtube.com/channel/UCivYe1JIbVcVq2wXtFYarjA" target="_blank"
                                rel="noopener"><img src="wp-content/uploads/2022/08/youtube-1.png" alt="Youtube"
                                    title="Youtube" loading="lazy" /></a>

                            <a href="https://www.reddit.com/r/TamadogeOfficial/" target="_blank" rel="noopener"><img
                                src="wp-content/uploads/2022/08/reddit.png" alt="Reddit" title="Reddit"
                                loading="lazy" /></a>


                            <a href="https://linktr.ee/tamadogecoin" target="_blank" rel="noopener"><img
                                src="wp-content/uploads/2022/08/linktree.svg" alt="Linktree" title="Linktree"
                                loading="lazy" /></a>
                        </div>

                        <div className="cta-button">
                        </div>
                    </div>
                </div>
                <img src="wp-content/uploads/2022/06/sitting-dog-helmet.gif" className="water-dog" loading="lazy" />
            </section>
        </>
    );
}

export default NewsComponents;
