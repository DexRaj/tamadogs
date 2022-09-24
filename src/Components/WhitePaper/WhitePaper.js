import './WhitePaper.css';

function WhitePaperComponents() {
    return (
        <>
            <section className="container whitepaper-section" id="whitepaper">
                <div className="inner whitepaper social-wall">
                    <h2 className="section-title" style={{ marginBottom: "80px" }}>Join the Tamadoge Army</h2>
                    {/* <div id="sb_instagram" className="sbi sbi_mob_col_1 sbi_tab_col_3 sbi_col_4 sbi_width_resp"
                        style={{ paddingBottom: "12px" }} data-feedid="*1" data-res="medium" data-cols="4" data-colsmobile="1"
                        data-colstablet="3" data-num="8" data-nummobile="4" data-header-size="medium"
                        data-shortcode-atts="{&quot;feed&quot;:&quot;1&quot;}" data-postid="77" data-locatornonce="e4a17de300"
                        data-options="{&quot;masonry&quot;:true,&quot;avatars&quot;:{&quot;tamadogecoin&quot;:&quot;&quot;,&quot;LCLtamadogecoin&quot;:0},&quot;lightboxcomments&quot;:20,&quot;colsmobile&quot;:1,&quot;colstablet&quot;:&quot;3&quot;,&quot;captionsize&quot;:12,&quot;captionlength&quot;:50}"
                        data-sbi-flags="favorLocal">
                        <div className="sb_instagram_header sbi_feed_type_user sbi_medium sbi_no_avatar"
                            style={{ padding: "6px", marginBottom: "10px", paddingBottom: "0" }}>
                            <a href="https://www.instagram.com/tamadogecoin/" target="_blank" rel="nofollow noopener"
                                title="@tamadogecoin" className="sbi_header_link">
                                <div className="sbi_header_text sbi_no_bio">
                                    <h3>tamadogecoin</h3>
                                    <p className="sbi_bio_info">
                                        <span className="sbi_posts_count"><svg className="svg-inline--fa fa-image fa-w-16"
                                            aria-hidden="true" data-fa-processed="" data-prefix="far" data-icon="image"
                                            role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z">
                                            </path>
                                        </svg>182</span>
                                    </p>
                                </div>
                                <div className="sbi_header_img">
                                    <div className="sbi_header_hashtag_icon"><svg className="sbi_new_logo fa-instagram fa-w-14"
                                        aria-hidden="true" data-fa-processed="" data-prefix="fab" data-icon="instagram"
                                        role="img" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                        </path>
                                    </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div id="sbi_images" style={{ padding: "6px" }}>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_17955995336082793"
                                data-date="1663876828" data-numcomments="0">
                                <div className="sbi_inner_wrap"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">&#039;&#039;...When I&#039;m Feeling Sad, I Simply...
                                                </p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/308304475_411021914510228_158600226854779450_nac6c.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=BAZDl1twOQsAX_Oa937&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT8zsW8FyX1CnDH-luyQJMNkaktKYp3vh99nmtmmqw2y4A&amp;oe=6332F206"
                                                rel="nofollow noopener" data-lightbox-sbi="" data-title="&#039;&#039;...When I&#039;m Feeling Sad, I Simply Remember My Favourite Doge And Then I Don&#039;t Feel So Bad.&#039;&#039; 👀&lt;br&gt;&lt;br&gt;Guess The Movie 🎥⬇️" data-video="" data-carousel="" data-id="sbi_17955995336082793" data-user="tamadogecoin"
                                                data-url="https://www.instagram.com/p/Ci0lbZ_tJgw/" data-avatar=""
                                                data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/Ci0lbZ_tJgw/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/308304475_411021914510228_158600226854779450_n.jpg?_nc_cat=109&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=BAZDl1twOQsAX_Oa937&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT8zsW8FyX1CnDH-luyQJMNkaktKYp3vh99nmtmmqw2y4A&#038;oe=6332F206"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308304475_411021914510228_158600226854779450_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=BAZDl1twOQsAX_Oa937&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT8zsW8FyX1CnDH-luyQJMNkaktKYp3vh99nmtmmqw2y4A&amp;oe=6332F206&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308304475_411021914510228_158600226854779450_n.jpg?_nc_cat=109&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=BAZDl1twOQsAX_Oa937&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT8zsW8FyX1CnDH-luyQJMNkaktKYp3vh99nmtmmqw2y4A&amp;oe=6332F206&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308304475_411021914510228_158600226854779450_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308304475_411021914510228_158600226854779450_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png" alt="&#039;&#039;...When I&#039;m Feeling Sad, I Simply Remember My Favourite Doge And Then I Don&#039;t Feel So Bad.&#039;&#039; 👀 Guess The Movie 🎥⬇️" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption"
                                                    style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>&#039;&#039;...When
                                                    I&#039;m Feeling Sad, I Simply Remember My Favourite Doge And Then I
                                                    Don&#039;t Feel So Bad.&#039;&#039; 👀<br />
                                                    <br />
                                                    Guess The Movie 🎥⬇️</span><span className="sbi_expand"> <a href="#"><span
                                                        className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_17925043703530638"
                                data-date="1663844431" data-numcomments="0">
                                <div className="sbi_inner_wrap"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">⏰ 24 Hours Left Until The Tier 1 Exchange Reveal...
                                                </p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/308469839_461596485998021_6540448674974814057_nb600.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=SZg7AqP9fS8AX8UsU-y&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT82yyw-jDNoqAkOQpZ6fiYnhUihxI_ZC_4Cwaljt5uQaw&amp;oe=6331AB8B"
                                                rel="nofollow noopener" data-lightbox-sbi="" data-title="⏰ 24 Hours Left Until The Tier 1 Exchange Reveal ⏰&lt;br&gt; &lt;br&gt; Set Your Alarms - Tomorrow (23rd of September) at 11 am UTC - Big News Alert 🚨🤩&lt;br&gt; &lt;br&gt;#crypto #altcoin #cryptocurrency #memecoin #listing #CEX" data-video="" data-carousel=""
                                                data-id="sbi_17925043703530638" data-user="tamadogecoin"
                                                data-url="https://www.instagram.com/p/CiznotZNbRW/" data-avatar=""
                                                data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/CiznotZNbRW/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/308469839_461596485998021_6540448674974814057_n.jpg?_nc_cat=101&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=SZg7AqP9fS8AX8UsU-y&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT82yyw-jDNoqAkOQpZ6fiYnhUihxI_ZC_4Cwaljt5uQaw&#038;oe=6331AB8B"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308469839_461596485998021_6540448674974814057_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=SZg7AqP9fS8AX8UsU-y&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT82yyw-jDNoqAkOQpZ6fiYnhUihxI_ZC_4Cwaljt5uQaw&amp;oe=6331AB8B&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308469839_461596485998021_6540448674974814057_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=SZg7AqP9fS8AX8UsU-y&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT82yyw-jDNoqAkOQpZ6fiYnhUihxI_ZC_4Cwaljt5uQaw&amp;oe=6331AB8B&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308469839_461596485998021_6540448674974814057_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308469839_461596485998021_6540448674974814057_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png" alt="⏰ 24 Hours Left Until The Tier 1 Exchange Reveal ⏰ Set Your Alarms - Tomorrow (23rd of September) at 11 am UTC - Big News Alert 🚨🤩 #crypto #altcoin #cryptocurrency #memecoin #listing #CEX" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption" style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>⏰ 24
                                                    Hours Left Until The Tier 1 Exchange Reveal ⏰<br />
                                                    <br />
                                                    Set Your Alarms - Tomorrow (23rd of September) at 11 am UTC - Big News
                                                    Alert 🚨🤩<br />
                                                    <br />
                                                    #crypto #altcoin #cryptocurrency #memecoin #listing #CEX</span><span
                                                        className="sbi_expand"> <a href="#"><span className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_17958175985052728"
                                data-date="1663790705" data-numcomments="0">
                                <div className="sbi_inner_wrap"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">Who Is Your Favourite #GameOfThrones Character? ...
                                                </p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/308379383_446453410791428_7062159318528563413_n2ebb.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=BROh0bI2zMIAX-TckKj&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT_Wb3-4JyqeIjm81FUEc_TOa1Q_qHX0AnG6rvx5TvIxPA&amp;oe=633127A4"
                                                rel="nofollow noopener" data-lightbox-sbi="" data-title="Who Is Your Favourite #GameOfThrones Character? 🤔&lt;br&gt;&lt;br&gt;Is It Tama Stark? 👑&lt;br&gt;&lt;br&gt;#crypto #cryptocommunity #houseofthedragon @gameofthrones" data-video="" data-carousel=""
                                                data-id="sbi_17958175985052728" data-user="tamadogecoin"
                                                data-url="https://www.instagram.com/p/CiyBKSaNixR/" data-avatar=""
                                                data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/CiyBKSaNixR/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/308379383_446453410791428_7062159318528563413_n.jpg?_nc_cat=106&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=BROh0bI2zMIAX-TckKj&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT_Wb3-4JyqeIjm81FUEc_TOa1Q_qHX0AnG6rvx5TvIxPA&#038;oe=633127A4"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308379383_446453410791428_7062159318528563413_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=BROh0bI2zMIAX-TckKj&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT_Wb3-4JyqeIjm81FUEc_TOa1Q_qHX0AnG6rvx5TvIxPA&amp;oe=633127A4&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308379383_446453410791428_7062159318528563413_n.jpg?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=BROh0bI2zMIAX-TckKj&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT_Wb3-4JyqeIjm81FUEc_TOa1Q_qHX0AnG6rvx5TvIxPA&amp;oe=633127A4&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308379383_446453410791428_7062159318528563413_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308379383_446453410791428_7062159318528563413_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png" alt="Who Is Your Favourite #GameOfThrones Character? 🤔Is It Tama Stark? 👑 #crypto #cryptocommunity #houseofthedragon @gameofthrones" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption" style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>Who
                                                    Is Your Favourite #GameOfThrones Character? 🤔<br />
                                                    <br />
                                                    Is It Tama Stark? 👑<br />
                                                    <br />
                                                    #crypto #cryptocommunity #houseofthedragon @gameofthrones</span><span
                                                        className="sbi_expand"> <a href="#"><span className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_17925524444443982"
                                data-date="1663779647" data-numcomments="0">
                                <div className="sbi_inner_wrap"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">📣 #TamadogeArmy- Make Sure To Stay Tuned!<br />
                                                    ...</p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/308189782_457118019776479_4538596398536989779_n9d72.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=4scLn01ZUUEAX-9GZpj&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-u6EwB0jmAEtsqoYF8GTB5gZSqBaQVu_6dSkZI5PQ_qQ&amp;oe=63316936"
                                                rel="nofollow noopener" data-lightbox-sbi="" data-title="📣 #TamadogeArmy- Make Sure To Stay Tuned!&lt;br&gt; &lt;br&gt;Details on CLAIM DATE will be announced on Friday - the 23rd of September, along with the CEX listing announcement.&lt;br&gt;&lt;br&gt;Stay Updated! (Link In Bio🔗)" data-video="" data-carousel="" data-id="sbi_17925524444443982" data-user="tamadogecoin"
                                                data-url="https://www.instagram.com/p/CixsEccMQ3Q/" data-avatar=""
                                                data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/CixsEccMQ3Q/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/308189782_457118019776479_4538596398536989779_n.jpg?_nc_cat=107&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=4scLn01ZUUEAX-9GZpj&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT-u6EwB0jmAEtsqoYF8GTB5gZSqBaQVu_6dSkZI5PQ_qQ&#038;oe=63316936"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308189782_457118019776479_4538596398536989779_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=4scLn01ZUUEAX-9GZpj&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-u6EwB0jmAEtsqoYF8GTB5gZSqBaQVu_6dSkZI5PQ_qQ&amp;oe=63316936&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/308189782_457118019776479_4538596398536989779_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=4scLn01ZUUEAX-9GZpj&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-u6EwB0jmAEtsqoYF8GTB5gZSqBaQVu_6dSkZI5PQ_qQ&amp;oe=63316936&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308189782_457118019776479_4538596398536989779_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/308189782_457118019776479_4538596398536989779_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png" alt="📣 #TamadogeArmy- Make Sure To Stay Tuned! Details on CLAIM DATE will be announced on Friday - the 23rd of September, along with the CEX listing announcement. Stay Updated! (Link In Bio🔗)" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption" style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>📣
                                                    #TamadogeArmy- Make Sure To Stay Tuned!<br />
                                                    <br />
                                                    Details on CLAIM DATE will be announced on Friday - the 23rd of
                                                    September, along with the CEX listing announcement.<br />
                                                    <br />
                                                    Stay Updated! (Link In Bio🔗)</span><span className="sbi_expand"> <a href="#"><span
                                                        className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_17921955197589456"
                                data-date="1663768840" data-numcomments="0">
                                <div className="sbi_inner_wrap" style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">📣 Attention #TamadogeArmy! 📣<br />
                                                    <br />
                                                    Meet ...
                                                </p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/307980830_953981668890869_5661263855553145505_n86e0.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=HPI4MbNLnfYAX_D17rX&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT86oOO00FNCNDTH3mHtU-a7L6z7IwYeNHwwLCz6eRCDdg&amp;oe=6332B7F5"
                                                rel="nofollow noopener" data-lightbox-sbi="" data-title="📣 Attention #TamadogeArmy! 📣&lt;br&gt;&lt;br&gt;Meet Éric Lamontagne - Web3 Full Stack Developer! 👋&lt;br&gt;&lt;br&gt;We&#039;re Very Excited To Have Éric Joining The #Tamadoge Team 🙌" data-video="" data-carousel=""
                                                data-id="sbi_17921955197589456" data-user="tamadogecoin"
                                                data-url="https://www.instagram.com/p/CixXdTKNesc/" data-avatar=""
                                                data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/CixXdTKNesc/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/307980830_953981668890869_5661263855553145505_n.jpg?_nc_cat=107&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=HPI4MbNLnfYAX_D17rX&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT86oOO00FNCNDTH3mHtU-a7L6z7IwYeNHwwLCz6eRCDdg&#038;oe=6332B7F5"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307980830_953981668890869_5661263855553145505_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=HPI4MbNLnfYAX_D17rX&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT86oOO00FNCNDTH3mHtU-a7L6z7IwYeNHwwLCz6eRCDdg&amp;oe=6332B7F5&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307980830_953981668890869_5661263855553145505_n.jpg?_nc_cat=107&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=HPI4MbNLnfYAX_D17rX&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT86oOO00FNCNDTH3mHtU-a7L6z7IwYeNHwwLCz6eRCDdg&amp;oe=6332B7F5&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307980830_953981668890869_5661263855553145505_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307980830_953981668890869_5661263855553145505_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png" alt="📣 Attention #TamadogeArmy! 📣 Meet Éric Lamontagne - Web3 Full Stack Developer! 👋 We&#039;re Very Excited To Have Éric Joining The #Tamadoge Team 🙌" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption" style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>📣
                                                    Attention #TamadogeArmy! 📣<br />
                                                    <br />
                                                    Meet Éric Lamontagne - Web3 Full Stack Developer! 👋<br />
                                                    <br />
                                                    We&#039;re Very Excited To Have Éric Joining The #Tamadoge Team
                                                    🙌</span><span className="sbi_expand"> <a href="#"><span
                                                        className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_18004143799489884"
                                data-date="1663758017" data-numcomments="0">
                                <div className="sbi_inner_wrap"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">In 48 Hours You Will Find Out Which Tier 1 ...</p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/307280187_190596686753911_3965109093276342390_n170a.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=ZmC_YFVK8_kAX_C6kHd&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-FJWKDEUZtqCKPDLKQ001_AOnFRR9TaqKIycVRp0lJ3g&amp;oe=6332B880"
                                                rel="nofollow noopener" data-lightbox-sbi="" data-title="In 48 Hours You Will Find Out Which Tier 1 Exchange Will List $TAMA 😎 &lt;br&gt;&lt;br&gt;⏰ Don&#039;t Miss The Announcement - Set Your Alarms For Friday, 23rd Of September At 11 am UTC ⏰" data-video=""
                                                data-carousel="" data-id="sbi_18004143799489884" data-user="tamadogecoin"
                                                data-url="https://www.instagram.com/p/CixCz6Fq9GE/" data-avatar=""
                                                data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/CixCz6Fq9GE/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/307280187_190596686753911_3965109093276342390_n.jpg?_nc_cat=105&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=ZmC_YFVK8_kAX_C6kHd&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT-FJWKDEUZtqCKPDLKQ001_AOnFRR9TaqKIycVRp0lJ3g&#038;oe=6332B880"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307280187_190596686753911_3965109093276342390_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=ZmC_YFVK8_kAX_C6kHd&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-FJWKDEUZtqCKPDLKQ001_AOnFRR9TaqKIycVRp0lJ3g&amp;oe=6332B880&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307280187_190596686753911_3965109093276342390_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=ZmC_YFVK8_kAX_C6kHd&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT-FJWKDEUZtqCKPDLKQ001_AOnFRR9TaqKIycVRp0lJ3g&amp;oe=6332B880&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307280187_190596686753911_3965109093276342390_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307280187_190596686753911_3965109093276342390_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png" alt="In 48 Hours You Will Find Out Which Tier 1 Exchange Will List $TAMA 😎 ⏰ Don&#039;t Miss The Announcement - Set Your Alarms For Friday, 23rd Of September At 11 am UTC ⏰" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption" style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>In
                                                    48 Hours You Will Find Out Which Tier 1 Exchange Will List $TAMA 😎 <br />
                                                    <br />
                                                    ⏰ Don&#039;t Miss The Announcement - Set Your Alarms For Friday, 23rd Of
                                                    September At 11 am UTC ⏰</span><span className="sbi_expand"> <a href="#"><span
                                                        className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_18069888040320011"
                                data-date="1663693231" data-numcomments="0">
                                <div className="sbi_inner_wrap"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">Guess The First Tier 1 #CEX That Will List $TAMA ...
                                                </p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/307734918_494962378780358_8983327538385988167_na291.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=iaTtZMDlpu0AX-C10Mz&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT9ENX0xc3W21pLbxJV1DzzVjNWoDdG3LJMvHAtqPj7r-g&amp;oe=633120A1"
                                                rel="nofollow noopener" data-lightbox-sbi=""
                                                data-title="Guess The First Tier 1 #CEX That Will List $TAMA And Win $150 ⬇️"
                                                data-video="" data-carousel="" data-id="sbi_18069888040320011"
                                                data-user="tamadogecoin" data-url="https://www.instagram.com/p/CivHPf_oeXD/"
                                                data-avatar="" data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/CivHPf_oeXD/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/307734918_494962378780358_8983327538385988167_n.jpg?_nc_cat=101&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=iaTtZMDlpu0AX-C10Mz&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT9ENX0xc3W21pLbxJV1DzzVjNWoDdG3LJMvHAtqPj7r-g&#038;oe=633120A1"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307734918_494962378780358_8983327538385988167_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=iaTtZMDlpu0AX-C10Mz&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT9ENX0xc3W21pLbxJV1DzzVjNWoDdG3LJMvHAtqPj7r-g&amp;oe=633120A1&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307734918_494962378780358_8983327538385988167_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=iaTtZMDlpu0AX-C10Mz&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT9ENX0xc3W21pLbxJV1DzzVjNWoDdG3LJMvHAtqPj7r-g&amp;oe=633120A1&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307734918_494962378780358_8983327538385988167_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307734918_494962378780358_8983327538385988167_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png"
                                                alt="Guess The First Tier 1 #CEX That Will List $TAMA And Win $150 ⬇️" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption" style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>Guess The
                                                    First Tier 1
                                                    #CEX That Will List $TAMA And Win $150 ⬇️</span><span className="sbi_expand"> <a
                                                        href="#"><span className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sbi_item sbi_type_image sbi_new sbi_transition" id="sbi_17880184592734176"
                                data-date="1663689125" data-numcomments="0">
                                <div className="sbi_inner_wrap"
                                    style={{ backgroundColor: "#FFFFFF", borderRadius: "4px", boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.05)" }}>
                                    <div className="sbi_photo_wrap">
                                        <div style={{ background: "rgba(255,193,4,0.85)" }} className="sbi_link ">
                                            <div className="sbi_hover_top">
                                                <p className="sbi_caption">‼️ Attention #TamadogeArmy ‼️<br />
                                                    <br />
                                                    ...
                                                </p>
                                            </div>
                                            <div className="sbi_hover_bottom">
                                            </div>
                                            <a className="sbi_link_area nofancybox"
                                                href="../scontent.cdninstagram.com/v/t51.2885-15/307236627_5606384872811263_849130299265343713_n228f.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=bq-eeYM9k4sAX8OWGX9&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT83WAyighNPBeHTu34k5VzOEKUMLN6UQNM4xzBynjeoEQ&amp;oe=6331A89A"
                                                rel="nofollow noopener" data-lightbox-sbi=""
                                                data-title="‼️ Attention #TamadogeArmy ‼️&lt;br&gt;&lt;br&gt;📣 The $TAMA CLAIM DATE will be announced on Friday - the 23rd of September, along with the CEX listing announcement. 📣" data-video="" data-carousel=""
                                                data-id="sbi_17880184592734176" data-user="tamadogecoin"
                                                data-url="https://www.instagram.com/p/Ciu_aYCtFcy/" data-avatar=""
                                                data-account-type="business">
                                                <span className="sbi-screenreader">Open</span>
                                            </a>
                                        </div>
                                        <a className="sbi_photo" href="https://www.instagram.com/p/Ciu_aYCtFcy/" target="_blank"
                                            rel="nofollow noopener"
                                            data-full-res="https://scontent.cdninstagram.com/v/t51.2885-15/307236627_5606384872811263_849130299265343713_n.jpg?_nc_cat=105&#038;ccb=1-7&#038;_nc_sid=8ae9d6&#038;_nc_ohc=bq-eeYM9k4sAX8OWGX9&#038;_nc_ht=scontent.cdninstagram.com&#038;edm=ANo9K5cEAAAA&#038;oh=00_AT83WAyighNPBeHTu34k5VzOEKUMLN6UQNM4xzBynjeoEQ&#038;oe=6331A89A"
                                            data-img-src-set="{&quot;d&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307236627_5606384872811263_849130299265343713_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=bq-eeYM9k4sAX8OWGX9&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT83WAyighNPBeHTu34k5VzOEKUMLN6UQNM4xzBynjeoEQ&amp;oe=6331A89A&quot;,&quot;150&quot;:&quot;https:\/\/scontent.cdninstagram.com\/v\/t51.2885-15\/307236627_5606384872811263_849130299265343713_n.jpg?_nc_cat=105&amp;ccb=1-7&amp;_nc_sid=8ae9d6&amp;_nc_ohc=bq-eeYM9k4sAX8OWGX9&amp;_nc_ht=scontent.cdninstagram.com&amp;edm=ANo9K5cEAAAA&amp;oh=00_AT83WAyighNPBeHTu34k5VzOEKUMLN6UQNM4xzBynjeoEQ&amp;oe=6331A89A&quot;,&quot;320&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307236627_5606384872811263_849130299265343713_nlow.jpg&quot;,&quot;640&quot;:&quot;https:\/\/tamadoge.io\/wp-content\/uploads\/sb-instagram-feed-images\/307236627_5606384872811263_849130299265343713_nfull.jpg&quot;}">
                                            <img src="wp-content/plugins/instagram-feed-pro/img/placeholder.png"
                                                alt="‼️ Attention #TamadogeArmy ‼️ 📣 The $TAMA CLAIM DATE will be announced on Friday - the 23rd of September, along with the CEX listing announcement. 📣" />
                                        </a>
                                    </div>
                                    <div className="sbi_info_wrapper">
                                        <div className="sbi_info">
                                            <p className="sbi_caption_wrap">
                                                <span className="sbi_caption" style={{ fontSize: "12px", color: "rgb(67,73,96)" }}>‼️
                                                    Attention #TamadogeArmy ‼️<br />
                                                    <br />
                                                    📣 The $TAMA CLAIM DATE will be announced on Friday - the 23rd of
                                                    September, along with the CEX listing announcement. 📣</span><span
                                                        className="sbi_expand"> <a href="#"><span className="sbi_more">...</span></a></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sbi_load">
                            <a className="sbi_load_btn" href="javascript:void(0);"
                                style={{ background: "rgb(243,244,245)", color: "rgb(44,50,76)" }} data-button-hover="#E8E8EB">
                                <span className="sbi_btn_text">Load More</span>
                                <span className="sbi_loader sbi_hidden" style={{ backgroundColor: "rgb(255, 255, 255);" }}
                                    aria-hidden="true"></span>
                            </a>
                            <span className="sbi_follow_btn sbi_custom">
                                <a href="https://www.instagram.com/tamadogecoin/"
                                    style={{ background: "rgb(0,104,160)", color: "rgb(255,255,255)" }} data-button-hover="#005B8C"
                                    target="_blank" rel="nofollow noopener">
                                    <svg className="svg-inline--fa fa-instagram fa-w-14" aria-hidden="true" data-fa-processed=""
                                        aria-label="Instagram" data-prefix="fab" data-icon="instagram" role="img"
                                        viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                                        </path>
                                    </svg> <span>Follow on Instagram</span>
                                </a>
                            </span>
                        </div>
                        <span className="sbi_resized_image_data" data-feed-id="*1"
                            data-resized="{&quot;18069888040320011&quot;:{&quot;id&quot;:&quot;307734918_494962378780358_8983327538385988167_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}},&quot;17880184592734176&quot;:{&quot;id&quot;:&quot;307236627_5606384872811263_849130299265343713_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}},&quot;18004143799489884&quot;:{&quot;id&quot;:&quot;307280187_190596686753911_3965109093276342390_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}},&quot;17958175985052728&quot;:{&quot;id&quot;:&quot;308379383_446453410791428_7062159318528563413_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}},&quot;17925524444443982&quot;:{&quot;id&quot;:&quot;308189782_457118019776479_4538596398536989779_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}},&quot;17921955197589456&quot;:{&quot;id&quot;:&quot;307980830_953981668890869_5661263855553145505_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}},&quot;17925043703530638&quot;:{&quot;id&quot;:&quot;308469839_461596485998021_6540448674974814057_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}},&quot;17955995336082793&quot;:{&quot;id&quot;:&quot;308304475_411021914510228_158600226854779450_n&quot;,&quot;ratio&quot;:&quot;1.00&quot;,&quot;sizes&quot;:{&quot;full&quot;:640,&quot;low&quot;:320,&quot;thumb&quot;:150}}}">
                        </span>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default WhitePaperComponents;
