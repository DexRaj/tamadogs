import './SiteHeader.css';

function SiteHeaderComponents() {
  return (
    <>
        
      <header className="site-header">
        <div className="header-left">
          <div className="site-logo">
            <a href="index.html"><img src="wp-content/uploads/2022/02/tamadoge-logo.svg" className="logo-head" /></a>
          </div>

          <div className="burger-menu">
            <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g>
                <line x1="10" y1="17" x2="38" y2="17" strokeWidth="6" strokeLinecap="round" />
                <line x1="10" y1="31" x2="38" y2="31" strokeWidth="6" strokeLinecap="round" />
              </g>

              <g>
                <line x1="10" y1="24" x2="38" y2="24" strokeWidth="6" strokeLinecap="round" />
                <line x1="10" y1="24" x2="38" y2="24" strokeWidth="6" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          <nav className="site-nav">

            {/* <div className="site-languages">
              <div
                className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-touch-device wpml-ls-legacy-dropdown-click js-wpml-ls-legacy-dropdown-click">
                <ul>

                  <li
                    className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-dropdown-click">

                    <a href="#" className="js-wpml-ls-item-toggle wpml-ls-item-toggle">
                      <span className="wpml-ls-native">English</span></a>

                    <ul className="js-wpml-ls-sub-menu wpml-ls-sub-menu">

                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ja">
                        <a href="ja/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="ja">日本語</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Japanese<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ko">
                        <a href="ko/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="ko">한국어</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Korean<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ru">
                        <a href="ru/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="ru">Русский</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Russian<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-tr">
                        <a href="tr/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="tr">Türkçe</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Turkish<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ar">
                        <a href="ar/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="ar">العربية</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Arabic<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-zh-hans">
                        <a href="zh-hans/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="zh-hans">简体中文</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Chinese
                            (Simplified)<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-zh-hant">
                        <a href="zh-hant/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="zh-hant">繁體中文</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Chinese
                            (Traditional)<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-nl">
                        <a href="nl/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="nl">Nederlands</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Dutch<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-pl">
                        <a href="pl/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="pl">Polski</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Polish<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-cs">
                        <a href="cs/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="cs">Čeština</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Czech<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-fr">
                        <a href="fr/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="fr">Français</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>French<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-de">
                        <a href="de/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="de">Deutsch</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>German<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-it">
                        <a href="it/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="it">Italiano</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Italian<span className="wpml-ls-bracket">)</span></span></a>
                      </li>


                      <li
                        className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-last-item">
                        <a href="es/index.html" className="wpml-ls-link">
                          <span className="wpml-ls-native" lang="es">Español</span><span
                            className="wpml-ls-display"><span className="wpml-ls-bracket">
                              (</span>Spanish<span className="wpml-ls-bracket">)</span></span></a>
                      </li>

                    </ul>

                  </li>

                </ul>
              </div>
            </div> */}
            <div className="menu-main-container">
              <ul id="primary-menu" className="menu">
                <li id="menu-item-69"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-69">
                  <a href="index.html#about" aria-current="page">About</a></li>
                <li id="menu-item-70"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-70">
                  <a href="index.html#eco-system" aria-current="page">Eco-System</a></li>
                <li id="menu-item-71"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-71">
                  <a href="index.html#roadmap" aria-current="page">Roadmap</a></li>
                <li id="menu-item-73"
                  className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-73">
                  <a href="index.html#whitepaper" aria-current="page">Whitepaper</a></li>
              </ul>
            </div>
            <div className="site-cta">
              <a href="https://buy.tamadoge.io/" className="eightbit-btn small coming-soon">BUY</a>
              <a href="#" className="eightbit-btn small coming-soon">CLAIM</a>
            </div>

            <div className="site-socials">
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
                rel="noopener"><img src="wp-content/uploads/2022/08/youtube-1.png" alt="Youtube" title="Youtube"
                  loading="lazy" /></a>

              <a href="https://www.reddit.com/r/TamadogeOfficial/" target="_blank" rel="noopener"><img
                src="wp-content/uploads/2022/08/reddit.png" alt="Reddit" title="Reddit"
                loading="lazy" /></a>

              <a href="https://linktr.ee/tamadogecoin" target="_blank" rel="noopener"><img
                src="wp-content/uploads/2022/08/linktree.svg" alt="Linktree" title="Linktree"
                loading="lazy" /></a>



            </div>
          </nav>
        </div>
        <div className="header-right">
          <div className="site-cta">
            <a href="https://buy.tamadoge.io/" className="eightbit-btn small coming-soon">BUY</a>
            <a href="#" className="eightbit-btn small coming-soon">CLAIM</a>
          </div>
          <div className="site-socials">
            <a href="https://www.instagram.com/tamadogecoin/" target="_blank" rel="noopener"><img
              src="wp-content/uploads/2022/08/instagram.png" alt="Instagram" title="Instagram"
              loading="lazy" /></a>
            <a href="https://twitter.com/Tamadogecoin" target="_blank" rel="noopener"><img
              src="wp-content/uploads/2022/08/twitter-1.png" alt="Twitter" title="Twitter"
              loading="lazy" /></a>
            <a href="https://discord.com/invite/Z2PqFvsXJa" target="_blank" rel="noopener"><img
              src="wp-content/uploads/2022/08/discord.png" alt="Discord" title="Discord" loading="lazy" /></a>

            <a href="https://t.me/TamadogeOfficial" target="_blank" rel="noopener"><img
              src="wp-content/uploads/2022/08/telegram.png" alt="Telegram" title="Telegram"
              loading="lazy" /></a>

            <a href="https://www.youtube.com/channel/UCivYe1JIbVcVq2wXtFYarjA" target="_blank" rel="noopener"><img
              src="wp-content/uploads/2022/08/youtube-1.png" alt="Youtube" title="Youtube"
              loading="lazy" /></a>

            <a href="https://www.reddit.com/r/TamadogeOfficial/" target="_blank" rel="noopener"><img
              src="wp-content/uploads/2022/08/reddit.png" alt="Reddit" title="Reddit" loading="lazy" /></a>

            <a href="https://linktr.ee/tamadogecoin" target="_blank" rel="noopener"><img
              src="wp-content/uploads/2022/08/linktree.svg" alt="Linktree" title="Linktree"
              loading="lazy" /></a>
          </div>
          {/* <div className="site-languages">

            <div
              className="wpml-ls-statics-shortcode_actions wpml-ls wpml-ls-touch-device wpml-ls-legacy-dropdown-click js-wpml-ls-legacy-dropdown-click">
              <ul>

                <li
                  className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-en wpml-ls-current-language wpml-ls-first-item wpml-ls-item-legacy-dropdown-click">

                  <a href="#" className="js-wpml-ls-item-toggle wpml-ls-item-toggle">
                    <span className="wpml-ls-native">English</span></a>

                  <ul className="js-wpml-ls-sub-menu wpml-ls-sub-menu">

                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ja">
                      <a href="ja/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="ja">日本語</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Japanese<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ko">
                      <a href="ko/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="ko">한국어</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Korean<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ru">
                      <a href="ru/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="ru">Русский</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Russian<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-tr">
                      <a href="tr/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="tr">Türkçe</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Turkish<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-ar">
                      <a href="ar/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="ar">العربية</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Arabic<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-zh-hans">
                      <a href="zh-hans/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="zh-hans">简体中文</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Chinese
                          (Simplified)<span className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-zh-hant">
                      <a href="zh-hant/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="zh-hant">繁體中文</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Chinese
                          (Traditional)<span className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-nl">
                      <a href="nl/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="nl">Nederlands</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Dutch<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-pl">
                      <a href="pl/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="pl">Polski</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Polish<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-cs">
                      <a href="cs/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="cs">Čeština</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Czech<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-fr">
                      <a href="fr/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="fr">Français</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>French<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-de">
                      <a href="de/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="de">Deutsch</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>German<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-it">
                      <a href="it/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="it">Italiano</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Italian<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>


                    <li
                      className="wpml-ls-slot-shortcode_actions wpml-ls-item wpml-ls-item-es wpml-ls-last-item">
                      <a href="es/index.html" className="wpml-ls-link">
                        <span className="wpml-ls-native" lang="es">Español</span><span
                          className="wpml-ls-display"><span className="wpml-ls-bracket"> (</span>Spanish<span
                            className="wpml-ls-bracket">)</span></span></a>
                    </li>

                  </ul>

                </li>

              </ul>
            </div>
          </div> */}
        </div>
      </header>
    </>
  );
}

export default SiteHeaderComponents;
